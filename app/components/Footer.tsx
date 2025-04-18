import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#fefaf5] text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-serif font-bold mb-4 text-black">Resinbym</h2>
          <p className="text-sm text-gray-700">
          ResinByM is a handcrafted resin art brand where creativity meets elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Customer Support</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Order Tracking</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>

          {/* Contact Details */}
          <div className="mt-4 text-sm text-gray-700 space-y-2">
            <p><strong>Email:</strong> resinbymaryamzafar786@gmail.com</p>
            <p><strong>Phone:</strong> +92 328 4167699</p>
            <p><strong>Address:</strong> Karachi, Pakistan</p>
          </div>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Stay Connected</h3>
          <p className="text-sm text-gray-700 mb-4">Subscribe to get special offers & updates.</p>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-l-md text-black text-sm w-full"
            />
            <button className="bg-gold text-black px-4 py-2 rounded-r-md font-medium">Subscribe</button>
          </div>
          <div className="flex space-x-4 text-xl text-black">
            <a href="https://www.instagram.com/resinbym_zee/" target='_blank'><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Resinbym. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
