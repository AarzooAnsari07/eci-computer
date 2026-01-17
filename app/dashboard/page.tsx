'use client'

import Link from 'next/link'
import { FaBook, FaCertificate, FaDownload, FaCheckCircle, FaClock, FaTrophy, FaChartLine } from 'react-icons/fa'

export default function DashboardPage() {
  // Mock data - would come from API/database
  const enrolledCourses = [
    {
      id: 'dca',
      name: 'DCA',
      progress: 65,
      lessonsCompleted: 26,
      totalLessons: 40,
      status: 'in-progress',
      nextLesson: 'MS Excel Advanced Formulas'
    },
    {
      id: 'tally-prime',
      name: 'Tally Prime ERP',
      progress: 100,
      lessonsCompleted: 25,
      totalLessons: 25,
      status: 'completed',
      examStatus: 'passed',
      certificateAvailable: true
    },
    {
      id: 'advance-excel',
      name: 'Advance Excel',
      progress: 30,
      lessonsCompleted: 7,
      totalLessons: 24,
      status: 'in-progress',
      nextLesson: 'Pivot Tables Basics'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, Rahul!</h1>
              <p className="text-blue-100">Continue your learning journey</p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link href="/courses" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
                Browse More Courses
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">Enrolled Courses</p>
                <h3 className="text-3xl font-bold text-gray-900">3</h3>
              </div>
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center">
                <FaBook className="text-2xl text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">Completed</p>
                <h3 className="text-3xl font-bold text-gray-900">1</h3>
              </div>
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center">
                <FaCheckCircle className="text-2xl text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">In Progress</p>
                <h3 className="text-3xl font-bold text-gray-900">2</h3>
              </div>
              <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center">
                <FaClock className="text-2xl text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">Certificates</p>
                <h3 className="text-3xl font-bold text-gray-900">1</h3>
              </div>
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center">
                <FaCertificate className="text-2xl text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* My Courses */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">My Courses</h2>
              
              <div className="space-y-4">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="border-2 border-gray-100 rounded-lg p-6 hover:border-blue-300 transition">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{course.name}</h3>
                        <p className="text-sm text-gray-500">
                          {course.lessonsCompleted} of {course.totalLessons} lessons completed
                        </p>
                      </div>
                      <div className="text-right">
                        {course.status === 'completed' ? (
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                            Completed
                          </span>
                        ) : (
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                            In Progress
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">Progress</span>
                        <span className="text-sm font-bold text-blue-600">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-blue-600 h-3 rounded-full transition-all"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      {course.status === 'in-progress' && (
                        <Link 
                          href={`/dashboard/courses/${course.id}/learn`}
                          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
                        >
                          Continue Learning
                        </Link>
                      )}
                      {course.status === 'completed' && course.examStatus === 'passed' && course.certificateAvailable && (
                        <>
                          <Link 
                            href={`/dashboard/certificates/${course.id}`}
                            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-semibold flex items-center space-x-2"
                          >
                            <FaCertificate />
                            <span>Get Certificate (₹100)</span>
                          </Link>
                        </>
                      )}
                      {course.status === 'completed' && !course.examStatus && (
                        <Link 
                          href={`/dashboard/exam/${course.id}`}
                          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition font-semibold"
                        >
                          Take Exam
                        </Link>
                      )}
                      <Link 
                        href={`/courses/${course.id}`}
                        className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:border-blue-600 hover:text-blue-600 transition font-semibold"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 pb-4 border-b">
                  <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Completed lesson: MS Excel Functions</p>
                    <p className="text-sm text-gray-500">2 hours ago • DCA Course</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 pb-4 border-b">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaBook className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Started new course: Advance Excel</p>
                    <p className="text-sm text-gray-500">1 day ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaTrophy className="text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Passed Tally Prime exam with 85%</p>
                    <p className="text-sm text-gray-500">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link href="/courses" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Browse Courses
                </Link>
                <Link href="/verify-certificate" className="block w-full border-2 border-blue-600 text-blue-600 text-center py-3 rounded-lg hover:bg-blue-50 transition font-semibold">
                  Verify Certificate
                </Link>
                <Link href="/dashboard/profile" className="block w-full border-2 border-gray-300 text-gray-700 text-center py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition font-semibold">
                  Edit Profile
                </Link>
              </div>
            </div>

            {/* Certificates */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl shadow-md p-6">
              <FaCertificate className="text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">My Certificates</h3>
              <p className="text-blue-100 mb-4 text-sm">
                You have 1 certificate available to download
              </p>
              <Link href="/dashboard/certificates" className="block w-full bg-white text-blue-600 text-center py-3 rounded-lg hover:bg-blue-50 transition font-bold">
                View Certificates
              </Link>
            </div>

            {/* Learning Progress */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <FaChartLine className="text-blue-600" />
                <span>Learning Stats</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Total Hours</span>
                    <span className="font-bold">45h</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Lessons Completed</span>
                    <span className="font-bold">58/89</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Exam Pass Rate</span>
                    <span className="font-bold">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
