import React from "react";
import { Mona_Sans } from "next/font/google";
import { isAuthenticated } from "@/firebase/actions";
import { redirect } from "next/navigation";

const monaSans = Mona_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

async function AuthLayout({ children }: { children: React.ReactNode }) {
  const isAuth = await isAuthenticated();
    if(isAuth) redirect("/");
  return <div className={monaSans.className}>{children}</div>;
}

export default AuthLayout;
