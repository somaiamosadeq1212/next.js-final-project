import Link from "next/link";
import { ArrowRight, Rocket, Plus } from "lucide-react";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-card border border-default px-8 py-20 text-center shadow-card md:px-16">

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-surface blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative z-10">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-default bg-surface px-4 py-2 text-sm font-medium text-default backdrop-blur">
              <Rocket className="h-4 w-4" />
              Start Today
            </span>

            {/* Title */}
            <h2 className="mt-8 text-3xl font-simibold tracking-tight text-muted md:text-4xl">
              Ready to Find Your Next Opportunity?
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary">
              Explore verified jobs, internships, scholarships, remote work,
              and training programs across Afghanistan — all in one place.
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="primary" size="lg"
                rightIcon={<ArrowRight className="ml-2 h-5 w-5" />}
              >
                <Link href="/opportunities">
                  Explore Opportunities
                </Link>
              </Button>

              <Button variant="primary" size="lg"
                rightIcon={<Plus className="mr-2 h-5 w-5" />}
              >
                <Link href="/dashboard/opportunities/add">
                  Submit Opportunity
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}