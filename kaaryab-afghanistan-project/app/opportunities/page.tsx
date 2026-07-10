"use client";

import OpportunityCard from "@/components/OpportunityCard";
import { jobs } from "../data/jobs";
import CTASection from "@/components/home/CTASection";
import { useMemo, useState } from "react";

export default function Opportunities(){
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedType, setSelectedType] = useState("All");
    const [selectedLocation, setSelectedLocation] = useState("All");


    // const filteredJobs  = useMemo (() => {
    //     const query = search.toLowerCase();

    //     return jobs.filter((job) => {
    //         return(
    //         job.title.toLowerCase().includes(query) ||
    //         job.location.toLowerCase().includes(query) ||
    //         job.organization.toLowerCase().includes(query) ||
    //         job.category.toLowerCase().includes(query)
    //     );

    //     });
    // }, [jobs, search]);

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

}, [jobs, search, selectedCategory, selectedType, selectedLocation]);

    return(
        <main>
            <section className="bg-blue-600 py-20 text-white">
                <div className="mx-auto max-w-6xl text-center">
                    <h1 className="text-5xl font-bold">
                        Explore Opportunities
                    </h1>

                    <p className="mt-6 text-lg">
                        Browse jobs, scholarships, internships,
                        remote work and training programs.
                    </p>

                </div>
            </section>

            <section className="py-10">
                <div className="mx-auto max-w-7xl">
                    <input 
                    type="text"
                    placeholder="Search opportunities..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border rounded-lg p-3 w-full mb-6"
                    />

                    <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    className="border rounded-lg p-2"
>

    <option>All</option>
    <option>IT</option>
    <option>Design</option>
    <option>Marketing</option>
    <option>Education</option>

</select>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                    <button
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    value={selectedCategory}
                    className="rounded-full border px-5 py-2 hover:bg-blue-600 hover:text-white">
                        All
                    </button>

                    <button className="rounded-full border px-5 py-2 hover:bg-blue-600 hover:text-white">
                        Jobs
                    </button>

                    <button className="rounded-full border px-5 py-2 hover:bg-blue-600 hover:text-white">
                        Scholarships
                    </button>

                    <button className="rounded-full border px-5 py-2 hover:bg-blue-600 hover:text-white">
                        Internships
                    </button>

                    <button className="rounded-full border px-5 py-2 hover:bg-blue-600 hover:text-white">
                        Remote
                    </button>

                </div>
            </section>

            <section className="py-14">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredJobs.map((job) =>(
                            <OpportunityCard
                            key={job.id}
                            id={job.id}
                            title={job.title}
                            organization={job.organization}
                            category={job.category}
                            location={job.location}
                            type={job.type}
                            salary={job.salary}
                            deadline={job.deadline}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />

        </main>
    )
}