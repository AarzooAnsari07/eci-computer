'use client'

import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form:', formData)
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">
            Have questions? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <FaPhone className="text-2xl text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-gray-600 mb-2">Call us for any inquiries</p>
                <a href="tel:+919876543210" className="text-blue-600 font-semibold hover:text-blue-700">
                  +91 9876543210
                </a>
                <br />
                <a href="tel:+919876543211" className="text-blue-600 font-semibold hover:text-blue-700">
                  +91 9876543211
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <FaEnvelope className="text-2xl text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-gray-600 mb-2">Send us your queries</p>
                <a href="mailto:info@ecicomputer.com" className="text-blue-600 font-semibold hover:text-blue-700">
                  info@ecicomputer.com
                </a>
                <br />
                <a href="mailto:support@ecicomputer.com" className="text-blue-600 font-semibold hover:text-blue-700">
                  support@ecicomputer.com
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <FaMapMarkerAlt className="text-2xl text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Address</h3>
                <p className="text-gray-600">
                  123 Education Street<br />
                  Connaught Place<br />
                  New Delhi - 110001<br />
                  India
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-lg mb-3">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Subject *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="course-inquiry">Course Inquiry</option>
                      <option value="certificate">Certificate Related</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="payment">Payment Issues</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Write your message here..."
                    rows={6}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition font-bold text-lg flex items-center justify-center space-x-2"
                >
                  <FaPaperPlane />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">How can I enroll in a course?</h3>
                <p className="text-gray-600">
                  Simply register on our platform for free, browse our courses, and click "Enroll Now" on any course you're interested in. All courses are completely free.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">How much does the certificate cost?</h3>
                <p className="text-gray-600">
                  Education is completely free. You only pay ₹100 to get your government-approved certificate after successfully completing the course and passing the exam.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Are certificates recognized?</h3>
                <p className="text-gray-600">
                  Yes, all our certificates are government-approved and can be used for educational and employment purposes across India.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">What if I fail the exam?</h3>
                <p className="text-gray-600">
                  You can retake the exam after reviewing the course materials. There's no limit on the number of attempts.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">How long does it take to receive my certificate?</h3>
                <p className="text-gray-600">
                  After passing the exam and making the payment, your certificate is generated instantly and available for download immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
