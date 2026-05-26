export const metadata = {
  title: 'Projects | Saurav Kumar',
  description: 'Railway Ticket Booking System with Spring Boot, Kafka, Redis; OpenChess Analyzer with Stockfish-powered analysis; LearnHLD system design simulator with Next.js and ReactFlow; Medium API in Go; Saurity WordPress security; ChatWave real-time chat.',
  alternates: { canonical: 'https://www.sauravx.com/projects/' },
  openGraph: {
    title: 'Projects | Saurav Kumar',
    description: 'Railway Ticket Booking System with Spring Boot, Kafka, Redis; OpenChess Analyzer with Stockfish-powered analysis; LearnHLD system design simulator with Next.js and ReactFlow; Medium API in Go; Saurity WordPress security; ChatWave real-time chat.',
    url: 'https://www.sauravx.com/projects/',
    type: 'website',
    siteName: 'Saurav Kumar',
  },
  twitter: { card: 'summary', title: 'Projects | Saurav Kumar' },
};

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-sm uppercase tracking-wider text-muted mb-12">Projects</h1>

      <div className="space-y-8">
        <article className="border border-border rounded-lg p-6 sm:p-8 hover:border-muted transition-colors">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
            <h2 className="text-xl font-semibold text-foreground">Railway Ticket Booking System</h2>
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
            <h2 className="text-xl font-semibold text-foreground">OpenChess Analyzer</h2>
            <div className="flex gap-4 mt-1 sm:mt-0">
              <a
                href="https://github.com/Saurava69/openchess-analyzer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent underline underline-offset-3 hover:text-foreground"
              >
                GitHub &rarr;
              </a>
              <a
                href="https://openchess.sauravx.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent underline underline-offset-3 hover:text-foreground"
              >
                Live Demo &rarr;
              </a>
            </div>
          </div>
          <p className="text-muted leading-relaxed mb-4">
            Full-stack chess analysis platform with Stockfish-powered move evaluation, blunder detection, and personal game archives supporting analysis of 1000+ games.
          </p>
          <ul className="space-y-2.5 text-muted mb-6">
            <li className="flex items-start gap-3">
              <span className="text-border mt-2 text-xs">&#9656;</span>
              <span>Stockfish-powered move evaluation with real-time analysis and blunder detection for chess improvement tracking</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-border mt-2 text-xs">&#9656;</span>
              <span>Personal game archives with support for analyzing 1000+ games and tracking performance over time</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-border mt-2 text-xs">&#9656;</span>
              <span>Interactive gameplay and analysis workflows enabling real-time game review and position exploration</span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            {["React", "Node.js", "Stockfish", "Chess.js", "PostgreSQL", "WebSocket"].map((t) => (
              <span key={t} className="text-xs text-muted border border-border px-2.5 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
        </article>

        <article className="border border-border rounded-lg p-6 sm:p-8 hover:border-muted transition-colors">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
            <h2 className="text-xl font-semibold text-foreground">LearnHLD &mdash; System Design Simulator</h2>
            <div className="flex gap-4 mt-1 sm:mt-0">
              <a
                href="https://learnhld.sauravx.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent underline underline-offset-3 hover:text-foreground"
              >
                Website &rarr;
              </a>
            </div>
          </div>
          <p className="text-muted leading-relaxed mb-4">
            Open-source system design interview simulator &mdash; drag real infrastructure components onto a canvas, simulate production-scale traffic, and get scored like a real interviewer would evaluate you.
          </p>
          <ul className="space-y-2.5 text-muted mb-6">
            <li className="flex items-start gap-3">
              <span className="text-border mt-2 text-xs">&#9656;</span>
              <span>30 infrastructure components with verified benchmarks (QPS, latency) and a traffic simulator using Kahn&apos;s topological sort for fan-in/fan-out QPS accumulation and bottleneck detection</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-border mt-2 text-xs">&#9656;</span>
              <span>5-category scoring engine (scalability, availability, latency, cost, trade-offs) covering 35 design problems from URL Shortener to TikTok and Kafka</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-border mt-2 text-xs">&#9656;</span>
              <span>Interview practice mode with phased 45-minute timer, integrated learning path sourced from the system-design-primer, and 14 trade-off decision cards</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-border mt-2 text-xs">&#9656;</span>
              <span>Built with Next.js 16, React 19, ReactFlow v12, Zustand; Fastify + Prisma backend with Google OAuth and AI chat</span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            {["Next.js 16", "React 19", "TypeScript", "ReactFlow", "Zustand", "Tailwind v4", "Fastify", "Prisma"].map((t) => (
              <span key={t} className="text-xs text-muted border border-border px-2.5 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
        </article>

        <article className="border border-border rounded-lg p-6 sm:p-8 hover:border-muted transition-colors">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
            <h2 className="text-xl font-semibold text-foreground">Medium API (Unofficial)</h2>
            <a
              href="https://github.com/Saurava69/Medium-api"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent underline underline-offset-3 hover:text-foreground mt-1 sm:mt-0"
            >
              View on GitHub &rarr;
            </a>
          </div>
          <p className="text-muted leading-relaxed mb-4">
            Self-hosted REST API to fetch articles and metadata from Medium.com &mdash; pure Go, no browser dependencies, no Medium credentials required.
          </p>
          <ul className="space-y-2.5 text-muted mb-6">
            <li className="flex items-start gap-3">
              <span className="text-border mt-2 text-xs">&#9656;</span>
              <span>Article, user, tag, and search endpoints backed by Medium&apos;s public RSS feeds &mdash; no headless browser, no Cloudflare bypass needed</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-border mt-2 text-xs">&#9656;</span>
              <span>SQLite-backed API key management with admin endpoints, per-key usage tracking, expiry support, and bearer-token admin auth</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-border mt-2 text-xs">&#9656;</span>
              <span>Per-IP rate limiting and in-memory response caching (sub-10ms cached responses), Dockerized for one-command deploys</span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            {["Go", "SQLite", "Docker", "REST"].map((t) => (
              <span key={t} className="text-xs text-muted border border-border px-2.5 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
        </article>

        <article className="border border-border rounded-lg p-6 sm:p-8 hover:border-muted transition-colors">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
            <h2 className="text-xl font-semibold text-foreground">Saurity</h2>
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
            <h2 className="text-xl font-semibold text-foreground">ChatWave</h2>
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
    </div>
  );
}
