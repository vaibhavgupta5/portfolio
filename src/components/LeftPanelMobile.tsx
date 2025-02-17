'use client'
import Image from "next/image";
import React, { useState } from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import {
  IoCalendarClearOutline,
  IoMailOutline,
  IoPinOutline,
} from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiTwitterXLine,
} from "react-icons/ri";

function LeftPanelMobile() {

  const redirectTo = (url: string) => {
    window.open(url, "_blank");
  }

  const [openView, setopenView] = useState(false)

  return (
    <div className="flex items-center relative pt-8 pb-8   justify-center flex-col rounded-2xl border-solid border-[1px] border-[#3C3C3C] p-4 bg-[#1E1E1F] ">
      <div className="flex justify-center items-center gap-4">
      <Image
        alt="image-pfp"
        src="https://avatars.githubusercontent.com/u/109146556?v=4"
        width={40}
        height={40}
        className="rounded-xl"
      />
      <div className="text-white text-xl font-bold">Vaibhav Gupta</div>
      </div>
      
      <div className="text-[#B8BEBF] text-sm bg-[#2B2B2C] pl-4 mt-4 rounded-md pr-4 p-1 font-[500]">
        Full Stack Developer
      </div>

    <button className="p-3 absolute top-0 right-0 bg-[#2B2B2C] text-[#FFDB6E] rounded-bl-xl  rounded-tr-xl " onClick={()=> setopenView(!openView) } ><MdKeyboardArrowDown />
    </button>

      <div className={`${openView === true ? "flex" : "hidden"}`} >
      <hr className="text-[#3C3C3C] mt-4 b-4 opacity-50 w-full" />

      <div className="flex flex-col mt-6 gap-4">
        <div className="flex gap-4  items-center">
          <div className=" border-l-[2px] border-t-[2px] bg-[#202022]  border-[#ffdb6e1e] p-3 rounded-xl ">
            <IoMailOutline className="text-[#FFDB6E]" />
          </div>
          <div>
            <div className="text-[#B8BEBF] text-[11px] font-semibold">
              EMAIL
            </div>
            <div className="text-[#FFFFFF] opacity-80 text-sm">
              githubvaibhav5@gmail.com
            </div>
          </div>
        </div>

        <div className="flex gap-4  items-center">
          <div className=" border-l-[2px] border-t-[2px] bg-[#202022]  border-[#ffdb6e1e] p-3 rounded-xl ">
            <IoIosPhonePortrait className="text-[#FFDB6E]" />
          </div>
          <div>
            <div className="text-[#B8BEBF] text-[11px] font-semibold">
              PHONE
            </div>
            <div className="text-[#FFFFFF] opacity-80 text-sm">
              +91 991925 3845
            </div>
          </div>
        </div>

        <div className="flex gap-4  items-center">
          <div className=" border-l-[2px] border-t-[2px] bg-[#202022]  border-[#ffdb6e1e] p-3 rounded-xl  ">
            <IoCalendarClearOutline className="text-[#FFDB6E]" />
          </div>
          <div>
            <div className="text-[#B8BEBF] text-[11px] font-semibold">
              BIRTHDAY
            </div>
            <div className="text-[#FFFFFF] opacity-80 text-sm">9 July 2005</div>
          </div>
        </div>

        <div className="flex gap-4  items-center">
          <div className=" border-l-[2px] border-t-[2px] bg-[#202022]  border-[#ffdb6e1e] p-3 rounded-xl  ">
            <IoPinOutline className="text-[#FFDB6E]" />
          </div>
          <div>
            <div className="text-[#B8BEBF] text-[11px] font-semibold">
              ADDRESS
            </div>
            <div className="text-[#FFFFFF] opacity-80 text-sm">
              Ghaziabad, Uttar Pradesh
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-3 justify-center text-lg text-[#cecece] items-center">
        <RiGithubLine onClick={() => redirectTo("https://github.com/vaibhavgupta5")} className="cursor-pointer" />
          <RiTwitterXLine onClick={() => redirectTo("https://x.com/vaixbhav_")} className="cursor-pointer" />
          <RiLinkedinBoxLine onClick={() => redirectTo("https://www.linkedin.com/in/vaibhav9705/")} className="cursor-pointer" />
          <RiInstagramLine onClick={() => redirectTo("https://www.instagram.com/vaixbhav._/")} className="cursor-pointer" />
        </div>
      </div>
      </div>

    </div>
  );
}

export default LeftPanelMobile;
