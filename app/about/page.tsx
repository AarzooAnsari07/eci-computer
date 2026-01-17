import { FaGraduationCap, FaCertificate, FaUsers, FaAward, FaCheckCircle, FaLaptopCode } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About ECI Computer</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Empowering students with free quality education and government-approved certifications
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaGraduationCap className="text-3xl text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To provide accessible, high-quality computer education to everyone, completely free of cost. 
                We believe education should not be limited by financial barriers, and our mission is to 
                democratize learning by offering government-approved courses and certifications at minimal cost.
              </p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaAward className="text-3xl text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To become India's leading online education platform for computer literacy and skill development. 
                We envision a future where every individual has the opportunity to learn essential computer 
                skills and obtain recognized certifications that enhance their career prospects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Our Story</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                ECI Computer was founded with a simple yet powerful vision: to make quality computer education 
                accessible to everyone, regardless of their economic background. We recognized that in today's 
                digital age, computer literacy is not just a skill—it's a necessity.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Starting in 2020, we began offering free online courses to students across India. What started 
                as a small initiative has now grown into a comprehensive learning platform serving over 50,000 
                students. Our commitment to quality education and affordable certification has made us a trusted 
                name in online computer education.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, ECI Computer offers 12+ professional courses, all completely free, with government-approved 
                certificates available at just ₹100. We continue to innovate and expand our course offerings to 
                meet the evolving needs of students and professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose ECI Computer?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCertificate className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Government Approved</h3>
              <p className="text-gray-600">
                All our certificates are government-approved and recognized nationwide for educational and employment purposes.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-4xl text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">100% Free Education</h3>
              <p className="text-gray-600">
                Learn all courses completely free with no hidden charges. Pay only ₹100 for your certificate.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLaptopCode className="text-4xl text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert-Designed Curriculum</h3>
              <p className="text-gray-600">
                Courses designed by industry experts with practical, job-ready skills and hands-on projects.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-4xl text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">50,000+ Students</h3>
              <p className="text-gray-600">
                Join a thriving community of learners who trust ECI Computer for their education.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-4xl text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lifetime Certificate</h3>
              <p className="text-gray-600">
                Your certificate is valid for lifetime with online verification available anytime.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="text-4xl text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Learning</h3>
              <p className="text-gray-600">
                Learn at your own pace, anytime, anywhere with our online learning platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold mb-2">50,000+</h3>
              <p className="text-blue-100">Students Enrolled</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">25+</h3>
              <p className="text-blue-100">Courses Available</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">40,000+</h3>
              <p className="text-blue-100">Certificates Issued</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">4.8/5</h3>
              <p className="text-blue-100">Student Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Accessibility</h3>
              <p className="text-gray-700">
                We believe education should be accessible to everyone, regardless of their background or financial situation.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-green-600">Quality</h3>
              <p className="text-gray-700">
                We never compromise on the quality of education and ensure our courses meet industry standards.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-purple-600">Transparency</h3>
              <p className="text-gray-700">
                We maintain complete transparency in our processes, from course content to certification.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-orange-600">Innovation</h3>
              <p className="text-gray-700">
                We continuously innovate our teaching methods and platform to provide the best learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
