import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />
        {project.motif === 'shield' && (
          <g transform="translate(232 40)" fill="none" stroke={a} strokeOpacity="0.85">
            <path d="M58 0 L116 22 V78 C116 120 90 146 58 160 C26 146 0 120 0 78 V22 Z" strokeWidth="2" />
            <path d="M58 16 L102 33 V78 C102 111 82 132 58 144 C34 132 14 111 14 78 V33 Z" strokeWidth="1" strokeOpacity="0.4" />
            {[0, 1, 2, 3, 4].map((i) => (
              <line key={i} x1="30" x2={i % 2 ? 72 : 86} y1={56 + i * 14} y2={56 + i * 14} strokeWidth="3" strokeLinecap="round" strokeOpacity={0.35 + i * 0.1} />
            ))}
            <path d="M40 124 l12 12 l26 -28" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
        {project.motif === 'flow' && (
          <g fill="none" stroke={a}>
            <rect x="200" y="56" width="150" height="94" rx="12" strokeWidth="2" strokeOpacity="0.85" />
            <rect x="214" y="72" width="28" height="20" rx="4" strokeOpacity="0.7" />
            <line x1="214" x2="330" y1="124" y2="124" strokeWidth="3" strokeOpacity="0.4" strokeDasharray="18 8" />
            <g transform="translate(176 196)" fontFamily="Inter" fontSize="10" fill={a} stroke="none" letterSpacing="2">
              <circle cx="16" cy="16" r="16" fill="none" stroke={a} strokeWidth="2" />
              <path d="M34 16 h46" stroke={a} strokeWidth="2" />
              <circle cx="96" cy="16" r="16" fill="none" stroke={a} strokeWidth="2" strokeOpacity="0.8" />
              <path d="M112 8 l38 -22 M112 24 l38 22" stroke={a} strokeWidth="2" strokeOpacity="0.6" />
              <circle cx="166" cy="-18" r="10" fill={a} fillOpacity="0.8" />
              <circle cx="166" cy="50" r="10" fill="none" stroke={a} strokeWidth="2" strokeOpacity="0.5" />
            </g>
          </g>
        )}
        {project.motif === 'tenants' && (
          <g fill="none" stroke={a}>
            {[0, 1, 2].map((r) =>
              [0, 1, 2, 3].map((c) => (
                <rect
                  key={`${r}-${c}`}
                  x={196 + c * 44}
                  y={50 + r * 44}
                  width="34"
                  height="34"
                  rx="7"
                  strokeWidth="1.6"
                  strokeOpacity={0.25 + ((r + c) % 3) * 0.25}
                  fill={(r + c) % 4 === 0 ? a : 'none'}
                  fillOpacity="0.25"
                />
              )),
            )}
            <path d="M188 200 h190" strokeWidth="2" strokeOpacity="0.7" />
            <path d="M188 214 h190" strokeWidth="1" strokeOpacity="0.35" />
            <path d="M188 228 h190" strokeWidth="1" strokeOpacity="0.2" />
          </g>
        )}
        {project.motif === 'tag' && (
          <g fill="none" stroke={a}>
            <path d="M232 52 h86 l40 40 l-74 74 l-52 -52 z" strokeWidth="2" strokeOpacity="0.85" />
            <circle cx="262" cy="80" r="9" strokeWidth="2" />
            <path d="M286 104 l-28 28 M262 104 a6 6 0 1 0 0.1 0 M290 128 a6 6 0 1 0 0.1 0" strokeWidth="2.5" strokeLinecap="round" />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <g key={i}>
                <rect x={198 + i * 30} y="214" width="22" height="16" rx="4" strokeOpacity={0.3 + i * 0.1} />
                {i < 5 && <path d={`M${220 + i * 30} 222 h8`} strokeOpacity="0.5" />}
              </g>
            ))}
          </g>
        )}
        {project.motif === 'radar' && (
          <g fill="none" stroke={a}>
            {[30, 60, 90].map((r) => (
              <circle key={r} cx="290" cy="130" r={r} strokeWidth="1.4" strokeOpacity={0.9 - r / 120} />
            ))}
            <path d="M290 130 L370 92" strokeWidth="2" strokeOpacity="0.8" />
            <circle cx="338" cy="104" r="6" fill="#ff3d5a" stroke="none" />
            <circle cx="244" cy="96" r="6" fill="#ffb547" stroke="none" />
            <circle cx="262" cy="190" r="6" fill={a} stroke="none" />
            <circle cx="350" cy="168" r="4" fill={a} fillOpacity="0.6" stroke="none" />
          </g>
        )}
        {project.motif === 'markdown' && (
          <g fill="none" stroke={a}>
            {[0, 1, 2, 3, 4].map((i) => (
              <rect key={i} x={206 + i * 32} y={70 + i * 22} width="20" height={150 - i * 22} rx="3" strokeWidth="1.6" fill={a} fillOpacity={0.08 + i * 0.05} strokeOpacity={0.4 + i * 0.12} />
            ))}
            <path d="M200 60 L370 196" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="10 6" />
            <path d="M356 196 h16 v-16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
        {project.motif === 'survey' && (
          <g fill="none" stroke={a}>
            <rect x="222" y="44" width="110" height="150" rx="10" strokeWidth="2" strokeOpacity="0.85" />
            <rect x="256" y="36" width="42" height="16" rx="5" strokeWidth="1.6" />
            {[0, 1, 2, 3].map((i) => (
              <g key={i} transform={`translate(240 ${76 + i * 28})`}>
                <rect width="14" height="14" rx="3" strokeOpacity="0.8" />
                {i < 3 && <path d="M3 7 l3 3 l6 -7" strokeWidth="2" strokeLinecap="round" />}
                <path d="M24 7 h50" strokeWidth="3" strokeLinecap="round" strokeOpacity={0.3 + i * 0.12} />
              </g>
            ))}
            <circle cx="350" cy="196" r="26" strokeWidth="2" />
            <path d="M369 215 l16 16" strokeWidth="4" strokeLinecap="round" />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Small fictional platform mark used in the nav and on cards. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 32" className="h-[1.1em] w-auto" aria-hidden>
        <path d="M6 28V4h7a7 7 0 0 1 0 14H6" fill="none" stroke="#e5132b" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
