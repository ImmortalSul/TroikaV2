"use client";

import Link from "next/link";
// import { Rotate3d } from "lucide-react";
import Container from "../global/container";
import Icons from "../global/icons";
import Images from "../global/images";
import { AnimatedBeamMultipleOutput } from "../ui/integrations";
import InteractiveHoverButton from "../ui/interactive-hover-button";
import MagicCard from "../ui/magic-card";
import { Ripple } from "../ui/ripple";
import { SectionBadge } from "../ui/section-badge";

const Products = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <SectionBadge title="Products" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                    Empowering Innovation with <br /> Game-Changing Tools
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                    Explore a range of powerful tools crafted to empower creators, professionals, and innovators in turning their ideas into impactful solutions
                        </p>
                </div>
            </Container>
            <div className="mt-16 w-full">
                <div className="flex flex-col items-center gap-5 lg:gap-5 w-full">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_.65fr] w-full gap-5 lg:gap-5">
                            <MagicCard particles={true} className="flex flex-col items-start size-full bg-primary/[0.08]">
                                <div className="bento-card flex items-center justify-center min-h-72">
                                    <span className="text-muted-foreground group-hover:text-foreground mx-auto relative">
                                        <Icons.stars className="w-20 h-20" />
                                    </span>
                                    <Ripple />
                                </div>
                            </MagicCard>
                            <MagicCard particles={true} className="flex flex-col items-start w-full bg-primary/[0.08]">
                                <div className="bento-card w-full flex-row gap-6">
                                    <div className="w-full h-40">
                                        <Images.analytics className="w-full h-full" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-xl font-heading font-medium heading ">
                                        Scrapix: Effortless Web Scraping Made Visual
                                        </h4>
                                        <p className="text-sm md:text-base mt-2 text-muted-foreground">
                                        Simplify web scraping and transform websites into actionable data with our no-code visual tool.                                       
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                        </div>
                    </Container>
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5 lg:gap-5">
                            <MagicCard particles={true} className="flex flex-col items-start w-full row-span-1 bg-primary/[0.08]">
                                <div className="bento-card w-full flex-row gap-6">
                                    <div className="w-full h-52 relative">
                                        <Images.ideation className="w-full h-full" />
                                        <div className="w-40 h-40 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                    </div>
                                    <div className="flex flex-col mt-auto">
                                        <h4 className="text-xl font-heading font-medium heading">
                                            Content ideation
                                        </h4>
                                        <p className="text-sm md:text-base mt-2 text-muted-foreground">
                                            Generate ideas for your content with our AI-powered agents & tools to create effecient workflow in seconds.
                                            
                                        </p>
                                        {/* <InteractiveHoverButton /> */}
                                    </div>
                                </div>
                            </MagicCard>
                            <div className="grid grid-rows gap-5 lg:gap-5">
                                <MagicCard particles={true} className="flex flex-col items-start w-full row-span- row-start-[0.5] h-32 bg-primary/[0.08]">
                                    <div className="bento-card w-full relative items-center justify-center">
                                        <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                            <p className="text-base text-muted-foreground text-justify [mask-image:radial-gradient(50%_50%_at_50%_50%,#BAB3FF_0%,rgba(186,179,255,0)_90.69%)]">
                                                {/* We use AI to help you create content that resonates with your audience. Our tools are designed to optimize your content creation and engagement like never before. Transform your social media strategy with Luro AI&apos;s cutting-edge features. Reach your audience with the right message at the right time. Create content faster and smarter with Luro AI. Transform your social media strategy with Luro AI&apos;s cutting-edge features. Create content faster and smarter with Luro AI. Transform your social media strategy with Luro AI&apos;s cutting-edge features. Create content faster and smarter with Luro AI. */}
                                                At Troika Hub, we harness the power of innovation to bring you tools that help you build, create, and scale like never before. Our products are designed to streamline your workflow and enhance your creativity, enabling you to bring your ideas to life faster and smarter. Transform the way you work with Troika Hub’s state-of-the-art solutions, empowering you to take on challenges and unlock new possibilities. Whether you're building, automating, or designing, Troika Hub is here to help you achieve more, effortlessly.
                                            </p>
                                        </div>
                                        <div className="w-full h-16 relative">
                                            <Images.centeral className="w-full h-full" />
                                            <div className="w-20 h-20 rounded-full bg-primary/10 blur-2xl z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                        </div>
                                    </div>
                                </MagicCard>
                                <MagicCard particles={true} className="flex flex-col items-start w-full row-start-2 !h-max bg-primary/[0.08]">
                                    <div className="bento-card w-full gap-6 relative">
                                        <div className="w-full h-48 relative">
                                            <Images.rings className="w-full h-full absolute inset-0" />
                                            <Images.rings className="w-56 h-56 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                            <Icons.icon className="w-20 h-20 absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80" />
                                            {/* <Icons.rotate3d className="w-16 h-16 absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80" /> */}
                                            <Images.circlePallete className="w-full h-full opacity-30" /> 
                                           
                                        </div>
                                        <div className="w-30 h-30 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                    </div>
                                </MagicCard>
                            </div>
                            <MagicCard particles={true} className="flex flex-col items-start w-full row-span-1 bg-primary/[0.08]">
                                <div className="bento-card w-full flex-row gap-6">
                                    <div className="flex flex-col mb-auto">
                                        <h4 className="text-xl font-heading font-medium heading ">
                                            Seamless integrations
                                        </h4>
                                        <p className="text-sm md:text-base mt-2 text-muted-foreground">
                                            Connect your preferred tools and platforms to streamline your workflow and save time.
                                        </p>
                                    </div>
                                    <div className="w-full h-28 relative">
                                        <Images.integration className="w-full h-full" />
                                        <div className="w-28 h-28 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full"></div>
                                    </div>
                                </div>
                            </MagicCard>
                        </div>
                    </Container>
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-[.40fr_1fr] w-full gap-5 lg:gap-5">
                            <MagicCard particles={true} className="flex flex-col items-start w-full bg-primary/[0.08]">
                                <div className="bento-card w-full flex-row gap-6">
                                    <div className="w-full">
                                        <Images.image className="w-full h-40 lg:h-auto" />
                                    </div>
                                    <div className="flex flex-col mt-auto">
                                        <h4 className="text-xl font-heading font-medium heading ">
                                            Showcase Your Work in 3D: Build a Portfolio That Stands Out
                                        </h4>
                                        <p className="text-sm md:text-base mt-2 text-muted-foreground">
                                            {/* Upload and share your 3D projects with ease. Impress recruiters and collaborators by presenting your work in an interactive, immersive way that highlights your skills and creativity. */}
                                            Upload and share your projects in an interactive, immersive format to impress recruiters and collaborators
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                            <MagicCard particles={true} className="flex flex-col items-start w-full bg-primary/[0.08]">
                                <div className="bento-card w-full flex-row gap-6">
                                    <div className="w-full">
                                        {/* <Images.hash className="w-full h-40 lg:h-52" /> */}
                                        <AnimatedBeamMultipleOutput className="w-full h-72 lg:h-72 "/>
                                    </div>
                                    <div className="flex flex-col mt-auto">
                                        <h4 className="text-xl font-heading font-medium heading ">
                                            Hashtags suggestions
                                        </h4>
                                        <p className="text-sm md:text-base mt-2 text-muted-foreground">
                                            Get hashtag suggestions based on your content and audience to increase your reach and engagement.
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
};

export default Products
