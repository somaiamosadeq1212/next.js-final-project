import CTASection from "@/components/home/CTASection";

const features = [
    {
        title: "Trusted Opportunities",
        icone: "✅",
        description: "Browse verified jobs, scholarships, internships and training programs.",
    },
    {
        title: "Easy to Search",
        icone: "🔍",
        description: "Quickly search and filter opportunities by category, location and type.",
    },
    {
        title: "For Everyone",
        icon: "🌍",
        description: "Designed for students, graduates and professionals across Afghanistan.",
    },
];

export default function AboutPage(){
    return(
        <main>
            {/* hero section */}
            <section className="bg-blue-600 py-20 text-white">
                <div className="mx-auto max-w-5xl text-center">
                    <h1 className="text-5xl font-bold">
                        About KaarYab Afghanistan
                    </h1>
                    <p className="mt-6 text-lg">
                        Helping Afghan youth discover jobs, internships,
                        scholarships and career opportunities in one place.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-6xl py-20">
                <h2 className="text-4xl font-bold">Our Mission</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    KaarYab Afghanistan aims to connect students,
                    graduates and job seekers with valuable opportunities
                    including employment, scholarships, internships,
                    remote work and professional training.
                </p>

            </section>

            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold">Why Choose KaarYab?</h2>
                        <p className="mt-4 text-gray-600">
                            Everything you need to discover new opportunities in one place.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        {features.map((feature) =>(
                            <div
                                key={feature.title}
                                className="rounded-xl border bg-white p-8 shadow-sm transition hover:shadow-lg"
                            >
                                <div className="text-5xl">{feature.icon}</div>

                                <h3 className="mt-6 text-2xl font-semibold">{feature.title}</h3>

                                <p className="mt-4 text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="py-20">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-4xl font-bold">Our Vision</h2>

                    <p className="mt-8 text-lg leading-8 text-gray-600">
                        We believe every Afghan deserves equal access to education,
                        employment and professional growth. KaarYab aims to become
                        the leading platform for discovering trusted opportunities
                        across Afghanistan and beyond.
                    </p>
                </div>
            </section>

            <CTASection />
        </main>
    )
}