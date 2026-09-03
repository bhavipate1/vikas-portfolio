type IconProps = { className?: string };

export function MicIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 19 19" fill="none" className={className} aria-hidden>
      <path
        d="M9.5 1.58C8.87 1.58 8.27 1.83 7.82 2.28C7.38 2.72 7.13 3.33 7.13 3.96V8.71C7.13 9.34 7.38 9.94 7.82 10.39C8.27 10.83 8.87 11.08 9.5 11.08C10.13 11.08 10.73 10.83 11.18 10.39C11.62 9.94 11.88 9.34 11.88 8.71V3.96C11.88 3.33 11.62 2.72 11.18 2.28C10.73 1.83 10.13 1.58 9.5 1.58Z"
        stroke="currentColor"
        strokeWidth="1.19"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.04 7.92V8.71C15.04 10.18 14.46 11.59 13.42 12.63C12.38 13.67 10.97 14.25 9.5 14.25C8.03 14.25 6.62 13.67 5.58 12.63C4.54 11.59 3.96 10.18 3.96 8.71V7.92"
        stroke="currentColor"
        strokeWidth="1.19"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.5 14.25V17.42" stroke="currentColor" strokeWidth="1.19" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SparkleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 19 19" fill="none" className={className} aria-hidden>
      <path
        d="M9.5 2.38V4.75M9.5 14.25V16.63M2.38 9.5H4.75M14.25 9.5H16.63M4.43 4.43L6.1 6.1M12.9 12.9L14.57 14.57M14.57 4.43L12.9 6.1M6.1 12.9L4.43 14.57"
        stroke="currentColor"
        strokeWidth="1.19"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12.19C10.99 12.19 12.19 10.99 12.19 9.5C12.19 8.01 10.99 6.81 9.5 6.81C8.01 6.81 6.81 8.01 6.81 9.5C6.81 10.99 8.01 12.19 9.5 12.19Z"
        stroke="currentColor"
        strokeWidth="1.19"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 19 19" fill="none" className={className} aria-hidden>
      <path
        d="M12.67 15.04V13.78C12.67 13.06 12.38 12.38 11.88 11.87C11.37 11.37 10.69 11.08 9.98 11.08H5.07C4.71 11.08 4.36 11.15 4.04 11.29C3.71 11.42 3.41 11.62 3.16 11.87C2.66 12.38 2.38 13.06 2.38 13.78V15.04"
        stroke="currentColor"
        strokeWidth="1.19"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.52 8.47C8.92 8.47 10.05 7.34 10.05 5.94C10.05 4.54 8.92 3.4 7.52 3.4C6.12 3.4 4.99 4.54 4.99 5.94C4.99 7.34 6.12 8.47 7.52 8.47Z"
        stroke="currentColor"
        strokeWidth="1.19"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.63 15.04V13.78C16.62 13.17 16.42 12.59 16.05 12.11C15.67 11.64 15.15 11.3 14.57 11.16M12.27 3.56C12.76 3.74 13.17 4.07 13.47 4.49C13.76 4.92 13.92 5.42 13.92 5.94C13.92 6.45 13.76 6.96 13.47 7.38C13.17 7.81 12.76 8.13 12.27 8.31"
        stroke="currentColor"
        strokeWidth="1.19"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BarsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 19 19" fill="none" className={className} aria-hidden>
      <path d="M2.38 15.83H16.63" stroke="currentColor" strokeWidth="1.19" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M4.75 15.83V7.52M9.5 15.83V3.56M14.25 15.83V10.29"
        stroke="currentColor"
        strokeWidth="1.19"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M7 17L17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 5v14m0 0-6-6m6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2 2C10.5 19 5 13.5 5 6a2 2 0 0 1 1-3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 17 17" fill="none" className={className} aria-hidden>
      <path
        d="M3.53 2.48C4 2.48 4.45 2.67 4.78 3C5.11 3.33 5.3 3.78 5.3 4.25C5.3 4.72 5.11 5.17 4.78 5.5C4.45 5.83 4 6.02 3.53 6.02C3.06 6.02 2.61 5.83 2.28 5.5C1.94 5.17 1.76 4.72 1.76 4.25C1.76 3.78 1.94 3.33 2.28 3C2.61 2.67 3.06 2.48 3.53 2.48ZM2.13 6.38H4.96V14.88H2.13V6.38ZM7.08 6.38H9.78V7.58H9.81C10.19 6.91 11.11 6.2 12.48 6.2C15.34 6.2 15.87 7.97 15.87 10.27V14.88H13.03V10.91C13.03 9.96 13.01 8.73 11.69 8.73C10.34 8.73 10.13 9.77 10.13 10.84V14.88H7.3V6.38H7.08Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 4v11m0 0 4-4m-4 4-4-4M5 19h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 5.5C4 4.67 4.67 4 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5v-13zM20 5.5c0-.83-.67-1.5-1.5-1.5H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5v-13z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3.5" y="5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 5h16v11H8l-4 4V5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UserPlusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="10" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 20c1.1-3.3 3.7-5.2 6.5-5.2s5.4 1.9 6.5 5.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 8v5m2.5-2.5h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CoffeeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M17 10.5h1.5a2.5 2.5 0 0 1 0 5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 6c0-1 1-1 1-2M11 6c0-1 1-1 1-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CapIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 5 2 9.5 12 14l10-4.5L12 5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 10v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChipIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="10" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 3v2M12 3v2M15 3v2M9 19v2M12 19v2M15 19v2M3 9h2M3 12h2M3 15h2M19 9h2M19 12h2M19 15h2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LightbulbIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M9 18h6M10 21h4M8 14a5 5 0 1 1 8 0c-.8.9-1 1.8-1 3H9c0-1.2-.2-2.1-1-3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WrenchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M14.7 6.3a4 4 0 0 0-5.4 5.1L4 16.7 7.3 20l5.3-5.3a4 4 0 0 0 5.1-5.4l-2.6 2.6-2.1-2.1 2.7-2.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M15 5 8 12l7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BuildingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M3 21h18M4 21V9.5L12 4l8 5.5V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21v-5h6v5M9 13h.01M9 10h.01M15 13h.01M15 10h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
