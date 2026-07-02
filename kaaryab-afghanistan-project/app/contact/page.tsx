import CTASection from "@/components/home/CTASection";

export default function ContactPage(){
    return(
        <main>
            <section className="bg-blue-600 py-20 text-white">
                <div className="mx-auto max-w-5xl text-center">
                    <h1 className="text-5xl font-bold">Contact Us</h1>

                    <p className="mt-6 text-lg">
                        We'd love to hear from you. Send us your questions,
                        suggestions, or feedback.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="text-4xl font-bold">Get in Touch</h2>

                        <p className="mt-6 leading-8 text-gray-600">
                            If you have any questions about jobs,
                            scholarships or internships,
                            feel free to contact us anytime.
                        </p>
                    </div>

                    <div className="mt-10 space-y-6">
                        <div>
                            <h3 className="font-semibold"> 
                                📧 Email
                            </h3>
                            <p className="text-gray-600">example@kaaryab.com</p>
                        </div>

                        <div>
                            <h3 className="font-semibold">📍 Address</h3>

                            <p className="text-gray-600">Kabul, Afghanistan</p>
                        </div>

                        <div>
                            <h3 className="font-semibold">📞 Phone</h3>

                            <p className="text-gray-600">0799324021</p>
                        </div>
                    </div>
                </div>

                {/* rith section */}
                <div className="rounded-xl border bg-white p-8 shadow-sm">
                    <form className="space-y-6">
                        <div>
                            <label className="mb-2 block font-medium">
                                Full Name
                            </label>

                            <input 
                            type="text"
                            placeholder="Enter your name"
                            className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block font-medium">
                                Email
                            </label>

                            <input 
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block font-medium">
                                Subject
                            </label>

                            <input 
                            type="text"
                            placeholder="Subject"
                            className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block font-medium">
                                Message
                            </label>
                            
                            <textarea 
                            rows={5}
                            placeholder="Write your message..."
                            className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
                            ></textarea>
                        </div>

                        <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                            Send Message
                        </button>
                    </form>

                </div>

                <CTASection />

            </section>
        </main>
    )
}