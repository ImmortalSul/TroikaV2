import { FOOTER_LINKS } from "@/constants";
import Link from "next/link";
// import { Container } from "@/components/ui/container";
// import { Icons } from "@/components/icons";
import Wrapper from "../global/wrapper";
import { Particles } from "../ui/particles";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Container from "../global/container";
import Icons from "../global/icons";
import { Button } from "../ui/button";
import { CoolMode } from "../ui/cool-mode";

const Footer = () => {
    return (
        <footer className="w-full py-10 relative">
            <Container>
                <Wrapper className="relative flex flex-col md:flex-row justify-between pb-40 overflow-hidden footer">
                    <Particles
                        className="absolute inset-0 w-full -z-10"
                        quantity={40}
                        ease={10}
                        color="#d4d4d8"
                        refresh
                    />
                    <div className="flex flex-col items-start max-w-48">
                        <div className="flex items-center gap-2">
                            <Icons.icon className="w-5 h-5" />
                            <span className="text-xl font-medium">
                                Troika Hub
                            </span>
                        </div>
                        <p className="text-base max-w mt-4">
                        Fueling Your Vision, One Product at a Time
                        </p>
                        <span className="mt-8 text-neutral-200 text-sm flex items-center">
                            Made with &lt;3 by <Link href="" className="font-semibold ml-1">Sulaiman</Link> 
                        </span> 
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-lg mt-10 md:mt-0">
                        {FOOTER_LINKS?.map((section, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <h4 className="text-sm font-medium">
                                    {section.title}
                                </h4>
                                <ul className="space-y-4 w-full">
                                    {section.links.map((link, index) => (
                                        <li key={index} className="text-sm text-muted-foreground hover:text-foreground transition-all w-full">
                                            <Link href={link.href} className="w-full">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Wrapper>
            </Container>
            <Container>
                <Wrapper className="pt-10 flex items-center justify-between relative">
                    <p className="text-sm text-secondary-foreground">
                        &copy; {new Date().getFullYear()} Troika Hub. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="https://www.instagram.com/troika_hub/" target="_blank" rel="noopener noreferrer" className="p-1">
                            <Icons.instagram className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
                        </Link>
                        <Link href="https://x.com/TroikaHub" target="_blank" rel="noopener noreferrer"  className="p-1">
                            <Icons.twitter className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer"  className="p-1">
                            <Icons.discord className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
                        </Link>
                        <CoolMode
        options={{
          particle: "/icons/logo.png",
        }}
      >
        <Button>🥚</Button>
      </CoolMode>
                    </div>
                </Wrapper>
            </Container>
            <div className="h-[15rem] lg:h-[15rem] hidden sm:flex items-center justify-center">
                <TextHoverEffect text="TROIKA" />
            </div>
        </footer>
        
    )
};

export default Footer
