import { db } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const AuthCallbackPage = async () => {

    const user = await currentUser();

    if (!user?.id || !user.emailAddresses[0].emailAddress) {
        return redirect("/auth/signin");
    }

    const existingUser = await db.user.findUnique({
        where: {
            clerkId: user.id,
        },
    });

    if (!existingUser) {
        await db.user.create({
            data: {
                id: user.id,
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                avatar: user.imageUrl,
            },
        });

        redirect("/app");
    }

    redirect("/app");
};

export default AuthCallbackPage
