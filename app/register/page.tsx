'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaUser, FaLock, FaEnvelope, FaPhone, FaCheckCircle } from 'react-icons/fa'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log('Register:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Register Free</h1>
            <p className="text-gray-600">Start learning today - completely FREE!</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-4 text-gray-400" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              {/* Email and Mobile */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-4 top-4 text-gray-400" />
                    <input
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="+91 9876543210"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-4 top-4 text-gray-400" />
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="Create password"
                      required
                      minLength={6}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-4 top-4 text-gray-400" />
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="Confirm password"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})}
                    className="mt-1"
                    required
                  />
                  <span className="text-sm text-gray-700">
                    I agree to the{' '}
                    <Link href="/terms" className="text-blue-600 hover:text-blue-700">
                      Terms & Conditions
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition"
              >
                Register Free
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link href="/login" className="text-blue-600 font-semibold hover:text-blue-700">
                  Login Here
                </Link>
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6">
            <h3 className="font-bold text-xl mb-4">What You Get Free:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <FaCheckCircle className="text-green-300 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Free Education</h4>
                  <p className="text-sm text-blue-100">Learn all courses completely free</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaCheckCircle className="text-green-300 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Certificate at ₹100</h4>
                  <p className="text-sm text-blue-100">Government approved certificate</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaCheckCircle className="text-green-300 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Online Exam</h4>
                  <p className="text-sm text-blue-100">Take exams at your convenience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaCheckCircle className="text-green-300 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Lifetime Access</h4>
                  <p className="text-sm text-blue-100">Access courses anytime, anywhere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
