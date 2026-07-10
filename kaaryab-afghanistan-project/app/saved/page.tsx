"use client";

import Link from "next/link";
import { useSavedJobs } from "../contexts/SaveContext";
import { jobs } from "../data/jobs";

export default function SavedJobs(){
    const {savedJobs} = useSavedJobs();

    const savedOpportunities = jobs.filter((job) =>
    savedJobs.includes(job.id)
);

    if(savedJobs.length === 0){
        return(
            <main className="container mx-auto py-10">
                <h1 className="text-2xl font-bold"> 
                    Saved Opportunities
                </h1>

                <p className="mt-6">No saved opportunities yet.</p>

            </main>
        );

        
    }


    return (
    <main className="container mx-auto py-10">

        <h1 className="text-3xl font-bold mb-8">
            Saved Opportunities
        </h1>

        <div className="grid gap-6">

            {savedOpportunities.map((job) => (

                <div
                    key={job.id}
                    className="border rounded-lg p-5"
                >

                    <h2 className="text-xl font-semibold">
                        {job.title}
                    </h2>

                    <p>{job.organization}</p>

                    <p>{job.location}</p>

                    <Link
                        href={`/opportunities/${job.id}`}
                        className="text-blue-600"
                    >
                        View Details
                    </Link>

                </div>

            ))}

        </div>

    </main>
);

}