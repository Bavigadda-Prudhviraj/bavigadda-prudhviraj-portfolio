import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IconCheck, IconChevronDown } from '@tabler/icons-react';

/**
 * Styled listbox that replaces the native <select>: the panel opens inside the form,
 * matches the dark theme, scrolls within itself and flips upward when there's no room below.
 */
export default function Dropdown({
  label,
  value,
  options,
  onChange,
  placeholder,
  accent,
}: {
  label: string;
  value: string;
  options: { value: string; label?: string; hint?: string }[];
  onChange: (v: string) => void;
  placeholder?: string;
  accent: string;
}) {
  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(false);
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const id = useId();
  const current = options.find((o) => o.value === value);

  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent) => !root.current?.contains(e.target as Node) && setOpen(false);
    window.addEventListener('pointerdown', close);
    return () => window.removeEventListener('pointerdown', close);
  }, [open]);

  useEffect(() => {
    if (open) list.current?.querySelector<HTMLElement>(`[data-i="${active}"]`)?.scrollIntoView({ block: 'nearest' });
  }, [open, active]);

  const show = () => {
    const r = root.current!.getBoundingClientRect();
    setUp(window.innerHeight - r.bottom < 280 && r.top > window.innerHeight - r.bottom);
    setActive(Math.max(0, options.findIndex((o) => o.value === value)));
    setOpen(true);
  };
  const pick = (i: number) => {
    onChange(options[i].value);
    setOpen(false);
  };
  const onKey = (e: KeyboardEvent) => {
    if (!open) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
        e.preventDefault();
        show();
      }
      return;
    }
    if (e.key === 'Escape') setOpen(false);
    else if (e.key === 'ArrowDown') setActive((i) => Math.min(options.length - 1, i + 1));
    else if (e.key === 'ArrowUp') setActive((i) => Math.max(0, i - 1));
    else if (e.key === 'Home') setActive(0);
    else if (e.key === 'End') setActive(options.length - 1);
    else if (e.key === 'Enter' || e.key === ' ') pick(active);
    else if (e.key === 'Tab') setOpen(false);
    else return;
    e.preventDefault();
  };

  return (
    <div ref={root} className="relative" style={{ ['--accent' as string]: accent }}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        aria-label={`${label}: ${current?.label ?? current?.value ?? 'not selected'}`}
        onClick={() => (open ? setOpen(false) : show())}
        onKeyDown={onKey}
        className={`flex w-full items-center justify-between gap-3 rounded-lg bg-white/[0.04] px-4 py-3 text-left text-sm ring-1 outline-none transition hover:bg-white/[0.06] ${
          open ? 'bg-white/[0.07] ring-[color:var(--accent)]' : 'ring-white/10 focus-visible:ring-[color:var(--accent)]'
        }`}
      >
        <span className="min-w-0">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-smoke">{label}</span>
          <span className={`block truncate ${current ? 'text-bone' : 'text-smoke'}`}>{current?.label ?? current?.value ?? placeholder}</span>
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} className="shrink-0 text-mist">
          <IconChevronDown size={16} aria-hidden />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            ref={list}
            id={`${id}-list`}
            role="listbox"
            aria-label={label}
            data-lenis-prevent
            initial={{ opacity: 0, y: up ? 6 : -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: up ? 6 : -6, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className={`absolute inset-x-0 z-30 max-h-60 overflow-y-auto overscroll-contain rounded-xl bg-ink-3/95 p-1.5 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.9)] ring-1 ring-white/10 backdrop-blur-xl [scrollbar-color:rgba(255,255,255,0.2)_transparent] [scrollbar-width:thin] ${
              up ? 'bottom-full mb-2 origin-bottom' : 'top-full mt-2 origin-top'
            }`}
          >
            {options.map((o, i) => {
              const selected = o.value === value;
              return (
                <li
                  key={o.value}
                  data-i={i}
                  role="option"
                  aria-selected={selected}
                  onPointerEnter={() => setActive(i)}
                  onClick={() => pick(i)}
                  className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                    i === active ? 'bg-white/[0.08] text-bone' : 'text-bone/80'
                  }`}
                >
                  <span className="min-w-0">
                    <span className="block truncate">{o.label ?? o.value}</span>
                    {o.hint && <span className="block text-[11px] text-smoke">{o.hint}</span>}
                  </span>
                  {selected && <IconCheck size={15} className="shrink-0" style={{ color: accent }} aria-hidden />}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
