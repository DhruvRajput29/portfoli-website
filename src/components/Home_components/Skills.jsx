import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiMysql } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-400" aria-hidden="true" /> },
    { name: "MySQL", icon: <SiMysql className="text-sky-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
  ];

  return (
    <section
      id="skills"
      className="bg-(--bg-primary) py-12 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-(--text-primary)">
          Tech Stack
        </h2>

        <p className="text-center text-(--text-secondary) mt-4 mb-14 max-w-2xl mx-auto">
          Technologies I use to build responsive, scalable and modern web
          applications.
        </p>

        {/* Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-(--bg-card) border border-(--border) rounded-2xl p-8 flex flex-col items-center justify-center hover:-translate-y-2 hover:border-(--primary) hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>

              <h3 className="text-lg font-semibold text-(--text-primary) group-hover:text-(--primary) transition-colors">
                {skill.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;