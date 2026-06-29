const stats = [
    {
        number: "250+",
        title: "Jobs",
    },
    {
        number: "180+",
        title: "Scholarships",
    },
    {
        number: "120+",
        title: "Internships",
    },
    {
        number: "500+",
        title: "Students",
    },
];

export default function StatisticsSection(){
    return(
        <section className="bg-blue-600 py-20 text-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 text-center sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <div key={stat.title}>
                        <h2 className="text-5xl font-bold">{stat.number}</h2>
                        <p className="mt-2 text-xl">{stat.title}</p>
                    </div>
                ))}

            </div>
        </section>
    );
}