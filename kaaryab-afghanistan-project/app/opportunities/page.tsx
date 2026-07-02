import OpportunityCard from "@/components/OpportunityCard";
import { jobs } from "../data/jobs";
import CTASection from "@/components/home/CTASection";

export default function Opportunities(){
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
                    className="w-full rounded-lg border p-4 outline-none focus:border-blue-600"
                    />
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                    <button className="rounded-full border px-5 py-2 hover:bg-blue-600 hover:text-white">
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
                        {jobs.map((job) =>(
                            <OpportunityCard
                            key={job.id}
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