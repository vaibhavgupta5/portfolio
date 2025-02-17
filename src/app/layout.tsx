import type { Metadata } from "next";
import "./globals.css";
import LeftPanel from "@/components/LeftPanel";
import { Spotlight } from "@/components/ui/Spotlight";
import { Poppins } from "next/font/google";
import LeftPanelMobile from "@/components/LeftPanelMobile";

const poppins = Poppins({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
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
      <body className={poppins.className}>
        <Spotlight
          className="-top-40 -z-50 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex flex-col md:flex-row w-[95%] items-start h-full justify-center p-4 md:p-14 m-auto">
          <div className="w-full hidden md:inline md:w-[22%] h-full md:mt-0 mt-6 ">
            <LeftPanel />
          </div>
          <div className="w-full md:hidden inline md:w-[22%] h-full mt-6">
            <LeftPanelMobile />
          </div>
          <div className="w-full md:w-[72%] h-full justify-center md:mt-0 mt-4 items-center md:m-6">
            {children}
            <div className="z-50 md:hidden pb-20"></div>
          </div>
        </div>
      </body>
    </html>
  );
}
