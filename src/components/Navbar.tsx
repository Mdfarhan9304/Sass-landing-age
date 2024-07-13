import Image from "next/image";
import logo from "../assets/images/logosaas.png";
import Menu from "../assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container  ">
        <div className="py-4  flex items-center justify-between">
        <div className="relative h-12 w-12">
  <div 
    className="absolute top-2 bottom-0 w-full blur-md" 
    style={{ 
      background: 'linear-gradient(to right, #F87BFF, #F892CF, #FFD098, #C2F081, #2FD8FE)' 
    }}
  ></div>
  <Image 
    src={logo} 
    alt="logo" 
    className="h-12 w-12 relative" 
  />
</div>

          <div className=" text-white border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <Menu />
          </div>
          <nav className="hidden sm:flex items-center gap-6">
            <a
              href="#"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Feature
            </a>
            <a
              href="#"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Updates
            </a>
            <a
              href="#"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Help
            </a>
            <a
              href="#"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Customers
            </a>

            <button className="bg-white py-2 px-4 rounded-lg">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
