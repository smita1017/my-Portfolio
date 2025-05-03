import React from 'react';
import img from '../assets/logo.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/Instagram.png';
import linkedin from '../assets/linkedin.png';//here is prbm while loaging to deploy stage
import twitter from '../assets/Twitter.png';

const Home = () => {
  return (
    <div className="pt-20 pb-10 min-h-screen flex items-center bg-white">
      <div className="w-[90%] max-w-6xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-10">
        
        {/* Left Section */}
        <section className="w-full sm:w-[65%] text-center sm:text-left flex flex-col items-center sm:items-start justify-center md:gap-6 gap-2">
          <h6 className="text-xl sm:text-2xl text-gray-700">Hi, I am</h6>
          <h4 className="text-3xl sm:text-5xl text-orange-500 font-bold">Smita Patil</h4>
          <h1 className="text-3xl md:text-5xl font-semibold mt-2 ">Frontend Developer</h1>
          <p className="text-sm sm:text-base text-gray-700 mt-5 leading-relaxed text-justify sm:text-left">
            Creative and detail-oriented Front-End Developer with 1.5 years of experience, skilled in building responsive,
            user-friendly web interfaces using React, JavaScript, HTML5, and CSS3. Proven ability to collaborate with cross-functional
            teams to deliver high-quality web applications. Passionate about clean code, performance optimization, and delivering
            seamless user experiences.
          </p>
        </section>

        {/* Right Section */}
        <section className="w-full sm:w-[30%] flex flex-col items-center justify-center gap-6">
          {/* Profile Image */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg">
            <img src={img} alt="Profile" className="w-full h-full object-cover" />
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-5 sm:gap-6">
            <a href="#" aria-label="Facebook">
              <img src={facebook} alt="facebook" className="h-4.5 sm:h-4 hover:scale-110 transition-transform" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={instagram} alt="instagram" className="h-4.5 sm:h-4 hover:scale-110 transition-transform" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src={twitter} alt="twitter" className="h-4.5 sm:h-4 hover:scale-110 transition-transform" />
            </a>
            <a href="#" aria-label="linkedin">
              <img src={linkedin} alt="linkedin" className="h-4.5 sm:h-4 hover:scale-110 transition-transform" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
