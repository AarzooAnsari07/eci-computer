import Link from 'next/link'
import { FaClock, FaBook, FaVideo, FaCertificate, FaCheckCircle, FaDownload, FaLaptopCode } from 'react-icons/fa'

export default function DCAPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm mb-4">
              Government Approved Course
            </div>
            <h1 className="text-5xl font-bold mb-4">DCA - Diploma in Computer Applications</h1>
            <p className="text-xl text-blue-100 mb-6">
              Complete computer course covering fundamentals to advanced applications
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <FaClock className="text-2xl" />
                <div>
                  <p className="text-sm text-blue-100">Duration</p>
                  <p className="font-bold">6 Months</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaBook className="text-2xl" />
                <div>
                  <p className="text-sm text-blue-100">Lessons</p>
                  <p className="font-bold">40 Lessons</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaVideo className="text-2xl" />
                <div>
                  <p className="text-sm text-blue-100">Mode</p>
                  <p className="font-bold">Online</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaCertificate className="text-2xl" />
                <div>
                  <p className="text-sm text-blue-100">Certificate</p>
                  <p className="font-bold">₹100 Only</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/register" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
                Enroll Now - FREE
              </Link>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition">
                View Sample Certificate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Course Overview</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The Diploma in Computer Applications (DCA) is a comprehensive 6-month course designed for students 
                who want to build a strong foundation in computer applications and IT skills. This course covers 
                everything from basic computer operations to advanced software applications.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Whether you're a beginner or looking to enhance your computer skills, this course will equip you 
                with practical knowledge and hands-on experience in essential computer applications used in 
                today's digital workplace.
              </p>

              {/* What You'll Learn */}
              <h3 className="text-2xl font-bold mb-4">What You'll Learn</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Computer Fundamentals</h4>
                    <p className="text-sm text-gray-600">Hardware, software, and operating systems basics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">MS Office Suite</h4>
                    <p className="text-sm text-gray-600">Word, Excel, PowerPoint proficiency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Internet & Email</h4>
                    <p className="text-sm text-gray-600">Web browsing, email, online communication</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Programming Basics</h4>
                    <p className="text-sm text-gray-600">Introduction to C, HTML, and programming concepts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Database Management</h4>
                    <p className="text-sm text-gray-600">MS Access, SQL basics, data management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Practical Projects</h4>
                    <p className="text-sm text-gray-600">Hands-on assignments and real-world applications</p>
                  </div>
                </div>
              </div>

              {/* Detailed Syllabus */}
              <h3 className="text-2xl font-bold mb-4">Detailed Syllabus</h3>
              <div className="space-y-4">
                {/* Module 1 */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">Computer Fundamentals</h4>
                      <p className="text-gray-600 mb-3">Introduction to computers, hardware, software, and operating systems</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Introduction to Computers</li>
                        <li>• Hardware Components (CPU, RAM, Storage)</li>
                        <li>• Software Types (System & Application)</li>
                        <li>• Operating Systems (Windows, Linux basics)</li>
                        <li>• File Management & System Utilities</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Module 2 */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">MS Office Applications</h4>
                      <p className="text-gray-600 mb-3">Complete Microsoft Office suite training</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• MS Word (Documents, Formatting, Mail Merge)</li>
                        <li>• MS Excel (Formulas, Functions, Charts, Pivot Tables)</li>
                        <li>• MS PowerPoint (Presentations, Animations, Designs)</li>
                        <li>• MS Outlook (Email, Calendar, Contacts)</li>
                        <li>• Practical Assignments & Projects</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Module 3 */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">Internet & Email</h4>
                      <p className="text-gray-600 mb-3">Web browsing, email communication, and online tools</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Internet Basics & Web Browsers</li>
                        <li>• Search Engines & Online Research</li>
                        <li>• Email Communication & Etiquette</li>
                        <li>• Online Forms & Digital Payments</li>
                        <li>• Cloud Storage & Google Services</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Module 4 */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">Programming Basics</h4>
                      <p className="text-gray-600 mb-3">Introduction to programming concepts and languages</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Programming Fundamentals</li>
                        <li>• C Programming Language Basics</li>
                        <li>• HTML & Web Page Creation</li>
                        <li>• Algorithms & Flowcharts</li>
                        <li>• Simple Programming Projects</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Module 5 */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">Database Management</h4>
                      <p className="text-gray-600 mb-3">Database concepts and MS Access</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Database Concepts & DBMS</li>
                        <li>• MS Access Database Creation</li>
                        <li>• Tables, Queries, Forms, Reports</li>
                        <li>• SQL Basics & Queries</li>
                        <li>• Database Projects & Applications</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Course Details</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold">6 Months</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Total Lessons</span>
                    <span className="font-semibold">40 Lessons</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Mode</span>
                    <span className="font-semibold">Online</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Course Fee</span>
                    <span className="font-semibold text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Certificate Fee</span>
                    <span className="font-semibold text-blue-600">₹100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Eligibility</span>
                    <span className="font-semibold">10th Pass</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/register" className="block w-full bg-blue-600 text-white text-center py-4 rounded-lg hover:bg-blue-700 transition font-bold">
                    Enroll Now - FREE
                  </Link>
                  <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition font-semibold flex items-center justify-center space-x-2">
                    <FaDownload />
                    <span>Download Syllabus</span>
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-bold mb-3">Course Includes:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <FaCheckCircle className="text-green-500" />
                      <span>40 Video Lessons</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaCheckCircle className="text-green-500" />
                      <span>Study Material (PDF)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaCheckCircle className="text-green-500" />
                      <span>Practical Assignments</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaCheckCircle className="text-green-500" />
                      <span>Online Examination</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaCheckCircle className="text-green-500" />
                      <span>Certificate on Completion</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaCheckCircle className="text-green-500" />
                      <span>Lifetime Access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Certificate */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Sample Certificate</h2>
            <div className="bg-white border-8 border-double border-blue-600 p-12 rounded-lg shadow-2xl">
              <div className="text-center">
                <FaLaptopCode className="text-6xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-blue-800 mb-4">CERTIFICATE OF COMPLETION</h3>
                <div className="border-t-2 border-b-2 border-blue-300 py-4 mb-6">
                  <p className="text-lg text-gray-600 mb-2">This is to certify that</p>
                  <h4 className="text-4xl font-bold text-gray-900 my-4">STUDENT NAME</h4>
                  <p className="text-lg text-gray-600 mb-2">has successfully completed</p>
                  <h5 className="text-2xl font-bold text-blue-700 my-3">DIPLOMA IN COMPUTER APPLICATIONS (DCA)</h5>
                  <p className="text-gray-600">Duration: 6 Months</p>
                </div>
                <div className="grid grid-cols-2 gap-8 text-left mt-8">
                  <div>
                    <p className="text-sm text-gray-500">Certificate ID</p>
                    <p className="font-bold">ECI/2026/DCA/XXXXX</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Issue Date</p>
                    <p className="font-bold">January 17, 2026</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t">
                  <p className="text-sm text-blue-600 font-semibold">Government Approved • ECI Computer</p>
                  <p className="text-xs text-gray-500 mt-2">Verify this certificate online at www.ecicomputer.com/verify</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your DCA Course?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students and start learning today - completely FREE!
          </p>
          <Link href="/register" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
            Enroll Now - FREE
          </Link>
        </div>
      </section>
    </div>
  )
}
