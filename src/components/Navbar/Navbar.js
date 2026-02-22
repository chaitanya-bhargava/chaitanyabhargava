import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Squash as Hamburger } from "hamburger-react";
import { motion, useScroll, useSpring } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="sticky top-0 z-50">
      <motion.div
        style={{ scaleX }}
        className="scroll-progress h-[3px] bg-gradient-to-r from-[#7EC8E3] to-[#79A9F5] w-full"
      />
      <div className="bg-[#000300] bg-opacity-80 backdrop-blur-md w-full border-b border-b-white border-opacity-10">
        <div
          id="nav"
          className="flex justify-between items-center h-28 max-w-[1240px] mx-auto px-4 text-white font-normal text-md md:text-xl"
        >
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
            <img
              src="logo2.png"
              alt="logo"
              className="p-4 w-[100px] xs:w-[120px] md:w-[150px] cursor-pointer"
            />
          </Link>
          <ul className="uppercase hidden md:flex">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeClass="!text-[#7EC8E3]"
            >
              <li className="p-4 hover:text-[#7EC8E3] duration-300 cursor-pointer">
                Home
              </li>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-112}
              duration={700}
              activeClass="!text-[#7EC8E3]"
            >
              <li className="p-4 hover:text-[#7EC8E3] duration-300 cursor-pointer">
                About
              </li>
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-112}
              duration={800}
              activeClass="!text-[#7EC8E3]"
            >
              <li className="p-4 hover:text-[#7EC8E3] duration-300 cursor-pointer">
                Experience
              </li>
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-112}
              duration={1000}
              activeClass="!text-[#7EC8E3]"
            >
              <li className="p-4 hover:text-[#7EC8E3] duration-300 cursor-pointer">
                Projects
              </li>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-112}
              duration={1400}
              activeClass="!text-[#7EC8E3]"
            >
              <li className="p-4 hover:text-[#7EC8E3] duration-300 cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
          <div className="z-50 block md:hidden">
            <Hamburger toggled={nav} toggle={setNav} size={30} duration={0.5} />
          </div>

          {nav && (
          <div
            className="z-40 md:hidden fixed right-0 top-0 text-right w-[50%] h-full pt-24 border-l border-l-white border-opacity-10 bg-[#000300] bg-opacity-90 backdrop-blur-md animate-[slideIn_0.3s_ease-out]"
          >
            <ul className="uppercase p-4">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                activeClass="!text-[#7EC8E3]"
                onClick={() => setNav(false)}
              >
                <li className="p-4 border-b border-b-gray-600 hover:text-[#7EC8E3] duration-300">
                  Home
                </li>
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-112}
                duration={700}
                activeClass="!text-[#7EC8E3]"
                onClick={() => setNav(false)}
              >
                <li className="p-4 border-b border-b-gray-600 hover:text-[#7EC8E3] duration-300">
                  About
                </li>
              </Link>
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-112}
                duration={700}
                activeClass="!text-[#7EC8E3]"
                onClick={() => setNav(false)}
              >
                <li className="p-4 border-b border-b-gray-600 hover:text-[#7EC8E3] duration-300">
                  Experience
                </li>
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-112}
                duration={700}
                activeClass="!text-[#7EC8E3]"
                onClick={() => setNav(false)}
              >
                <li className="p-4 border-b border-b-gray-600 hover:text-[#7EC8E3] duration-300">
                  Projects
                </li>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-112}
                duration={700}
                activeClass="!text-[#7EC8E3]"
                onClick={() => setNav(false)}
              >
                <li className="p-4 border-b border-b-gray-600 hover:text-[#7EC8E3] duration-300">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
