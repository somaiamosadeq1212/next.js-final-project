type OpportunityCardProps = {
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
};

export default function OpportunityCard({title, company, location, type, salary}: OpportunityCardProps){
    return(
        <div>
            <h2>{title}</h2>
            <p>{company}</p>
            <p>{location}</p>
            <p>{type}</p>
            <p>{salary}</p>
        </div>
    )
}