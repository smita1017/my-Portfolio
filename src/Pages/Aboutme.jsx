import React from 'react';
import img from '../assets/logo.png';
import Role from '../Components/Role';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';
import github from '../assets/github.png';

const Aboutme = () => {
  return (
    <div className="pt-16 pb-10 md:pt-[20vh] md:pb-[10vh] bg-white">
      <div className="w-[95%] sm:w-[90%] max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
        
        {/* Profile Section */}
        <section className="w-full md:w-[35%] flex flex-col items-center md:items-start justify-center gap-6 text-center md:text-left">
          <h1 className="text-3xl font-bold text-orange-500 mt-8">Smita Patil</h1>
          
          <div className="h-40 w-40">
            <img src={img} alt="Profile" className="h-full w-full object-cover rounded-full border-4 border-orange-400 shadow-md" />
          </div>

          <div className="flex flex-col items-center md:items-start gap-4 w-full">
            <div className="flex items-center gap-3 w-full">
              <img src={phone} alt="Phone" className="bg-black h-6 w-6 rounded-xl p-1" />
              <p className="text-sm break-all">9664353686, 7977885079</p>
            </div>
            <div className="flex items-center gap-3 w-full">
              <img src={mail} alt="Mail" className="bg-black h-6 w-6 rounded-xl p-1" />
              <p className="text-sm break-all">smita126@gmail.com</p>
            </div>
            <div className="flex items-center gap-3 w-full">
              <img src={github} alt="GitHub" className="bg-black h-6 w-6 rounded-xl p-1" />
              <p className="text-sm break-all">github.com/smita1017</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full md:w-[65%] flex flex-col gap-4 px-4 py-6">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            Building accessible web experiences with modern technologies.
            Transitioning to Full-Stack development through continuous learning.
          </p>

          <Role role="Frontend Developer" level={90} />
          <Role role="React Developer" level={70} />
          <Role role="Backend Developer" level={50} />
          <Role role="Dot Net Developer" level={50} />
          <Role role="Full Stack Developer" level={60} />
        </section>
      </div>
    </div>
  );
};

export default Aboutme;
