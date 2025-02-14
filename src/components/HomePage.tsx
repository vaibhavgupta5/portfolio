import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

function HomePage() {
  return (
    <div className="p-8">
      <TextGenerateEffect className="text-4xl font-[600]" duration={3} filter={false} words={"About Me"} />
      <hr className="bg-[#FFDB6E] p-1 mt-4 mb-6 rounded-3xl  w-[6%]" />
      <p className="text-[16px] mt-4 text-[#d6d6d6]">
        Hi, Tejas here! Im a full-stack developer with a strong foundation in
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
    </div>
  );
}

export default HomePage;
