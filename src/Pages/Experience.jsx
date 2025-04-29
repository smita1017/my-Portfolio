const experience = [
  {
    role: "Junior Front-End Developer",
    company: "Brightlink Infotech",
    period: "Feb 2025 – Present",
    responsibilities: [
      "Developed responsive UI using React and Tailwind CSS.",
      "Collaborated with backend developers and designers.",
      "Improved code quality through reviews and refactoring.",
      "Worked in Agile sprints and participated in daily standups."
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Infotech, Mumbai",
    period: "2015",
    responsibilities: [
      ".NET form validations and CRUD integration.",
      "Built UI features with HTML, CSS, and JavaScript.",
      "Assisted in database design and debugging processes."
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center m-10">Professional Experience</h2>
      <div className="max-w-4xl mx-auto grid gap-10">
        {experience.map((job, index) => (
          <div key={index} className="bg-gray-50 rounded-lg shadow p-6 border-l-4 border-orange-500">
            <h3 className="text-xl font-semibold">{job.role}</h3>
            <p className="text-gray-600">{job.company}</p>
            <span className="text-sm text-gray-500">{job.period}</span>
            <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
              {job.responsibilities.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
  