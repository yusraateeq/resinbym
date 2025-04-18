'use client';

import Link from 'next/link';
import { ShoppingCart, Heart, User, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b sticky top-0 bg-white z-50">
      {/* Top Bar */}
      <div className="bg-yellow-50 text-yellow-900 text-sm text-center py-2">
        💎 Free shipping on all orders over ₹2,000!
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif font-bold text-yellow-700 tracking-wide">
        Resinbym
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search jewellery..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-600"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-gray-700">
          <Link href="/login">
            <User className="w-5 h-5 hover:text-yellow-700" />
          </Link>
          <Link href="/wishlist">
            <Heart className="w-5 h-5 hover:text-yellow-700" />
          </Link>
          <Link href="/cart">
            <ShoppingCart className="w-5 h-5 hover:text-yellow-700" />
          </Link>

          {/* Mobile menu */}
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Nav Menu */}
      <nav className="hidden md:flex justify-center space-x-8 bg-white text-sm font-medium text-gray-700 py-2 border-t">
        <Link href="/" className="hover:text-yellow-700 transition">Home</Link>
        <Link href="/collections" className="hover:text-yellow-700 transition">Clock</Link>
        <Link href="/rings" className="hover:text-yellow-700 transition">Frames</Link>
        <Link href="/earrings" className="hover:text-yellow-700 transition">Earrings</Link>
        <Link href="/bracelets" className="hover:text-yellow-700 transition">Bracelets</Link>
        <Link href="/contact" className="hover:text-yellow-700 transition">Contact</Link>
      </nav>
    </header>
  );
}
