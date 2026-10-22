import { useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  IconBriefcase,
  IconBuildingCommunity,
  IconCalendarTime,
  IconCheck,
  IconCopy,
  IconDeviceLaptop,
  IconFileText,
  IconFileUpload,
  IconX,
  IconSend,
  IconUserStar,
  type Icon,
} from '@tabler/icons-react';
import { profile } from '../data/portfolio';
import { EASE } from './fx';
import Dropdown from './Dropdown';
import {
  BASIS_LABEL,
  budgetText,
  COUNTRIES,
  CURRENCIES,
  enquiryBody,
  EXACT,
  salaryOptions,
  WORK_MODES,
  workModeText,
  type Basis,
  type Currency,
  type WorkMode,
} from './enquiry';

type FieldDef = { key: string; label: string; placeholder: string; required?: boolean };
type Engagement = {
  id: 'fulltime' | 'contract' | 'consultancy' | 'consultant' | 'freelance';
  label: string;
  blurb: string;
  icon: Icon;
  accent: string;
  fields: FieldDef[];
  /** How this engagement can be paid; the first is the default. */
  bases: Basis[];
  subject: (v: Record<string, string>) => string;
};

/** Each employment type asks for what matters to it — a consultancy keeps consultancy and client apart. */
const ENGAGEMENTS: Engagement[] = [
  {
    id: 'fulltime',
    label: 'Full-time',
    blurb: 'Permanent role on your team',
    icon: IconBriefcase,
    accent: '#46e3a8',
    fields: [
      { key: 'company', label: 'Company', placeholder: 'Company *', required: true },
      { key: 'role', label: 'Role', placeholder: 'Role title *', required: true },
    ],
    bases: ['annual'],
    subject: (v) => `Full-time opportunity — ${v.role} at ${v.company}`,
  },
  {
    id: 'contract',
    label: 'Contract',
    blurb: 'Fixed-term engagement',
    icon: IconCalendarTime,
    accent: '#ffb547',
    fields: [
      { key: 'company', label: 'Company', placeholder: 'Company *', required: true },
      { key: 'role', label: 'Role', placeholder: 'Role title *', required: true },
      { key: 'duration', label: 'Duration', placeholder: 'Duration (e.g. 6 months) *', required: true },
      { key: 'start', label: 'Start date', placeholder: 'Start date' },
    ],
    bases: ['annual', 'hourly'],
    subject: (v) => `Contract role — ${v.role} at ${v.company} (${v.duration})`,
  },
  {
    id: 'consultancy',
    label: 'Consultancy',
    blurb: 'Through a consultancy, for a client',
    icon: IconBuildingCommunity,
    accent: '#4cc9ff',
    fields: [
      { key: 'consultancy', label: 'Consultancy name', placeholder: 'Consultancy name *', required: true },
      { key: 'client', label: 'Client name', placeholder: 'Client name *', required: true },
      { key: 'role', label: 'Role', placeholder: 'Role title *', required: true },
      { key: 'duration', label: 'Duration', placeholder: 'Duration' },
    ],
    bases: ['annual', 'hourly'],
    subject: (v) => `Consultancy role — ${v.role} with ${v.client} via ${v.consultancy}`,
  },
  {
    id: 'consultant',
    label: 'Consultant',
    blurb: 'Hire me directly as a consultant',
    icon: IconUserStar,
    accent: '#ff8a5c',
    fields: [
      { key: 'client', label: 'Client / company', placeholder: 'Client or company *', required: true },
      { key: 'scope', label: 'Engagement scope', placeholder: 'Scope (e.g. architecture review) *', required: true },
      { key: 'duration', label: 'Duration', placeholder: 'Duration' },
    ],
    bases: ['hourly', 'fixed', 'annual'],
    subject: (v) => `Consulting engagement — ${v.scope} for ${v.client}`,
  },
  {
    id: 'freelance',
    label: 'Freelancing',
    blurb: 'Project or hourly work',
    icon: IconDeviceLaptop,
    accent: '#b98bff',
    fields: [
      { key: 'client', label: 'Client / company', placeholder: 'Client or company *', required: true },
      { key: 'project', label: 'Project', placeholder: 'Project or role *', required: true },
      { key: 'duration', label: 'Estimated duration', placeholder: 'Estimated duration' },
    ],
    bases: ['hourly', 'fixed'],
    subject: (v) => `Freelance project — ${v.project} for ${v.client}`,
  },
];

/** Job descriptions: PDF or Word, within Netlify Forms' 8 MB upload limit. */
const JD_TYPES = '.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document';
const JD_EXT = /\.(pdf|docx?)$/i;
const JD_MAX = 8 * 1024 * 1024;
const kb = (n: number) => (n < 1024 * 1024 ? `${Math.max(1, Math.round(n / 1024))} KB` : `${(n / 1024 / 1024).toFixed(1)} MB`);

/**
 * Hiring enquiry form. On Netlify it posts to Netlify Forms (which can carry the JD file and
 * emails each submission); anywhere else it falls back to opening the visitor's mail app.
 */
export default function ContactForm({ compact = false, onSent }: { compact?: boolean; onSent?: () => void }) {
  const [typeId, setTypeId] = useState<Engagement['id']>('fulltime');
  const [values, setValues] = useState<Record<string, string>>({});
  const [country, setCountry] = useState('India');
  const [currency, setCurrency] = useState<Currency>('INR');
  const [mode, setMode] = useState<WorkMode>('Hybrid');
  const [officeDays, setOfficeDays] = useState('3');
  const [basis, setBasis] = useState<Basis>('annual');
  const [range, setRange] = useState('');
  const [amount, setAmount] = useState('');
  const [copied, setCopied] = useState(false);
  const [jd, setJd] = useState<File | null>(null);
  const [jdError, setJdError] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const jdInput = useRef<HTMLInputElement>(null);

  const type = ENGAGEMENTS.find((t) => t.id === typeId)!;
  const accent = type.accent;
  const set = (key: string) => (e: { target: { value: string } }) => setValues((v) => ({ ...v, [key]: e.target.value }));
  const val = (key: string) => values[key] ?? '';

  // Ranges depend on pay basis and currency, so a change to either clears the chosen range.
  const pickType = (t: Engagement) => {
    setTypeId(t.id);
    if (!t.bases.includes(basis)) {
      setBasis(t.bases[0]);
      setRange('');
    }
  };
  const pickCountry = (name: string) => {
    setCountry(name);
    setCurrency(COUNTRIES.find((c) => c.name === name)!.currency);
    setRange('');
  };
  const pickCurrency = (c: string) => {
    setCurrency(c as Currency);
    setRange('');
  };
  const pickBasis = (b: Basis) => {
    setBasis(b);
    setRange('');
  };

  const onJd = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    if (f && !JD_EXT.test(f.name)) {
      setJdError('Please attach a PDF or Word file (.pdf, .doc, .docx).');
      e.target.value = '';
      return;
    }
    if (f && f.size > JD_MAX) {
      setJdError(`That file is ${kb(f.size)} — the limit is 8 MB.`);
      e.target.value = '';
      return;
    }
    setJdError('');
    setJd(f);
  };
  const clearJd = () => {
    setJd(null);
    if (jdInput.current) jdInput.current.value = '';
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const v = Object.fromEntries(Object.entries(values).map(([k, x]) => [k, x.trim()]));
    const subject = type.subject(v);
    const body = enquiryBody({
      typeLabel: type.label,
      details: type.fields.map((f) => [f.label, v[f.key] ?? ''] as [string, string]),
      location: [v.city, country].filter(Boolean).join(', '),
      workMode: workModeText(mode, officeDays),
      budget: budgetText(basis, currency, range, amount),
      jd: jd?.name ?? null,
      name: v.name,
      email: v.email,
      message: v.message,
    });

    setStatus('sending');
    try {
      const data = new FormData();
      data.append('form-name', 'hire-enquiry');
      data.append('subject', subject);
      data.append('name', v.name ?? '');
      data.append('email', v.email ?? '');
      data.append('employment-type', type.label);
      data.append('details', body);
      if (jd) data.append('jd', jd);
      // Netlify answers a registered form with 200; elsewhere (e.g. localhost) this fails and we fall back.
      const res = await fetch('/', { method: 'POST', body: data, headers: { Accept: 'text/html' } });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
      window.setTimeout(() => onSent?.(), 1800);
    } catch {
      setStatus('idle');
      // A mailto link can't carry files, so ask the sender to attach the JD themselves.
      const mailBody = jd ? body.replace(`${jd.name} (attached)`, `${jd.name} — please attach it to this email`) : body;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
      onSent?.();
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard blocked — the address is still visible on the button */
    }
  };

  const field =
    'w-full rounded-lg bg-white/[0.04] px-4 py-3 text-sm text-bone placeholder:text-smoke ring-1 ring-white/10 outline-none transition focus:bg-white/[0.07] focus:ring-[color:var(--accent)]';
  const grid = compact ? 'grid gap-3' : 'grid gap-3 sm:grid-cols-2';
  const wide = compact ? '' : 'sm:col-span-2';
  const sym = CURRENCIES[currency].symbol.trim();

  return (
    <form onSubmit={submit} className="w-full text-left" aria-label="Contact form" style={{ ['--accent' as string]: accent }}>
      <fieldset>
        <legend className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-mist">Employment type</legend>
        <div className="flex flex-wrap gap-2">
          {ENGAGEMENTS.map((t) => {
            const on = t.id === typeId;
            const TypeIcon = t.icon;
            return (
              <button
                key={t.id}
                type="button"
                role="radio"
                aria-checked={on}
                onClick={() => pickType(t)}
                title={t.blurb}
                className="relative flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3.5 text-left ring-1 transition duration-300"
                style={{
                  background: on ? `${t.accent}14` : 'rgba(255,255,255,0.02)',
                  boxShadow: on ? `inset 0 0 0 1px ${t.accent}aa, 0 10px 30px -14px ${t.accent}` : undefined,
                  ['--tw-ring-color' as string]: on ? 'transparent' : 'rgba(255,255,255,0.1)',
                }}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ background: `${t.accent}22`, color: t.accent }}>
                  <TypeIcon size={14} stroke={2} aria-hidden />
                </span>
                <span className={`whitespace-nowrap text-xs font-semibold ${on ? 'text-bone' : 'text-mist'}`}>{t.label}</span>
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-[11px] text-smoke">{type.blurb}</p>
      </fieldset>

      {/* details for the chosen engagement */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={type.id}
          className={`mt-4 rounded-xl p-3 ring-1 ring-white/5 ${grid}`}
          style={{ background: `linear-gradient(135deg, ${accent}0d, transparent 60%)` }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: EASE }}
        >
          <SectionLabel color={accent} className={wide}>
            {type.label} details
          </SectionLabel>
          {type.fields.map((f) => (
            <label key={f.key} className="block">
              <span className="sr-only">{f.label}</span>
              <input required={f.required} value={val(f.key)} onChange={set(f.key)} placeholder={f.placeholder} className={field} />
            </label>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* location & work mode */}
      <div className={`mt-3 rounded-xl p-3 ring-1 ring-white/5 ${grid}`}>
        <SectionLabel className={wide}>Location &amp; work mode</SectionLabel>
        <label className="block">
          <span className="sr-only">City / location</span>
          <input value={val('city')} onChange={set('city')} placeholder="City / location" autoComplete="address-level2" className={field} />
        </label>
        <Dropdown label="Country" value={country} onChange={pickCountry} accent={accent} options={COUNTRIES.map((c) => ({ value: c.name, hint: c.currency }))} />
        <Dropdown label="Work mode" value={mode} onChange={(m) => setMode(m as WorkMode)} accent={accent} options={WORK_MODES.map((m) => ({ value: m }))} />
        <AnimatePresence initial={false}>
          {mode === 'Hybrid' && (
            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.2 }}>
              <Dropdown
                label="Office days per week"
                value={officeDays}
                onChange={setOfficeDays}
                accent={accent}
                options={['1', '2', '3', '4'].map((d) => ({ value: d, label: `${d} day${d === '1' ? '' : 's'} a week in the office` }))}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* budget */}
      <div className={`mt-3 rounded-xl p-3 ring-1 ring-white/5 ${grid}`}>
        <div className={`flex flex-wrap items-center justify-between gap-2 ${wide}`}>
          <SectionLabel>Budget for this role</SectionLabel>
          {type.bases.length > 1 && (
            <div className="flex gap-1 rounded-full bg-white/[0.04] p-1 ring-1 ring-white/10" role="radiogroup" aria-label="Pay basis">
              {type.bases.map((b) => (
                <Chip key={b} on={basis === b} onClick={() => pickBasis(b)} accent={accent}>
                  {BASIS_LABEL[b]}
                </Chip>
              ))}
            </div>
          )}
        </div>
        <Dropdown
          label="Currency"
          value={currency}
          onChange={pickCurrency}
          accent={accent}
          options={(Object.keys(CURRENCIES) as Currency[]).map((c) => ({ value: c, label: `${CURRENCIES[c].symbol.trim()} ${c}`, hint: CURRENCIES[c].name }))}
        />
        <Dropdown
          label={basis === 'annual' ? (currency === 'INR' ? 'Salary range (CTC)' : 'Salary range (per year)') : basis === 'hourly' ? 'Hourly rate' : 'Project budget'}
          value={range}
          onChange={setRange}
          accent={accent}
          placeholder="Select a range"
          options={salaryOptions(basis, currency).map((o) => ({ value: o }))}
        />
        <AnimatePresence initial={false}>
          {range === EXACT && (
            <motion.label className={`relative block ${wide}`} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
              <span className="sr-only">Exact amount</span>
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-mist">{sym}</span>
              <input
                type="number"
                inputMode="numeric"
                min={1}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                className={`${field} pl-12 pr-24`}
              />
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-smoke">
                {currency} {basis === 'hourly' ? '/ hour' : basis === 'fixed' ? 'total' : '/ year'}
              </span>
            </motion.label>
          )}
        </AnimatePresence>
      </div>

      {/* job description */}
      <div className="mt-3">
        <input ref={jdInput} id={`jd-${compact ? 'modal' : 'inline'}`} type="file" accept={JD_TYPES} onChange={onJd} className="sr-only" />
        {jd ? (
          <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] px-4 py-3 ring-1 ring-[color:var(--accent)]">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: `${accent}22`, color: accent }}>
              <IconFileText size={18} aria-hidden />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium text-bone">{jd.name}</span>
              <span className="block text-[11px] text-smoke">{kb(jd.size)} · job description attached</span>
            </span>
            <button type="button" onClick={clearJd} aria-label="Remove job description" className="flex h-8 w-8 items-center justify-center rounded-full text-mist hover:bg-white/10 hover:text-bone">
              <IconX size={16} aria-hidden />
            </button>
          </div>
        ) : (
          <label
            htmlFor={`jd-${compact ? 'modal' : 'inline'}`}
            className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-white/15 px-4 py-3 transition hover:border-[color:var(--accent)] hover:bg-white/[0.03]"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-mist">
              <IconFileUpload size={18} aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-medium text-bone">Upload job description</span>
              <span className="block text-[11px] text-smoke">PDF or Word (.pdf, .doc, .docx) · up to 8 MB · optional</span>
            </span>
          </label>
        )}
        {jdError && <p className="mt-2 text-[11px] text-crimson-2" role="alert">{jdError}</p>}
      </div>

      {/* about you */}
      <div className={`mt-3 ${grid}`}>
        <label className="block">
          <span className="sr-only">Your name</span>
          <input required value={val('name')} onChange={set('name')} placeholder="Your name *" autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className="sr-only">Your email</span>
          <input required type="email" value={val('email')} onChange={set('email')} placeholder="Your email *" autoComplete="email" className={field} />
        </label>
        <label className={`block ${wide}`}>
          <span className="sr-only">Message</span>
          <textarea value={val('message')} onChange={set('message')} rows={3} placeholder="Team, stack or a short message" className={`${field} resize-none`} />
        </label>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status !== 'idle'}
          data-cursor="link"
          className="flex min-h-12 items-center gap-2 rounded-full bg-crimson px-7 text-sm font-bold tracking-[0.12em] text-white shadow-[0_0_40px_rgba(229,19,43,0.45)] transition hover:bg-crimson-2"
        >
          {status === 'sent' ? <IconCheck size={18} stroke={2} aria-hidden /> : <IconSend size={18} stroke={2} aria-hidden />}
          {status === 'sending' ? 'SENDING…' : status === 'sent' ? 'SENT!' : 'SEND'}
        </button>
        <button
          type="button"
          onClick={copyEmail}
          className="flex min-h-12 items-center gap-2 rounded-full border border-white/25 px-5 text-xs font-semibold text-bone transition hover:border-bone hover:bg-white/10"
        >
          {copied ? <IconCheck size={16} aria-hidden /> : <IconCopy size={16} aria-hidden />}
          {copied ? 'Copied!' : profile.email}
        </button>
      </div>
      <p className="mt-3 text-[11px] text-smoke" aria-live="polite">
        {status === 'sent' ? 'Thanks — your enquiry and job description are on their way to my inbox.' : 'Your enquiry (and job description, if attached) goes straight to my inbox.'}
      </p>
    </form>
  );
}

function SectionLabel({ children, color, className = '' }: { children: ReactNode; color?: string; className?: string }) {
  return (
    <p className={`text-[10px] font-bold uppercase tracking-[0.24em] ${color ? '' : 'text-mist'} ${className}`} style={color ? { color } : undefined}>
      {children}
    </p>
  );
}

function Chip({ on, onClick, accent, children }: { on: boolean; onClick: () => void; accent: string; children: ReactNode }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={on}
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition ${on ? 'text-ink' : 'text-mist hover:text-bone'}`}
      style={on ? { background: accent } : undefined}
    >
      {children}
    </button>
  );
}
