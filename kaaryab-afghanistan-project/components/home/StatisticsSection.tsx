import { getOpportunityData } from "@/lib/opportunities";

export default function StatisticsSection() {

  const { statistics } = getOpportunityData();

  return (

    <section className="bg-background py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {statistics.map((item) => (

            <div
              key={item.title}
              className="rounded-card border border-default bg-surface p-8 text-center shadow-card transition hover:-translate-y-2 hover:shadow-hover"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h2 className="mt-5 text-5xl font-bold text-default">
                {item.value}
              </h2>

              <p className="mt-3 text-muted">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}