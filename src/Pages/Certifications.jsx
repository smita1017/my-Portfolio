// src/Pages/Certifications.jsx

const education = [
  {
    title: 'MCA - Master of Computer Applications',
    institute: 'Mumbai University',
    year: '2011 - 2014',
  },
  {
    title: 'BSc in Computer Science',
    institute: 'Mumbai University',
    year: '2008 - 2011',
  },
];

const certifications = [
  {
    title: 'Frontend Development Certification',
    year: '2024 (Completed)',
  },
  {
    title: 'Backend Development Certification',
    year: '2024–2025 (Upcoming)',
  },
  {
    title: 'Full-Stack Development Certification',
    institute: 'Disha Computer Institute',
    year: '2024–2025',
  },
];

const Certifications = () => {
  return (
    <section className="py-10 md:py-20 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center m-10">Education & Certifications</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold text-orange-500 mb-4">Education</h3>
          <div className="grid gap-6">
            {education.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 border-l-4 border-orange-500"
              >
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-gray-600">{item.institute}</p>
                <span className="text-sm text-gray-500">{item.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div >
          <h3 className="text-2xl font-semibold text-orange-500 mb-4">Certifications</h3>
          <div className="grid gap-6">
            {certifications.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 border-l-4 border-amber-500"
              >
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-gray-600">{item.institute}</p>
                <span className="text-sm text-gray-500">{item.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
