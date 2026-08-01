"use client";

import { useSavedJobs } from "@/app/contexts/SaveContext";
import { Bookmark, BookmarkCheck } from "lucide-react";

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
            aria-label={
                saved
                    ? "Remove from saved jobs"
                    : "Save this opportunity"
            }
            className={`
                inline-flex
                gap-2
                px-4
                py-2.5
                text-sm
                font-medium
                w-full sm:w-auto
                items-center
                justify-center
                rounded-xl
                border
                transition-theme
                hover:-translate-y-0.5
                ${saved
                    ? "border-blue-200 bg-blue-50 text-blue-600"
                    : "border-default bg-background text-muted hover:border-primary hover:text-primary"
                }
    `}
        >
            {saved ? (
                <BookmarkCheck className="h-4 w-4" />
            ) : (
                <Bookmark className="h-4 w-4" />
            )}

            <span>
                {saved ? "Saved" : "Save"}
            </span>
        </button>
    );
}