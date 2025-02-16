import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { IoBookOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { TracingBeam } from "../ui/tracing-beam";

function ResumePage() {
  return (
    <div className="p-8  ">
      <TextGenerateEffect
        className="text-4xl font-[600]"
        duration={3}
        filter={false}
        words={"Resume"}
      />
      <hr className="bg-[#FFDB6E] p-1 mt-4 mb-6 rounded-3xl  w-[6%]" />

      <div className="text-2xl flex items-center gap-4 font-bold mt-8 mb-4 ">
        <div className=" border-l-[2px] border-t-[2px] bg-[#202022]  border-[#ffdb6e1e] p-3 rounded-xl ">
          <IoBookOutline className="text-[#FFDB6E]" />
        </div>

        <div>Education</div>
      </div>

      <div className=" flex  ml-4 items-center gap-8   mb-8">
        <div className=" border-[4px] flex h-full items-start  p-0 border-[#ffdb6e6c] rounded-full">
          <div className="rounded-full p-1 bg-[#FFDB6E]"></div>
        </div>

        <div className="ml-1 text-[15px] flex flex-col gap-1">
          <div className=" font-bold"> KIET Group of Institutions (KIET)</div>
          <div className=" font-medium text-[#FFDB6E]"> 2024-2028</div>
          <div className=" font-normal text-[#d6d6d6] ">
            {" "}
            BTECH - Computer Science
          </div>
        </div>
      </div>

      <div className="text-2xl flex items-center gap-4 font-bold mt-8 mb-4 ">
        <div className=" border-l-[2px] border-t-[2px] bg-[#202022]  border-[#ffdb6e1e] p-3 rounded-xl ">
          <IoIosStarOutline className="text-[#FFDB6E]" />
        </div>

        <div>Experience</div>
      </div>

      <div className=" flex  ml-4 items-center gap-8 mb-8 ">
        <div className=" border-[4px] flex h-full items-start  p-0 border-[#ffdb6e6c] rounded-full">
          <div className="rounded-full p-1 bg-[#FFDB6E]"></div>
        </div>

        <div className="ml-1 text-[15px] flex flex-col gap-1">
          <div className=" font-bold"> Full Stack Developer </div>
          <div className=" font-medium text-[#FFDB6E]"> 2022-Present</div>
          <div className=" font-normal text-[#d6d6d6] ">
            Working for college clubs, freelance, mostlty worked with
            javascript/typescript.
          </div>
        </div>
      </div>

      <div className="text-2xl flex items-center gap-4 font-bold mt-8 mb-4 ">
        <div>My Skills</div>
      </div>

      <div className="  flex flex-col  mt-6 gap-6  ">
        <TracingBeam className="   ml-16  ">
          <div className="ml-1 text-[15px] flex flex-col gap-1">
            <div className=" font-bold"> Web Development </div>
            <div className=" font-normal w-[80%] text-[#d6d6d6]">
              Html, CSS, JavaScript, TypeScript, Tailwind CSS, Reactjs, NEXTjs,
              Nodejs, Expressjs, MongoDB, Prisma, PostgreSQL, WebSockets.
            </div>
          </div>
        </TracingBeam>

        <TracingBeam className="   ml-16  ">
          <div className="ml-1 text-[15px] flex flex-col gap-1">
            <div className=" font-bold"> Tools </div>
            <div className=" font-light text-[#d6d6d6] ">
              Git, GitHub, VsCode, Postman, Figma, Canva, WordPress.
            </div>
          </div>
        </TracingBeam>

        <TracingBeam className="   ml-16 pb-6 ">
          <div className="ml-1 text-[15px] flex flex-col gap-1">
            <div className=" font-bold"> Programing Lanuages</div>
            <div className=" font-normal text-[#d6d6d6] ">
              Java, Python, C, JavaScript, TypeScript.
            </div>
          </div>
        </TracingBeam>
      </div>

      {/* <FeaturesSection /> */}
    </div>
  );
}

export default ResumePage;
