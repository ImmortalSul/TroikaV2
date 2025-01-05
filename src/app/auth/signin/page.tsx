import { SignInForm } from "@/components";
import { Suspense } from "react";

const SignInPage = () => {
    return (
        <div className="flex flex-col items-center justify-center size-full">
            <div className="max-w-xs mx-auto size-full flex flex-col items-center mt-[270px]">
                <Suspense>
                    <SignInForm />
                </Suspense>
            </div>
        </div>
    )
};

export default SignInPage
