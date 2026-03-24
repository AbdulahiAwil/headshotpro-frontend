import { NextRequest, NextResponse } from "next/server";
 
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";
export async function proxy(request: NextRequest) {
    // Current Page

    const { pathname } = request.nextUrl;

    const accessToken = request.cookies.get("accessToken");
    const refreshToken = request.cookies.get("refreshToken");

    const isAuthenticated = !!(accessToken && refreshToken);

    const isAuthPage = pathname.startsWith("/auth");
    const isDashboard = pathname.startsWith("/dashboard");

    if(isAuthPage && isAuthenticated) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Handle dashboard layout access

    if(isDashboard) {
        // No token provided

        if(!accessToken || !refreshToken) {
            return NextResponse.redirect(new URL("/auth/login", request.url));
        }

        if(accessToken) {
            return NextResponse.next();
        }

        // Try referesh 
        if(refreshToken) {

            try {
                const refreshResponse = await fetch(`${API_URL}/auth/refresh-token`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "cookie": `refreshToken=${refreshToken.value}`,
                    },
                });
                if(refreshResponse.ok) {
                    const setCookie = refreshResponse.headers.get("set-cookie");

                    if(setCookie) {
                        const response = NextResponse.next();
                        setCookie.split(",").forEach((cookie) => {
                            const [nameValue] = cookie.trim().split(";");
                            const [name, value] = nameValue.split("=");
                            if(name && value) {
                                response.cookies.set(name.trim(), value.trim(), {
                                    httpOnly: true,
                                    secure: process.env.NODE_ENV === "production",
                                    sameSite: "lax",
                                    path: "/",
                                    maxAge: name.trim() === "accessToken" ? 15 * 60 : 7 * 24 * 60 * 60, // 15 minutes for accessToken, 7 days for refreshToken
                                })
                            }
                        })
                        return response;
                    }
                }
                
            } catch (error) {
                console.error("Error refreshing token:", error);
                
            }

        }

        // Refresh failed - redirect to login
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }



    return NextResponse.next();
}

// Matcher to specify which paths the middleware should run on
export const config = {
    matcher: ["/dashboard/:path*", "/auth/:path*"],
};

