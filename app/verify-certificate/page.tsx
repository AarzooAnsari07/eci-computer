'use client'

import { useState } from 'react'
import { FaSearch, FaCheckCircle, FaTimesCircle, FaCertificate, FaDownload } from 'react-icons/fa'

export default function VerifyCertificatePage() {
  const [certificateId, setCertificateId] = useState('')
  const [verificationResult, setVerificationResult] = useState<any>(null)
  const [isSearching, setIsSearching] = useState(false)

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)

    // Simulate API call
    setTimeout(() => {
      if (certificateId.toLowerCase().includes('eci') || certificateId.length > 8) {
        // Valid certificate
        setVerificationResult({
          valid: true,
          certificateId: certificateId,
          studentName: 'Rahul Sharma',
          courseName: 'Diploma in Computer Applications (DCA)',
          issueDate: 'January 15, 2026',
          duration: '6 Months',
          status: 'Valid',
          verifiedOn: new Date().toLocaleString()
        })
      } else {
        // Invalid certificate
        setVerificationResult({
          valid: false
        })
      }
      setIsSearching(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCertificate className="text-4xl text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Verify Certificate</h1>
            <p className="text-xl text-gray-600">
              Check the authenticity of ECI Computer certificates
            </p>
          </div>

          {/* Search Box */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <form onSubmit={handleVerify}>
              <label className="block text-gray-700 font-semibold mb-3">
                Enter Certificate ID
              </label>
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={certificateId}
                    onChange={(e) => setCertificateId(e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                    placeholder="e.g., ECI/2026/DCA/12345"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSearching}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-bold text-lg flex items-center space-x-2 disabled:opacity-50"
                >
                  <FaSearch />
                  <span>{isSearching ? 'Verifying...' : 'Verify'}</span>
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                The certificate ID can be found on your certificate document
              </p>
            </form>
          </div>

          {/* Verification Result */}
          {verificationResult && (
            <div className="bg-white rounded-2xl shadow-xl p-8 animate-fadeIn">
              {verificationResult.valid ? (
                <>
                  {/* Valid Certificate */}
                  <div className="text-center mb-6">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCheckCircle className="text-5xl text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-green-600 mb-2">Certificate Verified ✓</h2>
                    <p className="text-gray-600">This is a valid ECI Computer certificate</p>
                  </div>

                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Certificate ID</p>
                        <p className="font-bold text-lg text-gray-900">{verificationResult.certificateId}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Status</p>
                        <span className="inline-block bg-green-600 text-white px-4 py-1 rounded-full font-semibold">
                          {verificationResult.status}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Student Name</p>
                        <p className="font-bold text-lg text-gray-900">{verificationResult.studentName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Issue Date</p>
                        <p className="font-bold text-lg text-gray-900">{verificationResult.issueDate}</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-sm text-gray-600 mb-1">Course Name</p>
                        <p className="font-bold text-lg text-gray-900">{verificationResult.courseName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Duration</p>
                        <p className="font-bold text-gray-900">{verificationResult.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Verified On</p>
                        <p className="font-bold text-gray-900">{verificationResult.verifiedOn}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                    <p className="text-sm text-blue-800">
                      <strong>Government Approved:</strong> This certificate is issued by ECI Computer, 
                      a government-approved institution. The certificate is valid and can be used for 
                      educational and employment purposes.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold flex items-center justify-center space-x-2">
                      <FaDownload />
                      <span>Download Certificate</span>
                    </button>
                    <button 
                      onClick={() => {
                        setVerificationResult(null)
                        setCertificateId('')
                      }}
                      className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition font-semibold"
                    >
                      Verify Another
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Invalid Certificate */}
                  <div className="text-center mb-6">
                    <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaTimesCircle className="text-5xl text-red-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-red-600 mb-2">Certificate Not Found</h2>
                    <p className="text-gray-600">The certificate ID you entered could not be verified</p>
                  </div>

                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-6">
                    <h3 className="font-bold text-red-800 mb-3">Possible Reasons:</h3>
                    <ul className="space-y-2 text-sm text-red-700">
                      <li>• The certificate ID is incorrect or contains typos</li>
                      <li>• The certificate has not been issued yet</li>
                      <li>• The certificate may be fake or unauthorized</li>
                      <li>• Payment for certificate may be pending</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> Please verify the certificate ID and try again. 
                      If the issue persists, contact ECI Computer support.
                    </p>
                  </div>

                  <button 
                    onClick={() => {
                      setVerificationResult(null)
                      setCertificateId('')
                    }}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-bold"
                  >
                    Try Again
                  </button>
                </>
              )}
            </div>
          )}

          {/* Information Section */}
          {!verificationResult && (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCertificate className="text-3xl text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">Instant Verification</h3>
                <p className="text-sm text-gray-600">
                  Verify any certificate instantly online
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-3xl text-green-600" />
                </div>
                <h3 className="font-bold mb-2">100% Authentic</h3>
                <p className="text-sm text-gray-600">
                  All certificates are government approved
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaDownload className="text-3xl text-purple-600" />
                </div>
                <h3 className="font-bold mb-2">Lifetime Valid</h3>
                <p className="text-sm text-gray-600">
                  Certificates remain valid forever
                </p>
              </div>
            </div>
          )}

          {/* How to Verify */}
          <div className="bg-white rounded-xl shadow-md p-6 mt-8">
            <h3 className="text-xl font-bold mb-4">How to Verify a Certificate?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Locate Certificate ID</h4>
                  <p className="text-sm text-gray-600">
                    Find the unique certificate ID on your certificate document (e.g., ECI/2026/DCA/12345)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">Enter Certificate ID</h4>
                  <p className="text-sm text-gray-600">
                    Type the complete certificate ID in the search box above
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">View Results</h4>
                  <p className="text-sm text-gray-600">
                    Get instant verification results with complete certificate details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
