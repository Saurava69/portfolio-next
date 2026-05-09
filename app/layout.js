"use client";

import { useState, useEffect } from "react";
import "./globals.css";
import SearchModal from "./SearchModal";
import { initAnalytics, getFirebaseAuth } from "@/lib/firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.documentElement.dataset.theme = saved;
    initAnalytics();
    try {
      const { auth } = getFirebaseAuth();
      return onAuthStateChanged(auth, (u) => { setUser(u); setAuthLoading(false); });
    } catch {
    }
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.dataset.theme = next;
  }

  async function handleLogin() {
    try {
      const { auth, googleProvider } = getFirebaseAuth();
      await signInWithPopup(auth, googleProvider);
    } catch {
    }
  }

  async function handleLogout() {
    try {
      const { auth } = getFirebaseAuth();
      await signOut(auth);
      setUser(null);
    } catch {
    }
  }

  const navLinks = [
    { href: "/experience", label: "Experience" },
    { href: "/education", label: "Education" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem("theme")||"dark";document.documentElement.dataset.theme=t})()`,
          }}
        />
        <meta name="keywords" content="Saurav Kumar, Software Engineer, Full Stack Developer, SAP Labs, React, Node.js, Cloud Computing, AI ML" />
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
            <a href="/" className="text-lg font-semibold text-foreground hover:text-accent transition-colors">
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
              <li>
                <SearchModal />
              </li>
              <li>
                <button
                  onClick={toggleTheme}
                  className="text-muted hover:text-foreground transition-colors p-1"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
              </li>
              <li>
                {authLoading ? (
                  <div className="w-7 h-7 rounded-full bg-border animate-pulse" />
                ) : user ? (
                  <div className="relative">
                    <button onClick={() => setShowUserMenu(!showUserMenu)} className="flex items-center">
                      <img src={user.photoURL} alt="" className="w-7 h-7 rounded-full" referrerPolicy="no-referrer" />
                    </button>
                    {showUserMenu && (
                      <div className="absolute right-0 top-9 bg-card border border-border rounded-lg shadow-lg py-2 px-4 z-50">
                        <p className="text-xs text-muted mb-2 whitespace-nowrap">{user.displayName}</p>
                        <button
                          onClick={() => { handleLogout(); setShowUserMenu(false); }}
                          className="text-xs text-muted hover:text-foreground transition-colors whitespace-nowrap"
                        >
                          Sign out
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={handleLogin}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    Sign in
                  </button>
                )}
              </li>
            </ul>

            <div className="flex items-center gap-2 md:hidden">
              <SearchModal />
              {authLoading ? (
                <div className="w-6 h-6 rounded-full bg-border animate-pulse" />
              ) : user ? (
                <div className="relative">
                  <button onClick={() => setShowUserMenu(!showUserMenu)} className="p-1">
                    <img src={user.photoURL} alt="" className="w-6 h-6 rounded-full" referrerPolicy="no-referrer" />
                  </button>
                  {showUserMenu && (
                    <div className="absolute right-0 top-9 bg-card border border-border rounded-lg shadow-lg py-2 px-4 z-50">
                      <p className="text-xs text-muted mb-2 whitespace-nowrap">{user.displayName}</p>
                      <button
                        onClick={() => { handleLogout(); setShowUserMenu(false); }}
                        className="text-xs text-muted hover:text-foreground transition-colors whitespace-nowrap"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={handleLogin}
                  className="text-xs text-muted hover:text-foreground transition-colors p-2"
                >
                  Sign in
                </button>
              )}
              <button
                onClick={toggleTheme}
                className="text-muted hover:text-foreground transition-colors p-2"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-foreground p-2"
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
            </div>
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
              <a href="https://leetcode.com/u/0explorer0/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-foreground transition-colors">
                LeetCode
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
