import Image from "next/image";
import Link from "next/link";

export default function HeroSection(){
    return(
        <section className="bg-slate-50">
            <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row">
                <div className="flex-1 text-center md:text-left">
                    <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
                        🇦🇫 Opportunity Finder Platform
                    </span>

                    <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
                        Discover Your Next
                        <span className="text-blue-600">Opportunity</span>
                        in Afghanistan
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Find jobs, internships, scholarships, remote work, online
                        courses and training programs all in one place.
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <Link
                         href="/opportunities"
                        className="rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700">
                            Browse Opportunities
                        </Link>

                        <Link
                        href="/add-opportunity"
                        className="rounded-lg border border-blue-600 px-6 py-3 text-center font-semibold text-blue-600 transition hover:bg-blue-50"
                        >
                            Add Opportunity
                        </Link>
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex flex-1 justify-center">
                    <Image
                    src="/images/1.JPG"
  alt="Career Illustration"
  width={500}
  height={500}
                    />
                </div>

                    

                    
                
            </div>
        </section>
    )
}