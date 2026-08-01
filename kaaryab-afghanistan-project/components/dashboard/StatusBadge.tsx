import Badge from "@/components/ui/Badge";

type Props = {
  status?: "Open" | "Closing Soon" | "Closed";
};

export default function StatusBadge({ status }: Props) {

  if (!status) {
    return <Badge variant="secondary">Unknown</Badge>;
  }

  const variants = {
    Open: "success",
    "Closing Soon": "warning",
    Closed: "destructive",
  } as const;

  return (
    <Badge variant={variants[status]}>
      {status}
    </Badge>
  );
}