import Link from "next/link";

export default function CTASection(){
    return(
        <section className="py-24">
            <div className="mx-auto max-w-5xl rounded-3xl bg-blue-600 px-8 py-20 text-center text-white">
                <h2 className="text-4xl font-bold">Ready to Find Your Next Opportunity?</h2>
                <p className="mt-6 text-lg">
                    Start exploring jobs, scholarships, internships
                    and training programs today.
                </p>

                <Link
                 href="/opportunities"
                 className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-gray-100"
                >
                    Explore Opportunities
                </Link>

            </div>
        </section>
    )
}