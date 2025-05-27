import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const monaSans = Mona_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "HireIQ",
  description: "HireIQ, a AiInterview learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monaSans.className} bg-black`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
