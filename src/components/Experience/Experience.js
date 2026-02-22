import { motion } from "framer-motion";
import { BsBriefcaseFill } from "react-icons/bs";

const experiences = [
  {
    role: "Software Engineer",
    company: "NVIDIA",
    duration: "Aug 2025 - Present",
    location: "Pune, Maharashtra",
    type: "Full-time",
    logo: "nvidia_logo.jpg",
  },
  {
    role: "Software Engineering Intern",
    company: "NVIDIA",
    duration: "Jan 2025 - Jul 2025",
    location: "Pune, Maharashtra",
    type: "Internship",
    logo: "nvidia_logo.jpg",
  },
  {
    role: "Technology Intern",
    company: "Estee Advisors",
    duration: "Sep 2023 - Jul 2024",
    location: "Remote",
    type: "Internship",
    description: "3 internship stints in financial technology",
    logo: "estee_logo.jpg",
  },
  {
    role: "React.js Intern",
    company: "BKS My Gold",
    duration: "Jul 2023 - Aug 2023",
    location: "Remote",
    type: "Internship",
    logo: "bksmygold_logo.jpg",
  },
  {
    role: "Vice President",
    company: "Venatus - Gaming Society, NSUT",
    duration: "Jan 2024 - Oct 2024",
    location: "Delhi, India",
    type: "Leadership",
    logo: "venatusnsut_logo.jpg",
  },
  {
    role: "Joint Secretary",
    company: "IEEE NSUT",
    duration: "Dec 2022 - Jun 2023",
    location: "Delhi, India",
    type: "Leadership",
    logo: "ieee_nsut.jpg",
  },
];

const typeBadgeColor = {
  "Full-time": "bg-[#7EC8E3]/20 text-[#7EC8E3]",
  Internship: "bg-[#79A9F5]/20 text-[#79A9F5]",
  Leadership: "bg-purple-500/20 text-purple-400",
};

const Experience = () => {
  return (
    <motion.div
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-white m-4 py-16 md:py-24"
    >
      <p className="text-2xl diff-font md:text-4xl font-bold uppercase p-4 m-4">
        Experience
      </p>
      <div className="w-[90%] md:w-[70%] lg:w-[60%] max-w-[800px]">
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${exp.role}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex gap-4 md:gap-6"
          >
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#7EC8E3]/10 border-2 border-[#7EC8E3]/40 flex items-center justify-center shrink-0">
                <BsBriefcaseFill className="text-[#7EC8E3] w-3 h-3 md:w-4 md:h-4" />
              </div>
              {index < experiences.length - 1 && (
                <div className="w-[2px] flex-1 bg-[#7EC8E3]/20 my-1" />
              )}
            </div>

            <div className="pb-8 flex-1">
              <div className="bg-gradient-to-br from-[#0a0a2e]/40 via-[#000300]/60 to-[#0d1117]/40 border border-white border-opacity-20 hover:border-[#7EC8E3]/30 rounded-lg p-4 md:p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(126,200,227,0.1)]">
                <div className="flex items-start gap-4">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start gap-2 mb-1">
                      <div>
                        <h3 className="font-bold text-base md:text-lg">
                          {exp.role}
                        </h3>
                        <p className="text-[#7EC8E3] text-sm md:text-base font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span
                        className={`text-[10px] md:text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap self-start ${
                          typeBadgeColor[exp.type]
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs md:text-sm">
                      {exp.duration} &bull; {exp.location}
                    </p>
                    {exp.description && (
                      <p className="text-gray-300 text-xs md:text-sm mt-2">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
