"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import CTASection from "@/components/home/CTASection";
import HeroSection from "@/components/opportunity/HeroSection";
import SearchBar from "@/components/opportunity/SearchBar";
import FilterBar from "@/components/opportunity/FilterBar";
import CategoryTabs from "@/components/CategoryTabs";
import OpportunityGrid from "@/components/OpportunityGrid";
import ResultHeader from "@/components/opportunity/ResultHeader";
import { Opportunity } from "@/components/types/opportunity";
import { getOpportunities } from "@/lib/mockApi";
import { Container } from "@/components/ui";

export default function Opportunities() {
  const [jobs, setJobs] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const [search, setSearch] = useState(
    searchParams.get("search") ?? ""
  );

  useEffect(() => {
    async function loadJobs() {
      try {
        const data = await getOpportunities();
        setJobs(data);
      } finally {
        setLoading(false);
      }
    }

    loadJobs();
  }, []);

  const filteredJobs = useMemo(() => {
    const query = search.toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.organization.toLowerCase().includes(query) ||
        job.category.toLowerCase().includes(query);

      const matchesCategory =
        selectedCategory === "All" ||
        job.category === selectedCategory;

      const matchesType =
        selectedType === "All" ||
        job.type === selectedType;

      const matchesLocation =
        selectedLocation === "All" ||
        job.location === selectedLocation;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesType &&
        matchesLocation
      );
    });
  }, [
    jobs,
    search,
    selectedCategory,
    selectedType,
    selectedLocation,
  ]);

  const categories = useMemo(
    () => [
      "All",
      ...new Set(jobs.map((job) => job.category)),
    ],
    [jobs]
  );

  const types = useMemo(
    () => [
      "All",
      ...new Set(jobs.map((job) => job.type)),
    ],
    [jobs]
  );

  const locations = useMemo(
    () => [
      "All",
      ...new Set(jobs.map((job) => job.location)),
    ],
    [jobs]
  );

  return (
    <main className="bg-background">
      <HeroSection />

      <section className="py-10 md:py-14">
        <Container>
          <SearchBar
            search={search}
            onSearch={setSearch}
          />
        </Container>
      </section>

      <section>
        <Container>
          <FilterBar
            categories={categories}
            types={types}
            locations={locations}
            selectedCategory={selectedCategory}
            selectedType={selectedType}
            selectedLocation={selectedLocation}
            setSelectedCategory={setSelectedCategory}
            setSelectedType={setSelectedType}
            setSelectedLocation={setSelectedLocation}
          />
        </Container>
      </section>

      <section className="mt-8">
        <Container>
          <CategoryTabs
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </Container>
      </section>

      <section className="mt-10 pb-20">
        <Container>
        <ResultHeader total={filteredJobs.length} />

        {loading ? (
          <div className="py-10 text-center">
            Loading opportunities...
          </div>
        ) : (
          <OpportunityGrid jobs={filteredJobs} />
        )}
        </Container>
      </section>

      <CTASection />
    </main>
  );
}