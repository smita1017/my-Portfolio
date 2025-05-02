import React from 'react';
import img from '../assets/logo.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/Instagram.png';
import Linkedin from '../assets/Linkedin.png';
import twitter from '../assets/Twitter.png';

const Home = () => {
  return (
    <div className="pt-[35vh] pb-[10vh] h-[75vh]">
      <div className="w-11/12 sm:w-3/4 h-full m-auto flex items-center justify-center flex-col-reverse sm:flex-row gap-10">
        {/* Left Section */}
        <section className="w-full sm:w-[70%] flex flex-col gap-4 justify-center">
          <h6 className="text-2xl sm:text-3xl">Hi, I am</h6>
          <h4 className="text-4xl sm:text-5xl text-orange-500 font-bold">Smita Patil</h4>
          <h1 className="text-5xl sm:text-7xl">Frontend Developer</h1>
          <p className="text-md py-5 text-justify leading-7">
            Creative and detail-oriented Front-End Developer with 1.5 years of experience, Skilled in building responsive,
            user-friendly web interfaces using React, JavaScript, HTML5, and CSS3. Proven ability to collaborate with cross-functional
            teams to deliver high-quality web applications. Passionate about clean code, performance optimization, and delivering
            seamless user experiences.
          </p>
        </section>

        {/* Right Section (Profile Image and Social Media) */}
        <section className="w-full sm:w-[30%] flex items-center justify-center flex-col gap-5">
          <div>
            <img src={img} alt="Profile" className="w-32 sm:w-full h-32 sm:h-full bg-yellow-500 rounded-full object-cover" />
          </div>
          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-6 mt-5">
            <div className="h-6 sm:h-8">
              <img src={facebook} alt="facebook" className="h-full hover:scale-105 transition-transform" />
            </div>
            <div className="h-6 sm:h-8">
              <img src={instagram} alt="instagram" className="h-full hover:scale-105 transition-transform" />
            </div>
            <div className="h-6 sm:h-8">
              <img src={twitter} alt="twitter" className="h-full hover:scale-105 transition-transform" />
            </div>
            <div className="h-6 sm:h-8">
              <img src={Linkedin} alt="Linkedin" className="h-full hover:scale-105 transition-transform" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
