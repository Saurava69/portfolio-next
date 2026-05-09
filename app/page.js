import { getAllPosts } from "@/lib/blog";
import { getMediumPosts } from "@/lib/medium";
import Link from "next/link";

export const metadata = {
  title: "Saurav Kumar - Software Engineer",
  description: "Associate Developer at SAP Labs India. Full Stack Developer specializing in Cloud Computing, AI/ML, React, Node.js, Java, and Python.",
  alternates: {
    canonical: "https://www.sauravx.com/",
  },
  openGraph: {
    title: "Saurav Kumar - Software Engineer",
    description: "Associate Developer at SAP Labs India specializing in Full Stack Development, Cloud Computing, and AI/ML.",
    url: "https://www.sauravx.com/",
    type: "website",
    siteName: "Saurav Kumar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurav Kumar - Software Engineer",
    description: "Associate Developer at SAP Labs India specializing in Full Stack Development, Cloud Computing, and AI/ML.",
  },
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  const localPosts = getAllPosts().map((p) => ({ ...p, source: "local" }));
  const mediumPosts = getMediumPosts().map((p) => ({ ...p, source: "medium" }));
  const recentPosts = [...localPosts, ...mediumPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center py-20">
        <p className="text-muted text-sm mb-4 tracking-wide uppercase">Software Engineer</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
          Hi, I&apos;m Saurav Kumar.
        </h1>
        <p className="text-lg sm:text-xl text-muted max-w-2xl leading-relaxed mb-10">
          Associate Developer at SAP Labs India. I build scalable cloud-native applications with Java, React, and Node.js focused on distributed systems, performance, and clean architecture.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/saurava69/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted border border-border px-5 py-2.5 rounded-md hover:text-foreground hover:border-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sauravkumar25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted border border-border px-5 py-2.5 rounded-md hover:text-foreground hover:border-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`${basePath}/Resume.pdf`}
            download
            className="text-sm text-background bg-foreground px-5 py-2.5 rounded-md hover:bg-accent hover:text-white transition-colors"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 border-t border-border">
        <h2 className="text-sm uppercase tracking-wider text-muted mb-12">Experience</h2>

        <div className="space-y-16">
          <article>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
              <h3 className="text-xl font-semibold text-foreground">Associate Developer</h3>
              <span className="text-sm text-muted mt-1 sm:mt-0">Jul 2025 — Present</span>
            </div>
            <p className="text-accent text-sm mb-2">SAP Labs India, Bengaluru</p>
            <p className="text-muted text-sm mb-4">GIRAF RunAnyWhere  Cloud-native test orchestration platform on HANA Cloud</p>
            <ul className="space-y-2.5 text-muted">
              <li className="flex items-start gap-3">
                <span className="text-border mt-2 text-xs">&#9656;</span>
                <span>Built CAP backend with OData services and Spring Boot APIs, running 600+ automated tests across 5 HANA clusters with dynamic dependency handling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-border mt-2 text-xs">&#9656;</span>
                <span>Implemented locking and DB isolation for 200+ concurrent runs, reducing failures by 30% and cycle time by 50%</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-border mt-2 text-xs">&#9656;</span>
                <span>Architected multi-target, API-first cloud framework on SAP BTP registered in SaaS Registry, enabling scalability across environments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-border mt-2 text-xs">&#9656;</span>
                <span>Added async GenAI failure classification and auto-healing (85% accuracy), reducing manual triage by 60%</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-border mt-2 text-xs">&#9656;</span>
                <span>Developed a React + UI5 Web Components UI with Dashboards and Custom Reports for test analysis, centralized
configuration system, and branch-based execution</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-5">
              {["SAP CAP", "Spring Boot", "React", "OData", "SAP BTP", "HANA Cloud", "GenAI"].map((t) => (
                <span key={t} className="text-xs text-muted border border-border px-2.5 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </article>

          <article>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
              <h3 className="text-xl font-semibold text-foreground">SDE Intern</h3>
              <span className="text-sm text-muted mt-1 sm:mt-0">May 2024 — Jul 2024</span>
            </div>
            <p className="text-accent text-sm mb-4">SAP Labs India, Bengaluru</p>
            <ul className="space-y-2.5 text-muted">
              <li className="flex items-start gap-3">
                <span className="text-border mt-2 text-xs">&#9656;</span>
                <span>Built a deepfake detection pipeline (EfficientNet-B4) trained on 140k+ samples, achieving 98% validation accuracy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-border mt-2 text-xs">&#9656;</span>
                <span>Built a Flask inference service supporting 300+ concurrent requests with real-time image/video processing; optimized 1080p inference to 22 FPS</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-5">
              {["Python", "TensorFlow", "Flask", "OpenCV", "WebRTC", "React"].map((t) => (
                <span key={t} className="text-xs text-muted border border-border px-2.5 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 border-t border-border">
        <h2 className="text-sm uppercase tracking-wider text-muted mb-12">Education</h2>

        <div className="space-y-12">
          <article>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
              <h3 className="text-xl font-semibold text-foreground">National Institute of Technology, Warangal</h3>
              <span className="text-sm text-muted mt-1 sm:mt-0">Dec 2021 — May 2025</span>
            </div>
            <p className="text-accent text-sm mb-2">B.Tech in Electronics and Communication Engineering</p>
            <p className="text-muted text-sm">CGPA: 7.69 / 10</p>
          </article>

          <article>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
              <h3 className="text-xl font-semibold text-foreground">Sunbeam Academy, Varanasi</h3>
              <span className="text-sm text-muted mt-1 sm:mt-0">Jun 2019 — Apr 2021</span>
            </div>
            <p className="text-accent text-sm mb-2">Senior Secondary (Class XII - CBSE)</p>
            <p className="text-muted text-sm">95.8%</p>
          </article>

          <article>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
              <h3 className="text-xl font-semibold text-foreground">Jawahar Navodaya Vidyalaya, Buxar</h3>
              <span className="text-sm text-muted mt-1 sm:mt-0">Aug 2014 — Apr 2019</span>
            </div>
            <p className="text-accent text-sm mb-2">Secondary (Class X - CBSE)</p>
            <p className="text-muted text-sm">97.6% — District Topper</p>
          </article>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 border-t border-border">
        <h2 className="text-sm uppercase tracking-wider text-muted mb-12">Projects</h2>

        <div className="space-y-8">
          <article className="border border-border rounded-lg p-6 sm:p-8 hover:border-muted transition-colors">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
              <h3 className="text-xl font-semibold text-foreground">Railway Ticket Booking System</h3>
              <a
                href="https://github.com/saurava69/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent underline underline-offset-3 hover:text-foreground mt-1 sm:mt-0"
              >
                View on GitHub &rarr;
              </a>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              High-concurrency train booking system built with Spring Boot, PostgreSQL, Redis, Apache Kafka, and Elasticsearch.
            </p>
            <ul className="space-y-2.5 text-muted mb-6">
              <li className="flex items-start gap-3">
                <span className="text-border mt-2 text-xs">&#9656;</span>
                <span>Distributed seat allocation using Redis Lua scripts and TTL-based locks with idempotent APIs and optimistic concurrency control</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-border mt-2 text-xs">&#9656;</span>
                <span>Event-driven workflow using Kafka for cancellations, refunds, and waitlist promotion with retry handling and dead-letter queues</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-border mt-2 text-xs">&#9656;</span>
                <span>CQRS-based search pipeline (PostgreSQL to Elasticsearch sync) with Redis caching, achieving sub-second latency</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-border mt-2 text-xs">&#9656;</span>
                <span>JWT-based RBAC, 30+ REST APIs via Swagger, React + shadcn/ui frontend</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {["Spring Boot", "PostgreSQL", "Redis", "Kafka", "Elasticsearch", "React", "Docker"].map((t) => (
                <span key={t} className="text-xs text-muted border border-border px-2.5 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </article>

          <article className="border border-border rounded-lg p-6 sm:p-8 hover:border-muted transition-colors">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
              <h3 className="text-xl font-semibold text-foreground">Saurity</h3>
              <div className="flex gap-4 mt-1 sm:mt-0">
                <a
                  href="https://github.com/saurity/saurity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent underline underline-offset-3 hover:text-foreground"
                >
                  GitHub &rarr;
                </a>
                <a
                  href="https://www.saurity.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent underline underline-offset-3 hover:text-foreground"
                >
                  Website &rarr;
                </a>
              </div>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              Enterprise-grade WordPress security plugin with multi-layer protection and external threat intelligence integration.
            </p>
            <ul className="space-y-2.5 text-muted mb-6">
              <li className="flex items-start gap-3">
                <span className="text-border mt-2 text-xs">&#9656;</span>
                <span>Multi-layer protection (WAF, rate limiting, honeypot) with Cloudflare API, AbuseIPDB, and Spamhaus integration; reduced brute-force and malicious traffic with minimal latency overhead</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-border mt-2 text-xs">&#9656;</span>
                <span>Resilient admin recovery system (kill switch, bypass URL, manual override) with GDPR-compliant logging and adaptive tarpitting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-border mt-2 text-xs">&#9656;</span>
                <span>SEO-optimized <a href="https://www.saurity.com/" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-3 hover:text-foreground">Next.js marketing site</a> with custom CMS and admin dashboard (Lighthouse 98+)</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {["WordPress", "PHP", "Next.js", "Cloudflare API", "AbuseIPDB", "React"].map((t) => (
                <span key={t} className="text-xs text-muted border border-border px-2.5 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </article>

          <article className="border border-border rounded-lg p-6 sm:p-8 hover:border-muted transition-colors">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
              <h3 className="text-xl font-semibold text-foreground">ChatWave</h3>
              <a
                href="https://github.com/Saurava69/realtime-chat-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent underline underline-offset-3 hover:text-foreground mt-1 sm:mt-0"
              >
                View on GitHub &rarr;
              </a>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              Real-time chat application handling 500+ concurrent users with sub-200ms latency.
            </p>
            <ul className="space-y-2.5 text-muted mb-6">
              <li className="flex items-start gap-3">
                <span className="text-border mt-2 text-xs">&#9656;</span>
                <span>Event-driven architecture with Socket.io, JWT auth, and AES-256 encryption</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-border mt-2 text-xs">&#9656;</span>
                <span>Binary protocol optimization reducing bandwidth by 40%</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-border mt-2 text-xs">&#9656;</span>
                <span>Group chat with role-based access and Redis-cached participant lists</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "Socket.io", "MongoDB", "Redis", "JWT"].map((t) => (
                <span key={t} className="text-xs text-muted border border-border px-2.5 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 border-t border-border">
        <h2 className="text-sm uppercase tracking-wider text-muted mb-12">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xs uppercase tracking-wider text-muted mb-3">Languages</h3>
            <p className="text-foreground">Java, C++, JavaScript, Python, SQL</p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-wider text-muted mb-3">Backend & Frameworks</h3>
            <p className="text-foreground">Spring Boot, Node.js, SAP CAP, Express, React, Elasticsearch</p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-wider text-muted mb-3">Databases & Messaging</h3>
            <p className="text-foreground">PostgreSQL, MySQL, Redis, Kafka</p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-wider text-muted mb-3">Cloud & DevOps</h3>
            <p className="text-foreground">Docker, Kubernetes, AWS (EC2, S3, SQS), Jenkins, Git</p>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20 border-t border-border">
        <div className="flex justify-between items-baseline mb-12">
          <h2 className="text-sm uppercase tracking-wider text-muted">Latest Posts</h2>
          <Link href="/blog" className="text-sm text-accent hover:text-foreground transition-colors">
            View all &rarr;
          </Link>
        </div>

        <div className="space-y-6">
          {recentPosts.map((post) => (
            <article key={post.slug || post.url} className="border border-border rounded-lg p-5 sm:p-6 hover:border-muted transition-colors">
              {post.source === "local" ? (
                <Link href={`/blog/${post.slug}`} className="block">
                  <h3 className="text-lg font-semibold text-foreground hover:text-accent transition-colors mb-2">{post.title}</h3>
                  {post.description && <p className="text-sm text-muted line-clamp-2 mb-3">{post.description}</p>}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted">{post.date}</span>
                    {post.tags && post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs text-muted border border-border px-2 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                </Link>
              ) : (
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="block">
                  <h3 className="text-lg font-semibold text-foreground hover:text-accent transition-colors mb-2 flex items-center gap-2">
                    {post.title}
                    <svg className="w-3.5 h-3.5 text-muted shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </h3>
                  {post.description && <p className="text-sm text-muted line-clamp-2 mb-3">{post.description}</p>}
                  <span className="text-xs text-muted">{post.date}</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 border-t border-border">
        <h2 className="text-sm uppercase tracking-wider text-muted mb-12">Contact</h2>

        <div className="space-y-6">
          <p className="text-lg text-muted max-w-xl leading-relaxed">
            Open to opportunities in backend engineering, distributed systems, and full stack development.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="mailto:sauravx25@gmail.com"
              className="border border-border rounded-lg p-5 hover:border-muted transition-colors group"
            >
              <p className="text-xs text-muted uppercase tracking-wide mb-2">Email</p>
              <p className="text-foreground group-hover:text-accent transition-colors">sauravx25@gmail.com</p>
            </a>
            <a
              href="tel:+916206846984"
              className="border border-border rounded-lg p-5 hover:border-muted transition-colors group"
            >
              <p className="text-xs text-muted uppercase tracking-wide mb-2">Phone</p>
              <p className="text-foreground group-hover:text-accent transition-colors">+91 620 684 6984</p>
            </a>
            <a
              href="https://www.linkedin.com/in/sauravkumar25"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border rounded-lg p-5 hover:border-muted transition-colors group"
            >
              <p className="text-xs text-muted uppercase tracking-wide mb-2">LinkedIn</p>
              <p className="text-foreground group-hover:text-accent transition-colors">in/sauravkumar25</p>
            </a>
            <a
              href="https://github.com/saurava69/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border rounded-lg p-5 hover:border-muted transition-colors group"
            >
              <p className="text-xs text-muted uppercase tracking-wide mb-2">GitHub</p>
              <p className="text-foreground group-hover:text-accent transition-colors">saurava69</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
