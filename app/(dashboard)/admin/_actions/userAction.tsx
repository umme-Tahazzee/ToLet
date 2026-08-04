'use server'

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const getAllUsers = async () => {
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
      `${process.env.BACKEND_API_URL}/api/admin/users`,
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

export const updateUserStatus = async(userId: string, status : 'ACTIVE' | 'BLOCKED') => {

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
      `${process.env.BACKEND_API_URL}/api/admin/users/${userId}`,
     
      {
        method : "PATCH",
        headers: {
            "Content-Type": "application/json", 
          Authorization: `Bearer ${accessToken}`,
        
        },
        body : JSON.stringify({status})
      }
    );

      const result = await res.json()
      console.log(result);
      

    if (!res.ok) {
      return {
        success: false,
        message: `Failed to fetch users (status: ${res.status})`,
      };
    }


    revalidatePath("/admin/users");
    return result;


  } catch (error) {
    return {
      success: false,
      message: "Something went wrong while fetching users",
    };
  }

}

