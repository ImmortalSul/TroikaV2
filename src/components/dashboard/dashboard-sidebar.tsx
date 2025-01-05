"use client";

import { SIDEBAR_LINKS } from "@/constants/links";
import { LogOutIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../global/container";
import { Button, buttonVariants } from "../ui/button";

import { cn } from "@/functions";
import { useClerk } from "@clerk/nextjs";


const DashboardSidebar = () => {

    const { signOut } = useClerk();

    const pathname = usePathname();

    const handleLogout = async () => {
        await signOut();
    };

    return (
        <div
            id="sidebar"
            className="flex-col hidden lg:flex fixed left-0 top-16 bottom-0 z-50 bg-background border-r border-border/50 w-72"
        >
            <div className={cn(
                "flex flex-col size-full p-3"
            )}>
                <Container delay={0.2} className="h-max">
                    <Button
                        variant="outline"
                        className="w-full justify-between px-2"
                    >
                        <span className="flex items-center gap-x-1 text-foreground/80">
                            <SearchIcon className="size-4" />
                            <span className="text-sm">
                                Search...
                            </span>
                        </span>
                        <span className="px-1 py-px text-xs rounded-sm bg-muted text-muted-foreground">
                            ⌘K
                        </span>
                    </Button>
                </Container>
                <ul className="w-full space-y-2 py-5">
                    {SIDEBAR_LINKS.map((link, index) => {

                        const isActive = pathname === link.href;

                        return (
                            <li key={index} className="w-full">
                                <Container delay={0.1 + index / 10}>
                                    <Link
                                        href={link.href}
                                        className={buttonVariants({
                                            variant: "ghost",
                                            className: isActive ? "bg-muted text-primary w-full !justify-start" : "text-foreground/70 w-full !justify-start",
                                        })}
                                    >
                                        <link.icon strokeWidth={2} className="size-[18px] mr-1.5" />
                                        {link.label}
                                    </Link>
                                </Container>
                            </li>
                        )
                    })}
                </ul>
                <div className="mt-auto flex flex-col gap-3 w-full">
                    <Container delay={0.3}>
                        <div className="h-10 w-full">
                            <Button
                                variant="ghost"
                                onClick={handleLogout}
                                className="w-full justify-start"
                            >
                                <LogOutIcon className="size-4 mr-1.5" />
                                Logout
                            </Button>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
};

export default DashboardSidebar
