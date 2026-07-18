import CTASection from "@/components/home/CTASection";
import { Card } from "@/components/ui";

const features = [
    {
        title: "Trusted Opportunities",
        icon: "✅",
        description: "Browse verified jobs, scholarships, internships and training programs.",
    },
    {
        title: "Easy to Search",
        icon: "🔍",
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
            <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-blue-700 py-24 text-white">

    <div className="container mx-auto px-4 text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            About Us
        </p>

        <h1 className="mt-5 text-5xl font-bold md:text-6xl">
            Empowering Afghan Youth
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
            KaarYab Afghanistan connects students, graduates and professionals
            with trusted jobs, internships, scholarships and career opportunities.
        </p>

    </div>

</section>

{/* Mission Section */}

            <section className="container mx-auto px-4 py-20">

    <div className="mx-auto max-w-4xl text-center">

        <p className="font-semibold uppercase tracking-wider text-primary">
            Our Mission
        </p>

        <h2 className="mt-4 text-4xl font-bold text-default">
            Connecting Talent With Opportunity
        </h2>

        <p className="mt-8 text-lg leading-8 text-muted">
            Our mission is to make career opportunities accessible for everyone
            by providing one trusted platform where users can discover verified
            jobs, scholarships, internships, remote work and professional training.
        </p>

    </div>

</section>

{/* Why Choose Us */}

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
                            <Card
    key={feature.title}
    className="
        group
        p-8
        text-center
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-hover
    "
>

    <div className="text-5xl">
        {feature.icon}
    </div>

    <h3 className="mt-6 text-2xl font-semibold text-default">
        {feature.title}
    </h3>

    <p className="mt-4 leading-7 text-muted">
        {feature.description}
    </p>

</Card>
                        ))}
                    </div>

                </div>
            </section>

            {/* Vision Section */}

            <section className="container mx-auto px-4 py-20">

    <div className="mx-auto max-w-4xl rounded-3xl border border-default bg-card p-12 text-center shadow-card">

        <p className="font-semibold uppercase tracking-wider text-primary">
            Our Vision
        </p>

        <h2 className="mt-4 text-4xl font-bold text-default">
            Building Afghanistan's Leading Opportunity Platform
        </h2>

        <p className="mt-8 text-lg leading-8 text-muted">
            We envision a future where every Afghan has equal access to quality
            education, employment and professional growth. KaarYab strives to
            become the most trusted platform for discovering opportunities across
            Afghanistan and beyond.
        </p>

    </div>

</section>

           
        </main>
    )
}