import React from 'react';
import img from '../assets/logo.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/Instagram.png';
import social from '../assets/social.png';
import twitter from '../assets/Twitter.png';

const Home = () => {
  return (
    <div className="relative pt-25 pb-10 min-h-screen flex items-center bg-white overflow-hidden">
      {/* Flutter Effect - Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-orange-300 rounded-full opacity-70 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="w-[90%] max-w-6xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-10">

        {/* Left Section */}
        <section className="w-full sm:w-[65%] text-center sm:text-left flex flex-col items-center sm:items-start justify-center md:gap-6 gap-2">
          <h6 className="text-xl sm:text-2xl text-gray-700">Hi, I am</h6>
          <h4 className="text-3xl sm:text-5xl text-orange-500 font-bold">Smita Patil</h4>
          <h1 className="text-3xl md:text-5xl font-semibold mt-2">Frontend Developer</h1>
          <p className="text-sm sm:text-base text-gray-700 mt-5 leading-relaxed text-justify sm:text-left">
            Creative and detail-oriented Front-End Developer with 1.5 years of experience, skilled in building responsive,
            user-friendly web interfaces using React, JavaScript, HTML5, and CSS3. Proven ability to collaborate with cross-functional
            teams to deliver high-quality web applications. Passionate about clean code, performance optimization, and delivering
            seamless user experiences.
          </p>
        </section>

        {/* Right Section */}
        <section className="w-full sm:w-[30%] flex flex-col items-center justify-center gap-6 relative">
          {/* Glow Background Blob */}
          <div className="absolute w-40 h-40 sm:w-60 sm:h-60 rounded-full bg-orange-200 opacity-50 blur-2xl -z-10 animate-pulse" />

          {/* Profile Image with Ring */}
          <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden ring-4 ring-orange-500 hover:ring-8 transition-all duration-300 shadow-lg bg-white">
            <img
              src={img}
              alt="Hero"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 sm:gap-6">
            <a href="https://www.facebook.com/smita1260/ " aria-label="Facebook">
              <img src={facebook} alt="facebook" className="h-5 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/smita_thorat_patil/" aria-label="Instagram">
              <img src={instagram} alt="instagram" className="h-5 hover:scale-110 transition-transform" />
            </a>
            {/* <a href="#" aria-label="Twitter">
              <img src={twitter} alt="twitter" className="h-5 hover:scale-110 transition-transform" />
            </a> */}
            <a href="https://www.linkedin.com/in/smita-patil-16900950/  " aria-label="social">
              <img src={social} alt="social" className="h-5 hover:scale-110 transition-transform" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
