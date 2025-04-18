"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles
import React, { useEffect } from 'react';
import Image from 'next/image';
import image1 from '../assets/key.png';
import hero1 from '../assets/Keychains.jpg';
import hero2 from '../assets/jw2.jpeg';
import hero3 from '../assets/jw3.jpeg';

const Category = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
            easing: 'ease-out', // Animation easing
            once: true, // Whether animation should happen once or repeat
        });
    }, []);

    return (
        <div className="py-12 px-4">
            <h2 className="text-4xl font-serif font-bold text-center mb-10"
                data-aos="fade-up"
            >
                Shop by Category
            </h2>

            {/* Top Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                <div
                    className="w-full max-w-xs h-72 border-2 rounded-tr-full bg-gray-200 rounded-tl-full flex flex-col items-center justify-center text-center p-4 hover:shadow-lg transition"
                    data-aos="fade-right"
                >
                    <Image src={image1} alt="Key Chains" className="w-24 h-24 object-contain mb-2" />
                    <h3 className="text-lg font-semibold">Key Chains</h3>
                    <p className="text-sm text-gray-600">Elegant designs for your special moments.</p>
                </div>

                <div
                    className="w-full max-w-xs h-72 border-2 rounded-tr-full rounded-tl-full overflow-hidden hover:shadow-lg transition"
                    data-aos="fade-up"
                >
                    <Image src={hero1} alt="Keychain Model" className="w-full h-full object-cover" />
                </div>

                <div
                    className="w-full max-w-xs h-72 border-2 rounded-tr-full rounded-tl-full bg-gray-200 flex flex-col items-center justify-center text-center p-4 hover:shadow-lg transition"
                    data-aos="fade-left"
                >
                    <Image src={image1} alt="Frames" className="w-24 h-24 object-contain mb-2" />
                    <h3 className="text-lg font-semibold">Frames</h3>
                    <p className="text-sm text-gray-600">Elegant designs for your special moments.</p>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-6">
                <div
                    className="w-full max-w-xs h-72 border-2 rounded-br-full rounded-bl-full overflow-hidden hover:shadow-lg transition"
                    data-aos="fade-up"
                >
                    <Image src={hero2} alt="Model" className="w-full h-full object-cover" />
                </div>

                <div
                    className="w-full max-w-xs h-72 border-2 rounded-br-full rounded-bl-full bg-gray-200 flex flex-col items-center justify-center text-center p-4 hover:shadow-lg transition"
                    data-aos="fade-left"
                >
                    <Image src={image1} alt="Key Chains" className="w-24 h-24 object-contain mb-2" />
                    <h3 className="text-lg font-semibold">Key Chains</h3>
                    <p className="text-sm text-gray-600">Elegant designs for your special moments.</p>
                </div>

                <div
                    className="w-full max-w-xs h-72 border-2 rounded-br-full rounded-bl-full overflow-hidden hover:shadow-lg transition"
                    data-aos="fade-right"
                >
                    <Image src={hero3} alt="Model" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
}

export default Category;
