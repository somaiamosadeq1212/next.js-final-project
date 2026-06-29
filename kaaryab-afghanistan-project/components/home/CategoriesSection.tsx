const categories = [
    {
        title: "Jobs",
        icon: "💼",
    },
    {
        title: "Internships",
        icon: "🚀",
    },
    {
        title: "Scholarships",
        icon: "🎓",
    },
    {
        title: "Online Courses",
        icon: "📚",
    },
    {
        title: "Remote Work",
        icon: "🌍",
    },
    {
        title: "Volunteer",
        icon: "🤝",
    },
];

export default function CategoriesSection(){
    return(
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-center text-4xl font-bold">Browse by Category</h2>
                <p className="mt-4 text-center text-gray-600">Choose your favorite opportunity category.</p>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category) => (
                        <div
                         key={category.title}
                         className="rounded-xl border p-8 text-center shadow-sm transition hover:shadow-lg"
                        >
                            <div className="text-5xl">{category.icon}</div>
                            <h3 className="mt-4 text-xl font-semibold">{category.title}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}