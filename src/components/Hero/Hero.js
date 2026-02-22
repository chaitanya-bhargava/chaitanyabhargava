import ReactTyped from "react-typed";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

const Hero = () => {
  return (
    <div
      id="hero"
      className="text-white flex flex-col md:flex-row justify-center items-center mx-auto w-full max-w-[500px] md:max-w-[750px] lg:max-w-[1000px] h-[90vh]"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center mr-0 md:mr-5 text-center md:text-left"
      >
        <p className="font-bold text-sm xs:text-md md:text-xl p-2">Hi! I'm</p>
        <p className="font-bold text-3xl xs:text-4xl md:text-5xl p-2 shimmer-text">
          Chaitanya Bhargava
        </p>
        <div className="flex font-bold text-xl xs:text-2xl md:text-3xl p-2 justify-center md:justify-normal">
          <p>I'm a</p>
          <ReactTyped
            className="pl-2 text-[#79A9F5]"
            strings={[
              "Web Developer",
              "Frontend Developer",
              "Full Stack Developer",
            ]}
            typeSpeed={50}
            backSpeed={40}
            loop
          />
        </div>
        <div className="flex items-center mt-6 justify-center md:justify-start flex-wrap">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-112}
            duration={1400}
            className="inline-flex items-center justify-center text-[#7EC8E3] font-semibold border border-[#7EC8E3] border-opacity-40 rounded-lg px-8 py-3 xs:px-10 xs:py-4 m-2 xs:m-4 text-xs xs:text-sm md:text-base hover:bg-[#7EC8E3] hover:bg-opacity-10 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            My Projects
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-112}
            duration={700}
            className="inline-flex items-center justify-center text-[#7EC8E3] font-semibold border border-[#7EC8E3] border-opacity-40 rounded-lg px-8 py-3 xs:px-10 xs:py-4 m-2 xs:m-4 text-xs xs:text-sm md:text-base hover:bg-[#7EC8E3] hover:bg-opacity-10 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            About Me
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col w-[60%] md:w-auto items-center"
      >
        <img
          src="result.png"
          alt="chaitanya"
          className="hidden md:block md:w-full md:h-auto max-w-[400px] mx-auto object-cover"
        />
        <div className="flex p-4 mt-4 justify-evenly items-center w-full">
          <a
            href="https://github.com/chaitanya-bhargava"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#6e5494] transition-colors duration-300"
          >
            <AiFillGithub className="hover:scale-125 ease-in-out duration-500 w-[30px] h-[30px] xs:w-[40px] xs:h-[40px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/chaitanya-bhargava-192b5922a/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#0A66C2] transition-colors duration-300"
          >
            <AiFillLinkedin className="hover:scale-125 ease-in-out duration-500 w-[30px] h-[30px] xs:w-[40px] xs:h-[40px]" />
          </a>
          <a
            href="https://www.instagram.com/_chaitanya.03/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#E4405F] transition-colors duration-300"
          >
            <AiOutlineInstagram className="hover:scale-125 ease-in-out duration-500 w-[30px] h-[30px] xs:w-[40px] xs:h-[40px]" />
          </a>
          <a
            href="https://x.com/cheenudotdev"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#7EC8E3] transition-colors duration-300"
          >
            <RiTwitterXFill className="m-2 hover:scale-125 ease-in-out duration-500 w-[30px] h-[30px] xs:w-[40px] xs:h-[40px]" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
