import { SignUpForm } from "@/components";
import { Suspense } from "react";

const SignUpPage = () => {
    return (
        <div className="flex flex-col items-center justify-center size-full">
            <div className="max-w-xs mx-auto size-full flex flex-col items-center mt-[270px]">
                <Suspense>
                    <SignUpForm />
                </Suspense>
            </div>
        </div>
    )
};

export default SignUpPage
