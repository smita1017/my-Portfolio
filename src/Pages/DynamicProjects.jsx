// src/Pages/DynamicProjects.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DynamicProjects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/smita1017/repos")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sorted);
      });
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">My GitHub Projects</h2>

      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo, index) => {
          const imagePath = `/assets/screenshots/${repo.name}.png`;
          return (
            <motion.div
              key={repo.id}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={imagePath}
                alt={repo.name}
                className="w-full h-48 object-cover"
                onError={(e) => (e.target.style.display = "none")}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-orange-500 capitalize">{repo.name.replace(/-/g, " ")}</h3>
                <p className="text-gray-600 text-sm mb-3">
                  {repo.description || "No description provided."}
                </p>
                <div className="flex justify-between text-sm">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default DynamicProjects;
