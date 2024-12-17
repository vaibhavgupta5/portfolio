import {
  Github,
  House,
  Instagram,
  Linkedin,
  Send,
  Twitter,
} from "lucide-react";
import React from "react";

function LeftBio() {
  return (
    <div className="flex gap-6 w-full">
      <div className="flex flex-col relative gap-4">
        <div className="flex gap-4 group transition-all ease-in-out duration-[1000]   text-black  ">
          <House className="cursor-pointer border-[1px] border-[#B8BEBF] border-solid  w-16 h-16 p-2 bg-[#ffae00] rounded-md" />
          <div className="cursor-pointer absolute left-[5rem] w-[9rem] h-16 p-2  bg-[#ffae00] text-[24px] font-[600] transition-all ease-in-out duration-[1000] rounded-md  justify-center items-center hidden group-hover:flex">
            <p>Home</p>
          </div>
        </div>

        <div className="flex gap-4 group  transition-all ease-in-out duration-[1000]   text-black ">
          <House className="cursor-pointer  w-16 h-16 p-2 group-hover:bg-[#ffae00] text-white group-hover:text-black bg-[#203536] rounded-md border-[1px] border-[#B8BEBF] border-solid" />
          <div className="cursor-pointer absolute left-[5rem] w-[9rem] h-16 p-2  bg-[#ffae00] text-[24px] font-[600] transition-all ease-in-out duration-[1000] rounded-md  justify-center items-center hidden group-hover:flex">
            <p>Home</p>
          </div>
        </div>

        <div className="flex gap-4 group transition-all ease-in-out duration-[1000]   text-black ">
          <House className="cursor-pointer  w-16 h-16 p-2 group-hover:bg-[#ffae00] text-white group-hover:text-black bg-[#203536] rounded-md border-[1px] border-[#B8BEBF] border-solid" />
          <div className="cursor-pointer absolute left-[5rem] w-[9rem] h-16 p-2  bg-[#ffae00] text-[24px] font-[600] transition-all ease-in-out duration-[1000] rounded-md  justify-center items-center hidden group-hover:flex">
            <p>Home</p>
          </div>
        </div>

        <div className="flex gap-4 group transition-all ease-in-out duration-[1000]   text-black ">
          <House className="cursor-pointer  w-16 h-16 p-2 group-hover:bg-[#ffae00] text-white group-hover:text-black bg-[#203536] rounded-md border-[1px] border-[#B8BEBF] border-solid" />
          <div className="cursor-pointer absolute left-[5rem] w-[9rem] h-16 p-2  bg-[#ffae00] text-[24px] font-[600] transition-all ease-in-out duration-[1000] rounded-md  justify-center items-center hidden group-hover:flex">
            <p>Home</p>
          </div>
        </div>

        <div className="flex gap-4 group transition-all ease-in-out duration-[1000]   text-black ">
          <House className="cursor-pointer  w-16 h-16 p-2 group-hover:bg-[#ffae00] text-white group-hover:text-black bg-[#203536] rounded-md border-[1px]  border-[#B8BEBF] border-solid" />
          <div className="cursor-pointer w-[9rem] h-16 p-2  bg-[#ffae00] text-[24px] absolute left-[5rem] font-[600] transition-all ease-in-out duration-[1000] rounded-md  justify-center items-center hidden group-hover:flex">
            <p>Home</p>
          </div>
        </div>

        <div className="flex gap-4 group transition-all ease-in-out duration-[1000]   text-black ">
          <House className="cursor-pointer  w-16 h-16 p-2 group-hover:bg-[#ffae00] text-white group-hover:text-black bg-[#203536] rounded-md border-[1px] border-[#B8BEBF] border-solid" />
          <div className="cursor-pointer w-[9rem] h-16 p-2  bg-[#ffae00] text-[24px] font-[600] transition-all ease-in-out duration-[1000] rounded-md absolute left-[5rem]  justify-center items-center hidden group-hover:flex">
            <p>Home</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[100%] gap-4 h-[80vh] bg-[#203536]  p-4 rounded-md">
        <div className="flex flex-col w-[100%] gap-4 h-[30vh] bg-white p-4 rounded-md"></div>
        <p className="text-[32px] font-[600] text-center">Vaibhav Gupta</p>
        <p className="text-[16px] text-center text-[#d5d6d6]">
          Hi, I’m Alex, a dedicated UI/UX Designer with 10 years of experience
          creating meaningful digital experiences.
        </p>

        <div className="flex gap-4 justify-center items-center">
          <Twitter className="w-14 hover:bg-[#ffae00] transition-all ease-in-out duration-500 border-[1px] border-[#B8BEBF] border-solid h-14 rounded-full p-4 cursor-pointer" />
          <Linkedin className="w-14 transition-all hover:bg-[#ffae00] ease-in-out duration-500 border-[1px] border-[#B8BEBF] border-solid h-14 rounded-full p-4 cursor-pointer" />
          <Github className="w-14 transition-all hover:bg-[#ffae00] ease-in-out duration-500 border-[1px] border-[#B8BEBF] border-solid h-14 rounded-full p-3 cursor-pointer" />
          <Instagram className="w-14 transition-all ease-in-out duration-500 border-[1px] hover:bg-[#ffae00] border-[#B8BEBF] border-solid h-14 rounded-full p-3 cursor-pointer" />
        </div>

        <button className="text-[20px] border-[1px] border-[#ffae00] border-solid hover:bg-transparent hover:border-[#B8BEBF] hover:text-white bg-[#ffae00] transition-all ease-in-out duration-[500ms] text-black p-2 rounded-full pr-1 pl-1 font-[600] flex justify-center items-center gap-1">
          DOWNLOAD CV
          <Send className="p-1" />{" "}
        </button>
      </div>
    </div>
  );
}

export default LeftBio;
