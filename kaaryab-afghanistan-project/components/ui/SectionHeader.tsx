import Badge from "./Badge";
import SectionTitle from "./SectionTitle";
import SectionDescription from "./SectionDescription";

type SectionHeaderProps = {
  badge?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
};

export default function SectionHeader({
  badge,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment}`}>

      {badge && <Badge>{badge}</Badge>}

      <SectionTitle title={title} />

      {description && (
        <SectionDescription>
          {description}
        </SectionDescription>
      )}

    </div>
  );
}