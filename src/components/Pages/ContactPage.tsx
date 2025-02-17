import React, { useRef, useState } from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { CiLocationArrow1 } from "react-icons/ci";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [err, setErr] = useState<string>("");
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; msg?: string }>({});

  const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
  const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
  const public_key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

  const validateForm = () => {
    if (!form.current) return false;

    const name = (form.current.elements.namedItem("name") as HTMLInputElement)?.value.trim();
    const email = (form.current.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const msg = (form.current.elements.namedItem("msg") as HTMLTextAreaElement)?.value.trim();

    const errors: { name?: string; email?: string; msg?: string } = {};

    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Invalid email format";
    if (!msg) errors.msg = "Message cannot be empty";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (form.current) {
      emailjs.sendForm(service_id, template_id, form.current, public_key).then(
        () => {
          console.log("SUCCESS!");
          setErr("Message Sent");

          setTimeout(() => {
            setErr("");
          }, 3000);

          form.current?.reset(); // Reset the form after successful submission
          setFormErrors({});
        },
        (error) => {
          console.log("FAILED...", error.text);
          setErr("Failed to send message");

          setTimeout(() => {
            setErr("");
          }, 3000);
        }
      );
    }
  };

  return (
    <div className="p-6 md:p-8">
      <TextGenerateEffect
        className="text-4xl font-[600]"
        duration={2}
        filter={false}
        words={"Contact Me"}
      />
      <hr className="bg-[#FFDB6E] p-1 mt-2 md:mt-4 md:mb-6 mb-6 rounded-3xl w-[16%] md:w-[6%]" />

      <form ref={form} onSubmit={sendEmail} className="gap-4 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <input
              name="name"
              placeholder="Name"
              className="p-4 rounded-xl bg-transparent border-[2px] border-[#3C3C3C]"
              type="text"
            />
            {formErrors.name && <span className="text-red-500 text-sm">{formErrors.name}</span>}
          </div>

          <div className="flex flex-col">
            <input
              name="email"
              placeholder="Email"
              className="p-4 rounded-xl bg-transparent border-[2px] border-[#3C3C3C]"
              type="text"
            />
            {formErrors.email && <span className="text-red-500 text-sm">{formErrors.email}</span>}
          </div>
        </div>

        <div className="flex flex-col">
          <textarea
            name="msg"
            rows={6}
            placeholder="Write your message here"
            className="w-full p-4 rounded-xl bg-transparent border-[2px] border-[#3C3C3C]"
          ></textarea>
          {formErrors.msg && <span className="text-red-500 text-sm">{formErrors.msg}</span>}
        </div>

        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="flex z-1 w-fit p-4 cursor-pointer gap-2 align-bottom items-center bg-[#202022] border-l-[2px] border-t-[2px] border-[#3C3C3C] text-[#FFDB6E] rounded-xl font-[600] bg-gradient-to-br hover:from-[#3C3C3C] transition-all ease-in-out duration-300 to-[#202022]"
          >
            <CiLocationArrow1 />
            Send Message
          </button>
        </div>
      </form>

      {err && <div className="text-[#FFDB6E] mt-4">{err}</div>}
    </div>
  );
}

export default ContactPage;
