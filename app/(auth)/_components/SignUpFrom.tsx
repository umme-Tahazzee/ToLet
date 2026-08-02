"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Eye,
  EyeOff,
  User,
  Building2,
  Mail,
  Lock,
  Phone,
  ArrowRight,
  Loader2,
} from "lucide-react";


import {registerAction, RegisterState} from '../_actions/registerAction'
import Animate from "./RightSideAnimate";



const initialState: RegisterState = { success: false, message: "" };

export default function SignUpForm() {
  const router = useRouter();

  const [state, action, isPending] = useActionState(
    registerAction,
    initialState,
  );
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"TENANT" | "LANDLORD">("TENANT");

  

  
useEffect(() => {
  if (state.message && !isPending) {
    if (state.success) {
      toast.success(state.message);
      router.push("/login");
    } else {
      toast.error(state.message);
    }
  }
}, [state, isPending, router]);

  return (
    <div className="min-h-screen flex bg-background ">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Form Container */}
          <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
            <form action={action} className="space-y-6">
              {/* Role Selection */}
              <div>
                <label className="mb-3 block text-sm font-semibold text-foreground">
                  What brings you here?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {/* Tenant Button */}
                  <button
                    type="button"
                    onClick={() => setRole("TENANT")}
                    className={`group relative flex flex-col items-center
                     gap-2.5 rounded-xl border-2 p-4 transition-all duration-200 ${
                       role === "TENANT"
                         ? "border-primary bg-primary/8"
                         : "border-border bg-muted/40 hover:border-primary/50 hover:bg-muted/60"
                     }`}
                  >
                    <div
                      className={`rounded-lg p-2 transition-colors ${
                        role === "TENANT"
                          ? "bg-primary/20"
                          : "bg-muted-foreground/10 group-hover:bg-primary/10"
                      }`}
                    >
                      <User
                        className={`h-5 w-5 ${
                          role === "TENANT"
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm font-semibold transition-colors ${
                        role === "TENANT" ? "text-primary" : "text-foreground"
                      }`}
                    >
                      Tenant
                    </span>
                    <span className="text-center text-xs text-muted-foreground">
                      Looking to rent
                    </span>
                  </button>

                  {/* Landlord Button */}
                  <button
                    type="button"
                    onClick={() => setRole("LANDLORD")}
                    className={`group relative flex flex-col items-center gap-2.5 rounded-xl border-2 p-4 transition-all duration-200 ${
                      role === "LANDLORD"
                        ? "border-primary bg-primary/8"
                        : "border-border bg-muted/40 hover:border-primary/50 hover:bg-muted/60"
                    }`}
                  >
                    <div
                      className={`rounded-lg p-2 transition-colors ${
                        role === "LANDLORD"
                          ? "bg-primary/20"
                          : "bg-muted-foreground/10 group-hover:bg-primary/10"
                      }`}
                    >
                      <Building2
                        className={`h-5 w-5 ${
                          role === "LANDLORD"
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm font-semibold transition-colors ${
                        role === "LANDLORD" ? "text-primary" : "text-foreground"
                      }`}
                    >
                      Landlord
                    </span>
                    <span className="text-center text-xs text-muted-foreground">
                      List a property
                    </span>
                  </button>
                </div>
                <input type="hidden" name="role" value={role} />
              </div>

              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-foreground"
                >
                  Full name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-input bg-card pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                  {state.errors?.name && (
                    <p className="mt-1 text-xs text-destructive">
                      {state.errors.name}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-foreground"
                >
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-input bg-card pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                  {state.errors?.email && (
                    <p className="mt-1 text-xs text-destructive">
                      {state.errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-foreground"
                >
                  Phone number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-lg border border-input bg-card pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />

                  {state.errors?.phone && (
                    <p className="mt-1 text-xs text-destructive">
                      {state.errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-foreground"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="At least 8 characters"
                    className="w-full rounded-lg border border-input bg-card pl-10 pr-10 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  Must be at least 8 characters long
                </p>
                {state.errors?.password && (
                  <p className="mt-1 text-xs text-destructive">
                    {state.errors.password}
                  </p>
                )}
              </div>

              {/* Terms Agreement */}
              {/* <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="mt-1 h-4 w-4 rounded border-border bg-card accent-primary"
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-xs text-muted-foreground leading-relaxed"
                >
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="font-medium text-primary hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="font-medium text-primary hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div> */}

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full gap-2"
                disabled={isPending}
              >
                {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
                {isPending ? "Creating account..." : "Create account"}
              </Button>

              {/* Sign In Link */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-semibold text-primary transition-colors hover:text-primary/90"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right Side - Animated Illustration */}
      <Animate/>
    </div>
  );
}
