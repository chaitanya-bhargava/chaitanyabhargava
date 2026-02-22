import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-white bg-gradient-to-br from-[#0a0a2e]/60 via-[#000300]/80 to-[#0d1117]/60 border-t border-t-white border-opacity-10 max-w-full mx-auto p-8"
    >
      <div className="flex flex-col md:flex-row justify-evenly">
      <img
        src="logo2.png"
        alt="logo"
        className="p-2 md:p-4 w-[150px] mx-auto h-auto md:w-auto md:h-[150px] md:my-auto md:mx-0"
      />
      <div className="flex flex-col mt-4 md:mt-6">
        <p className="text-md xs:text-lg font-bold p-2">Explore</p>
        <Link to="hero" spy={true} smooth={true} offset={0} duration={2800}>
          <p className="text-sm xs:text-md p-2 hover:text-[#7EC8E3] duration-300 cursor-pointer">
            Home
          </p>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-112} duration={2100}>
          <p className="text-sm xs:text-md p-2 hover:text-[#7EC8E3] duration-300 cursor-pointer">
            About
          </p>
        </Link>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={-112}
          duration={1800}
        >
          <p className="text-sm xs:text-md p-2 hover:text-[#7EC8E3] duration-300 cursor-pointer">
            Experience
          </p>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-112}
          duration={1400}
        >
          <p className="text-sm xs:text-md p-2 hover:text-[#7EC8E3] duration-300 cursor-pointer">
            Projects
          </p>
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-112}
          duration={700}
        >
          <p className="text-sm xs:text-md p-2 hover:text-[#7EC8E3] duration-300 cursor-pointer">
            Contact
          </p>
        </Link>
      </div>
      <div className="flex flex-col mt-4 md:mt-6">
        <p className="text-md xs:text-lg font-bold p-2">Contact</p>
        <div className="flex items-center p-2">
          <AiOutlineMail color="white" />
          <p className="text-sm xs:text-md pl-2">
            chaitanyabhargava5@gmail.com
          </p>
        </div>
        <div className="flex items-center p-2">
          <AiOutlinePhone color="white" />
          <p className="text-sm xs:text-md pl-2">+91 9717393877</p>
        </div>
        <div className="flex items-center p-2">
          <TfiLocationPin color="white" />
          <p className="text-sm xs:text-md pl-2">Delhi, India</p>
        </div>
      </div>
      <div className="flex flex-col mt-4 md:mt-6">
        <p className="text-md xs:text-lg font-bold p-2">Connect</p>
        <a
          href="https://github.com/chaitanya-bhargava"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 p-2 hover:text-[#7EC8E3] duration-300"
        >
          <AiFillGithub className="w-[24px] h-[24px] xs:w-[30px] xs:h-[30px]" />
          <span className="text-sm xs:text-md">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/chaitanya-bhargava-192b5922a/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 p-2 hover:text-[#7EC8E3] duration-300"
        >
          <AiFillLinkedin className="w-[24px] h-[24px] xs:w-[30px] xs:h-[30px]" />
          <span className="text-sm xs:text-md">LinkedIn</span>
        </a>
        <a
          href="https://www.instagram.com/_chaitanya.03/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 p-2 hover:text-[#7EC8E3] duration-300"
        >
          <AiOutlineInstagram className="w-[24px] h-[24px] xs:w-[30px] xs:h-[30px]" />
          <span className="text-sm xs:text-md">Instagram</span>
        </a>
        <a
          href="https://x.com/cheenudotdev"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 p-2 hover:text-[#7EC8E3] duration-300"
        >
          <RiTwitterXFill className="w-[24px] h-[24px] xs:w-[30px] xs:h-[30px]" />
          <span className="text-sm xs:text-md">X (Twitter)</span>
        </a>
      </div>
      </div>
      <div className="w-full text-center mt-8 pt-6 border-t border-white border-opacity-10">
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Chaitanya Bhargava. All rights
          reserved.
        </p>
      </div>
    </motion.div>
  );
};

export default Footer;
