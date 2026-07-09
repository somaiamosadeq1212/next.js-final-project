"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

// const SaveContext = createContext;

type SaveContextType = {
    savedJobs: number[];
    saveJob: (id:number) => void;
    removeJob: (id:number) => void; 
    isSaved: (id: number) => boolean;
}

const SaveContext = createContext<SaveContextType | null> (null);

type SaveProviderProps = {
    children: ReactNode;
}

export default function SaveProvider({children}: SaveProviderProps){
    const [savedJobs, setSavedJobs] = useState<number[]>([]);

    // Read saved jobs from localStorage when the app starts
    useEffect(() => {
        const storedJobs = localStorage.getItem("savedJobs");

        if(storedJobs){
            setSavedJobs(JSON.parse(storedJobs));
        }
    },[])

     // Save changes to localStorage whenever savedJobs changes
     useEffect(() => {
        localStorage.setItem(
            "savedJobs",
            JSON.stringify(savedJobs)
        );
     }, [savedJobs]);

     function saveJob(id: number){
        setSavedJobs((prevJobs) => {
            if(prevJobs.includes(id)){
                return prevJobs;
            }

            return [...prevJobs, id];
        });
     }

     function removeJob(id: number){
        setSavedJobs((prevJobs) => 
            prevJobs.filter((jobId) => jobId !== id)
    );
     }

    function isSaved (id: number): boolean{
        return savedJobs.includes(id);
    }

    return(
        <SaveContext.Provider
            value={{
                savedJobs,
                saveJob,
                removeJob,
                isSaved
            }}
        >
            {children}
        </SaveContext.Provider>
    )
}

export function useSavedJobs(){
    const context = useContext(SaveContext);

    if(!context){
        throw new Error("useSavedJobs must be used inside SaveProvider")
    }

    return context;
}