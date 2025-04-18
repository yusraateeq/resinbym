"use client";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from "next/image";
import hero1 from '../assets/heroo.jpg'
import hero2 from '../assets/heero.jpg'
import hero3 from '../assets/herro.jpg'

export default function Home() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="relative min-h-screen bg-yellow-50 text-yellow-900 px-6 py-12 overflow-hidden overflow-y-hidden">
      {/* Decorative Blobs in Background */}
      <div 
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-200 rounded-full opacity-30 blur-3xl z-0"
        data-aos="zoom-in"
      ></div>
      <div 
        className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-amber-300 rounded-full opacity-30 blur-3xl z-0"
        data-aos="zoom-in"
        data-aos-delay="200"
      ></div>

      {/* Main Content */}
      <div 
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center"
      >
        {/* Left Text + Oval Image */}
        <div 
          className="flex flex-col items-center md:items-start space-y-6"
          data-aos="fade-right"
        >
          <h1 className="text-6xl font-serif font-semibold text-gray-800 leading-tight text-center md:text-left">
            Crafted <br /> with Resin
          </h1>
          <div 
            className="w-50 h-60 overflow-hidden shadow-xl rounded-tr-[50px] rounded-bl-[50px]"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <Image
              src={hero1}
              alt="Left jewelry"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Center Image with Dotted Play Button */}
        <div 
          className="relative text-center"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="relative border-2 border-black p-1 inline-block rounded-tr-[50px] rounded-bl-[50px]">
            <Image
              src={hero2}
              alt="Jewellery model"
              width={300}
              height={400}
              className="object-cover w-96 h-[450px] rounded-tr-[50px] rounded-bl-[50px]"
            />
            <span className="absolute top-[-10px] right-[-10px] text-xl">★</span>
          </div>
          <button 
            className="absolute left-1/2 bottom-[-1.5rem] transform -translate-x-1/2 bg-white border border-gray-300 p-3 rounded-full shadow-lg hover:scale-105 transition"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            ▶
          </button>
        </div>

        {/* Right Round Image + Text */}
        <div 
          className="flex flex-col items-center md:items-end space-y-6"
          data-aos="fade-left"
        >
          <div 
            className="w-50 h-60 overflow-hidden shadow-xl rounded-tr-[50px] rounded-bl-[50px]"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <Image
              src={hero3}
              alt="Right jewelry"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
          <h2 
            className="text-5xl font-serif font-semibold text-gray-800 text-center md:text-right"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            Made <br /> with Love 💖
          </h2>
        </div>
      </div>
    </main>
  );
}
