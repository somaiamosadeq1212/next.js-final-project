import Link from "next/link";

type OpportunityCardProps = {
    id: number;
    title: string;
    organization: string;
    category: string;
    location: string;
    type: string;
    salary: string;
    deadline: string;
};

export default function OpportunityCard({id, title, organization, category, location, type, salary, deadline,}: OpportunityCardProps){
    return(

        <Link href={`/opportunities/${id}`}>
            <article className="rounded-xl border p-6 hover:shadow-lg transition">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">
                {category}
            </span>
            <h2 className="mt-4 text-xl font-bold">{title}</h2>
            <p className="mt-2 text-gray-600">{organization}</p>

            <div>
            <p>📍 {location}</p>
            <p>💼 {type}</p>
            <p>📅 {deadline}</p>
            <p>💲 {salary}</p>
        </div>

        <span className="mt-6 block w-full rounded-lg bg-blue-600 py-2 text-center text-white">
    View Details
</span>
            </article>
        </Link>


        
    )
}