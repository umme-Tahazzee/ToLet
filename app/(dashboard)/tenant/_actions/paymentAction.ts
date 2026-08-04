"use server"

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const getMyPayments = async () => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        return { success: false, message: "User not logged in" };
    }

    try {
        const res = await fetch(`${process.env.BACKEND_API_URL}/api/payments`, {
            headers: { Authorization: `Bearer ${accessToken}` },
            cache: "no-store",
        })

        if (!res.ok) {
            return { success: false, message: `Failed to fetch payments (${res.status})` };
        }

        return await res.json();
    } catch (error) {
        return { success: false, message: "Something went wrong while fetching payments" };
    }

}


export const createCheckoutSession = async (rentalRequestId: string) => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        return { success: false, message: "User not logged in" };
    }

    try {
        const res = await fetch(`${process.env.BACKEND_API_URL}/api/payments/create`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ rentalRequestId }),
        })

        const result = await res.json();
        console.log(result?.data?.checkoutUrl);

        
        if (!res.ok) {
            return { success: false, message: result?.message || "Failed to start payment" };
        }

        return result;

    } catch (error) {
        return { success: false, message: "Something went wrong" };
    }
}


export const confirmPayment = async (sessionId: string) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return { success: false, message: "User not logged in" };
  }

  try {
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/payments/confirm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ sessionId }),
    });

    const result = await res.json();

    if (!res.ok) {
      return { success: false, message: result?.message || "Payment confirmation failed" };
    }

    revalidatePath("/tenant/rentals");
    revalidatePath("/tenant/payments");
    return result;
  } catch (error) {
    return { success: false, message: "Something went wrong confirming payment" };
  }
};