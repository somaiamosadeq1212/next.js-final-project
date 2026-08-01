import OpportunityDetailsClient from "@/components/opportunity/OpportunityDetailsClient";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OpportunityDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  return (
    <OpportunityDetailsClient
      id={Number(id)}
    />
  );
}