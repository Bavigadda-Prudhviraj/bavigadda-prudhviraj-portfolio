import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { animate, AnimatePresence, motion, useInView } from 'framer-motion';
import { achievements, certifications, type Certification } from '../data/portfolio';
import { useReducedMotionPref } from '../hooks/useMedia';
import { EASE, SectionHeading, Tilt } from './fx';
import { RailButtons } from './Rail';
import { thumbFor } from './certThumbs';

const CertificateViewer = lazy(() => import('./CertificateViewer'));

/** Counts from 0 to `value` the first time it scrolls into view. Static under reduced motion. */
function CountUp({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduced = useReducedMotionPref();
  const [n, setN] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, value, { duration: 1.6, ease: EASE, onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, reduced, value]);

  return (
    <span ref={ref} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}
      {n}
      {suffix}
    </span>
  );
}

function Laurel({ side }: { side: 'l' | 'r' }) {
  return (
    <svg viewBox="0 0 30 64" className={`h-14 w-auto text-[#d9b46a] ${side === 'r' ? '-scale-x-100' : ''}`} aria-hidden>
      <path d="M26 62C10 52 4 36 8 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {[10, 18, 26, 34, 42, 50].map((y, i) => (
        <ellipse key={y} cx={i < 2 ? 9 : 8 + i * 1.6} cy={y} rx="5" ry="2.2" fill="currentColor" opacity="0.85" transform={`rotate(-40 ${8 + i * 1.6} ${y})`} />
      ))}
    </svg>
  );
}

export default function Achievements() {
  const featured = certifications.filter((c) => c.featured);
  const more = certifications.filter((c) => !c.featured);
  const issuers = Array.from(new Set(featured.map((c) => c.issuer)));

  return (
    <>
      <SectionHeading kicker="Career highlights" title="Top Moments" />

      <ol className="gutter grid gap-x-4 gap-y-6 sm:grid-cols-2 xl:grid-cols-4 [perspective:1400px]">
        {achievements.map((a, i) => (
          <motion.li
            key={a.id}
            className="relative pl-10 sm:pl-12"
            initial={{ opacity: 0, y: 50, rotateX: 18 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.9, delay: (i % 4) * 0.08, ease: EASE }}
          >
            {/* Top 10 style rank numeral, tucked behind the card's left edge */}
            <span
              aria-hidden
              className="rank-numeral pointer-events-none absolute bottom-0 left-0 z-0 select-none font-display leading-[0.75] text-transparent"
            >
              {i + 1}
            </span>
            <Tilt max={8} className="group relative z-[1] h-full rounded-2xl">
              <article className="relative flex h-full min-h-[300px] flex-col items-center overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#2a1f10,#0d0b08_60%,#07070a)] px-5 pb-6 pt-6 text-center ring-1 ring-[#d9b46a]/20 transition duration-500 group-hover:ring-[#d9b46a]/60">
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9b46a]/70 to-transparent" />
                <div aria-hidden className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#d9b46a]/10 blur-3xl transition duration-700 group-hover:bg-[#d9b46a]/25" />
                <div className="relative flex items-center gap-1">
                  <Laurel side="l" />
                  <div className="px-1">
                    <p className="text-[9px] font-bold uppercase leading-tight tracking-[0.24em] text-[#d9b46a]">{a.laurel}</p>
                  </div>
                  <Laurel side="r" />
                </div>
                <p className="relative mt-4 font-display text-[3.4rem] leading-none text-[#f3d58f]">
                  <CountUp value={a.stat.value} prefix={a.stat.prefix} suffix={a.stat.suffix} />
                </p>
                <p className="relative text-[10px] font-semibold uppercase tracking-[0.22em] text-bone/55">{a.stat.label}</p>
                <h3 className="relative mt-4 font-display text-[1.7rem] leading-[0.95] tracking-wide text-bone">{a.title}</h3>
                <p className="relative mt-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d9b46a]">{a.org}</p>
                <p className="relative mt-3 text-[13px] leading-relaxed text-bone/70">{a.detail}</p>
                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="relative mt-auto inline-flex min-h-10 items-center gap-1 pt-5 text-xs font-semibold tracking-wide text-bone underline decoration-[#d9b46a]/60 underline-offset-4 hover:decoration-[#d9b46a]"
                  >
                    View certificate ↗
                  </a>
                )}
              </article>
            </Tilt>
          </motion.li>
        ))}
      </ol>

      {/* certifications */}
      <Certifications featured={featured} more={more} issuers={issuers} />
    </>
  );
}

const ISSUER_FILTERS = ['All', 'Scaler', 'Infosys Springboard', 'Oracle', 'Other'] as const;
type IssuerFilter = (typeof ISSUER_FILTERS)[number];
const filterLabel = (f: IssuerFilter) => (f === 'Infosys Springboard' ? 'Infosys' : f);
const matches = (c: Certification, f: IssuerFilter) =>
  f === 'All' || (f === 'Other' ? !['Scaler', 'Infosys Springboard', 'Oracle'].includes(c.issuer) : c.issuer === f);

function Certifications({
  featured,
  more,
  issuers,
}: {
  featured: Certification[];
  more: Certification[];
  issuers: string[];
}) {
  const rail = useRef<HTMLDivElement>(null);
  const [viewing, setViewing] = useState<Certification | null>(null);
  const [filter, setFilter] = useState<IssuerFilter>('All');
  const years = certifications.map((c) => Number(c.year));
  const allIssuers = new Set(certifications.map((c) => c.issuer)).size;
  const shown = more.filter((c) => matches(c, filter));
  const close = useCallback(() => setViewing(null), []);

  return (
    <div className="mt-20">
      {/* summary */}
      <div className="gutter mb-6 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="mb-2 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-crimson-2">
            <span className="h-px w-8 bg-crimson-2" /> Credentials
          </p>
          <h3 className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-[0.9] tracking-wide text-bone">Certifications</h3>
          <p className="mt-2 text-sm text-mist">Tap any certificate to view it full size. Featured: {issuers.join(' · ')}.</p>
        </div>
        <dl className="flex gap-6 sm:gap-10">
          {[
            { v: certifications.length, k: 'Certificates' },
            { v: allIssuers, k: 'Issuers' },
          ].map((s) => (
            <div key={s.k}>
              <dd className="font-display text-5xl leading-none text-[#f3d58f]">
                <CountUp value={s.v} />
              </dd>
              <dt className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-bone/55">{s.k}</dt>
            </div>
          ))}
          <div>
            <dd className="font-display text-5xl leading-none text-[#f3d58f]">
              {Math.min(...years)}–{String(Math.max(...years)).slice(2)}
            </dd>
            <dt className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-bone/55">Years</dt>
          </div>
        </dl>
      </div>

      {/* featured posters */}
      <div className="group/rail relative">
        <div ref={rail} className="rail gutter flex snap-x gap-4 overflow-x-auto py-5 [scroll-padding-inline:var(--gutter)]">
          {featured.map((c, i) => (
            <motion.div
              key={c.name}
              className={`shrink-0 snap-start ${i === 0 ? 'w-[min(86vw,420px)]' : 'w-[min(76vw,300px)]'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.05, ease: EASE }}
            >
              <CertificatePoster certificate={c} hero={i === 0} onOpen={() => setViewing(c)} />
            </motion.div>
          ))}
        </div>
        <RailButtons rail={rail} />
      </div>

      {/* more, filterable */}
      <div className="gutter mt-10">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h4 className="font-sans text-lg font-semibold text-bone">
            More Certifications <span className="text-mist">· {more.length}</span>
          </h4>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter certifications by issuer">
            {ISSUER_FILTERS.map((f) => {
              const count = more.filter((c) => matches(c, f)).length;
              if (count === 0) return null;
              const on = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setFilter(f)}
                  className={`relative rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${on ? 'text-ink' : 'text-mist ring-1 ring-white/15 hover:text-bone'}`}
                >
                  {on && <motion.span layoutId="cert-filter" className="absolute inset-0 rounded-full bg-bone" transition={{ duration: 0.35, ease: EASE }} />}
                  <span className="relative">
                    {filterLabel(f)} · {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <AnimatePresence mode="popLayout">
            {shown.map((c) => (
              <motion.div
                key={c.name}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <CertificatePoster certificate={c} onOpen={() => setViewing(c)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Suspense fallback={null}>
        <AnimatePresence>{viewing && <CertificateViewer key="cert" certificate={viewing} onClose={close} />}</AnimatePresence>
      </Suspense>
    </div>
  );
}

/** Certificate as a poster: its real first page as cover art, issuer and title over a gradient. */
function CertificatePoster({ certificate: c, hero = false, onOpen }: { certificate: Certification; hero?: boolean; onOpen: () => void }) {
  if (!c.link) return null;
  return (
    <button
      type="button"
      onClick={onOpen}
      data-cursor="view"
      aria-label={`View ${c.name} certificate from ${c.issuer}`}
      className="group focus-ring relative block w-full overflow-hidden rounded-xl bg-ink-2 text-left ring-1 ring-white/10 transition duration-500 ease-[var(--ease-cine)] hover:-translate-y-1.5 hover:ring-[#d9b46a]/60 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9),0_0_40px_-18px_#d9b46a]"
    >
      <div className={`relative overflow-hidden ${hero ? 'aspect-[4/3]' : 'aspect-[16/11]'}`}>
        <img
          src={thumbFor(c.link)}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-top transition duration-[1.2s] ease-[var(--ease-cine)] group-hover:scale-[1.06]"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
        {c.featured && (
          <span className="absolute right-3 top-3 rounded-full bg-[#d9b46a] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-ink shadow">
            ★ Featured
          </span>
        )}
        <span className="absolute left-3 top-3 rounded-md bg-black/60 px-2 py-1 text-[10px] font-bold text-bone backdrop-blur">{c.year}</span>
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d9b46a]">{c.issuer}</p>
          <h5 className={`mt-1 font-semibold leading-snug text-bone ${hero ? 'text-lg' : 'text-sm'}`}>{c.name}</h5>
          {c.note && <p className="mt-1 text-xs text-mist">{c.note}</p>}
          <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-bone/80 transition group-hover:text-bone">
            View certificate <span className="transition group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </button>
  );
}
