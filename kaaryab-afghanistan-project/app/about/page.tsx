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
        </main>
    )
}