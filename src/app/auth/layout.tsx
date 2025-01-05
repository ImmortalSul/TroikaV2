import { Particles } from "@/components/ui/particles";
import Image from "next/image";
import React from 'react';

interface Props {
    children: React.ReactNode
}

const AuthLayout = ({ children }: Props) => {
    return (
        <main className="relative w-full h-screen select-none">
            {/* <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1/3 h-1/8 blur-[12rem] rounded-b-full bg-foreground/70 -z-20"></div> */}
            <div className="absolute inset-x-0 top-0 size-full hidden lg:hidden opacity-50 -z-10">
                <Image
                    src="/images/bas.svg"
                    alt="Auth background"
                    width={1920}
                    height={1080}
                    className="select-none h-full pointer-events-none"
                />
            </div>
            <Particles
                className="absolute inset-x-0 bottom-4 h-1/3 -z-10 hidden"
                quantity={50}
                ease={80}
                color="#d4d4d4"
                refresh
            />
            {children}
        </main>
    );
};

export default AuthLayout
