"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import product1 from "../assets/Keychains.jpg";
import product2 from "../assets/clock.jpg";
import product3 from "../assets/frames.jpg";

export default function OffersSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="px-6 py-12 bg-white">
      {/* Top Icons Row */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-12"
        data-aos="fade-up"
      >
        <div className="space-y-1">
          <p className="font-semibold">🚚 Free Shipping</p>
          <p className="text-sm text-gray-600">On Order Over $100</p>
        </div>
        <div className="space-y-1">
          <p className="font-semibold">↩️ 30 Day Returns</p>
          <p className="text-sm text-gray-600">Back returns in 7 days</p>
        </div>
        <div className="space-y-1">
          <p className="font-semibold">💰 Money Guarantee</p>
          <p className="text-sm text-gray-600">Cash On Delivery</p>
        </div>
        <div className="space-y-1">
          <p className="font-semibold">📞 Online Support</p>
          <p className="text-sm text-gray-600">Call Us 24/7: +21 123-456</p>
        </div>
      </div>

      {/* Product Cards with Text on Image */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div
          className="relative group overflow-hidden"
          data-aos="zoom-in-up"
          data-aos-delay="100"
        >
          <Image
            src={product1}
            alt="Keychains"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-white">
            <p className="text-sm opacity-80">FLAT 30% OFF</p>
            <h3 className="text-3xl font-bold w-60 mt-4 mb-4">Keychains</h3>
            <button className="text-sm underline hover:text-gray-200">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="relative group overflow-hidden"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <Image
            src={product2}
            alt="Wall Clock"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-white">
            <p className="text-sm opacity-80">SPECIAL OFFER!</p>
            <h3 className="text-3xl font-bold w-60 mt-4 mb-4">Wall Clock</h3>
            <button className="text-sm underline hover:text-gray-200">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="relative group overflow-hidden"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          <Image
            src={product3}
            alt="Wall Frames"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-white">
            <p className="text-sm opacity-80">FLAT 20% OFF</p>
            <h3 className="text-3xl font-bold w-60 mt-4 mb-4">Wall Frames</h3>
            <button className="text-sm underline hover:text-gray-200">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
