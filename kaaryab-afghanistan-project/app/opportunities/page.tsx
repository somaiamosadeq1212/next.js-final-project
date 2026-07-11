"use client";

import OpportunityCard from "@/components/OpportunityCard";
import { jobs } from "../data/jobs";
import CTASection from "@/components/home/CTASection";
import { useMemo, useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import CategoryTabs from "@/components/CategoryTabs";
import OpportunityGrid from "@/components/OpportunityGrid";

export default function Opportunities(){
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedType, setSelectedType] = useState("All");
    const [selectedLocation, setSelectedLocation] = useState("All");


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

}, [search, selectedCategory, selectedType, selectedLocation]);


const categories = [
    "All",
    ...new Set(jobs.map((job) => job.category)),
];

const types = [
    "All",
    ...new Set(jobs.map((job) => job.type)),
];

const locations = [
    "All",
    ...new Set(jobs.map((job) => job.location)),
];

    return(
        <main>
            <section className="bg-blue-600 py-20 text-white">
               
                <HeroSection />
            </section>

            <section className="py-10">
                

                <SearchBar
  search={search}
  onSearch={setSearch}
/>

            </section>

            <section className="py-14">
                
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
                 <CategoryTabs

    categories={categories}

    selectedCategory={selectedCategory}

    setSelectedCategory={setSelectedCategory}

/>
                 <OpportunityGrid jobs={filteredJobs} />
            </section>

            <CTASection />

        </main>
    )
}