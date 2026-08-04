'use server'

import { cookies } from "next/headers";

const getAllRental = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/admin/rentals`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return {
        success: false,
        message: `Failed to fetch users (status: ${res.status})`,
      };
    }

    return await res.json();
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong while fetching users",
    };
  }
};

export default getAllRental;