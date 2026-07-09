// "use client";

// import { useEffect, useState } from "react";

// type SaveOpportunityButtonProps = {
//     jobId: number;
// }

// export default function SaveOpportunityButton({jobId,} : SaveOpportunityButtonProps){
//     const [saved, setSaved] = useState(false);

//     useEffect(() => {
//         const savedJobs = JSON.parse(
//             localStorage.getItem("savedJobs") || "[]"
//         );

//         setSaved(savedJobs.includes(jobId));
//     }, [jobId]);

//     function handleSave(){
//         const savedJobs = JSON.parse(
//             localStorage.getItem("savedJobs") || "[]"
//         );

//         if(savedJobs.includes(jobId)){
//             const updatedJobs = savedJobs.filter(
//                 (id: number) => id != jobId
//             );

//             localStorage.setItem(
//                 "savedJobs",
//                 JSON.stringify(savedJobs)
//             );
//             setSaved(true);
//         }
//     }

//     return(
//         <button
//             onClick={handleSave}
//             className={`px-6 py-3 rounded-lg transition ${
//                 saved
//                 ? "bg-red-500 text-white"
//                 : "bg-blue-600 text-white hover:bg-blue-700"
//             }`}
//         >
//             {saved ? "Saved ✓" : "Save Opportunity"}

//         </button>
//     )

// }


"use client";

import { useSavedJobs } from "@/app/contexts/SaveContext";

type SaveOpportunityButtonProps = {
    jobId: number;
};

export default function SaveOpportunityButton({
    jobId,
}: SaveOpportunityButtonProps) {

    const {
        saveJob,
        removeJob,
        isSaved,
    } = useSavedJobs();

    const saved = isSaved(jobId);

    function handleClick() {
        if (saved) {
            removeJob(jobId);
        } else {
            saveJob(jobId);
        }
    }

    return (
        <button
            onClick={handleClick}
            className={`px-6 py-3 rounded-lg transition ${
                saved
                    ? "bg-red-500 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
        >
            {saved ? "Saved ✓" : "Save Opportunity"}
        </button>
    );
}