'use server'

export type RegisterState = {
  success: boolean;
  statusCode?: number;
  message: string;
  errors?: Record<string, string>;
};

export const registerAction = async (
  prevState: RegisterState,
  formData: FormData
): Promise<RegisterState> => {

  console.log("BACKEND_API_URL:", process.env.BACKEND_API_URL);


  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const phone = formData.get("phone") as string;
  const role = formData.get("role") as string;

  console.log(name, email, password, phone, role);


  const errors: Record<string, string> = {};
  if (!name || name.trim().length < 2) errors.name = "Name must be at least 2 characters";
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.email = "Enter a valid email";
  if (!password || password.length < 8) errors.password = "Password must be at least 8 characters";
  if (!phone || phone.trim().length < 11) errors.phone = "Enter a valid phone number";
  if (!role) errors.role = "Select an account type";

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Please fix the errors below", errors };
  }

  try {
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/users/register`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, email, password, phone, role }),
    });

    const result = await res.json();

    if (result.success) {
      return {
        success: true,
        message: "Registration successful"
      }
    }

    if (!result.success) {
      return {
        success: false,
        message: result.message || "Registration failed",
      };
    }

    return result;


  } catch (error) {
    console.error("Register action error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
};