"use client";

type FilterBarProps = {
    categories: string[];
    types: string[];
    locations: string[];

    selectedCategory: string;
    selectedType: string;
    selectedLocation: string;

    setSelectedCategory: (value: string) => void;
    setSelectedType: (value: string) => void;
    setSelectedLocation: (value: string) => void;
}

export default function FilterBar({
    categories,
    types,
    locations,

    selectedCategory,
    selectedType,
    selectedLocation,

    setSelectedCategory,
    setSelectedType,
    setSelectedLocation,
}: FilterBarProps){
    return(
        <div className="mt-6 grid gap-4 md:grid-cols-3">

        <label>ّFilter By Category</label>
        <select
                value={selectedCategory}
                onChange={(e)=>setSelectedCategory(e.target.value)}
                className="border rounded-lg p-3"
            >

                {categories.map((category)=>(
                    <option
                        key={category}
                        value={category}
                    >
                        {category}
                    </option>
                ))}

            </select>

            <label>ّFilter By Type</label>
            <select
                value={selectedType}
                onChange={(e)=>setSelectedType(e.target.value)}
                className="border rounded-lg p-3"
            >

                {types.map((type)=>(
                    <option
                        key={type}
                        value={type}
                    >
                        {type}
                    </option>
                ))}

            </select>

            <label>ّFilter By Location</label>
            <select
                value={selectedLocation}
                onChange={(e)=>setSelectedLocation(e.target.value)}
                className="border rounded-lg p-3"
            >

                {locations.map((location)=>(
                    <option
                        key={location}
                        value={location}
                    >
                        {location}
                    </option>
                ))}

            </select>

        </div>
    )
}