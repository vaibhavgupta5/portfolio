import type { Metadata } from "next";
import "./globals.css";
import LeftPanel from "@/components/LeftPanel";
import { Spotlight } from "@/components/ui/Spotlight";

import { Poppins } from 'next/font/google'

const poppins = Poppins({
  display: 'swap',
  weight: ["400", "500", "600", "700"],
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "NoobVaibhav",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ poppins.className }
      >
        <Spotlight
          className="-top-40 -z-50 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex w-[95%] h-full justify-center p-14 m-auto">
          <div className="w-[22%] h-full mt-6">
            <LeftPanel />
          </div>
          <div className="w-[72%] h-full justify-center  items-center m-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
