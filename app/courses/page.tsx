import Link from 'next/link'
import { FaLaptopCode, FaClock, FaBook, FaVideo, FaCertificate, FaCheckCircle } from 'react-icons/fa'

const courses = [
  {
    id: 'dca',
    title: 'DCA',
    fullName: 'Diploma in Computer Applications',
    duration: '6 Months',
    lessons: 40,
    mode: 'Online',
    color: 'blue',
    description: 'Complete computer fundamentals covering MS Office, Internet, programming basics, and essential IT skills.',
    syllabus: ['Computer Fundamentals', 'MS Office', 'Internet & Email', 'Programming Basics', 'Database Management']
  },
  {
    id: 'tally-prime',
    title: 'Tally Prime ERP',
    fullName: 'Complete Accounting Software',
    duration: '3 Months',
    lessons: 25,
    mode: 'Online',
    color: 'green',
    description: 'Master accounting, inventory management, GST, taxation, and business management with Tally Prime.',
    syllabus: ['Accounting Basics', 'Inventory Management', 'GST & Taxation', 'Banking', 'Reports & Analysis']
  },
  {
    id: 'pgdca',
    title: 'PGDCA',
    fullName: 'Post Graduate Diploma in Computer Applications',
    duration: '12 Months',
    lessons: 60,
    mode: 'Online',
    color: 'purple',
    description: 'Advanced computer applications including programming, web development, database, and software engineering.',
    syllabus: ['Advanced Programming', 'Web Development', 'Database Systems', 'Software Engineering', 'Project Work']
  },
  {
    id: 'ccc',
    title: 'CCC',
    fullName: 'Course on Computer Concepts',
    duration: '2 Months',
    lessons: 20,
    mode: 'Online',
    color: 'indigo',
    description: 'Basic computer skills, operating systems, word processing, spreadsheets, and internet fundamentals.',
    syllabus: ['Computer Basics', 'Operating Systems', 'MS Word', 'MS Excel', 'Internet & Email']
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    fullName: 'Professional Video Editing Course',
    duration: '4 Months',
    lessons: 30,
    mode: 'Online',
    color: 'red',
    description: 'Learn professional video editing with Adobe Premiere Pro, After Effects, and content creation techniques.',
    syllabus: ['Premiere Pro Basics', 'Advanced Editing', 'After Effects', 'Color Grading', 'YouTube Content Creation']
  },
  {
    id: 'advance-excel',
    title: 'Advance Excel',
    fullName: 'Microsoft Excel Advanced Course',
    duration: '2 Months',
    lessons: 24,
    mode: 'Online',
    color: 'emerald',
    description: 'Master advanced Excel formulas, pivot tables, macros, VBA, data analysis, and dashboard creation.',
    syllabus: ['Advanced Formulas', 'Pivot Tables', 'Macros & VBA', 'Data Analysis', 'Dashboard Creation']
  },
  {
    id: 'web-development',
    title: 'Web Development',
    fullName: 'Full Stack Web Development',
    duration: '6 Months',
    lessons: 50,
    mode: 'Online',
    color: 'cyan',
    description: 'Complete web development course covering HTML, CSS, JavaScript, React, Node.js, and database.',
    syllabus: ['HTML & CSS', 'JavaScript', 'React.js', 'Node.js', 'Database & Deployment']
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    fullName: 'Adobe Photoshop & Illustrator',
    duration: '3 Months',
    lessons: 28,
    mode: 'Online',
    color: 'pink',
    description: 'Learn professional graphic design with Adobe Photoshop, Illustrator, and creative design principles.',
    syllabus: ['Photoshop Basics', 'Advanced Photo Editing', 'Illustrator', 'Logo Design', 'Print & Digital Design']
  },
  {
    id: 'python-programming',
    title: 'Python Programming',
    fullName: 'Python for Beginners to Advanced',
    duration: '4 Months',
    lessons: 35,
    mode: 'Online',
    color: 'yellow',
    description: 'Complete Python programming from basics to advanced including data analysis, web development, and automation.',
    syllabus: ['Python Basics', 'Data Structures', 'OOP', 'Web Development', 'Data Analysis']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    fullName: 'Complete Digital Marketing Course',
    duration: '3 Months',
    lessons: 30,
    mode: 'Online',
    color: 'orange',
    description: 'Master SEO, social media marketing, Google Ads, email marketing, and content marketing strategies.',
    syllabus: ['SEO', 'Social Media Marketing', 'Google Ads', 'Email Marketing', 'Analytics']
  },
  {
    id: 'ms-office',
    title: 'MS Office',
    fullName: 'Microsoft Office Complete Course',
    duration: '2 Months',
    lessons: 22,
    mode: 'Online',
    color: 'slate',
    description: 'Complete Microsoft Office suite including Word, Excel, PowerPoint, and Outlook with practical projects.',
    syllabus: ['MS Word', 'MS Excel', 'MS PowerPoint', 'MS Outlook', 'Practical Projects']
  },
  {
    id: 'data-entry',
    title: 'Data Entry',
    fullName: 'Professional Data Entry Course',
    duration: '1 Month',
    lessons: 15,
    mode: 'Online',
    color: 'gray',
    description: 'Learn professional data entry skills, typing speed, accuracy, and data management techniques.',
    syllabus: ['Typing Speed', 'MS Excel Data Entry', 'Online Forms', 'Data Verification', 'Speed & Accuracy']
  }
]

const colorClasses: any = {
  blue: 'from-blue-500 to-blue-600',
  green: 'from-green-500 to-green-600',
  purple: 'from-purple-500 to-purple-600',
  indigo: 'from-indigo-500 to-indigo-600',
  red: 'from-red-500 to-red-600',
  emerald: 'from-emerald-500 to-emerald-600',
  cyan: 'from-cyan-500 to-cyan-600',
  pink: 'from-pink-500 to-pink-600',
  yellow: 'from-yellow-500 to-yellow-600',
  orange: 'from-orange-500 to-orange-600',
  slate: 'from-slate-500 to-slate-600',
  gray: 'from-gray-500 to-gray-600',
}

const buttonClasses: any = {
  blue: 'bg-blue-600 hover:bg-blue-700 border-blue-600 text-blue-600',
  green: 'bg-green-600 hover:bg-green-700 border-green-600 text-green-600',
  purple: 'bg-purple-600 hover:bg-purple-700 border-purple-600 text-purple-600',
  indigo: 'bg-indigo-600 hover:bg-indigo-700 border-indigo-600 text-indigo-600',
  red: 'bg-red-600 hover:bg-red-700 border-red-600 text-red-600',
  emerald: 'bg-emerald-600 hover:bg-emerald-700 border-emerald-600 text-emerald-600',
  cyan: 'bg-cyan-600 hover:bg-cyan-700 border-cyan-600 text-cyan-600',
  pink: 'bg-pink-600 hover:bg-pink-700 border-pink-600 text-pink-600',
  yellow: 'bg-yellow-600 hover:bg-yellow-700 border-yellow-600 text-yellow-600',
  orange: 'bg-orange-600 hover:bg-orange-700 border-orange-600 text-orange-600',
  slate: 'bg-slate-600 hover:bg-slate-700 border-slate-600 text-slate-600',
  gray: 'bg-gray-600 hover:bg-gray-700 border-gray-600 text-gray-600',
}

export default function CoursesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">All Courses</h1>
          <p className="text-xl text-blue-100 mb-6">
            Choose from 12+ professional computer courses - All FREE!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-lg">
              <FaCheckCircle className="text-green-300" />
              <span>100% Free Education</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-lg">
              <FaCertificate className="text-yellow-300" />
              <span>Government Approved Certificate</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-lg">
              <FaVideo className="text-blue-300" />
              <span>Online Learning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                <div className={`bg-gradient-to-r ${colorClasses[course.color]} p-6 text-white`}>
                  <FaLaptopCode className="text-4xl mb-3" />
                  <h3 className="text-2xl font-bold">{course.title}</h3>
                  <p className="text-sm opacity-90">{course.fullName}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center text-gray-600 text-sm">
                      <FaClock className="mr-2" />
                      {course.duration}
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Free
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    {course.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 flex items-center">
                      <FaBook className="mr-2" />
                      {course.lessons} Lessons • {course.mode}
                    </p>
                  </div>
                  
                  {/* Key Topics */}
                  <div className="mb-4">
                    <p className="font-semibold text-sm mb-2">Key Topics:</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {course.syllabus.slice(0, 3).map((topic, idx) => (
                        <li key={idx} className="flex items-start">
                          <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <Link 
                      href={`/courses/${course.id}`} 
                      className={`block w-full ${buttonClasses[course.color].split(' ')[0]} text-white text-center py-3 rounded-lg ${buttonClasses[course.color].split(' ')[1]} transition font-semibold`}
                    >
                      View Full Details
                    </Link>
                    <Link 
                      href="/register" 
                      className={`block w-full border-2 ${buttonClasses[course.color].split(' ')[2]} ${buttonClasses[course.color].split(' ')[3]} text-center py-3 rounded-lg hover:bg-gray-50 transition font-semibold`}
                    >
                      🎓 Enroll Now - FREE
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FaCertificate className="text-6xl text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Get Your Certificate</h2>
            <p className="text-xl text-gray-600 mb-8">
              Complete any course, pass the online exam, and get your government-approved certificate for just ₹100
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
                <h3 className="font-bold mb-2">Complete Course</h3>
                <p className="text-sm text-gray-600">Watch all video lessons and study materials</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">2</div>
                <h3 className="font-bold mb-2">Pass Online Exam</h3>
                <p className="text-sm text-gray-600">Take MCQ-based online test and pass</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <h3 className="font-bold mb-2">Get Certificate</h3>
                <p className="text-sm text-gray-600">Pay ₹100 and download your certificate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Your Learning Journey Today!</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students learning for free
          </p>
          <Link href="/register" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
            Register Now - It's Free!
          </Link>
        </div>
      </section>
    </div>
  )
}
