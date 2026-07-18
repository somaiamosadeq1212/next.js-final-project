import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="overflow-hidden rounded-card border border-default bg-primary px-10 py-16 text-center shadow-card">

          <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white">
            🚀 Start Today
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Ready to Find Your Next Opportunity?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Explore verified jobs, scholarships, internships, remote work and
            training programs across Afghanistan in one place.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/opportunities"
              className="rounded-card bg-white px-8 py-4 font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
            >
              Explore Opportunities
            </Link>

            <Link
              href="/add-opportunity"
              className="rounded-card border border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-primary"
            >
              Submit Opportunity
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}