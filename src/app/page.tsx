"use client";
import ContactPage from "@/components/Pages/ContactPage";
import HomePage from "@/components/Pages/HomePage";
import ProjectPage from "@/components/Pages/ProjectPage";
import ResumePage from "@/components/Pages/ResumePage";
import { useState } from "react";

export default function Home() {
  const [currPage, setcurrPage] = useState("home");

  return (
    <div className="flex  justify-center relative flex-col rounded-2xl border-solid border-[1px] border-[#3C3C3C]  bg-[#1E1E1F] ">
      <div className="bg-[#282829] text-[16px] font-semibold opacity-80 gap-8 pl-10 pr-10 absolute top-0 right-0 flex justify-between items-center p-5 rounded-bl-2xl rounded-tr-2xl border-solid border-[1px] border-[#3C3C3C]">
        <p
          className={`${
            currPage === "home" && "text-[#FFDB6E]"
          } cursor-pointer`}
          onClick={() => setcurrPage("home")}
        >
          About
        </p>
        <p
          className={`${
            currPage === "resume" && "text-[#FFDB6E]"
          } cursor-pointer`}
          onClick={() => setcurrPage("resume")}
        >
          Resume
        </p>
        <p
          className={`${
            currPage === "projects" && "text-[#FFDB6E]"
          } cursor-pointer`}
          onClick={() => setcurrPage("projects")}
        >
          Projects
        </p>
        <p
          className={`${
            currPage === "contact" && "text-[#FFDB6E]"
          } cursor-pointer`}
          onClick={() => setcurrPage("contact")}
        >
          Contact
        </p>
      </div>
      {currPage === "home" && <HomePage />}
      {currPage === "resume" && <ResumePage />}
      {currPage === "projects" && <ProjectPage />}
      {currPage === "contact" && <ContactPage />}
    </div>
  );
}
