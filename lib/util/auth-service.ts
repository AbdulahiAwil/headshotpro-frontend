import { cookies } from "next/headers";
import { User } from "../types";
import { cache } from "react";


export const getCurrentUserServer = cache(async ()=> {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('accessToken')?.value;

    if(!accessToken){
        return null;
    }

    try {

        // Call backend API to get current user

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api/v1"}/auth/me`, {
            headers: {
                Cookie : `accessToken=${accessToken}`
            },
            credentials: 'include',
            cache: 'no-store'
        });

        const { data } = await response.json();
        return data?.user as User;
        
    } catch (error) {
        console.error("Error fetching current user:", error);
        return null;
        
    }
})