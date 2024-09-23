import type { Metadata } from "next";
import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrimeClass Rental",
  description:
    "We make the luxury car rental process much safer and easier. Discover our fleet of premium vehicles!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
