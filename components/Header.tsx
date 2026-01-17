'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-1">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-12 w-32 md:h-16 md:w-40">
              <Image
                src="/logo.png"
                alt="ECI Computer Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Home
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Courses
            </Link>
            <Link href="/verify-certificate" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Verify Certificate
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition">
              <FaUserCircle className="text-xl" />
              <span>Login</span>
            </Link>
            <Link href="/register" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
              Register Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl text-gray-700"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Home
            </Link>
            <Link href="/courses" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Courses
            </Link>
            <Link href="/verify-certificate" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Verify Certificate
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              About Us
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Contact
            </Link>
            <Link href="/login" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Login
            </Link>
            <Link href="/register" className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-center">
              Register Free
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
