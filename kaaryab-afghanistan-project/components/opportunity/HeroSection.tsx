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
        bg-background
        py-14 
        lg:py-20
      "
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Hero content wrapper */}
        <div
          className="
            overflow-hidden
            rounded-[32px]
            px-8
            py-16
            border-default
        bg-background
            shadow-card
            lg:px-16
          "
        >

          <div className="mx-auto max-w-3xl text-center">

            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-default
                bg-background
                px-4
                py-2
                text-lg
                backdrop-blur
            "
            >
              <Sparkles className="h-4 w-4" />
                Discover New Opportunities
            </div>

            <h1
              className="
                text-3xl
                font-extrabold
                leading-tight
                md:text-6xl
            "
            >
              Find Your Next
              <span className="block text-black-primary">
                Opportunity
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                block 
                text-black-primary
            "
            >
              Explore jobs, internships, scholarships,
              fellowships and remote opportunities
              across Afghanistan and beyond.
            </p>

            {/* Opportunity categories */}
            <div
              className="
                mt-10
                flex
                flex-wrap
                justify-center
                gap-4
            "
            >
              <div className="
                flex items-center 
                gap-2 rounded-xl  
                px-4 
                py-3
                rounded-xl
                border
                border-default
                bg-background
                text-primary
                backdrop-blur
                transition-all
                duration-300
              ">
                <BriefcaseBusiness className="h-5 w-5" />
                  Jobs
              </div>

              <div className="
                flex items-center 
                gap-2 rounded-xl  
                px-4 
                py-3
                rounded-xl
                border
                border-default
                bg-background
                backdrop-blur
                transition-all
                duration-300
              ">
                <Search className="h-5 w-5" />
                  Internships
              </div>

              <div className="
                flex items-center 
                gap-2 rounded-xl  
                px-4 
                py-3
                rounded-xl
                border
                border-default
                bg-background
                backdrop-blur
                transition-all
                duration-300
              ">
                <Sparkles className="h-5 w-5" />
                  Scholarships
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}