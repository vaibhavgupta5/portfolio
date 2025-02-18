"use client";
import ContactPage from "@/components/Pages/ContactPage";
import HomePage from "@/components/Pages/HomePage";
import ProjectPage from "@/components/Pages/ProjectPage";
import ResumePage from "@/components/Pages/ResumePage";
import { useState } from "react";
import {
  IconHome,
  IconUser,
  IconAddressBook,
  IconBrandGithub,
} from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";

export default function Home() {
  const [currPage, setcurrPage] = useState("home");

  const navItems = [
    {
      title: "Home",
      icon: <IconHome className="h-5 w-5" />,
      onClick: () => {
        setcurrPage("home");
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    },
    {
      title: "Resume",
      icon: <IconUser className="h-5 w-5" />,
      onClick: () => {
        setcurrPage("resume");
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    },
    {
      title: "Projects",
      icon: <IconBrandGithub className="h-5 w-5" />,
      onClick: () => {
        setcurrPage("projects");
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    },
    {
      title: "Contact",
      icon: <IconAddressBook className="h-5 w-5" />,
      onClick: () => {
        setcurrPage("contact");
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    },
  ];

  return (
    <div className="flex  justify-center relative flex-col rounded-2xl border-solid border-[1px] border-[#3C3C3C] bg-[#1E1E1F] ">
      <div className="bg-[#282829] md:flex hidden text-[16px] font-semibold opacity-80 gap-8 pl-10 pr-10 absolute top-0 right-0  justify-between items-center md:p-5 rounded-bl-2xl rounded-tr-2xl border-solid border-[1px] border-[#3C3C3C]">
        <p
          className={`${
            currPage === "home" && "text-[#FFDB6E]"
          } cursor-pointer`}
          onClick={() => {
            setcurrPage("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          About
        </p>
        <p
          className={`${
            currPage === "resume" && "text-[#FFDB6E]"
          } cursor-pointer`}
          onClick={() => {
            setcurrPage("resume");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Resume
        </p>
        <p
          className={`${
            currPage === "projects" && "text-[#FFDB6E]"
          } cursor-pointer`}
          onClick={() => {
            setcurrPage("projects");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Projects
        </p>
        <p
          className={`${
            currPage === "contact" && "text-[#FFDB6E]"
          } cursor-pointer`}
          onClick={() => {
            setcurrPage("contact");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Contact
        </p>
      </div>
      {currPage === "home" && <HomePage />}
      {currPage === "resume" && <ResumePage />}
      {currPage === "projects" && <ProjectPage />}
      {currPage === "contact" && <ContactPage />}

      <FloatingDock
        items={navItems}
        desktopClassName="fixed bottom-4 left-1/2 -translate-x-1/2"
        mobileClassName="fixed bottom-4 right-4 z-50"
      />
    </div>
  );
}
