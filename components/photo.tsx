import Image from "next/image";

export function Photo({
  src,
  alt = "",
  label,
  className = "",
  light = false,
  priority = false,
  objectPosition,
}: {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  light?: boolean;
  priority?: boolean;
  objectPosition?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          style={objectPosition ? { objectPosition } : undefined}
          priority={priority}
        />
        {label && (
          <span
            className={`absolute bottom-3 left-3 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-wide ${
              light ? "bg-paper-surface/80 text-paper-muted" : "bg-background/70 text-muted"
            }`}
          >
            {label}
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${
        light
          ? "bg-gradient-to-br from-paper-surface via-paper to-paper-border/40"
          : "bg-gradient-to-br from-surface-2 via-surface to-background"
      } ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, var(--accent-soft), transparent 55%), radial-gradient(circle at 80% 80%, var(--accent-soft), transparent 50%)",
        }}
      />
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={`relative h-8 w-8 ${light ? "text-paper-border" : "text-border"}`}
        aria-hidden
      >
        <circle cx="12" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4.5 19c1.6-4 5-6 7.5-6s5.9 2 7.5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      {label && (
        <span
          className={`absolute bottom-3 left-3 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-wide ${
            light ? "bg-paper-surface/80 text-paper-muted" : "bg-background/70 text-muted"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
