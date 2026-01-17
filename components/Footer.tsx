import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">ECI Computer</h3>
            <p className="text-sm mb-4">
              Learn computer courses for free and get government-approved certificates at just ₹100. 
              Your trusted partner in digital education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-500 transition">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-500 transition">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-500 transition">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition">
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-500 transition">Home</Link></li>
              <li><Link href="/courses" className="hover:text-blue-500 transition">All Courses</Link></li>
              <li><Link href="/verify-certificate" className="hover:text-blue-500 transition">Verify Certificate</Link></li>
              <li><Link href="/about" className="hover:text-blue-500 transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Popular Courses</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses/dca" className="hover:text-blue-500 transition">DCA</Link></li>
              <li><Link href="/courses/tally-prime" className="hover:text-blue-500 transition">Tally Prime ERP</Link></li>
              <li><Link href="/courses/pgdca" className="hover:text-blue-500 transition">PGDCA</Link></li>
              <li><Link href="/courses/ccc" className="hover:text-blue-500 transition">CCC</Link></li>
              <li><Link href="/courses/video-editing" className="hover:text-blue-500 transition">Video Editing</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-blue-500 mt-1 flex-shrink-0" />
                <span>123 Education Street, New Delhi, India - 110001</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-blue-500" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-blue-500" />
                <span>info@ecicomputer.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} ECI Computer. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-blue-500 transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-500 transition">
                Terms & Conditions
              </Link>
              <Link href="/refund-policy" className="hover:text-blue-500 transition">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
