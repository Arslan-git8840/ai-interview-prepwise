import { isAuthenticated } from "@/firebase/actions";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function RootLayout({ children }: { children: React.ReactNode }) {
  const isAuth = await isAuthenticated();
  if(!isAuth) redirect("/auth/sign-in");
  return (
    <div className="flex mx-auto max-w-7xl flex-col gap-12 my-12 px-16 max-sm:px-4 max-sm:my-8">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-[#dddfff] text-lg font-semibold">PrepWise</h2>
        </Link>
        <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
      </nav>
      {children}
    </div>
  );
}

export default RootLayout;
