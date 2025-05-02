import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "Mukund Gear Website",
    img: "/assets/screenshots/Mohan-Gear-App.png", // ✅ Correct path
    live: "https://smita1017.github.io/Mohan-Gear-App/",
    description: "Responsive React website for gear manufacturing with Tailwind + Routing.",
  },
  {
    title: "Real Estate Website",
    img: "/assets/screenshots/Real-Estate-App.png",
    live: "https://smita1017.github.io/Real-Estate-App/",
    description: "Real estate website made with Html,css,javascript.",
  },
  {
    title: "Portfolio Website",
    img: "/assets/screenshots/portfolio.png",
    live: "https://smita1017.github.io/my-Portfolio/",
    description: "React + Tailwind portfolio with animations, routing, and custom styling.",
  },
];

const miniProjects = [
  {
    title: "To-Do List App",
    live: "https://smita1017.github.io/my-Portfolio/",
    description: "Simple task manager built with React and localStorage.",
  },
  {
    title: "Tic-Tac-Toe Game",
    live: "https://smita1017.github.io/my-Portfolio/",
    description: "Interactive game logic with reset and winner detection.",
  },
  {
    title: "E-commerce UI",
    live: "https://smita1017.github.io/my-Portfolio/",
    description: "Product listing and cart design using Tailwind CSS.",
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-5 mt-10">My Projects</h2>

      {/* Featured Projects Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-orange-500">Featured Projects</h3>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-orange-500">{project.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                <div className="flex justify-between text-sm">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">GitHub</a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-green-600 hover:underline">Live Site</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mini Projects Section */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-orange-500">Mini Projects</h3>
        <div className="grid gap-6">
          {miniProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow rounded-lg p-5 border-l-4 border-amber-500"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold">{project.title}</h4>
              <p className="text-gray-600 text-sm">{project.description}</p>
              <a href={project.github} target="_blank" rel="noreferrer" className="text-blue-500 text-sm hover:underline mt-2 inline-block">View on GitHub</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
