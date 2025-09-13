import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import ce from "../assets/code_ethnics.png";


const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  relative">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 p-10 rounded-3xl shadow-lg text-center max-w-xl">
      <img src={ce} alt="" className='w-[400px]' />
        <p className="text-lg md:text-xl font-mono text-black">
          "Code It For You"
        </p>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <FaChevronDown className="text-black text-2xl" />

      </div>
    </div>
  );
};

export default Hero;


