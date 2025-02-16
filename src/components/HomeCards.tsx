import React from "react";
import { CgWebsite } from "react-icons/cg";
import { IconType } from "react-icons"; // Type for icons
import * as Icons from "react-icons/cg"; // Import icons (e.g., FontAwesome icons)
import * as Iconsx from "react-icons/fa"; // Import icons (e.g., FontAwesome icons)

interface HomeCardsProps {
  heading: string;
  description: string;
  icon: string;
}

function HomeCards({ heading, description, icon }: HomeCardsProps) {
  const IconComponent: IconType | undefined = (Icons as Record<string, IconType>)[icon] || (Iconsx as Record<string, IconType>)[icon]; // Get icon dynamically

  return (
    <div className="flex gap-4 border-t-[2px] border-l-[2px] border-[#3C3C3C] rounded-xl bg-[#222224] p-6">
      {IconComponent ? (
        <IconComponent className="text-6xl m-0 p-0 text-[#FFDB6E]" />
      ) : (
        <CgWebsite className="text-6xl m-0 p-0 text-[#FFDB6E]" />
      )}
      <div className="flex flex-col gap-2">
        <div className="text-lg font-bold">{heading}</div>
        <p className="text-[#d6d6d6] text-[15px]">{description}</p>
      </div>
    </div>
  );
}

export default HomeCards;
