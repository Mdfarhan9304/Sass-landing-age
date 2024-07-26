import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center sm:text-6xl  text-5xl font-bold tracking-tighter">
          Intuitive interface
        </h2>
        <p className="max-w-xl mx-auto text-xl text-center text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your success, one task
          at a time
        </p>
        <Image src={appScreen} alt="The product image" className="mt-14 mx-auto" />
      </div>
    </div>
  );
};
