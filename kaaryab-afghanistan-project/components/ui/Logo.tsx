import Link from "next/link";

type LogoProps = {
  href?: string;
  size?: "sm" | "md" | "lg";
};

export default function Logo({
  href = "/",
  size = "md",
}: LogoProps) {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <Link
      href={href}
      className="
        inline-flex
        items-center
        gap-2
        font-extrabold
        tracking-tight
        transition-opacity
        hover:opacity-90
      "
      aria-label="KaarYab Afghanistan"
    >
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-[var(--color-primary)]
          text-white
          shadow-card
        "
      >
        K
      </div>

      <span
        className={`
          ${sizes[size]}
          text-default
        `}
      >
        KaarYab
      </span>
    </Link>
  );
}