type OpportunityCardProps = {
    title: string;
    organization: string;
    category: string;
    location: string;
    type: string;
    salary: string;
    deadline: string;
};

export default function OpportunityCard({title, organization, category, location, type, salary, deadline,}: OpportunityCardProps){
    return(
        <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
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

        <button className="mt-6 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700">
            View Details
        </button>

    </div>
    )
}