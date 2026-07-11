"use client";

type SearchBarProps = {
    search: string;
    onSearch: (value: string) => void; 
};

export default function SearchBar({
    search,
    onSearch,
    }: SearchBarProps){
        return(
            <input
             type="text"
             placeholder="Search opportunities..."
             value={search}
             onChange={(e) => onSearch(e.target.value)}
             className="w-full rounded-xl border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300" 
             />
        );
    }
