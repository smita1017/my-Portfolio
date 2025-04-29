// src/Pages/Skills.jsx
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiDotnet, SiMongodb, SiExpress, SiGithub } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact />, level: 85 },
  { name: 'HTML', icon: <FaHtml5 />, level: 95 },
  { name: 'CSS', icon: <FaCss3Alt />, level: 90 },
  { name: 'JavaScript', icon: <FaJs />, level: 85 },
  { name: 'Git', icon: <FaGitAlt />, level: 80 },
  { name: 'GitHub', icon: <SiGithub />, level: 80 },
  { name: 'Dotnet', icon: <SiDotnet />, level: 80 },
  { name: 'Node.js', icon: <FaNodeJs />, level: 80 },
  { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
  { name: 'Express', icon: <SiExpress />, level: 80 }





];

const Skills = () => {
  return (
    <section className="py-16 bg-white text-center mt-20">
      <h2 className="text-3xl font-bold mb-8">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center px-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full">
                <circle
                  className="text-gray-200"
                  strokeWidth="6"
                  stroke="currentColor"
                  fill="transparent"
                  r="36"
                  cx="48"
                  cy="48"
                />
                <circle
                  className="text-orange-500"
                  strokeWidth="6"
                  strokeDasharray="226"
                  strokeDashoffset={226 - (skill.level / 100) * 226}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="36"
                  cx="48"
                  cy="48"
                  style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
                {skill.level}%
              </div>
            </div>
            <div className="text-2xl">{skill.icon}</div>
            <p className="font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
