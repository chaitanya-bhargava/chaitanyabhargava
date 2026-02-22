import { useState, useEffect } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const projects = [
    {
      title: "Quest Log",
      desc: "QuestLog is a video game discovery and tracking platform. It lets users browse games by genre, search for titles, and organize them into personal shelves — Played, Currently Playing, and Want to Play.",
      techStack: "Next.js, Tailwind CSS, shadcn/ui, Go, PostgreSQL",
      src: "proj5.png",
      website: true,
      websiteLink: "https://questlog.fun/",
      githubLink: "https://github.com/chaitanya-bhargava/QuestLog",
      featured: true,
    },
    {
      title: "Media Player",
      desc: "Media Player can be used to store and play your favourite Youtube videos but watch out as the history will be tracked (It can be deleted). It is fully responsive and has eye-pleasing UI elements.",
      techStack: "React, Tailwind CSS, shadcn/ui, Firebase",
      src: "proj1.png",
      website: true,
      websiteLink: "https://media-player-react-app.vercel.app/",
      githubLink: "https://github.com/chaitanya-bhargava/MediaPlayerApp",
    },
    {
      title: "Social Sheets",
      desc: "Social Sheets, is a collaborative, web-based spreadsheet application designed for teams and individuals who need to work together in real-time.",
      techStack: "React, Supabase",
      src: "proj2.png",
      website: true,
      websiteLink: "https://social-sheets.vercel.app/",
      githubLink: "https://github.com/chaitanya-bhargava/SocialSheets",
    },
    {
      title: "Rick and Morty Wiki",
      desc: "Rick and Morty Wiki uses the Fetch API to fetch and display information about the characters, locations and episodes of the popular show Rick and Morty (one of my favourites).",
      techStack: "React",
      src: "proj3.png",
      website: true,
      websiteLink: "https://rick-and-morty-react-gules.vercel.app/",
      githubLink: "https://github.com/chaitanya-bhargava/RickAndMortyReact",
    },
    {
      title: "Weather.io",
      desc: "Weather.io is a weather app which displays the current weather of any city/state fetched from the OpenWeatherMap API. It is unique as it also displays the population of capital cities.",
      techStack: "React",
      src: "proj4.png",
      website: true,
      websiteLink: "https://weather-io-react.vercel.app/",
      githubLink: "https://github.com/chaitanya-bhargava/Weather.io",
    },
  ];

  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-white py-16 md:py-24 w-full max-w-[1600px] mx-auto"
    >
      <p className="text-2xl diff-font md:text-4xl font-bold uppercase p-4 m-4">
        Projects
      </p>
      <div className="w-full">
        {projects.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="translate-z"
          >
            <Tilt
              tiltEnable={!isMobile}
              tiltMaxAngleX={15}
              tiltMaxAngleY={10}
              scale={1}
              perspective={4000}
              className={`group relative overflow-hidden flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } w-[90%] md:w-[95%] max-w-[1400px] mx-auto bg-gradient-to-br from-[#0a0a2e]/60 via-[#000300]/80 to-[#0d1117]/60 rounded-lg border border-white border-opacity-20 hover:border-[#7EC8E3]/40 hover:shadow-[0_0_25px_rgba(126,200,227,0.15)] items-center m-4 md:m-6 transition-all duration-500`}
              transitionSpeed={800}
            >
              <div
                className={`absolute ${
                  index % 2 === 0 ? "md:left-0" : "md:right-0"
                } top-0 left-0 h-[3px] w-full md:h-full md:w-[3px] bg-gradient-to-r md:bg-gradient-to-b from-[#7EC8E3]/60 via-[#79A9F5]/40 to-transparent`}
              />
              <span className="absolute top-3 right-4 text-5xl md:text-7xl font-bold text-white opacity-[0.06] z-20 select-none diff-font pointer-events-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.featured && (
                <span className="absolute top-3 left-3 bg-[#7EC8E3] text-black text-[10px] xs:text-xs font-bold px-3 py-1 rounded-full z-20">
                  Featured
                </span>
              )}
              <div className="relative overflow-hidden rounded-xl shrink-0 m-3 md:m-4 w-[calc(100%-24px)] md:w-[300px] lg:w-[420px]">
                <img
                  src={item.src}
                  className="w-full h-[160px] xs:h-[200px] md:h-[180px] lg:h-[250px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  alt={item.title}
                />
              </div>
              <div className="flex flex-col justify-between z-10 p-3 md:p-5 flex-1">
                <div>
                  <h3 className="mb-2 text-lg min-[600px]:text-2xl lg:text-2xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-sm min-[600px]:text-base md:text-sm lg:text-base text-gray-300">
                    {item.desc}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 my-4">
                    {item.techStack.split(", ").map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-[#7EC8E3] bg-opacity-20 text-[#7EC8E3] px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={item.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-xs lg:text-sm text-white font-semibold border border-white border-opacity-20 rounded-lg px-5 py-2.5 lg:px-6 lg:py-3 flex-1 md:flex-none hover:bg-white hover:bg-opacity-5 hover:scale-105 transition-all duration-300"
                    >
                      <FiGithub className="w-4 h-4" />
                      GitHub
                    </a>
                    {item.website && (
                      <a
                        href={item.websiteLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-xs lg:text-sm text-[#7EC8E3] font-semibold border border-[#7EC8E3] border-opacity-40 rounded-lg px-5 py-2.5 lg:px-6 lg:py-3 flex-1 md:flex-none hover:bg-[#7EC8E3] hover:bg-opacity-10 hover:scale-105 transition-all duration-300"
                      >
                        View Website
                        <FiExternalLink className="w-3 h-3 lg:w-4 lg:h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
