import { FaGithubSquare } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
const Projects = () => {
  const projects = [
    {
      title: "Media Player",
      desc: "Media Player can be used to store and play your favourite Youtube videos but watch out as the history will be tracked (It can be deleted). It is fully responsive and has eye-pleasing UI elements.",
      techStack: "React, CSS, Firebase, Redux, React Router",
      src: "proj1.png",
      website: true,
      websiteLink: "https://media-player-react-app.vercel.app/",
      githubLink: "https://github.com/chaitanya-bhargava/MediaPlayerApp",
    },
    {
      title: "Rick and Morty Wiki",
      desc: "Rick and Morty Wiki uses the Fetch API to fetch and display information about the characters, locations and episodes of the popular show Rick and Morty (one of my favourites).",
      techStack: "React, CSS, React Router",
      src: "proj2.png",
      website: true,
      websiteLink: "https://rick-and-morty-react-gules.vercel.app/",
      githubLink: "https://github.com/chaitanya-bhargava/RickAndMortyReact",
    },
    {
      title: "Weather.io",
      desc: "Weather.io is a weather app which displays the current weather of any city/state fetched from the OpenWeatherMap API. It is unique as it also displays the population of capital cities.",
      techStack: "React, CSS",
      src: "proj3.png",
      website: true,
      websiteLink: "https://weather-io-react.vercel.app/",
      githubLink: "https://github.com/chaitanya-bhargava/Weather.io",
    },
  ];
  return (
    <div id="projects" className="flex flex-col items-center text-white">
      <p className="text-2xl diff-font md:text-4xl font-bold uppercase p-4 m-4">
        Projects
      </p>
      <div className="grid md:block">
        {projects.map((item) => {
          return (
            <div className="translate-z">
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={10}
                scale={1}
                perspective={4000}
                className="relative flex flex-col md:flex-row h-auto md:h-[250px] lg:h-[300px] w-[90%] md:w-[95%] max-w-[1400px] mx-auto bg-[#7EC8E3] rounded-lg bg-opacity-[0.1] justify-center border border-white border-opacity-20 items-center p-2 m-6"
                transitionSpeed={800}
              >
                <img
                  src={item.src}
                  className="h-auto md:h-[180px] lg:h-[250px] m-2 md:m-4 rounded-2xl z-50"
                  alt="thumb"
                />
                <div className=" flex flex-col justify-start z-50">
                  <h3 className="my-2 md:mb-1 lg:mb-2 text-l md:text-l min-[600px]:text-2xl lg:text-2xl font-bold">
                    {item.title}
                  </h3>
                  <p className="w-full h-[110px] md:h-[120] md:w-[90%] text-sm min-[600px]:text-base md:text-sm lg:text-base md:mb-5 lg:mb-24">
                    {item.desc}
                  </p>
                  <p className="md:absolute md:bottom-14 lg:bottom-20 my-3 text-sm min-[600px]:text-base md:text-sm lg:text-base">
                    <span className="font-bold">Tech Stack: </span>
                    {item.techStack}
                  </p>
                  <div
                    className={`md:absolute ${
                      item.website ? "md:bottom-2" : "my-3 md:bottom-3"
                    }  flex justify-center md:justify-bold items-center`}
                  >
                    <a href={item.githubLink} target="_blank" rel="noreferrer">
                      <FaGithubSquare className=" hover:scale-110 duration-500 w-[45px] h-[45px] lg:w-[65px] lg:h-[65px]" />
                    </a>
                    {item.website && (
                      <a
                        href={item.websiteLink}
                        target="_blank"
                        rel="noreferrer"
                        class="relative text-xs lg:w-[180px] lg:text-base inline-flex items-center justify-center px-8 py-3 lg:px-10 lg:py-4 overflow-hidden tracking-tighter text-black font-bold bg-[#7EC8E3] rounded-lg group m-4 hover:scale-110 duration-500 "
                      >
                        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#79A9F5] rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                        <span class="relative">View Website</span>
                      </a>
                    )}
                  </div>
                </div>
              </Tilt>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
