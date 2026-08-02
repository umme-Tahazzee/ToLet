import type { Metadata } from "next";

import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ToLet | Find Your Perfect Rental",
  description: "Browse and rent properties with ToLet",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunitoSans.variable}>
      <body className="min-h-full flex flex-col">
      <Toaster position="top-right" richColors />
        {children}
        </body>
    </html>
  );
}
