import React from 'react';
import img from '../assets/logo.png';
import Role from '../Components/Role';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';
import github from '../assets/github.png';

const Aboutme = () => {
  return (
    <div className="pt-[40vh] pb-[10vh] h-[75vh]">
      <div className="w-[90%] sm:w-3/4 h-full m-auto flex items-center justify-center gap-10 flex-col sm:flex-row">
        
        {/* Profile Section */}
        <section className="w-full sm:w-[30%] flex flex-col items-center justify-center gap-4 sm:gap-2">
          <h1 className="text-3xl font-bold text-orange-500">Smita Patil</h1>
          <div className="h-40">
            <img src={img} alt="Profile" className="h-full w-full bg-yellow-500 rounded-full" />
          </div>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-3 w-full">
            <div className="h-6 flex items-center justify-center w-full gap-4 sm:gap-6">
              <img src={phone} alt="Phone" className="bg-black h-6 sm:h-full rounded-xl p-1" />
              <h1 className="w-[70%] sm:w-1/2 text-center sm:text-left">9664353686,7977885079</h1>
            </div>
            <div className="h-6 flex items-center justify-center w-full gap-4 sm:gap-6">
              <img src={mail} alt="Mail" className="bg-black h-6 sm:h-full rounded-xl p-1" />
              <h1 className="w-[70%] sm:w-1/2 text-center sm:text-left">smita126@gmail.com</h1>
            </div>
            <div className="h-6 flex items-center justify-center w-full gap-4 sm:gap-6">
              <img src={github} alt="GitHub" className="bg-black h-6 sm:h-full rounded-xl p-1" />
              <h1 className="w-[70%] sm:w-1/2 text-center sm:text-left">smita1017</h1>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="w-full sm:w-[70%] flex flex-col gap-3 px-6 py-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="text-gray-700">
            Building accessible web experiences with modern technologies.
            Transitioning to Full-Stack development through continuous learning.
          </p>

          <Role role="Frontend Developer" level={90} />
          <Role role="React Developer" level={70} />
          <Role role="Backend Developer" level={50} />
          <Role role="Dot net Developer" level={50} />
          <Role role="Full stack Developer" level={60} />
        </section>
      </div>
    </div>
  );
};

export default Aboutme;
