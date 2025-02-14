import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <div className="flex  justify-center relative flex-col rounded-2xl border-solid border-[1px] border-gray-700  bg-[#1E1E1F] ">
     
      <div className="bg-[#282829] text-[16px] font-semibold opacity-80 gap-8 pl-10 pr-10 absolute top-0 right-0 flex justify-between items-center p-5 rounded-bl-2xl rounded-tr-2xl border-solid border-[1px] border-gray-700">
        <p className="text-[#FFDB6E] cursor-pointer">About</p>
        <p>Resume</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
      <HomePage />
    </div>
  );
}
