import Badge from "@/components/ui/Badge";

type Props = {
  deadline: string;
};

export default function DeadlineBadge({
  deadline,
}: Props) {
  const today = new Date();

  const end = new Date(deadline);

  const days = Math.ceil(
    (end.getTime() - today.getTime()) /
      (1000 * 60 * 60 * 24)
  );

  if (days <= 0)
    return (
      <Badge variant="destructive">
        Expired
      </Badge>
    );

  if (days <= 7)
    return (
      <Badge variant="warning">
        {days} days left
      </Badge>
    );

  return (
    <Badge variant="success">
      {days} days left
    </Badge>
  );
}