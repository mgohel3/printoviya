type Props = {
  name: "instagram" | "linkedin" | "youtube" | "pinterest";
  className?: string;
};

export default function SocialIcon({ name, className = "h-4 w-4" }: Props) {
  switch (name) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.55 4.78 5.87V21h-4v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21h-4V9Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M22 12s0-3.2-.4-4.7a2.9 2.9 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 0 0 2-2C22 15.2 22 12 22 12Zm-12 3V9l5.2 3-5.2 3Z" />
        </svg>
      );
    case "pinterest":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-3.6 19.3c0-.8-.02-2 .2-2.9.2-.9 1.4-6 1.4-6s-.35-.7-.35-1.75c0-1.63.95-2.85 2.13-2.85 1 0 1.5.75 1.5 1.66 0 1-.65 2.5-.98 3.9-.28 1.16.6 2.1 1.75 2.1 2.1 0 3.5-2.7 3.5-5.9 0-2.44-1.64-4.26-4.63-4.26-3.37 0-5.47 2.52-5.47 5.33 0 .97.29 1.66.73 2.19.2.24.24.34.16.62l-.22.87c-.07.28-.28.38-.53.27-1.47-.6-2.15-2.2-2.15-4 0-2.97 2.5-6.53 7.47-6.53 4 0 6.62 2.9 6.62 6 0 4.1-2.3 7.17-5.68 7.17-1.14 0-2.2-.62-2.57-1.32l-.7 2.77c-.25.95-.74 1.9-1.19 2.64A10 10 0 1 0 12 2Z" />
        </svg>
      );
    default:
      return null;
  }
}
