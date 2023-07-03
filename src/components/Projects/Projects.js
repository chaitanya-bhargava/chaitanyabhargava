import { FaGithubSquare } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
const Projects = () => {
  const projects = [
    {
      title: "Media Player",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      websiteLink: true,
    },
    {
      title: "Media Player 2",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      websiteLink: true,
    },
    {
      title: "Media Player 3",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      websiteLink: false,
    },
  ];
  return (
    <div id="projects" className="flex flex-col items-center text-white">
      <p className="text-4xl font-bold uppercase p-4 m-4">Projects</p>
      <div className="">
        {projects.map((item) => {
          return (
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={10}
              scale={1}
              perspective={4000}
              className="flex h-[40vh] w-[80%] mx-auto bg-white rounded-lg bg-opacity-[0.05] justify-center border border-white border-opacity-20 items-center p-2 m-6"
              transitionSpeed={800}
            >
              <img
                src="proj1.png"
                className="h-[80%] m-4 rounded-2xl z-50"
                alt="thumb"
              />
              <div className="flex flex-col z-50">
                <h3 className=" text-2xl font-bold">{item.title}</h3>
                <p className="w-[90%] my-2">{item.desc}</p>
                <div className="flex items-center">
                  <FaGithubSquare className="cursor-pointer" size={65} />
                  {item.websiteLink && (
                    <a
                      href="#projects"
                      class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden tracking-tighter text-black font-bold bg-[#A8A29C] rounded-lg group p-3 m-4"
                    >
                      <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#846D62] rounded-full group-hover:w-56 group-hover:h-56"></span>
                      <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                      <span class="relative">View Website</span>
                    </a>
                  )}
                </div>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
