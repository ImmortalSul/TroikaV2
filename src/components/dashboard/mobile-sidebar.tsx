"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { SIDEBAR_LINKS } from "@/constants/links";
import { useClerk } from "@clerk/nextjs";
import { LogOutIcon, MenuIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileSidebar = () => {

    const { signOut } = useClerk();

    const pathname = usePathname();

    const handleLogout = async () => {
        await signOut();
    };

    return (
        <div className="flex lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="flex lg:hidden"
                    >
                        <MenuIcon className="size-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-screen max-w-full">
                    <div className="flex flex-col w-full mt-10 py-3 h-full">
                        <Button
                            variant="outline"
                            className="w-full justify-start gap-2 px-2"
                        >
                            <SearchIcon className="size-4" />
                            <span className="text-sm">
                                Search...
                            </span>
                        </Button>
                        <ul className="w-full space-y-2 py-5">
                            {SIDEBAR_LINKS.map((link, index) => {

                                const isActive = pathname === link.href;

                                return (
                                    <li key={index} className="w-full">
                                        <Link
                                            href={link.href}
                                            className={buttonVariants({
                                                variant: "ghost",
                                                className: isActive ? "bg-muted text-primary w-full !justify-start" : "text-foreground/70 w-full !justify-start",
                                                // "w-full !justify-start text-foreground/70"
                                            })}
                                        >
                                            <link.icon strokeWidth={2} className="size-[18px] mr-1.5" />
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                        <div className="flex flex-col w-full mt-auto pb-4">
                            <Button
                                size="sm"
                                variant="ghost"
                                className="w-full justify-start gap-2 px-4"
                                onClick={handleLogout}
                            >
                                <LogOutIcon className="size-4 mr-1.5" />
                                Logout
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
};

export default MobileSidebar
