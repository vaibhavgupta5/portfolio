import Image from "next/image";
import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoMailOutline, IoPinOutline } from "react-icons/io5";

function LeftPanel() {
  return (
    <div className="flex items-center justify-center flex-col rounded-2xl border-solid border-[1px] border-gray-700 p-8 bg-[#1E1E1F] gap-4">
      <Image
        alt="image-pfp"
        src="https://avatars.githubusercontent.com/u/109146556?v=4"
        width={150}
        height={150}
        className="rounded-xl mb-3"
      />
      <div className="text-white text-2xl font-bold">Vaibhav</div>
      <div className="text-[#B8BEBF] text-sm bg-[#2B2B2C] pl-4 rounded-md pr-4 p-1 font-[500]">
        Full Stack Developer
      </div>
      <hr className="text-gray-700 mt-4 mb-4 opacity-50 w-full" />

      <div className="flex flex-col gap-8">
        <div className="flex gap-4  items-center">
          <div className=" border-l-[1px] border-t-[1px]  border-[#FFDB6E] p-3 rounded-md ">
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
          <div className=" border-l-[1px] border-t-[1px]  border-[#FFDB6E] p-3 rounded-md ">
            <IoIosPhonePortrait className="text-[#FFDB6E]" />
          </div>
          <div>
            <div className="text-[#B8BEBF] text-[11px] font-semibold">
              PHONE
            </div>
            <div className="text-[#FFFFFF] opacity-80 text-sm">
              +91 253684 5544
            </div>
          </div>
        </div>

        <div className="flex gap-4  items-center">
          <div className=" border-l-[1px] border-t-[1px]  border-[#FFDB6E] p-3 rounded-md ">
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
      </div>
    </div>
  );
}

export default LeftPanel;
