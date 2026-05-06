export const metadata = {
  title: 'Projects | Saurav Kumar',
  description: 'Railway Ticket Booking System with Spring Boot, Kafka, Redis and ChatWave real-time chat application with React, Node.js, Socket.io.',
  alternates: { canonical: 'https://www.sauravx.com/projects/' },
  openGraph: {
    title: 'Projects | Saurav Kumar',
    description: 'Railway Ticket Booking System with Spring Boot, Kafka, Redis and ChatWave real-time chat application with React, Node.js, Socket.io.',
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
