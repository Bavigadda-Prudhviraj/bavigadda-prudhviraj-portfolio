import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import type { Certification } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE } from './fx';
import { fullFor } from './certThumbs';

/** Full-screen certificate viewer showing a high-resolution image of the certificate. Esc or backdrop closes. */
export default function CertificateViewer({ certificate: c, onClose }: { certificate: Certification; onClose: () => void }) {
  useScrollLock(true);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeBtn.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      prevFocus?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  if (!c.link) return null;

  // Portal to <body>: the page wrapper animates `filter`, which would trap a fixed overlay inside it.
  return createPortal(
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={`${c.name} certificate`}
      onClick={onClose}
    >
      <div className="gutter flex min-h-16 shrink-0 items-center justify-between gap-3 py-3 pt-[max(0.75rem,env(safe-area-inset-top))]" onClick={(e) => e.stopPropagation()}>
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#d9b46a]">
            {c.issuer} · {c.year}
          </p>
          <p className="truncate font-display text-2xl tracking-wide text-bone">{c.name}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <a href={c.link} target="_blank" rel="noreferrer" className="hidden rounded-md border border-white/25 px-4 py-2 text-xs font-semibold text-bone hover:border-bone sm:inline-flex">
            Open original ↗
          </a>
          <a href={c.link} download className="rounded-md bg-bone px-4 py-2 text-xs font-bold text-ink">
            ⤓ Download
          </a>
          <button ref={closeBtn} type="button" onClick={onClose} aria-label="Close certificate" data-cursor="close" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20">
            ✕
          </button>
        </div>
      </div>
      <motion.div
        className="gutter flex min-h-0 flex-1 items-center justify-center pb-6"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        {/* Always an image: many browsers (and embedded webviews) render inline PDFs as a blank box. */}
        <img
          src={fullFor(c.link)}
          alt={`${c.name} certificate from ${c.issuer}`}
          className="max-h-full max-w-full rounded-xl bg-white object-contain shadow-2xl ring-1 ring-white/10"
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </motion.div>,
    document.body,
  );
}
