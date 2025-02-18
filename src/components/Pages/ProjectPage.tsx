"use client";
import React, { useState } from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Image from "next/image";
import { IoLogoGithub, IoMdLink } from "react-icons/io";

const projects = [
  {
    title: "CareLink Dashboard",
    stack: ["NextJs", "SocketIO", "GenAI"],
    image: "/carelink.jpg",
    links: {
      github: "https://github.com/vaibhavgupta5/Patient_Dashboard",
      website: "",
    },
  },

  {
    title: "URL Shortner",
    stack: ["NextJs", "MongoDB"],
    image: "/url.jpg",
    links: {
      github: "https://github.com/vaibhavgupta5/URL-Shortner",
      website: "https://oklinkify.vercel.app/",
    },
  },

  {
    title: "IdeaTEX",
    stack: ["React", "Framer Motion"],
    image: "/ideatex.jpg",
    links: {
      github: "https://github.com/vaibhavgupta5/ideaTEX-React",
      website: "https://e-cell.in/ideatex/",
    },
  },

  {
    title: "Biloger CMS",
    stack: ["NextJs", "QuillJS", "Clerk"],
    image: "/blogger.jpg",
    links: {
      github: "https://github.com/vaibhavgupta5/Biloger-CMS-Platform",
      website: "",
    },
  },

  {
    title: "Anonimy NGL",
    stack: ["NextJs", "NextAuth"],
    image: "/ngl.jpg",
    links: {
      github: "https://github.com/vaibhavgupta5/Anonimy-NGL",
      website: "https://anonimy-ngl.vercel.app/",
    },
  },

  {
    title: "Expensio Tracker",
    stack: ["NextJs", "ShadCN"],
    image: "/expense.jpg",
    links: {
      github: "https://github.com/vaibhavgupta5/Expensio--Expense-Tracker",
      website: "https://expensio-expense-tracker.vercel.app/",
    },
  },

  {
    title: "React Weather App",
    stack: ["React", "Weather API"],
    image: "/weather.jpg",
    links: {
      github: "https://github.com/vaibhavgupta5/React-Weather-App",
      website: "https://react-weather-app-vaibhavgupta5.netlify.app/",
    },
  },

  {
    title: "Kanban Board",
    stack: ["HTML", "CSS", "JS"],
    image: "/kanban.jpg",
    links: {
      github: "https://github.com/vaibhavgupta5/KanBan-Board---JS",
      website: "https://calculator-vaibhavgupta5.netlify.app/",
    },
  },

  {
    title: "MERN Login Form",
    stack: ["React", "AuthJs"],
    image: "/login.jpg",
    links: {
      github: "https://github.com/vaibhavgupta5/MERN-Login-Form",
      website: "",
    },
  },

  {
    title: "Basic Myntra Clone",
    stack: ["React", "Local Storage"],
    image: "/myntra.jpg",
    links: {
      github: "https://github.com/vaibhavgupta5/Basic-Myntra-Clone---React",
      website: "",
    },
  },

  {
    title: "Basic Expense Tracker",
    stack: ["HTML", "CSS", "JS"],
    image: "/basix-expense.jpg",
    links: {
      github: "https://github.com/vaibhavgupta5/Basic-Myntra-Clone---React",
      website: "",
    },
  },

  {
    title: "JS Calculator",
    stack: ["HTML", "CSS", "JS"],
    image: "/calc.jpg",
    links: {
      github: "https://github.com/vaibhavgupta5/Expense-Tracker-Clg",
      website: "https://expense-tracker-clg.netlify.app/",
    },
  },
];

const ITEMS_PER_PAGE = 6;

function ProjectPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const paginatedProjects = projects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const redirectTo = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="p-6 md:p-8  ">
      <TextGenerateEffect
        className="text-4xl font-[600]"
        duration={2}
        filter={false}
        words={"Projects"}
      />
      <hr className="bg-[#FFDB6E] p-1 mt-2 md:mt-4 md:mb-6 mb-6 rounded-3xl w-[16%] md:w-[6%] " />

      <div className="grid mb-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-[#222224]   group relative flex flex-col gap-1 p-4 rounded-xl border-t-[2px] border-l-[2px] border-[#3C3C3C]"
          >
            <div className={`relative w-full group h-full  mb-4`}>
              <div
                className={`absolute gap-2 ease-in-out opacity-0 transition-opacity group-hover:opacity-100 duration-300 inset-0 m-auto items-center justify-center hidden group-hover:flex  w-12 h-12`}
              >
                {project.links.website !== "" && (
                  <div
                    onClick={() => redirectTo(project.links.website)}
                    className="p-3 cursor-pointer border-[#3C3C3C] border-[2px] rounded-full bg-[#2B2B2C] transition-transform duration-300 ease-in-out hover:scale-110  animate-fadeIn"
                  >
                    <IoMdLink className="text-2xl" />
                  </div>
                )}

                <div
                  onClick={() => redirectTo(project.links.github)}
                  className="p-3 cursor-pointer rounded-full border-[#3C3C3C] border-[2px] bg-[#2B2B2C] transition-transform duration-300 ease-in-out hover:scale-110  animate-fadeIn"
                >
                  <IoLogoGithub className="text-2xl" />
                </div>
              </div>

              <Image
                alt="proj1"
                src={project.image}
                width={200}
                height={200}
                className="w-full h-full rounded-xl  "
              />
            </div>

            <div className="text-xl  font-semibold">{project.title}</div>
            <div className="flex gap-1 flex-wrap mt-2">
              <p className="text-[15px] bg-[#2B2B2C]  pr-3 pl-3 rounded-md  text-[#d6d6d6]">
                {project.stack[0]}
              </p>{" "}
              <p className="text-[15px] bg-[#2B2B2C]  pr-3 pl-3 rounded-md  text-[#d6d6d6]">
                {project.stack[1]}
              </p>{" "}
              {project.stack[2] && (
                <p className="text-[15px] bg-[#2B2B2C]  pr-3 pl-3 rounded-md  text-[#d6d6d6]">
                  {project.stack[2]}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <button
          className="px-3 text-white py-1 border-[#3C3C3C] border-t-[2px] border-l-[2px] rounded-lg bg-[#2B2B2C] disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="text-sm font-medium">
          {currentPage} / {totalPages}
        </span>
        <button
          className="px-3 py-1 text-black  rounded-lg border-[#3C3C3C] border-t-[2px] border-l-[2px] bg-[#FFDB6E] disabled:opacity-50"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProjectPage;
