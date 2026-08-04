"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const getCategories = async () => {

    
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/categories/`, {
    cache: "no-cache",
  });
  return await res.json();
};

export const createCategory = async (data: { name: string; description: string }) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return { success: false, message: "User not logged in" };
  }

  try {
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      return { success: false, message: result?.message || "Failed to create category" };
    }

    revalidatePath("/admin/categories");
    return result;

  } catch (error) {
    return { success: false, message: "Something went wrong while creating category" };
  }
};

export default getCategories;