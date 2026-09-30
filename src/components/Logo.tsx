import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  variant?: "dark" | "light";
  showTagline?: boolean;
  className?: string;
};

const WORDMARK_RATIO = 1240 / 287;
const FULL_LOCKUP_RATIO = 1243 / 336;

/**
 * Official Printoviya wordmark asset. On dark (navy) backgrounds it sits on
 * a small white chip, since the mark's navy letterforms need a light
 * surface to read — the blue O gradient stays untouched either way.
 */
export default function Logo({
  variant = "dark",
  showTagline = false,
  className = "",
}: LogoProps) {
  const src = showTagline ? "/brand/printoviya-logo.png" : "/brand/printoviya-wordmark.png";
  const ratio = showTagline ? FULL_LOCKUP_RATIO : WORDMARK_RATIO;
  const height = showTagline ? 44 : 28;
  const width = Math.round(height * ratio);

  const image = (
    <Image
      src={src}
      alt="Printoviya"
      width={width}
      height={height}
      priority
      className="h-auto w-auto"
      style={{ height, width: "auto" }}
    />
  );

  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="Printoviya home">
      {variant === "light" ? (
        <span className="inline-flex rounded-lg bg-white px-3 py-2">{image}</span>
      ) : (
        image
      )}
    </Link>
  );
}
