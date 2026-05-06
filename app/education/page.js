export const metadata = {
  title: 'Education | Saurav Kumar',
  description: 'B.Tech in Electronics and Communication Engineering from National Institute of Technology, Warangal. 99.32%ile JEE Mains.',
  alternates: { canonical: 'https://www.sauravx.com/education/' },
  openGraph: {
    title: 'Education | Saurav Kumar',
    description: 'B.Tech in Electronics and Communication Engineering from National Institute of Technology, Warangal.',
    url: 'https://www.sauravx.com/education/',
    type: 'website',
    siteName: 'Saurav Kumar',
  },
  twitter: { card: 'summary', title: 'Education | Saurav Kumar' },
};

export default function Education() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-sm uppercase tracking-wider text-muted mb-12">Education</h1>

      <div className="space-y-12">
        <article>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
            <h2 className="text-xl font-semibold text-foreground">National Institute of Technology, Warangal</h2>
            <span className="text-sm text-muted mt-1 sm:mt-0">Dec 2021 — May 2025</span>
          </div>
          <p className="text-accent text-sm mb-2">B.Tech in Electronics and Communication Engineering</p>
          <p className="text-muted text-sm">CGPA: 7.69 / 10</p>
        </article>

        <article>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
            <h2 className="text-xl font-semibold text-foreground">Sunbeam Academy, Varanasi</h2>
            <span className="text-sm text-muted mt-1 sm:mt-0">Jun 2019 — Apr 2021</span>
          </div>
          <p className="text-accent text-sm mb-2">Senior Secondary (Class XII - CBSE)</p>
          <p className="text-muted text-sm">95.8%</p>
        </article>

        <article>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
            <h2 className="text-xl font-semibold text-foreground">Jawahar Navodaya Vidyalaya, Buxar</h2>
            <span className="text-sm text-muted mt-1 sm:mt-0">Aug 2014 — Apr 2019</span>
          </div>
          <p className="text-accent text-sm mb-2">Secondary (Class X - CBSE)</p>
          <p className="text-muted text-sm">97.6% — District Topper</p>
        </article>
      </div>
    </div>
  );
}
