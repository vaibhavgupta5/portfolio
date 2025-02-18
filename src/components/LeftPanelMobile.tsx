"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [openView, setOpenView] = useState(false);

  return (
    <div className="flex  relative pt-8 pb-8 justify-center flex-col rounded-2xl border-solid border-[1px] border-[#3C3C3C] p-6 bg-[#1E1E1F]">
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

      <div className="text-[#B8BEBF] flex items-center justify-center text-sm bg-[#2B2B2C] pl-4 mt-4 rounded-md pr-4 p-1 font-[500]">
        Full Stack Developer
      </div>

      <button
        className={`p-3 absolute top-0 right-0 bg-[#2B2B2C] text-[#FFDB6E] rounded-bl-xl rounded-tr-xl transition-transform duration-300 ${
          openView ? "rotate-180" : "rotate-0"
        }`}
        onClick={() => setOpenView(!openView)}
      >
        <MdKeyboardArrowDown />
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          openView ? "opacity-100 max-h-[500px] mt-4" : "opacity-0 max-h-0"
        }`}
      >
        <hr className="text-[#3C3C3C] opacity-50 w-full" />

        <div className="flex flex-col mt-6 gap-4">
          {[
            {
              icon: <IoMailOutline />,
              label: "EMAIL",
              value: "githubvaibhav5@gmail.com",
            },
            {
              icon: <IoIosPhonePortrait />,
              label: "PHONE",
              value: "+91 991925 3845",
            },
            {
              icon: <IoCalendarClearOutline />,
              label: "BIRTHDAY",
              value: "9 July 2005",
            },
            {
              icon: <IoPinOutline />,
              label: "ADDRESS",
              value: "Ghaziabad, Uttar Pradesh",
            },
          ].map(({ icon, label, value }, index) => (
            <div key={index} className="flex gap-4 items-center">
              <div className="border-l-[2px] border-t-[2px] bg-[#202022] border-[#ffdb6e1e] p-3 rounded-xl">
                <span className="text-[#FFDB6E]">{icon}</span>
              </div>
              <div>
                <div className="text-[#B8BEBF] text-[11px] font-semibold">
                  {label}
                </div>
                <div className="text-[#FFFFFF] opacity-80 text-sm">{value}</div>
              </div>
            </div>
          ))}

          <div className="flex gap-4 mt-3 justify-center text-lg text-[#cecece] items-center">
            <RiGithubLine
              onClick={() => redirectTo("https://github.com/vaibhavgupta5")}
              className="cursor-pointer hover:scale-110 transition-transform duration-300"
            />
            <RiTwitterXLine
              onClick={() => redirectTo("https://x.com/vaixbhav_")}
              className="cursor-pointer hover:scale-110 transition-transform duration-300"
            />
            <RiLinkedinBoxLine
              onClick={() =>
                redirectTo("https://www.linkedin.com/in/vaibhav9705/")
              }
              className="cursor-pointer hover:scale-110 transition-transform duration-300"
            />
            <RiInstagramLine
              onClick={() =>
                redirectTo("https://www.instagram.com/vaixbhav._/")
              }
              className="cursor-pointer hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftPanelMobile;
