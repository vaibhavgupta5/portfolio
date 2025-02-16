import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import HomeCards from "../HomeCards";

function HomePage() {
  return (
    <div className="p-8  ">
      <TextGenerateEffect
        className="text-4xl font-[600]"
        duration={3}
        filter={false}
        words={"About Me"}
      />
      <hr className="bg-[#FFDB6E] p-1 mt-4 mb-6 rounded-3xl  w-[6%]" />
      <p className="text-[15px] mt-4 text-[#d6d6d6]">
        Hi, Vaibhav here! Im a full-stack developer with a strong foundation in
        NEXTjs. I have gained valuable experience working with the MERN stack,
        specializing in building robust and scalable web applications.
        <br />
        <br />
        Additionally, I have delved into the exciting world of blockchain
        development, exploring its potential and implementing decentralized
        solutions. My journey in blockchain has allowed me to gain expertise in
        smart contracts, decentralized applications, and secure data management.
        I thrive on challenges, continuously expanding my knowledge to stay at
        the forefront of the rapidly evolving tech landscape. With a deep
        curiosity and dedication to innovation, I strive to make a meaningful
        impact through my work.
      </p>

      <div className="text-2xl font-bold mt-8 mb-6">What Im doing</div>

      <div className="grid mb-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <HomeCards
          heading="Web design"
          description="The most modern and high-quality design made at a professional level."
          icon="CgWebsite"
        />
        <HomeCards
          heading="Web development
"
          description="High-quality development of sites at the professional level.

"
          icon="CgCodeSlash"
        />
        <HomeCards
          heading="Web design"
          description="The most modern and high-quality design made at a professional level."
          icon="okk"
        />
        <HomeCards
          heading="Web design"
          description="The most modern and high-quality design made at a professional level."
          icon="okk"
        />
      </div>
    </div>
  );
}

export default HomePage;
