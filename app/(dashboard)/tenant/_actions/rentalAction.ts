'use server'

import { cookies } from "next/headers"

export const getMyRentals = async () => {

    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        return { success: false, message: "User not logged in" };
    }

    try {
        const res = await fetch(`${process.env.BACKEND_API_URL}/api/rentals`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            cache: "no-store"
        })

        if (!res.ok) {
            return { success: false, message: `Failed to fetch rentals (${res.status})` };
        }

        const result = await res.json()
        // console.log(result.data, "rental-result");
        
        return result

    } catch (error) {
        return { success: false, message: "Something went wrong" };
    }

}