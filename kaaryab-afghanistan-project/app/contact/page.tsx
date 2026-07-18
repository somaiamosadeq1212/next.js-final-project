"use client";

import {
    Mail,
    Phone,
    MapPin,
    Clock3,
    Send,
} from "lucide-react";

import CTASection from "@/components/home/CTASection";
import Button from "@/components/ui/Button";
import {Card} from "@/components/ui/Card";
import Input from "@/components/ui/Input";

export default function ContactPage() {
    return (
        <main>

            {/* Hero */}

            <section
                className="
                    relative
                    overflow-hidden

                    border-b
                    border-default

                    bg-gradient-to-br
                    from-primary
                    via-primary
                    to-blue-700

                    py-24

                    text-white
                "
            >
                <div className="container relative mx-auto px-4">

                    <div className="mx-auto max-w-3xl text-center">

                        <p
                            className="
                                mb-4

                                text-sm
                                font-semibold

                                uppercase

                                tracking-[0.2em]

                                text-white/80
                            "
                        >
                            Contact KaarYab Afghanistan
                        </p>

                        <h1
                            className="
                                text-5xl
                                font-bold

                                leading-tight

                                md:text-6xl
                            "
                        >
                            We'd Love To Hear
                            <br />
                            From You
                        </h1>

                        <p
                            className="
                                mx-auto
                                mt-6
                                max-w-2xl

                                text-lg

                                text-white/80
                            "
                        >
                            Questions, suggestions, partnerships or
                            feedback—we're here to help Afghan youth
                            connect with jobs, scholarships and career
                            opportunities.
                        </p>

                    </div>

                </div>
            </section>

            {/* Content */}

            <section className="container mx-auto px-4 py-20">

                <div
                    className="
                        grid
                        gap-10

                        lg:grid-cols-2
                    "
                >

                    {/* Left */}

                    <div>

                        <p
                            className="
                                font-semibold

                                uppercase

                                tracking-wider

                                text-primary
                            "
                        >
                            Get In Touch
                        </p>

                        <h2
                            className="
                                mt-3

                                text-4xl
                                font-bold

                                text-default
                            "
                        >
                            Let's Build More Opportunities Together
                        </h2>

                        <p
                            className="
                                mt-6

                                leading-8

                                text-muted
                            "
                        >
                            Whether you're looking for support,
                            partnership opportunities, or simply want
                            to share feedback, we'd love to hear from
                            you.
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
                                value="Kabul, Afghanistan"
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

                            <h2
                                className="
                                    text-3xl
                                    font-bold

                                    text-default
                                "
                            >
                                Send a Message
                            </h2>

                            <p
                                className="
                                    mt-3

                                    text-muted
                                "
                            >
                                Fill out the form and we'll get back to
                                you as soon as possible.
                            </p>

                        </div>

                        <form className="space-y-6">

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
                                    className="
                                        mb-2
                                        block

                                        text-sm
                                        font-medium

                                        text-default
                                    "
                                >
                                    Message
                                </label>

                                <textarea
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

                                        transition

                                        focus:border-primary
                                        focus:ring-4
                                        focus:ring-primary/10
                                    "
                                />

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

            </section>

            {/* FAQ */}

            <section className="container mx-auto px-4 pb-20">

                <div className="mx-auto max-w-4xl">

                    <h2 className="text-3xl font-bold text-center text-default">
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

            <CTASection />

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

                transition-all

                hover:-translate-y-1
                hover:shadow-hover
            "
        >

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
                "
            >
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