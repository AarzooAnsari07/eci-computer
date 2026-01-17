import Link from 'next/link'
import { FaCertificate, FaGraduationCap, FaLaptopCode, FaCheckCircle, FaStar, FaUsers, FaAward, FaClock } from 'react-icons/fa'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Learn Computer Courses Free
              </h1>
              <p className="text-2xl mb-8 text-blue-100">
                Pay Only ₹100 for Government Approved Certificate
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-green-400 text-xl" />
                  <span className="text-lg">100% Free Education</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-green-400 text-xl" />
                  <span className="text-lg">Government Approved Certificate</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-green-400 text-xl" />
                  <span className="text-lg">Online Exam & Verification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-green-400 text-xl" />
                  <span className="text-lg">Lifetime Certificate Access</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="/courses" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
                  Explore Courses
                </Link>
                <Link href="/register" className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition">
                  Enroll Now - Free
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white/20 rounded-lg p-6">
                    <FaUsers className="text-5xl mb-3 mx-auto" />
                    <h3 className="text-3xl font-bold">50,000+</h3>
                    <p className="text-blue-100">Students</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-6">
                    <FaGraduationCap className="text-5xl mb-3 mx-auto" />
                    <h3 className="text-3xl font-bold">25+</h3>
                    <p className="text-blue-100">Courses</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-6">
                    <FaCertificate className="text-5xl mb-3 mx-auto" />
                    <h3 className="text-3xl font-bold">40,000+</h3>
                    <p className="text-blue-100">Certificates</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-6">
                    <FaStar className="text-5xl mb-3 mx-auto" />
                    <h3 className="text-3xl font-bold">4.8/5</h3>
                    <p className="text-blue-100">Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-600">Choose from our most popular computer courses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* DCA Course */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <FaLaptopCode className="text-4xl mb-3" />
                <h3 className="text-2xl font-bold">DCA</h3>
                <p className="text-blue-100">Diploma in Computer Applications</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center text-gray-600">
                    <FaClock className="mr-2" />
                    6 Months
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Free
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Complete computer fundamentals, MS Office, Internet, and programming basics.
                </p>
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">40 Lessons • Online</p>
                </div>
                <div className="space-y-3">
                  <Link href="/courses/dca" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                    View Details
                  </Link>
                  <Link href="/register" className="block w-full border-2 border-blue-600 text-blue-600 text-center py-3 rounded-lg hover:bg-blue-50 transition font-semibold">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Tally Prime */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
                <FaLaptopCode className="text-4xl mb-3" />
                <h3 className="text-2xl font-bold">Tally Prime ERP</h3>
                <p className="text-green-100">Complete Accounting Software</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center text-gray-600">
                    <FaClock className="mr-2" />
                    3 Months
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Free
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Master accounting, inventory, GST, and business management with Tally Prime.
                </p>
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">25 Lessons • Online</p>
                </div>
                <div className="space-y-3">
                  <Link href="/courses/tally-prime" className="block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition font-semibold">
                    View Details
                  </Link>
                  <Link href="/register" className="block w-full border-2 border-green-600 text-green-600 text-center py-3 rounded-lg hover:bg-green-50 transition font-semibold">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>

            {/* CCC */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
                <FaLaptopCode className="text-4xl mb-3" />
                <h3 className="text-2xl font-bold">CCC</h3>
                <p className="text-purple-100">Course on Computer Concepts</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center text-gray-600">
                    <FaClock className="mr-2" />
                    2 Months
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Free
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Basic computer skills, operating systems, word processing, and internet fundamentals.
                </p>
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">20 Lessons • Online</p>
                </div>
                <div className="space-y-3">
                  <Link href="/courses/ccc" className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg hover:bg-purple-700 transition font-semibold">
                    View Details
                  </Link>
                  <Link href="/register" className="block w-full border-2 border-purple-600 text-purple-600 text-center py-3 rounded-lg hover:bg-purple-50 transition font-semibold">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/courses" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose ECI Computer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ECI Computer?</h2>
            <p className="text-xl text-gray-600">Your trusted partner in digital education</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCertificate className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Government Approved</h3>
              <p className="text-gray-600">
                All certificates are government approved and verified for authenticity
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="text-4xl text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">100% Free Education</h3>
              <p className="text-gray-600">
                Learn all courses completely free. Pay only ₹100 for certificate
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLaptopCode className="text-4xl text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Online Exam</h3>
              <p className="text-gray-600">
                Take exams online at your convenience with instant results
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-4xl text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lifetime Verification</h3>
              <p className="text-gray-600">
                Your certificate can be verified online anytime, anywhere
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Preview Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sample Certificate</h2>
            <p className="text-xl text-gray-600">See how your certificate will look</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-8 border-double border-blue-600 p-12 rounded-lg shadow-2xl">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-800 mb-4">CERTIFICATE OF COMPLETION</h3>
                <div className="border-t-2 border-b-2 border-blue-300 py-4 mb-6">
                  <p className="text-lg text-gray-600 mb-2">This is to certify that</p>
                  <h4 className="text-4xl font-bold text-gray-900 my-4">STUDENT NAME</h4>
                  <p className="text-lg text-gray-600 mb-2">has successfully completed</p>
                  <h5 className="text-2xl font-bold text-blue-700 my-3">COURSE NAME</h5>
                </div>
                <div className="grid grid-cols-2 gap-8 text-left mt-8">
                  <div>
                    <p className="text-sm text-gray-500">Certificate ID</p>
                    <p className="font-bold">ECI/2026/XXXXX</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Issue Date</p>
                    <p className="font-bold">January 17, 2026</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t">
                  <p className="text-sm text-blue-600 font-semibold">Government Approved • ECI Computer</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/verify-certificate" className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700">
                <FaCheckCircle />
                <span>Verify Certificate Online</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Testimonials</h2>
            <p className="text-xl text-gray-600">What our students say about us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <FaStar key={star} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Excellent platform for learning computer courses. The DCA course helped me get a job. 
                Certificate verification is a great feature!"
              </p>
              <div className="flex items-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  R
                </div>
                <div className="ml-3">
                  <p className="font-bold">Rahul Sharma</p>
                  <p className="text-sm text-gray-500">DCA Student</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <FaStar key={star} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Tally Prime course is amazing! Free education with government certificate at just ₹100. 
                Best value for money. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  P
                </div>
                <div className="ml-3">
                  <p className="font-bold">Priya Singh</p>
                  <p className="text-sm text-gray-500">Tally Prime Student</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <FaStar key={star} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Great learning experience. Online exams are convenient and certificate came quickly. 
                ECI Computer is the best online education platform!"
              </p>
              <div className="flex items-center">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  A
                </div>
                <div className="ml-3">
                  <p className="font-bold">Amit Kumar</p>
                  <p className="text-sm text-gray-500">PGDCA Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join 50,000+ students and get your government-approved certificate today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/register" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
              Register Free Now
            </Link>
            <Link href="/courses" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition">
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
