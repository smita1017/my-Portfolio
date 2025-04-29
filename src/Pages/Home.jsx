import React from 'react'
import img from '../assets/logo.png'
import facebook  from'../assets/facebook.png'
import instagram from '../assets/Instagram.png'
import Linkedin from '../assets/Linkedin.png'
import twitter from '../assets/Twitter.png'
const Home = () => {
  return (
    <div className="pt-[35vh] pb-[10vh] h-[75vh]">
      <div className="w-3/4 h-full m-auto flex items-center justify-center gap-10">
        <section className="w-[70%] flex flex-col gap-4 justify-center">
          <h6 className="text-3xl">Hi, I am</h6>
          <h4 className="text-5xl text-orange-500 font-bold">Smita Patil</h4>
          <h1 className="text-7xl">Frontend Developer</h1>
          <p className='text-md py-5 text-justify leading-7'>Creative and detail-oriented Front-End Developer with 1.5 years of experience, Skilled in building responsive, user-friendly web interfaces using React, JavaScript, HTML5, and CSS3. Proven ability to collaborate with cross-functional teams to deliver high-quality web applications. Passionate about clean code, performance optimization, and delivering seamless user experiences.</p>
        </section>
        <section className="w-[30%] flex items-center justify-center flex-col gap-5">
         <div> <img src={img} alt="Profile" className='h-full  bg-yellow-500 rounded-full' /></div>
         <div className='flex items-center justify-center gap-4'>
          <div className='h-6'><img src={facebook} alt="facebook" className='h-full'/></div>
          <div className='h-6'><img src={instagram} alt="instagram" className='h-full' /></div>
          <div className='h-6'><img src={twitter} alt="twitter" className='h-full' /></div>
          <div className='h-6'><img src={Linkedin} alt="Linkedin" className='h-full' /></div>
         </div>
        </section>
      </div>
    </div>
  );
};


export default Home