/** Pure helpers for the hiring-enquiry form and email — kept free of React so they're easy to check. */

export type Basis = 'annual' | 'hourly' | 'fixed';
export const BASIS_LABEL: Record<Basis, string> = { annual: 'Annual salary', hourly: 'Hourly rate', fixed: 'Fixed project' };

export const CURRENCIES = {
  INR: { symbol: '₹', name: 'Indian Rupee', locale: 'en-IN' },
  USD: { symbol: '$', name: 'US Dollar', locale: 'en-US' },
  GBP: { symbol: '£', name: 'British Pound', locale: 'en-GB' },
  EUR: { symbol: '€', name: 'Euro', locale: 'en-IE' },
  AED: { symbol: 'AED ', name: 'UAE Dirham', locale: 'en-AE' },
  SGD: { symbol: 'S$', name: 'Singapore Dollar', locale: 'en-SG' },
  CAD: { symbol: 'C$', name: 'Canadian Dollar', locale: 'en-CA' },
  AUD: { symbol: 'A$', name: 'Australian Dollar', locale: 'en-AU' },
} as const;
export type Currency = keyof typeof CURRENCIES;

/** Each country's local currency, picked automatically when the country changes. */
export const COUNTRIES: { name: string; currency: Currency }[] = [
  { name: 'India', currency: 'INR' },
  { name: 'United States', currency: 'USD' },
  { name: 'United Kingdom', currency: 'GBP' },
  { name: 'Germany', currency: 'EUR' },
  { name: 'Netherlands', currency: 'EUR' },
  { name: 'Ireland', currency: 'EUR' },
  { name: 'United Arab Emirates', currency: 'AED' },
  { name: 'Singapore', currency: 'SGD' },
  { name: 'Canada', currency: 'CAD' },
  { name: 'Australia', currency: 'AUD' },
  { name: 'Other', currency: 'USD' },
];

export const WORK_MODES = ['Work from Office', 'Hybrid', 'Remote'] as const;
export type WorkMode = (typeof WORK_MODES)[number];

export const EXACT = 'Enter an exact amount';
export const DISCUSS = 'Prefer to discuss';

const num = (c: Currency, n: number) => n.toLocaleString(CURRENCIES[c].locale);
const money = (c: Currency, n: number) => `${CURRENCIES[c].symbol}${num(c, n)}`;
/** ₹50K / ₹2L / ₹1 Cr for rupees; $80k / $1.2M elsewhere. */
function short(c: Currency, n: number) {
  const s = CURRENCIES[c].symbol;
  const trim = (x: number) => Number(x.toFixed(2));
  if (c === 'INR') return n >= 1e7 ? `${s}${trim(n / 1e7)} Cr` : n >= 1e5 ? `${s}${trim(n / 1e5)}L` : `${s}${trim(n / 1e3)}K`;
  return n >= 1e6 ? `${s}${trim(n / 1e6)}M` : `${s}${trim(n / 1e3)}k`;
}

type Scale = { from: number; to: number; step: number };
const steps = ({ from, to, step }: Scale) => Array.from({ length: Math.round((to - from) / step) }, (_, i) => [from + i * step, from + (i + 1) * step]);

/** India: 5 LPA steps from 20 LPA to 1 Cr, then the same 5 LPA (0.05 Cr) steps to 1.5 Cr. */
const fmtCr = (lakh: number) => `${Number((lakh / 100).toFixed(2))} Cr`;
const LPA_BANDS = [
  ...steps({ from: 20, to: 150, step: 5 }).map(([lo, hi]) =>
    hi <= 100 ? (hi === 100 ? `${lo} LPA – 1 Cr` : `${lo}–${hi} LPA`) : `${fmtCr(lo)} – ${fmtCr(hi)}`,
  ),
  '1.5 Cr+',
];

/** Annual bands sized to each market's typical backend salaries. */
const ANNUAL: Record<Exclude<Currency, 'INR'>, Scale> = {
  USD: { from: 60_000, to: 300_000, step: 20_000 },
  GBP: { from: 40_000, to: 200_000, step: 10_000 },
  EUR: { from: 40_000, to: 200_000, step: 10_000 },
  AED: { from: 150_000, to: 900_000, step: 50_000 },
  SGD: { from: 60_000, to: 300_000, step: 20_000 },
  CAD: { from: 60_000, to: 300_000, step: 20_000 },
  AUD: { from: 80_000, to: 300_000, step: 20_000 },
};
const HOURLY: Record<Currency, Scale> = {
  INR: { from: 1_000, to: 10_000, step: 500 },
  USD: { from: 20, to: 150, step: 10 },
  GBP: { from: 20, to: 120, step: 10 },
  EUR: { from: 20, to: 120, step: 10 },
  AED: { from: 75, to: 500, step: 25 },
  SGD: { from: 30, to: 200, step: 10 },
  CAD: { from: 30, to: 200, step: 10 },
  AUD: { from: 30, to: 200, step: 10 },
};
const FIXED: Record<Currency, number[]> = {
  INR: [50_000, 1_00_000, 2_00_000, 5_00_000, 10_00_000, 25_00_000],
  USD: [1_000, 2_500, 5_000, 10_000, 25_000, 50_000],
  GBP: [1_000, 2_500, 5_000, 10_000, 25_000, 50_000],
  EUR: [1_000, 2_500, 5_000, 10_000, 25_000, 50_000],
  AED: [5_000, 10_000, 25_000, 50_000, 1_00_000, 2_00_000],
  SGD: [1_000, 2_500, 5_000, 10_000, 25_000, 50_000],
  CAD: [1_000, 2_500, 5_000, 10_000, 25_000, 50_000],
  AUD: [1_000, 2_500, 5_000, 10_000, 25_000, 50_000],
};

/** The salary-range choices for a pay basis in a currency, ending with an exact-amount and a discuss option. */
export function salaryOptions(basis: Basis, c: Currency): string[] {
  let bands: string[];
  if (basis === 'annual') {
    bands =
      c === 'INR'
        ? LPA_BANDS
        : [...steps(ANNUAL[c]).map(([lo, hi]) => `${short(c, lo)} – ${short(c, hi)}`), `${short(c, ANNUAL[c].to)}+`];
  } else if (basis === 'hourly') {
    const s = HOURLY[c];
    bands = [...steps(s).map(([lo, hi]) => `${money(c, lo)}–${money(c, hi)} / hr`), `${money(c, s.to)}+ / hr`];
  } else {
    const f = FIXED[c];
    bands = [...f.slice(0, -1).map((lo, i) => `${short(c, lo)} – ${short(c, f[i + 1])}`), `${short(c, f[f.length - 1])}+`];
  }
  return [...bands, EXACT, DISCUSS];
}

export function budgetText(basis: Basis, c: Currency, choice: string, amount: string): string | null {
  if (!choice) return null;
  if (choice === DISCUSS) return DISCUSS;
  const per = basis === 'hourly' ? 'per hour' : basis === 'fixed' ? 'fixed project' : 'per year';
  if (choice === EXACT) return amount ? `${money(c, Number(amount))} ${c}, ${per}` : null;
  return `${choice} (${c}, ${per})`;
}

export function workModeText(mode: WorkMode, officeDays: string) {
  return mode === 'Hybrid' ? `Hybrid — ${officeDays} day${officeDays === '1' ? '' : 's'} a week in the office` : mode;
}

export function enquiryBody(e: {
  typeLabel: string;
  details: [label: string, value: string][];
  location: string;
  workMode: string;
  budget: string | null;
  jd?: string | null;
  name: string;
  email: string;
  message: string;
}) {
  const lines = [
    `Employment type: ${e.typeLabel}`,
    ...e.details.filter(([, v]) => v).map(([l, v]) => `${l}: ${v}`),
    `Location: ${e.location}`,
    `Work mode: ${e.workMode}`,
    `Budget for this role: ${e.budget ?? 'to be discussed'}`,
    `Job description: ${e.jd ? `${e.jd} (attached)` : 'not attached'}`,
    '',
    `Name: ${e.name}`,
    `Email: ${e.email}`,
  ];
  return ['Hi Prudhviraj,', '', e.message || '(your message)', '', '—', ...lines].join('\n');
}
