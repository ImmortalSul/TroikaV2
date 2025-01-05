import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/app(.*)"]);
const isPublicRoute = createRouteMatcher(["/", "/marketing(.*)"]);
const isAuthRoute = createRouteMatcher(["/auth(.*)"]);

export default clerkMiddleware((auth, req) => {
    const { userId } = auth();

    // Allow public routes
    if (isPublicRoute(req)) {
        return NextResponse.next();
    }

    // Redirect unauthenticated users to sign in
    if (!userId && isProtectedRoute(req)) {
        return NextResponse.redirect(new URL("/auth/signin", req.url));
    }

    // Check for authenticated users trying to access auth routes
    if (userId && isAuthRoute(req)) {
        return NextResponse.redirect(new URL("/app", req.url));
    }
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/(api|trpc)(.*)"],
};