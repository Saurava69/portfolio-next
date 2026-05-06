export const metadata = {
  title: 'Contact | Saurav Kumar',
  description: 'Get in touch with Saurav Kumar - sauravx25@gmail.com. Open to backend engineering, distributed systems, and full stack development opportunities.',
  alternates: { canonical: 'https://www.sauravx.com/contact/' },
  openGraph: {
    title: 'Contact | Saurav Kumar',
    description: 'Get in touch with Saurav Kumar. Open to backend engineering, distributed systems, and full stack development opportunities.',
    url: 'https://www.sauravx.com/contact/',
    type: 'website',
    siteName: 'Saurav Kumar',
  },
  twitter: { card: 'summary', title: 'Contact | Saurav Kumar' },
};

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-sm uppercase tracking-wider text-muted mb-12">Contact</h1>

      <p className="text-lg text-muted max-w-xl leading-relaxed mb-8">
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
  );
}
