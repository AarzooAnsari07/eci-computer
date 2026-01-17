# ECI Computer - Educational Website

## 🎓 Overview

ECI Computer is a comprehensive online educational platform offering **free computer courses** with **government-approved certificates** at just **₹100**. The platform provides online learning, online testing, and certificate verification features.

## ✨ Features

### 🏠 Home Page
- Hero section with call-to-action
- Featured courses showcase
- Why Choose Us section
- Sample certificate preview
- Student testimonials
- Statistics and achievements

### 📚 Courses
- **12+ Professional Courses** including:
  - DCA (Diploma in Computer Applications)
  - Tally Prime ERP
  - PGDCA
  - CCC
  - Video Editing
  - Advance Excel
  - Web Development
  - Graphic Design
  - Python Programming
  - Digital Marketing
  - MS Office
  - Data Entry
- Detailed course pages with syllabus
- Free enrollment
- Sample certificates

### 👤 User System
- User Registration & Login
- Student Dashboard
- Course Progress Tracking
- My Courses
- Recent Activity

### 📝 Online Examination
- MCQ-based tests
- Time-bound exams
- Auto-evaluation
- Instant results
- Retake option
- Passing criteria: 40%

### 🎖️ Certificate System
- Certificate generation after passing exam
- Pay ₹100 for certificate
- Instant download
- Government-approved certificates
- Unique certificate ID
- QR code support

### 🔍 Certificate Verification
- Online verification system
- Instant validation
- Complete certificate details
- Valid/Invalid status
- Public verification

### 📄 Additional Pages
- About Us
- Contact Us
- Privacy Policy
- Terms & Conditions
- Refund Policy

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Fonts**: Google Fonts (Inter)

## 📦 Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
ECI Education/
├── app/
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── courses/            # Courses listing & detail pages
│   │   ├── dca/            # DCA course page
│   │   └── page.tsx        # All courses
│   ├── dashboard/          # Student dashboard
│   │   ├── exam/           # Online exam
│   │   └── page.tsx        # Dashboard home
│   ├── login/              # Login page
│   ├── register/           # Registration page
│   ├── verify-certificate/ # Certificate verification
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   └── Footer.tsx          # Footer
├── public/                 # Static files
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach
- **Modern UI**: Clean and professional interface
- **Color Scheme**: Blue and purple gradients
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Optimized images and code splitting

## 💡 Key Functionalities

### For Students:
- ✅ Free registration and enrollment
- ✅ Access to all course materials
- ✅ Progress tracking
- ✅ Online examination
- ✅ Certificate download
- ✅ Certificate verification

### For Platform:
- ✅ Course management
- ✅ User management
- ✅ Exam system
- ✅ Certificate generation
- ✅ Payment integration (₹100)
- ✅ Analytics and reporting

## 🔐 User Flow

1. **Registration** → Create free account
2. **Browse Courses** → Select desired course
3. **Enroll** → Start learning for free
4. **Learn** → Complete video lessons
5. **Exam** → Take online test
6. **Pass** → Score 40% or more
7. **Payment** → Pay ₹100
8. **Certificate** → Download instantly
9. **Verification** → Verify online anytime

## 📱 Pages Overview

### Public Pages
- `/` - Home page
- `/courses` - All courses
- `/courses/[id]` - Course details
- `/about` - About us
- `/contact` - Contact form
- `/verify-certificate` - Certificate verification
- `/login` - User login
- `/register` - User registration

### Protected Pages (Require Login)
- `/dashboard` - Student dashboard
- `/dashboard/courses/[id]/learn` - Learning interface
- `/dashboard/exam/[id]` - Online exam
- `/dashboard/certificates` - My certificates

## 🎯 Future Enhancements

- Mobile application
- Offline center integration
- Franchise panel
- Bulk student registration
- Advanced analytics
- Payment gateway integration
- Email notifications
- SMS notifications
- Live classes
- Discussion forums

## 📞 Support

For any queries or support:
- **Email**: info@ecicomputer.com
- **Phone**: +91 9876543210
- **Address**: 123 Education Street, New Delhi - 110001

## 📄 License

© 2026 ECI Computer. All rights reserved.

---

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🌟 Live Demo

Visit: `http://localhost:3000` after running `npm run dev`

---

**Made with ❤️ by ECI Computer Team**
