import type { ServiceIcon } from "@/lib/data/extras";

const paths: Record<ServiceIcon | "phone" | "whatsapp" | "pen" | "pin" | "arrow" | "user", JSX.Element> = {
  checkin: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3h6v1M8.5 13l2.5 2.5 4.5-5" />
    </>
  ),
  wifi: (
    <>
      <path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.5 16a5 5 0 0 1 7 0" />
      <circle cx="12" cy="19" r="0.8" />
    </>
  ),
  linen: (
    <>
      <path d="M4 8h16v4H4zM4 12h16v4H4z" />
      <path d="M4 16h16v3H4z" />
    </>
  ),
  spa: (
    <>
      <path d="M12 20c-4 0-7-2.5-7-6 3 0 5.5 1.5 7 4 1.5-2.5 4-4 7-4 0 3.5-3 6-7 6z" />
      <path d="M12 18c-1.5-2-2-4.5-1-8 .5-1.8 1-3 1-3s.5 1.2 1 3c1 3.5.5 6-1 8z" />
    </>
  ),
  terrace: (
    <>
      <circle cx="7.5" cy="13" r="3.5" />
      <circle cx="16.5" cy="13" r="3.5" />
      <path d="M11 12h2M6 9.5 8 5h2l1 4M18 9.5 16 5h-2l-1 4" />
    </>
  ),
  clean: (
    <>
      <path d="M3 18V9h18v9M3 14h18M3 18v2M21 18v2" />
      <rect x="6" y="10.5" width="5" height="3" rx="1" />
    </>
  ),
  taxi: (
    <>
      <path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3z" />
      <circle cx="7.5" cy="13.5" r="0.8" />
      <circle cx="16.5" cy="13.5" r="0.8" />
    </>
  ),
  pet: (
    <>
      <circle cx="7" cy="9" r="1.8" />
      <circle cx="12" cy="6.5" r="1.8" />
      <circle cx="17" cy="9" r="1.8" />
      <path d="M12 12c-3 0-5.5 3.5-5.5 5.5 0 1.5 1.2 2 2.5 2 1.2 0 2-.6 3-.6s1.8.6 3 .6c1.3 0 2.5-.5 2.5-2 0-2-2.5-5.5-5.5-5.5z" />
    </>
  ),
  breakfast: <path d="M4 10h13v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM17 11h1.5a2 2 0 0 1 0 4H17M8 3v4M12 3v4" />,
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.3-4A8 8 0 1 1 8 18.8z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a4.5 4.5 0 0 1-2.3-2.3l.8-1-1-2z" />
    </>
  ),
  pen: <path d="M4 20l1-4L16 5l3 3L8 19zM14 7l3 3" />,
  pin: (
    <>
      <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  arrow: <path d="M4 12h15M14 7l5 5-5 5" />,
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
    </>
  ),
};

export type IconName = keyof typeof paths;

export default function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
