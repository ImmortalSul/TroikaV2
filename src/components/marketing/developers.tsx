"use client";

import { PLANS } from "@/constants/plans";
import { cn } from "@/functions";
import { CheckIcon, ChevronRight, Squircle, Triangle } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import { SectionBadge } from "../ui/section-badge";
// import SectionBadge from "../ui/section-badge";

const Developers = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative">
            <Container>
                <div className="flex flex-col items-center text-center max-w-xl mx-auto">
                    <SectionBadge title="Meet The Team" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                    The Minds Behind Troika Hub
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                    A dynamic blend of developers, designers, and creatives building tomorrow&apos;s tech today.
                    </p>
                </div>
            </Container>
            <div className="mt-8 w-full relative flex flex-col items-center justify-center">
                <div className="absolute hidden lg:block top-1/2 right-2/3 translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-primary/15 blur-[10rem] -z-10"></div>
                <div className="absolute hidden lg:block top-1/2 left-2/3 -translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-violet-500/15 blur-[10rem] -z-10"></div>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-14">
                        {PLANS.map((plan, index) => (
                            <Plan
                                key={index}
                                index={index}
                                {...plan}
                            />
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    )
};

const Plan = ({
    id,
    title,
    desc,
    badge,
    buttonText,
    features,
    index,
    link,
}: {
    id: string;
    title: string;
    desc: string;
    badge?: string;
    buttonText: string;
    features: string[];
    index: number;
    link: string;
}) => {
    return (
        <div key={index} className="w-full relative flex flex-col saturate-150 rounded-2xl">
            <div
                className={cn(
                    // "flex flex-col size-full border rounded-2xl relative p-3 [background-image:linear-gradient(345deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.03)_100%)]",
                    "flex flex-col size-full rounded-2xl relative p-3 [background-image:linear-gradient(345deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.03)_100%)]",
                    // "border-primary/80", // Apply the same border style to all plans
                )}
            >
                {badge && (
                    <div className="max-w-fit min-w-min inline-flex items-center whitespace-nowrap px-1 h-7 rounded-full bg-gradient-to-r from-primary to-violet-500 absolute -top-3 left-1/2 -translate-x-1/2 select-none">
                        <span className="flex-1 text-sm px-2 font-medium bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent bg-[length:250%_100%] animate-background-shine">
                            {badge}
                        </span>
                    </div>
                )}
                <div className="flex flex-col p-3 w-full items-center text-center">
                    <h2 className="text-xl font-medium">
                        {title}
                    </h2>
                    <p className="text-sm mt-2 text-muted-foreground break-words">
                        {desc}
                    </p>
                </div>
                <hr className="shrink-0 border-none w-full h-px bg-border" role="separator" />
                <div className="relative flex flex-col flex-1 align-top w-full p-3 h-full break-words text-left gap-4">
                    <ul className="flex flex-col gap-2">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                                {/* <CheckIcon aria-hidden="true" className="w-5 h-5 text-primary flex-shrink-0" /> */}
                                <ChevronRight aria-hidden="true" className="w-5 h-5 text-primary flex-shrink-0"/>
                                <p className="text-sm md:text-base text-muted-foreground flex-grow">
                                    {feature}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-3 mt- h-auto flex w-full items-center">
                    <Button
                        asChild
                        variant={id === "pro" ? "default" : "tertiary"}
                        className="w-full hover:scale-100 hover:translate-y-0 shadow-none"
                    >
                        <Link href={link} target="_blank" rel="noopener noreferrer">
                            {buttonText}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default Developers;