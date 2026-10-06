type Props = {
  className?: string;
};

/**
 * Lightweight "PO" character mark — a placeholder stand-in so copy that
 * references PO ("Ask PO", "Send it to PO") has something to sit next to
 * until the client's real PO illustration (see the uploaded banner
 * references) is saved into public/banners and swapped in. See
 * DESIGN.md §14.
 */
export default function POMascot({ className = "h-16 w-16" }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="PO">
      <defs>
        <linearGradient id="poGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B1F3B" />
          <stop offset="100%" stopColor="#2D8CFF" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="46" fill="none" stroke="url(#poGrad)" strokeWidth="18" />
      <path
        d="M 38 78 L 24 78 L 24 64"
        fill="none"
        stroke="#2D8CFF"
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="56" r="4.5" fill="#0B1F3B" />
      <circle cx="70" cy="56" r="4.5" fill="#0B1F3B" />
      <path
        d="M 50 68 Q 60 76 70 68"
        fill="none"
        stroke="#0B1F3B"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
