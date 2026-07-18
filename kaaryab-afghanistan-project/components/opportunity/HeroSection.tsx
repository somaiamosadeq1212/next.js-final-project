"use client";

import { BriefcaseBusiness, Search, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-b
        border-default
        bg-gradient-to-br
        from-blue-600
        via-blue-700
        to-indigo-800
        py-24
        text-white
      "
    >
      <div className="container relative z-10">

        <div className="mx-auto max-w-3xl text-center">

          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/10
              px-4
              py-2
              text-sm
              backdrop-blur
            "
          >
            <Sparkles className="h-4 w-4" />
            Discover New Opportunities
          </div>

          <h1
            className="
              text-4xl
              font-extrabold
              leading-tight
              md:text-6xl
            "
          >
            Find Your Next
            <span className="block text-blue-200">
              Opportunity
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              text-blue-100
            "
          >
            Explore jobs, internships, scholarships,
            fellowships and remote opportunities
            across Afghanistan and beyond.
          </p>

          <div
            className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-4
            "
          >
            <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3">
              <BriefcaseBusiness className="h-5 w-5" />
              Jobs
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3">
              <Search className="h-5 w-5" />
              Internships
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3">
              <Sparkles className="h-5 w-5" />
              Scholarships
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}