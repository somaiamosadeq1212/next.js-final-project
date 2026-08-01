"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Globe2,
  Sparkles,
  Plus,
} from "lucide-react";

import SearchBar from "@/components/opportunity/SearchBar";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import type { Opportunity } from "@/components/types/opportunity";

const STAT_ICONS = [
  BriefcaseBusiness,
  GraduationCap,
  Globe2,
];

interface HeroSectionProps {
  opportunities: Opportunity[];
}

export default function HeroSection({
  opportunities,
}: HeroSectionProps) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const statistics = [
    {
      title: "Opportunities",
      value: opportunities.length,
    },
    {
      title: "Organizations",
      value: new Set(opportunities.map((item) => item.organization)).size,
    },
    {
      title: "Categories",
      value: new Set(opportunities.map((item) => item.category)).size,
    },
  ];

  function handleSearch() {
    const query = search.trim();

    if (!query) {
      router.push("/opportunities");
      return;
    }

    router.push(
      `/opportunities?search=${encodeURIComponent(query)}`
    );
  }

  return (
    <section className="relative overflow-hidden bg-background">

      {/* Background */}
      <div className="absolute inset-0 bg-background opacity-70" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-14 lg:py-22 lg:grid-cols-2">

        {/* LEFT */}
        <div>
          <Badge className="px-4 py-2 text-md text-white backdrop-blur">

            <Sparkles size={18} className="mr-2" />
            Afghanistan Opportunity Platform

          </Badge>

          <SectionTitle
            className="mt-6"
            title={
              <>
                Discover Your

                <span className="mt-2 block text-primary">
                  Next Opportunity
                </span>
              </>
            }
            subtitle="Find verified jobs, internships, scholarships, online courses and remote opportunities across Afghanistan."
          />

          {/* Search */}
          <div className="mt-8 max-w-xl">

            <SearchBar
              search={search}
              onSearch={setSearch}
              onSubmit={handleSearch}
            />

          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 text-muted">

            <Link href="/opportunities">
              <Button
                size="md"
                rightIcon={<ArrowRight size={18} />}
              >
                Browse Opportunities
              </Button>
            </Link>

            <Link href="/dashboard/opportunities/add">
              <Button
                size="md"
                rightIcon={<Plus className="mr-2 h-5 w-5" />}
              >
                Submit Opportunity
              </Button>
            </Link>

          </div>

          {/* Statistics */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3">

            {statistics.slice(0, 3).map((item, index) => {

              const Icon = STAT_ICONS[index];

              return (

                <div
                  key={item.title}
                  className="
                    rounded-card
                    border
                    border-default
                    bg-surface
                    p-5
                    shadow-card
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-hover
                  "
                >

                  <div className="mb-4 text-primary">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-3xl font-bold text-default">

                    {item.value}+

                  </h3>

                  <p className="mt-2 text-sm text-muted">

                    {item.title}

                  </p>

                </div>

              );

            })}

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center lg:justify-end">

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-[32px] border border-default bg-surface p-4 shadow-card">

            <Image
              src="/images/1.png"
              alt="KaarYab Afghanistan"
              width={560}
              height={620}
              priority
              className="rounded-[24px] object-cover"
            />

          </div>

          {/* Floating Card - Jobs */}
          <div
            className="
              absolute
              -left-6
              top-12
              hidden
              w-64
              rounded-card
              border
              border-default
              bg-surface
              p-5
              shadow-hover
              supports-[backdrop-filter]:bg-surface/80
              lg:block
              animate-float
            "
          >

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-primary-light p-3">

                <BriefcaseBusiness
                  size={22}
                  className="text-primary"
                />

              </div>
              <div>

                <h4 className="font-semibold text-default">
                  Daily Opportunities
                </h4>

                <p className="mt-1 text-sm text-muted">
                  Fresh jobs published every day.
                </p>

              </div>
            </div>
          </div>

          {/* Floating Card - Scholarships */}
          <div
            className="
              absolute
              -right-6
              bottom-12
              hidden
              w-64
              rounded-card
              border
              border-default
              bg-surface
              p-5
              shadow-hover
              backdrop-blur
              lg:block
            "
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-primary-light p-3">

                <GraduationCap
                  size={22}
                  className="text-primary"
                />

              </div>
              <div>

                <h4 className="font-semibold text-default">
                  Verified Scholarships
                </h4>
                <p className="mt-1 text-sm text-muted">
                  Local & international programs.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );

}