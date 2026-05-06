"use client";

import { useState } from "react";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <html lang="en">
      <head>
        <title>Saurav Kumar - Software Engineer</title>
        <meta name="description" content="Saurav Kumar - Associate Developer at SAP Labs India. Full Stack Developer specializing in Cloud Computing, AI/ML, React, Node.js, Java, and Python." />
        <meta name="keywords" content="Saurav Kumar, Software Engineer, Full Stack Developer, SAP Labs, React, Node.js, Cloud Computing, AI ML" />
        <meta property="og:title" content="Saurav Kumar - Software Engineer" />
        <meta property="og:description" content="Associate Developer at SAP Labs India specializing in Full Stack Development, Cloud Computing, and AI/ML." />
        <meta property="og:url" content="https://www.sauravx.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Saurav Kumar - Software Engineer" />
        <link rel="canonical" href="https://www.sauravx.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Saurav Kumar",
              url: "https://www.sauravx.com",
              sameAs: [
                "https://github.com/saurava69/",
                "https://www.linkedin.com/in/sauravkumar25",
              ],
              jobTitle: "Associate Developer",
              worksFor: { "@type": "Organization", name: "SAP Labs India" },
              alumniOf: { "@type": "EducationalOrganization", name: "National Institute of Technology, Warangal" },
              email: "sauravx25@gmail.com",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" className="text-lg font-semibold text-foreground hover:text-accent transition-colors">
              Saurav.
            </a>

            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`${basePath}/Resume.pdf`}
                  download
                  className="text-sm text-background bg-foreground px-4 py-2 rounded-md hover:bg-accent hover:text-white transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-foreground p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>

          {menuOpen && (
            <div className="md:hidden bg-background border-t border-border px-6 py-4">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`${basePath}/Resume.pdf`}
                    download
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          )}
        </header>

        <main className="pt-16">{children}</main>

        <footer className="border-t border-border py-8 mt-24">
          <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} Saurav Kumar
            </p>
            <div className="flex gap-6">
              <a href="https://github.com/saurava69/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/sauravkumar25" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="mailto:sauravx25@gmail.com" className="text-sm text-muted hover:text-foreground transition-colors">
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
