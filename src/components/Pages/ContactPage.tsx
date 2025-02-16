import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

function ContactPage() {
  return (
    <div className="p-8  ">
      <TextGenerateEffect
        className="text-4xl font-[600]"
        duration={3}
        filter={false}
        words={"Contact Me"}
      />
      <hr className="bg-[#FFDB6E] p-1 mt-4 mb-6 rounded-3xl  w-[6%]" />
    </div>
  );
}

export default ContactPage;
