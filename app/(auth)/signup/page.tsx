"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, User, Building2, Mail, Lock, Phone, ArrowRight } from "lucide-react";

export default function RegisterForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"TENANT" | "LANDLORD">("TENANT");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your submission logic here
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
        

        {/* Form Container */}
        <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                      role === "TENANT"
                        ? "text-primary"
                        : "text-foreground"
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
                      role === "LANDLORD"
                        ? "text-primary"
                        : "text-foreground"
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
                  aria-label={showPassword ? "Hide password" : "Show password"}
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
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start gap-2">
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
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="w-full font-semibold text-base"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin mr-2">↻</span>
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
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
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-primary/5 via-background to-primary/10 items-center justify-center p-12 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating circle 1 */}
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/15 blur-3xl animate-pulse"></div>
          {/* Floating circle 2 */}
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          {/* Animated gradient line */}
          <div className="absolute top-1/4 left-1/4 w-96 h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 blur-lg rotate-45 animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-sm">
          {/* Animated icon */}
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border-2 border-primary/30 animate-bounce">
              <div className="text-7xl">🏠</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-4">
            Find Your Home
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Connect with properties and landlords that match your needs perfectly
          </p>

          {/* Feature list with animation */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
              <span className="text-muted-foreground">Browse verified listings</span>
            </div>
            <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.2s" }}></div>
              <span className="text-muted-foreground">Instant messaging system</span>
            </div>
            <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.4s" }}></div>
              <span className="text-muted-foreground">Secure transactions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
