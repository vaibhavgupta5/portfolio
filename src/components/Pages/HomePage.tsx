import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import HomeCards from "../HomeCards";

function HomePage() {
  return (
    <div className="md:p-8 p-6 ">
      <TextGenerateEffect
        className="text-4xl font-[600]"
        duration={2}
        filter={false}
        words={"About Me"}
      />
      <hr className="bg-[#FFDB6E] p-1 mt-2 md:mt-4 md:mb-6 mb-2 rounded-3xl w-[16%] md:w-[6%]" />
      <p className="text-[15px] mt-4 text-[#d6d6d6]">
        Hi, I'm Vaibhav! I'm a full-stack developer with 2 years of development
        experience, specializing in Next.js and the MERN stack to build scalable
        and high-performance web applications. I have successfully delivered 5+
        freelance projects, working with clients to create tailored solutions
        that meet their business needs.
        <br />
        <br />
        My expertise spans both frontend and backend development, ensuring
        seamless user experiences and efficient server-side performance. I have
        a strong grasp of real-time applications, leveraging WebSockets and APIs
        to build interactive platforms.
        <br />
        <br />
        I'm also passionate about open-source contributions and continuously
        learning new technologies, particularly in React, Next.js, Node.js, and
        TypeScript. With a problem-solving mindset and a drive for innovation, I
        aim to create impactful software solutions that enhance user experiences
        and drive digital transformation.
      </p>

      <div className="text-2xl font-bold mt-8 mb-6">What Im doing</div>

      <div className="grid mb-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
        <HomeCards
          heading="Web design"
          description="A cutting-edge, professionally crafted design of the highest quality."
          icon="CgWebsite"
        />
        <HomeCards
          heading="Web development
"
          description="Professional-grade website development with top-tier quality."
          icon="CgCodeSlash"
        />
        <HomeCards
          heading="WordPress"
          description="High-quality WordPress development at a professional level."
          icon="FaWordpressSimple"
        />
        <HomeCards
          heading="Open Source"
          description="Gaining knowledge and making contributions to open-source projects."
          icon="FaGithub"
        />
      </div>
    </div>
  );
}

export default HomePage;
