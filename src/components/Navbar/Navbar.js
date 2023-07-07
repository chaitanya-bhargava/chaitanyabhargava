import { useState } from "react";
import { Link } from "react-scroll";
import { Squash as Hamburger } from "hamburger-react";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className=" md:bg-[#000300] md:bg-opacity-80 w-full md:border-b border-b-white border-opacity-10">
      <div
        id="nav"
        className="flex justify-between items-center h-28 max-w-[1240px] mx-auto px-4 text-white text-md md:text-xl z-40"
      >
        <img
          src="logo.png"
          alt="logo"
          className=" p-4 w-[100px] xs:w-[120px] md:w-[150px]"
        />
        <ul className=" uppercase hidden md:flex">
          {/* <Link to="nav" spy={true} smooth={true} offset={0} duration={700}><li className=" p-4 cursor-pointer"> Home </li></Link>  */}
          <Link to="about" spy={true} smooth={true} offset={0} duration={700}>
            <li className=" p-4 cursor-pointer"> About </li>
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
          >
            <li className=" p-4 cursor-pointer"> Projects </li>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={0} duration={700}>
            <li className=" p-4 cursor-pointer"> Contact </li>
          </Link>
        </ul>
        <div className="z-50 cursor-pointer block md:hidden">
          <Hamburger toggled={nav} toggle={setNav} size={30} duration={0.5} />
        </div>

        <div
          className={
            nav
              ? "z-40 block md:hidden fixed right-0 top-0 text-right w-[50%] border-l border-l-white border-opacity-10 h-full pt-24 ease-out duration-500 bg-[#000300] bg-opacity-80"
              : "z-40 block md:hidden fixed top-0 text-right w-[50%] border-l border-l-white border-opacity-10 h-full pt-24 right-[-100%] ease-in duration-500 bg-[#000300] bg-opacity-80"
          }
        >
          <ul className="uppercase p-4">
            {/* <li className=" p-4 border-b border-b-gray-600"> Home </li> */}
            <Link to="about" spy={true} smooth={true} offset={0} duration={700} onClick={()=>{
                setNav(false);
              }}>
              <li className="cursor-pointer p-4 border-b border-b-gray-600"> About </li>
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              onClick={()=>{
                setNav(false);
              }}
            >
              <li className="cursor-pointer p-4 border-b border-b-gray-600"> Projects </li>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              onClick={()=>{
                setNav(false);
              }}
            >
              <li className="cursor-pointer p-4 border-b border-b-gray-600"> Contact </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
