export const metadata = {
  title: 'Experience | Saurav Kumar',
  description: 'Saurav Kumar - Associate Developer at SAP Labs India. Building cloud-native test orchestration platforms and AI-powered detection systems.',
  alternates: { canonical: 'https://www.sauravx.com/experience/' },
  openGraph: {
    title: 'Experience | Saurav Kumar',
    description: 'Associate Developer at SAP Labs India. Building cloud-native test orchestration platforms and AI-powered detection systems.',
    url: 'https://www.sauravx.com/experience/',
    type: 'website',
    siteName: 'Saurav Kumar',
  },
  twitter: { card: 'summary', title: 'Experience | Saurav Kumar' },
};

export default function Experience() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-sm uppercase tracking-wider text-muted mb-12">Experience</h1>

      <div className="space-y-16">
        <article>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
            <h2 className="text-xl font-semibold text-foreground">Associate Developer</h2>
            <span className="text-sm text-muted mt-1 sm:mt-0">Jul 2025 — Present</span>
          </div>
          <p className="text-accent text-sm mb-2">SAP Labs India, Bengaluru</p>
          <p className="text-muted text-sm mb-4">GIRAF RunAnyWhere - Cloud-native test orchestration platform on HANA Cloud</p>
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
              <span>Developed a React + UI5 Web Components UI with Dashboards and Custom Reports for test analysis, centralized configuration system, and branch-based execution</span>
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
            <h2 className="text-xl font-semibold text-foreground">SDE Intern</h2>
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
    </div>
  );
}
