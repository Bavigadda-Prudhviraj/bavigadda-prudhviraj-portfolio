import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { IconX } from '@tabler/icons-react';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE } from './fx';
import ContactForm from './ContactForm';

/** "Hire Me" popup — the contact form, reachable from the navbar on every section. */
export default function HireMeModal({ onClose }: { onClose: () => void }) {
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

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[140] flex items-end justify-center bg-black/80 backdrop-blur-md sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="hire-title"
      onClick={onClose}
    >
      <motion.div
        data-lenis-prevent
        className="relative max-h-[92svh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-ink-2 p-6 shadow-2xl ring-1 ring-white/10 sm:rounded-2xl sm:p-8"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.45, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
      >
        <div aria-hidden className="pointer-events-none absolute -top-24 right-0 h-48 w-48 rounded-full bg-crimson/25 blur-3xl" />
        <button
          ref={closeBtn}
          type="button"
          onClick={onClose}
          aria-label="Close"
          data-cursor="close"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20"
        >
          <IconX size={18} aria-hidden />
        </button>
        <p className="relative text-[11px] font-bold uppercase tracking-[0.32em] text-crimson-2">Now casting</p>
        <h2 id="hire-title" className="relative mt-1 font-display text-5xl leading-none tracking-wide text-bone">
          Hire Me
        </h2>
        <p className="relative mt-2 text-sm text-mist">
          {profile.role} · {profile.location}. Tell me about the role and I'll reply within a day.
        </p>
        <div className="relative mt-6">
          <ContactForm compact onSent={onClose} />
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}
