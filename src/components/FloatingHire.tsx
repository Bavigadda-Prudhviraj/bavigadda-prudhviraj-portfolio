import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { IconBriefcase } from '@tabler/icons-react';
import { sectionMeta, type SectionId } from '../data/portfolio';
import { EASE } from './fx';

/**
 * A small "Hire Me" pill pinned to the corner while scrolling. It takes the accent of the
 * section in view so it sits in the scene rather than on top of it, and steps aside over
 * the hero and the contact section, which have their own calls to action.
 */
export default function FloatingHire({ order, onHire }: { order: SectionId[]; onHire: () => void }) {
  const [section, setSection] = useState<SectionId | null>(null);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const id = e.target.id;
          if (id === 'top' || id === 'contact') setHidden(true);
          else {
            setHidden(false);
            if (id in sectionMeta) setSection(id as SectionId);
          }
        }),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ['top', ...order, 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [order]);

  const accent = section ? sectionMeta[section].palette.accent : '#ff3d5a';

  // Portal to <body>: the page wrapper animates `filter`, which would stop a fixed element from pinning.
  return createPortal(
    <AnimatePresence>
      {!hidden && (
        <motion.button
          type="button"
          onClick={onHire}
          data-cursor="link"
          aria-label="Hire me — open the contact form"
          className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-[55] flex items-center gap-2 rounded-full bg-ink/70 py-2 pl-3 pr-4 text-xs font-semibold tracking-[0.14em] text-bone/80 backdrop-blur-md transition-[color,box-shadow] duration-500 hover:text-bone sm:right-6"
          style={{ boxShadow: `inset 0 0 0 1px ${accent}55, 0 10px 30px -12px ${accent}66` }}
          initial={{ opacity: 0, y: 16, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.94 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <span
            className="flex h-6 w-6 items-center justify-center rounded-full transition-colors duration-500"
            style={{ background: `${accent}26`, color: accent }}
          >
            <IconBriefcase size={14} stroke={2} aria-hidden />
          </span>
          HIRE ME
        </motion.button>
      )}
    </AnimatePresence>,
    document.body,
  );
}
