type AvatarProps = {
  name: string;
  size?: "sm" | "md" | "lg";
};

export default function Avatar({
  name,
  size = "md",
}: AvatarProps) {
  const sizes = {
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-base",
    lg: "h-14 w-14 text-lg",
  };

  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      className={`
        ${sizes[size]}
        flex
        items-center
        justify-center
        rounded-full
        bg-blue-100
        text-blue-600
        font-bold
        shadow-card
      `}
      aria-label={name}
    >
      {initial}
    </div>
  );
}