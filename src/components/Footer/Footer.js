import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import {
  RiTwitterXFill
} from "react-icons/ri";
import { TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="text-white flex flex-col md:flex-row justify-evenly bg-[#000300] bg-opacity-80 h-[100vh] md:h-auto border-t border-t-white border-opacity-10 max-w-full mx-auto p-4">
      <img
        src="logo2.png"
        alt="logo"
        className="p-2 md:p-4 w-[150px] mx-auto h-auto md:w-auto md:h-[150px] md:my-auto md:mx-0"
      />
      <div className="flex flex-col mt-2 md:mt-6">
        <p className="text-md xs:text-lg font-bold p-2">Explore</p>
        <Link
          to="nav"
          spy={true}
          smooth={true}
          offset={0}
          duration={2800}
        >
        <p className=" text-sm xs:text-md p-2 hover:text-[#7EC8E3] duration-400">Home</p>
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={2100}
        >
        <p className=" text-sm xs:text-md p-2 hover:text-[#7EC8E3] duration-400">About</p>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={1400}
        >
        <p className=" text-sm xs:text-md p-2 hover:text-[#7EC8E3] duration-400">Projects</p>
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
        <p className=" text-sm xs:text-md p-2 hover:text-[#7EC8E3] duration-400">Contact</p>
        </Link>
      </div>
      <div className="flex flex-col mt-2 md:mt-6">
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
      <div className="flex flex-col mt-2 md:mt-6">
        <p className="text-md xs:text-lg font-bold p-2">Connect</p>
        <div className="flex flex-row md:flex-col">
          <a
            href="https://github.com/chaitanya-bhargava"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub
              size={40}
              className="m-2  hover:scale-125 ease-in-out duration-500 w-[30px] h-[30px] xs:w-[40px] xs:h-[40px]"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/chaitanya-bhargava-192b5922a/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin
              size={40}
              className="m-2  hover:scale-125 ease-in-out duration-500 w-[30px] h-[30px] xs:w-[40px] xs:h-[40px]"
            />
          </a>
          <a
            href="https://www.instagram.com/_chaitanya.03/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram
              size={40}
              className="m-2  hover:scale-125 ease-in-out duration-500 w-[30px] h-[30px] xs:w-[40px] xs:h-[40px]"
            />
          </a>
          <a
            href="https://x.com/cheenu_123"
            target="_blank"
            rel="noreferrer"
          >
            <RiTwitterXFill
              size={40}
              className="m-2  hover:scale-125 ease-in-out duration-500 w-[30px] h-[30px] xs:w-[40px] xs:h-[40px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
