export const metadata = {
  title: 'Skills | Saurav Kumar',
  description: 'Technical skills - Java, Spring Boot, Node.js, React, PostgreSQL, Redis, Kafka, Docker, Kubernetes, AWS.',
  alternates: { canonical: 'https://www.sauravx.com/skills/' },
  openGraph: {
    title: 'Skills | Saurav Kumar',
    description: 'Technical skills - Java, Spring Boot, Node.js, React, PostgreSQL, Redis, Kafka, Docker, Kubernetes, AWS.',
    url: 'https://www.sauravx.com/skills/',
    type: 'website',
    siteName: 'Saurav Kumar',
  },
  twitter: { card: 'summary', title: 'Skills | Saurav Kumar' },
};

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-sm uppercase tracking-wider text-muted mb-12">Skills</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xs uppercase tracking-wider text-muted mb-3">Languages</h2>
          <p className="text-foreground">Java, C++, JavaScript, Python, SQL</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-wider text-muted mb-3">Backend & Frameworks</h2>
          <p className="text-foreground">Spring Boot, Node.js, SAP CAP, Express, React, Elasticsearch, LangGraph</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-wider text-muted mb-3">Databases & Messaging</h2>
          <p className="text-foreground">PostgreSQL, MySQL, Redis, Kafka</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-wider text-muted mb-3">Cloud & DevOps</h2>
          <p className="text-foreground">Docker, Kubernetes, AWS (EC2, S3, SQS), Jenkins, Git</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-wider text-muted mb-3">Core Concepts</h2>
          <p className="text-foreground">Microservices, Concurrency, OOP, DSA, Networking</p>
        </div>
      </div>
    </div>
  );
}
