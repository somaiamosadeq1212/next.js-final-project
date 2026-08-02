"use client";

import {
    Mail,
    Phone,
    MapPin,
    Clock3,
    Send,
} from "lucide-react";

import Button from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Input from "@/components/ui/Input";

export default function ContactPage() {
    return (
        <main>
            <section className="bg-background py-14 lg:py-20 transition-theme">
                <div
                    className="
                        mx-auto
                        max-w-7xl
                        rounded-3xl
                        border
                        border-default
                        bg-hero
                        shadow-card
                        px-6
                        py-16
                        ">
                    <p className="mb-6 md:text-4xl text-3xl font-bold text-primary text-center">
                        Contact KaarYab Afghanistan
                    </p>

                    <h1 className="text-3xl md:text-4xl text-center font-simibold mb-5" id="contact-heading">
                        We'd Love To Hear
                        <br />
                        From You
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
                        Questions, suggestions, partnerships or feedback—we're here to help Afghan youth
                        connect with jobs, scholarships and career opportunities.
                    </p>

                </div>
            </section>

            {/* Content */}
            <section className="container mx-auto px-4 py-20">

                {/* Section Heading */}
                <div className="mx-auto mb-14 max-w-3xl text-center">

                    <p className="font-bold text-primary text-3x sm:text-4xl md:text-5xl mb-10">
                        Contact Information
                    </p>

                    <h2 className="mt-4 text-3xl md:text-4xl semibold text-default">
                        Everything You Need To Reach Our Team
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
                        Have questions, feedback, or partnership ideas? Our team is here to help.
                        Reach out through the contact details below or send us a message using the form.
                    </p>

                </div>

                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-10 lg:grid-cols-2">

                        {/* Left */}
                        <div>
                            <p className="text-3xl font-simibold text-primary">
                                Get In Touch
                            </p>

                            <h2 className="mt-3 text-1xl md:text-2xl font-simibold text-default">
                                Let's Build More Opportunities Together
                            </h2>

                            <p className="mt-6 leading-8 text-muted">
                                Whether you're looking for support, partnership opportunities, or simply want
                                to share feedback, we'd love to hear from you.
                            </p>

                            {/* Contact Cards */}
                            <div className="mt-10 space-y-5">

                                <InfoCard
                                    icon={<Mail className="h-5 w-5" />}
                                    title="Email"
                                    value="example@kaaryab.com"
                                />

                                <InfoCard
                                    icon={<Phone className="h-5 w-5" />}
                                    title="Phone"
                                    value="+93 799 324 021"
                                />

                                <InfoCard
                                    icon={<MapPin className="h-5 w-5" />}
                                    title="Address"
                                    value="Herat, Afghanistan"
                                />

                                <InfoCard
                                    icon={<Clock3 className="h-5 w-5" />}
                                    title="Working Hours"
                                    value="Sat - Thu | 8:00 AM - 4:00 PM"
                                />

                            </div>
                        </div>

                        {/* Right */}
                        <Card className="p-8">
                            <div className="mb-8">
                                <h2 className="text-2xl font-simibold text-primary">
                                    Send a Message
                                </h2>

                                <p className="mt-3 text-muted">
                                    Fill out the form and we'll get back to you as soon as possible.
                                </p>
                            </div>

                            <form className="space-y-6" aria-label="Contact form">
                                <div className="grid gap-6 md:grid-cols-2">

                                    <Input
                                        label="Full Name"
                                        placeholder="Your full name"
                                    />

                                    <Input
                                        type="email"
                                        label="Email"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <Input
                                    label="Subject"
                                    placeholder="Message subject"
                                />

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="
                                        mb-2
                                        block
                                        text-sm
                                        font-medium
                                        text-default
                                    ">
                                        Message
                                    </label>

                                    <textarea
                                        id="message"
                                        rows={6}
                                        placeholder="Write your message..."
                                        className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-default
                                        bg-background
                                        px-4
                                        py-3
                                        outline-none
                                        transition-theme
                                        focus-visible:border-primary
                                        focus-visible:ring-4
                                        focus-visible:ring-primary/10
                                    "/>
                                </div>

                                <Button
                                    fullWidth
                                    leftIcon={
                                        <Send className="h-4 w-4" />
                                    }
                                >
                                    Send Message
                                </Button>

                            </form>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FAQ */}

            <section className="container mx-auto px-4 pb-20">
                <div className="mx-auto max-w-4xl">

                    <h2 className="text-3xl font-bold text-center text-primary">
                        Frequently Asked Questions
                    </h2>

                    <div className="mt-10 space-y-4">

                        <Card className="p-6">
                            <h3 className="font-semibold text-default">
                                How can I apply for an opportunity?
                            </h3>

                            <p className="mt-2 text-muted">
                                Open the opportunity details page and click the Apply button.
                            </p>
                        </Card>

                        <Card className="p-6">
                            <h3 className="font-semibold text-default">
                                Are all opportunities free?
                            </h3>

                            <p className="mt-2 text-muted">
                                Yes. KaarYab only shares verified opportunities.
                            </p>
                        </Card>

                        <Card className="p-6">
                            <h3 className="font-semibold text-default">
                                How can organizations publish opportunities?
                            </h3>

                            <p className="mt-2 text-muted">
                                Contact our team through this page and we'll guide you.
                            </p>
                        </Card>

                    </div>
                </div>
            </section>

        </main>
    );
}

type InfoCardProps = {
    icon: React.ReactNode;
    title: string;
    value: string;
};

function InfoCard({
    icon,
    title,
    value,
}: InfoCardProps) {

    return (

        <Card
            className="
                flex
                items-center
                gap-4
                p-5
                transition-theme
                hover:-translate-y-1
                hover:shadow-hover
            ">

            <div
                className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary/10
                    text-primary
                    transition-transform
                    duration-300
                    group-hover:scale-110
                ">
                {icon}
            </div>

            <div>
                <p className="font-semibold text-default">
                    {title}
                </p>

                <p className="text-sm text-muted">
                    {value}
                </p>
            </div>
        </Card>
    );
}