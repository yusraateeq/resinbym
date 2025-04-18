'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import art1 from '../assets/art1.jpeg';
import art2 from '../assets/art2.jpeg';
import art3 from '../assets/art3.jpeg';
import art4 from '../assets/art4.jpeg';
import art5 from '../assets/art5.jpeg';

export default function JewelryLandingPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <main className="bg-[#fefaf5] font-sans text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 py-12 gap-10 max-w-7xl mx-auto">
        {/* Main Image with Badge */}
        <div
          className="relative w-full max-w-sm"
          data-aos="fade-right" // Adding fade-right animation
        >
          <Image
            src={art1}
            alt="Model"
            width={380}
            height={380}
            className="rounded-xl w-full h-96 object-cover"
          />
          <div className="absolute top-2 left-2 bg-white px-3 py-1 rounded-full shadow text-sm font-medium">
            ⭐ 5.0 (5/5)
          </div>
        </div>

        {/* Text Content */}
        <div
          className="text-center lg:text-left max-w-xl px-2"
          data-aos="fade-up" // Adding fade-up animation
        >
          <h1 className="text-3xl sm:text-4xl font-serif font-semibold mb-4">
            The Art of Resin Radiance
          </h1>
          <p className="text-gray-500 mb-6 text-sm sm:text-base">
            transforms into mesmerizing pieces of art. From gleaming coasters to intricate jewelry and glossy wall décor, every creation reflects a unique story frozen in time. The radiant shine, depth, and vibrant colors achieved through resin evoke a sense of elegance and wonder, making each piece not just a product—but a work of heart.
          </p>
          <button className="border border-gray-700 px-6 py-2 rounded-full text-sm hover:bg-gray-800 hover:text-white transition">
            Learn More
          </button>
        </div>

        {/* Side Small Image */}
        <div
          className="w-full max-w-[176px] mt-8 lg:mt-40"
          data-aos="fade-left" // Adding fade-left animation
        >
          <Image
            src={art4}
            alt="Gold Ring"
            width={176}
            height={208}
            className="rounded-xl w-full h-52 object-cover"
          />
        </div>
      </section>

      {/* Collection Section */}
      <section
        className="bg-white/60 rounded-xl p-6 max-w-7xl mx-auto my-20"
        data-aos="zoom-in" // Adding zoom-in animation
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold">Our Collection</h2>
            <p className="text-gray-500 text-sm mt-1">
              showcases a stunning range of handcrafted resin art, each piece designed to add a touch of charm and sophistication to your space.
            </p>
            <div className="flex justify-between items-center mb-6 mt-6">
              <button className="border border-gray-700 px-4 py-1 rounded-full text-sm hover:bg-gray-800 hover:text-white transition">
                See More
              </button>
            </div>
          </div>

          {[{ name: 'Key Chains', price: '$340.00', img: art2 }, { name: 'Nacklace', price: '$340.00', img: art3 }, { name: 'Decor Piece', price: '$340.00', img: art5 }].map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow text-center"
              data-aos="fade-up" // Adding fade-up animation for each product
            >
              <Image
                src={item.img}
                alt={item.name}
                width={250}
                height={200}
                className="w-full h-48 rounded-lg mx-auto"
              />
              <h4 className="font-serif mt-3 text-lg">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Choose Type Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-10">
        <div
          className="relative w-full lg:w-1/2"
          data-aos="fade-right" // Adding fade-right animation
        >
          <Image
            src={art1}
            alt="Hands"
            width={600}
            height={400}
            className="rounded-xl w-full h-96 object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <button className="bg-white p-3 rounded-full shadow-lg">
              <svg
                className="w-5 h-5 text-gray-800"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.5 5.5a.5.5 0 01.79-.407l7 4.5a.5.5 0 010 .814l-7 4.5A.5.5 0 016.5 14.5v-9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-left" // Adding fade-left animation
        >
          <h3 className="text-4xl font-serif font-bold mb-3">Choose The Type!</h3>
          <p className="text-gray-500 text-sm mb-6">
            Whether you love bold statements or subtle elegance, explore a variety of resin styles tailored to your taste. Pick what speaks to you — and let your space shine with personality.
          </p>
          <div className="flex gap-6">
            {[{ label: 'keychains', img: art2 }, { label: 'Necklace', img: art3 }, { label: 'Resin art', img: art4 }].map((item, index) => (
              <div key={index} className="text-center" data-aos="fade-up">
                <Image
                  src={item.img}
                  alt={item.label}
                  width={100}
                  height={100}
                  className="rounded-full w-full h-full shadow-md mx-auto"
                />
                <span className="block text-sm mt-2">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logos Footer (Optional) */}
      <footer className="bg-[#e8dcc8] py-4 mt-6">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4">
          {[...Array(6)].map((_, index) => (
            <span
              key={index}
              className="text-gray-600 text-sm font-semibold min-w-[80px] text-center"
            >
              logoipsum
            </span>
          ))}
        </div>
      </footer>
    </main>
  );
}
