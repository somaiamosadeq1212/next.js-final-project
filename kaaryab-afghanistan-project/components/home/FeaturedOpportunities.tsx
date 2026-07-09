import { jobs } from "@/app/data/jobs";
import OpportunityCard from "../OpportunityCard";

export default function FeaturedOpportunities(){
    return(
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold">Featured Opportunities</h2>
                    <p className="mt-4 text-gray-600">
                    Explore the latest jobs, scholarships,internships and remote opportunities.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {jobs.map((job) =>(
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
    )
} 