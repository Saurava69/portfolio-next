import Link from "next/link";
import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://sauravx.com'),
  title: {
    default: 'Saurav Kumar - Software Engineer | Full Stack Developer',
    template: '%s | Saurav Kumar'
  },
  description: 'Saurav Kumar - Associate Developer at SAP Labs India specializing in Full Stack Development, Cloud Computing, AI/ML, React, Node.js, and Java. NITW Electronics & Communication Engineering graduate.',
  keywords: [
    'Saurav Kumar',
    'Software Engineer',
    'Full Stack Developer',
    'SAP Labs',
    'React Developer',
    'Node.js Developer',
    'Cloud Computing',
    'AI ML Engineer',
    'NIT Warangal',
    'Associate Developer',
    'CAP Framework',
    'UI5 Developer',
    'JavaScript Developer',
    'Backend Developer',
    'Frontend Developer',
    'GenAI',
    'HANA Cloud',
    'SAP BTP'
  ],
  authors: [{ name: 'Saurav Kumar', url: 'https://github.com/saurava69/' }],
  creator: 'Saurav Kumar',
  publisher: 'Saurav Kumar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sauravx.com',
    title: 'Saurav Kumar - Software Engineer | Full Stack Developer',
    description: 'Associate Developer at SAP Labs India specializing in Full Stack Development, Cloud Computing, and AI/ML. Building scalable cloud-native applications.',
    siteName: 'Saurav Kumar Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Saurav Kumar - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saurav Kumar - Software Engineer | Full Stack Developer',
    description: 'Associate Developer at SAP Labs India specializing in Full Stack Development, Cloud Computing, and AI/ML.',
    images: ['/og-image.png'],
    creator: '@sauravx25',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  // JSON-LD structured data for Person schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saurav Kumar",
    "url": "https://sauravx.com",
    "image": "https://sauravx.com/profile.jpg",
    "sameAs": [
      "https://github.com/saurava69/",
      "https://www.linkedin.com/in/sauravkumar25",
      "https://leetcode.com/0explorer0",
      "https://codeforces.com/profile/sauravx25"
    ],
    "jobTitle": "Associate Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "SAP Labs India",
      "url": "https://www.sap.com"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "National Institute of Technology, Warangal",
      "url": "https://www.nitw.ac.in"
    },
    "email": "sauravx25@gmail.com",
    "telephone": "+916206846984",
    "knowsAbout": [
      "Full Stack Development",
      "Cloud Computing",
      "Artificial Intelligence",
      "Machine Learning",
      "React",
      "Node.js",
      "Java",
      "Python",
      "SAP CAP",
      "SAP UI5"
    ]
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "dateCreated": "2025-01-07T00:00:00+05:30",
    "dateModified": new Date().toISOString(),
    "mainEntity": {
      "@type": "Person",
      "name": "Saurav Kumar",
      "alternateName": "sauravx25",
      "description": "Associate Developer at SAP Labs India specializing in Full Stack Development, Cloud Computing, and AI/ML"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
        <link rel="canonical" href="https://sauravx.com" />
      </head>
      <body className="antialiased bg-gray-50 text-gray-900">
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                Saurav Kumar
              </Link>
              <ul className="flex space-x-6 text-sm font-medium">
                <li><Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link></li>
                <li><Link href="/experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</Link></li>
                <li><Link href="/projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</Link></li>
                <li><Link href="/skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</Link></li>
                <li><Link href="/education" className="text-gray-700 hover:text-blue-600 transition-colors">Education</Link></li>
                <li><Link href="/achievements" className="text-gray-700 hover:text-blue-600 transition-colors">Achievements</Link></li>
                <li><Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </nav>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-3">Saurav Kumar</h3>
                <p className="text-sm">Associate Developer at SAP Labs India</p>
                <p className="text-sm">B.Tech in ECE from NIT Warangal</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/experience" className="hover:text-white transition-colors">Experience</Link></li>
                  <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                  <li><Link href="/skills" className="hover:text-white transition-colors">Skills</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Connect</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://github.com/saurava69/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/sauravkumar25" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="https://leetcode.com/0explorer0" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LeetCode</a></li>
                  <li><a href="mailto:sauravx25@gmail.com" className="hover:text-white transition-colors">Email</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
              <p>&copy; {new Date().getFullYear()} Saurav Kumar. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
