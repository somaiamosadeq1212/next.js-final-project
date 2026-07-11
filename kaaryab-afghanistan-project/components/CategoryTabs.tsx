"use client";

const categories = [
    "All",
    "IT",
    "Design",
    "Marketing",
    "Education",
];

type CategoryTabsProps = {

    categories: string[];

    selectedCategory: string;

    setSelectedCategory: (value:string)=>void;

};

export default function CategoryTabs({
    selectedCategory,
    setSelectedCategory,
}: CategoryTabsProps){
    return(
        <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category)=>(

<button
    key={category}
    onClick={()=>setSelectedCategory(category)}
>
    {category}
</button>

))}

        </div>
    );
}