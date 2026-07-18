import OpportunityCard from "./opportunity/OpportunityCard";
import EmptyState from "./EmptyState";
import { Job } from "@/app/data/jobs";


type OpportunityGridProps = {
    jobs: Job[];
};

export default function OpportunityGrid({
    jobs,

}: OpportunityGridProps){

    if(jobs.length === 0){
        return <EmptyState />;
    }
    return(
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
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
    )
}
