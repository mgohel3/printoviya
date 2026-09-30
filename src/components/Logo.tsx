import Link from "next/link";

type LogoProps = {
  variant?: "dark" | "light";
  showTagline?: boolean;
  className?: string;
};

/**
 * Custom Printoviya wordmark. The "o" in "pr-i-n-t-O-viya" is replaced with a
 * looping/forward-arrow mark representing the continuous A-to-Z journey.
 */
export default function Logo({
  variant = "dark",
  showTagline = false,
  className = "",
}: LogoProps) {
  const textColor = variant === "dark" ? "#0B1F3B" : "#FFFFFF";
  const oFrom = variant === "dark" ? "#0B1F3B" : "#EAF4FF";
  const oTo = "#2D8CFF";
  const gradId = variant === "dark" ? "printoviyaOGradDark" : "printoviyaOGradLight";

  return (
    <Link href="/" className={`inline-flex flex-col group ${className}`} aria-label="Printoviya home">
      <svg
        viewBox="0 0 300 60"
        height="28"
        className="w-auto"
        role="img"
        aria-labelledby="printoviyaLogoTitle"
      >
        <title id="printoviyaLogoTitle">printoviya</title>
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={oFrom} />
            <stop offset="100%" stopColor={oTo} />
          </linearGradient>
        </defs>
        <text
          x="0"
          y="44"
          fontFamily="var(--font-poppins), Poppins, sans-serif"
          fontWeight={800}
          fontSize="42"
          letterSpacing="-1"
          fill={textColor}
        >
          printoviya
        </text>
        {/* Hero O overlay: positioned over the "o" in printOviya */}
        <g transform="translate(108, 10)">
          <circle cx="16" cy="20" r="15" fill="none" stroke={`url(#${gradId})`} strokeWidth="8" />
          <path
            d="M 8 30 L 2 30 L 2 24"
            fill="none"
            stroke={oTo}
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
      {showTagline && (
        <span
          className={`mt-1 text-[10px] font-medium tracking-[0.14em] uppercase ${
            variant === "dark" ? "text-slate" : "text-light-blue"
          }`}
        >
          Your Printing Journey. A to Z.
        </span>
      )}
    </Link>
  );
}
