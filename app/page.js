export const metadata = {
  title: 'Home',
  description: 'Saurav Kumar - Associate Developer at SAP Labs India. Full Stack Developer specializing in Cloud Computing, AI/ML, React, Node.js, Java, and Python. Building scalable cloud-native applications on SAP BTP.',
  openGraph: {
    title: 'Saurav Kumar - Software Engineer | Full Stack Developer',
    description: 'Associate Developer at SAP Labs India specializing in Full Stack Development, Cloud Computing, and AI/ML',
    url: 'https://sauravx.com',
  },
};

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Saurav Kumar - Software Engineer Portfolio",
    "url": "https://sauravx.com",
    "description": "Professional portfolio of Saurav Kumar, Associate Developer at SAP Labs India",
    "author": {
      "@type": "Person",
      "name": "Saurav Kumar"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Saurav Kumar
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6">
              Associate Developer | Full Stack Engineer | Cloud & AI/ML Specialist
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Building scalable cloud-native applications at SAP Labs India. Expertise in React, Node.js, Java, Python, SAP CAP, UI5, and GenAI integration on SAP BTP and HANA Cloud platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/Resume.pdf"
                download
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download Resume
              </a>
              <a
                href="https://github.com/saurava69/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sauravkumar25"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="/contact"
                className="bg-white text-gray-900 border-2 border-gray-300 px-6 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Summary</h2>
          <article className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            <p>
              Associate Developer at SAP Labs India with strong expertise in full stack development, cloud computing, and artificial intelligence. Proven track record of building enterprise-grade applications that serve hundreds of concurrent users with high performance and reliability.
            </p>
            <p>
              Specialized in architecting cloud-native solutions using React, Node.js, Java, and Python on SAP BTP. Experience in developing AI-powered automation frameworks, synthetic media detection systems, and real-time communication platforms. Strong foundation in data structures, algorithms, and system design from National Institute of Technology, Warangal.
            </p>
            <p>
              Passionate about leveraging cutting-edge technologies including GenAI, microservices architecture, and modern web frameworks to solve complex business problems and deliver measurable impact.
            </p>
          </article>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Full Stack Development</h3>
              <p className="text-gray-700">
                Building end-to-end web applications with React, Node.js, and modern frameworks. Expertise in UI5 Web Components, RESTful APIs, and real-time communication with Socket.io.
              </p>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud & Enterprise Systems</h3>
              <p className="text-gray-700">
                Architecting scalable solutions on SAP BTP, HANA Cloud, and implementing SAP CAP framework with OData services for enterprise applications.
              </p>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI/ML & Automation</h3>
              <p className="text-gray-700">
                Developing CNN models with TensorFlow, implementing GenAI-based classification systems, and building automated testing frameworks with 85% accuracy.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <article className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">GIRAF RunAnyWhere Framework</h3>
              <p className="text-gray-700">
                Cloud-native automation framework executing 600+ automated tests on HANA Cloud with GenAI-based failure analysis achieving 85% accuracy. Reduced false failures by 30%.
              </p>
            </article>
            <article className="border-l-4 border-green-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Synthetic Media Detection</h3>
              <p className="text-gray-700">
                AI models detecting synthetic media across image, audio, and video with 97.16% accuracy using EfficientNet-B4 and mel-spectrograms, processing 1080p feeds at 18 FPS.
              </p>
            </article>
            <article className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ChatWave Platform</h3>
              <p className="text-gray-700">
                Real-time chat application handling 500+ concurrent users with sub-200ms latency using Socket.io, JWT authentication, and AES-256 encryption.
              </p>
            </article>
            <article className="border-l-4 border-orange-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Academic Excellence</h3>
              <p className="text-gray-700">
                99.32 percentile in JEE Mains among 1 million+ students, NTSE qualified District Topper, graduated from NIT Warangal with 7.69 CGPA in Electronics & Communication Engineering.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Open to opportunities in full stack development, cloud engineering, and AI/ML roles. Let&apos;s build something impactful together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/Resume.pdf"
              download
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Download Resume
            </a>
            <a
              href="/contact"
              className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/experience"
              className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Experience
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
