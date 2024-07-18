import Image from "next/image";
import Arrow from "../assets/icons/arrow-w.svg";
import cursor from "../assets/images/cursor.png";
import message from "../assets/images/message.png";

export const Hero = () => {
  return (
    <div className=" text-white !bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-hidden">
      <div className="absolute sm:w-[1536px] lg:w-[2400px] lg:h-[1200px] sm:h-[768px] h-[375px] w-[750px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,_#000_82%,_#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)] "></div>
      <div className="container relative">
        <div className="flex   items-center justify-center bo">
          <a
            href="#"
            className="inline-flex gap-3  border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text [-webkit-background-clip:text] font-semibold">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <Arrow />
            </span>
          </a>
        </div>

        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold -tracking-tighter text-center mt-8 inline-flex">
              One Task
              <br />
              at a Time
            </h1>

            <Image
              src={cursor}
              alt="Cursor"
              width={200}
              height={200}
              className="absolute right-[570px] top-[108px] hidden md:inline-block"
            />
            <Image
              src={message}
              alt="Message"
              className="absolute  left-[570px] top-[80px] hidden md:inline-block"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md ">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts and celebrate your success
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <button className="py-3 px-5 bg-white text-black rounded-lg">
            Get free now
          </button>
        </div>
      </div>
    </div>
  );
};
