import { jobs } from "@/app/data/jobs";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function OpportunityDetailsPage({params,}:PageProps) {
    const {id} = await params;

    const job = jobs.find ((job) => job.id === Number(id));

    if(!job){
        notFound();
    }

    return(
        <main className="max-w-5xl mx-auto px-6 py-10">
            <Link
    href="/opportunities"
    className="text-blue-600 hover:underline"
>
    ← Back to Opportunities
</Link>

            <div className="bg-white rounded-xl shadow-md p-8">

            <h2 className="font-bold text-lg mb-2">
                         Title
                    </h2>
                <span className="bg-gray-100 px-3 py-1 rounded">
                     {job.title}
                </span>

            <div className="flex flex-wrap gap-3 mb-8">
                <h2 className="font-bold text-lg mb-2">
                         Location
                    </h2>
                <span className="bg-gray-100 px-3 py-1 rounded">
                    📍 {job.location}
                </span>
                <h2 className="font-bold text-lg mb-2">
                         Type
                    </h2>
                <span className="bg-gray-100 px-3 py-1 rounded">
                    💼 {job.type}
                </span>
                <h2 className="font-bold text-lg mb-2">
                         Category
                    </h2>
                <span className="bg-gray-100 px-3 py-1 rounded">
                    🏷 {job.category}
                </span>

            </div>
            <hr className="my-8" />

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="font-bold text-lg mb-2">
                         Organization
                    </h2>

                    <p>{job.organization}</p>
                </div>

                <div>
                    <h2 className="font-bold text-lg mb-2">
                         Salary 
                    </h2>
                    <p>{job.salary}</p>
                </div>

                <div>
                    <h2 className="font-bold text-lg mb-2">
                         Deadline 
                    </h2>
                    <p>{job.deadline}</p>
                </div>
                
                <div>
                    <h2 className="font-bold text-lg mb-2">
                         Experience 
                    </h2>
                    <p>{job.experience}</p>
                </div>

            </div>

            <hr className="my-8"/>

            <section>
                <h2 className="text-2xl font-bold mb-4">
                    Job Description 
                </h2>

                <p className="leading-8 text-gray-700">
                    {job.description}
                </p>
            </section>

            <hr className="my-8" />

            <section>
                <h2 className="text-2xl font-bold mb-4"> 
                    Requirements
                </h2>

                <ul className="space-y-3">
                    {job.requirements.map((item)=>(
                        <li 
                        key={item}
                        className="flex items-center gap-3"
                        >
                             ✅ {item}
                        </li>
                    ))} 

                </ul>
            </section>

            <div className="mt-10 flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                    Save Opportunity
                </button>

            </div>
            </div>
        </main>
    )
    
}