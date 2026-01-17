'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaClock, FaCheckCircle, FaTimesCircle, FaTrophy } from 'react-icons/fa'

// Mock exam questions
const examQuestions = [
  {
    id: 1,
    question: 'What does CPU stand for?',
    options: [
      'Central Processing Unit',
      'Computer Personal Unit',
      'Central Program Utility',
      'Computer Processing Unit'
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: 'Which of the following is an input device?',
    options: [
      'Monitor',
      'Printer',
      'Keyboard',
      'Speaker'
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: 'What is the extension of MS Word file?',
    options: [
      '.xls',
      '.doc or .docx',
      '.ppt',
      '.pdf'
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: 'Which key is used to refresh a web page?',
    options: [
      'F1',
      'F3',
      'F5',
      'F7'
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: 'What is RAM?',
    options: [
      'Read Access Memory',
      'Random Access Memory',
      'Run Application Memory',
      'Rapid Access Memory'
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: 'Which software is used for spreadsheet calculations?',
    options: [
      'MS Word',
      'MS PowerPoint',
      'MS Excel',
      'MS Access'
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    question: 'What does HTTP stand for?',
    options: [
      'HyperText Transfer Protocol',
      'High Transfer Text Protocol',
      'HyperText Transmission Process',
      'Home Tool Transfer Protocol'
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: 'Which of these is an operating system?',
    options: [
      'MS Word',
      'Windows',
      'Chrome',
      'Excel'
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: 'What is the brain of a computer?',
    options: [
      'RAM',
      'Hard Disk',
      'CPU',
      'Monitor'
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: 'Which shortcut key is used to copy text?',
    options: [
      'Ctrl + X',
      'Ctrl + V',
      'Ctrl + C',
      'Ctrl + Z'
    ],
    correctAnswer: 2
  }
]

export default function ExamPage() {
  const [examStarted, setExamStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>(new Array(examQuestions.length).fill(-1))
  const [timeLeft, setTimeLeft] = useState(1800) // 30 minutes in seconds
  const [examCompleted, setExamCompleted] = useState(false)
  const [score, setScore] = useState(0)

  const startExam = () => {
    setExamStarted(true)
    // Start timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          submitExam()
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const selectAnswer = (answerIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIndex
    setAnswers(newAnswers)
  }

  const nextQuestion = () => {
    if (currentQuestion < examQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const submitExam = () => {
    let correctCount = 0
    examQuestions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        correctCount++
      }
    })
    setScore(correctCount)
    setExamCompleted(true)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const percentage = Math.round((score / examQuestions.length) * 100)
  const passed = percentage >= 40

  if (!examStarted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-4xl text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold mb-2">DCA Online Examination</h1>
              <p className="text-gray-600">Read the instructions carefully before starting</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-lg mb-4">Exam Instructions:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Total Questions: <strong>10</strong></li>
                <li>✓ Total Marks: <strong>10</strong></li>
                <li>✓ Duration: <strong>30 minutes</strong></li>
                <li>✓ Passing Marks: <strong>40% (4 out of 10)</strong></li>
                <li>✓ Each question carries <strong>1 mark</strong></li>
                <li>✓ No negative marking</li>
                <li>✓ Once submitted, answers cannot be changed</li>
                <li>✓ Exam will auto-submit when time expires</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> Make sure you have a stable internet connection. 
                Do not refresh or close this page during the exam.
              </p>
            </div>

            <div className="flex gap-4">
              <Link href="/dashboard" className="flex-1 border-2 border-gray-300 text-gray-700 text-center py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition font-semibold">
                Cancel
              </Link>
              <button 
                onClick={startExam}
                className="flex-1 bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition font-bold text-lg"
              >
                Start Exam
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (examCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center">
              <div className={`${passed ? 'bg-green-100' : 'bg-red-100'} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                {passed ? (
                  <FaTrophy className="text-4xl text-green-600" />
                ) : (
                  <FaTimesCircle className="text-4xl text-red-600" />
                )}
              </div>
              <h1 className="text-3xl font-bold mb-2">
                {passed ? 'Congratulations! 🎉' : 'Better Luck Next Time'}
              </h1>
              <p className="text-gray-600 mb-8">
                {passed ? 'You have passed the examination' : 'You did not pass this time'}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="text-sm text-gray-600 mb-1">Your Score</p>
                  <p className="text-4xl font-bold text-blue-600">{score}/{examQuestions.length}</p>
                </div>
                <div className={`${passed ? 'bg-green-50' : 'bg-red-50'} rounded-lg p-6`}>
                  <p className="text-sm text-gray-600 mb-1">Percentage</p>
                  <p className={`text-4xl font-bold ${passed ? 'text-green-600' : 'text-red-600'}`}>{percentage}%</p>
                </div>
              </div>

              {passed ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 mb-6">
                  <h3 className="font-bold text-lg text-green-800 mb-2">Next Step: Get Your Certificate</h3>
                  <p className="text-sm text-green-700 mb-4">
                    You are now eligible to receive your government-approved certificate for just ₹100
                  </p>
                  <Link href="/dashboard/certificates/dca" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-bold">
                    Get Certificate (₹100)
                  </Link>
                </div>
              ) : (
                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6 mb-6">
                  <h3 className="font-bold text-lg text-red-800 mb-2">You can retake the exam</h3>
                  <p className="text-sm text-red-700 mb-4">
                    Review your course materials and try again when you're ready
                  </p>
                  <button 
                    onClick={() => {
                      setExamStarted(false)
                      setExamCompleted(false)
                      setCurrentQuestion(0)
                      setAnswers(new Array(examQuestions.length).fill(-1))
                      setTimeLeft(1800)
                      setScore(0)
                    }}
                    className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-bold"
                  >
                    Retake Exam
                  </button>
                </div>
              )}

              <Link href="/dashboard" className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition font-semibold">
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Timer Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-lg">DCA Examination</h2>
              <p className="text-sm text-gray-600">Question {currentQuestion + 1} of {examQuestions.length}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 text-red-700 px-6 py-3 rounded-lg font-bold text-xl flex items-center space-x-2">
                <FaClock />
                <span>{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Main Question Area */}
          <div className="md:col-span-3 bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <span className="text-sm text-gray-500">Question {currentQuestion + 1}</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">
                {examQuestions[currentQuestion].question}
              </h3>
            </div>

            <div className="space-y-4 mb-8">
              {examQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => selectAnswer(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition ${
                    answers[currentQuestion] === index
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQuestion] === index
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-gray-300'
                    }`}>
                      {answers[currentQuestion] === index && (
                        <FaCheckCircle className="text-white text-sm" />
                      )}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              <button
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {currentQuestion === examQuestions.length - 1 ? (
                <button
                  onClick={submitExam}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-bold"
                >
                  Submit Exam
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold"
                >
                  Next Question
                </button>
              )}
            </div>
          </div>

          {/* Question Navigator */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold mb-4">Question Navigator</h3>
            <div className="grid grid-cols-5 gap-2 mb-6">
              {examQuestions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-10 h-10 rounded-lg font-bold transition ${
                    currentQuestion === index
                      ? 'bg-blue-600 text-white'
                      : answers[index] !== -1
                      ? 'bg-green-100 text-green-700 border-2 border-green-500'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-100 border-2 border-green-500 rounded"></div>
                <span>Answered ({answers.filter(a => a !== -1).length})</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-100 rounded"></div>
                <span>Not Answered ({answers.filter(a => a === -1).length})</span>
              </div>
            </div>

            <button
              onClick={submitExam}
              className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-bold"
            >
              Submit Exam
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
