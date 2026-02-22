import { motion } from "framer-motion";

const skills = {
  "Frontend Development": [
    { src: "html5-color.svg", label: "HTML5" },
    { src: "css3-color.svg", label: "CSS3" },
    { src: "javascript-color.svg", label: "JavaScript" },
    { src: "typescript-color.svg", label: "TypeScript" },
    { src: "react-color.svg", label: "React" },
    { src: "nextdotjs-color.svg", label: "Next.js", white: true },
    { src: "angular-icon.svg", label: "Angular" },
    { src: "tailwindcss-color.svg", label: "Tailwind" },
    { src: "shadcnui-color.svg", label: "shadcn/ui", white: true },
  ],
  "Backend & Databases": [
    { src: "nodedotjs-color.svg", label: "Node.js" },
    { src: "express-color.svg", label: "Express", white: true },
    { src: "go-color.svg", label: "Go" },
    { src: "php-color.svg", label: "PHP" },
    { src: "postgresql-color.svg", label: "PostgreSQL" },
    { src: "mysql-color.svg", label: "MySQL" },
    { src: "mongodb-color.svg", label: "MongoDB" },
  ],
  "Tools & Languages": [
    { src: "cplusplus-color.svg", label: "C++" },
    { src: "python-color.svg", label: "Python" },
    { src: "git-color.svg", label: "Git" },
    { src: "github-color.svg", label: "GitHub", white: true },
    { src: "docker-color.svg", label: "Docker" },
    { src: "firebase-color.svg", label: "Firebase" },
    { src: "supabase-color.svg", label: "Supabase" },
  ],
};

const SkillIcon = ({ src, label, white }) => (
  <motion.div
    drag
    dragSnapToOrigin
    dragConstraints={{ top: -25, left: -25, right: 25, bottom: 25 }}
    className="flex flex-col items-center m-3 xs:m-4 cursor-grab active:cursor-grabbing"
    whileHover={{ scale: 1.1 }}
  >
    <img
      src={src}
      alt={label}
      draggable="false"
      className={`w-[40px] h-[40px] xs:w-[50px] xs:h-[50px] md:w-[60px] md:h-[60px] pointer-events-none select-none ${
        white ? "white-filter" : ""
      }`}
    />
    <span className="text-[10px] xs:text-xs mt-2 text-gray-400 pointer-events-none select-none">
      {label}
    </span>
  </motion.div>
);

const About = () => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-center items-center m-4 py-16 md:py-24 gap-4 text-white"
    >
      <div className="flex flex-col xs:flex-row justify-center items-center gap-8 m-8">
        <p className="text-center xs:text-right diff-font font-bold text-2xl xs:text-4xl md:text-6xl">
          About <span className="inline xs:hidden">Me</span>
          <br className="hidden xs:block" />
          <span className="hidden xs:block">Me</span>
        </p>
        <p className="w-full xs:w-[60%] lg:w-[50%] text-sm xs:text-base md:text-2xl">
          <span className="font-bold">Hello! I'm Chaitanya Bhargava, </span>a
          Software Engineer at NVIDIA and a Computer Science (AI) graduate from
          NSUT, Delhi. I build full-stack web applications — from crafting
          responsive frontends with React and Next.js to designing backend
          services with Go and Node.js. <br /> <br />
          Beyond work, I'm drawn to game development and integrating machine
          learning into web experiences. When I'm not coding, you'll probably
          find me gaming or exploring new tech.
        </p>
      </div>
      <div className="flex flex-col m-8 w-full max-w-[1000px]">
        <p className="font-bold diff-font text-xl xs:text-2xl md:text-4xl text-center">
          My Super Powers
        </p>
        <p className="text-xs text-gray-500 text-center mt-2 italic">
          Hint: Try dragging the icons!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="flex flex-col items-center">
              <p className="text-base xs:text-xl md:text-2xl font-bold text-center mb-4">
                {category}
              </p>
              <div className="flex flex-wrap justify-center">
                {items.map((skill) => (
                  <SkillIcon key={skill.label} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
