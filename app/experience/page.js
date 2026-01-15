export const metadata = {
  title: 'Work Experience',
  description: 'Saurav Kumar\'s professional experience at SAP Labs India as Associate Developer and SDE Intern. Building cloud-native applications, AI/ML solutions, and automation frameworks.',
  openGraph: {
    title: 'Work Experience | Saurav Kumar',
    description: 'Professional experience at SAP Labs India building cloud-native applications and AI/ML solutions',
    url: 'https://www.sauravx.com/experience',
  },
};

export default function Experience() {
  const experienceSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WorkExperience",
      "name": "Associate Developer",
      "url": "https://www.sap.com",
      "provider": {
        "@type": "Organization",
        "name": "SAP Labs India",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bengaluru",
          "addressCountry": "IN"
        }
      },
      "startDate": "2025-07",
      "description": "Building cloud-native automation frameworks and enterprise applications on SAP BTP"
    },
    {
      "@context": "https://schema.org",
      "@type": "WorkExperience",
      "name": "SDE Intern",
      "url": "https://www.sap.com",
      "provider": {
        "@type": "Organization",
        "name": "SAP Labs India",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bengaluru",
          "addressCountry": "IN"
        }
      },
      "startDate": "2024-05",
      "endDate": "2024-07",
      "description": "Developed AI models for synthetic media detection across image, audio, and video modalities"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white-900 mb-4">Work Experience</h1>
          <p className="text-xl text-white-600">
            Professional journey building enterprise-grade applications and AI/ML solutions
          </p>
        </header>

        <section className="space-y-12">
          <article className="bg-white rounded-lg shadow-md p-8 border-l-4 border-blue-600">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Associate Developer</h2>
                <p className="text-lg text-blue-600 font-semibold">SAP Labs India, Bengaluru</p>
              </div>
              <div className="text-gray-600 font-medium mt-2 md:mt-0">
                July 2025 – Present
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">GIRAF RunAnyWhere – Cloud-Native Automation Framework</h3>
                <p className="text-gray-700 mb-3">
                  Cloud-native automation framework for executing end-to-end tests on HANA Cloud across multiple environments with AI-driven result analysis and dynamic dependency handling.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Developed modular <strong>React + UI5 Web Components</strong> UI, improving test execution visibility and added Dashboard view, Report Portal for Test Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Built <strong>CAP backend</strong> with secure <strong>OData services</strong>, enabling <strong>600+ automated tests</strong> across environments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Integrated <strong>GenAI-based failure classification</strong>, achieving <strong>85% accuracy</strong> in distinguishing true vs. environment-related issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Architected and deployed a <strong>multi-target, API-first cloud framework</strong> on <strong>SAP BTP</strong>, registered in <strong>SaaS Registry</strong>, enabling scalability and reducing false failure runs by <strong>30%</strong></span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Key Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">React</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">UI5 Web Components</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">SAP CAP</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">OData</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">SAP BTP</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">HANA Cloud</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">GenAI</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Impact & Results</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>✓ Enabled 600+ automated tests across multiple environments</li>
                  <li>✓ Achieved 85% accuracy in AI-driven failure classification</li>
                  <li>✓ Reduced false failure runs by 30%</li>
                  <li>✓ Improved test execution visibility and analysis capabilities</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md p-8 border-l-4 border-green-600">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">SDE Intern</h2>
                <p className="text-lg text-green-600 font-semibold">SAP Labs India, Bengaluru</p>
              </div>
              <div className="text-gray-600 font-medium mt-2 md:mt-0">
                May 2024 – July 2024
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Synthetic Media Detection</h3>
                <p className="text-gray-700 mb-3">
                  Developed and deployed AI models to detect synthetic media across image, audio, and video modalities.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Engineered <strong>CNN models (EfficientNet-B4)</strong> achieving <strong>97.16% image authenticity accuracy</strong> and <strong>98.0% audio deepfake detection</strong> using mel-spectrograms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Trained and validated models in <strong>TensorFlow</strong> using <strong>140k+ synthetic/natural media samples</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Designed real-time detection feature using <strong>OpenCV + WebRTC</strong>, processing <strong>1080p feeds at 18 FPS</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Built a scalable <strong>Flask backend</strong> handling <strong>300+ concurrent media analysis requests</strong>, with an integrated <strong>React UI</strong> for real-time visualization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Key Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">TensorFlow</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">EfficientNet-B4</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">CNN</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">OpenCV</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">WebRTC</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Flask</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">React</span>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Impact & Results</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>✓ Achieved 97.16% accuracy in image authenticity detection</li>
                  <li>✓ Achieved 98.0% accuracy in audio deepfake detection</li>
                  <li>✓ Processed 1080p video feeds at 18 FPS in real-time</li>
                  <li>✓ Handled 300+ concurrent media analysis requests</li>
                  <li>✓ Trained models on 140k+ diverse media samples</li>
                </ul>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Enterprise-Scale Development</h3>
                <p className="text-gray-700 text-sm">Built production systems serving hundreds of concurrent users with high reliability</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">AI/ML Integration</h3>
                <p className="text-gray-700 text-sm">Implemented GenAI and CNN models achieving 85-98% accuracy in production environments</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Cloud Architecture</h3>
                <p className="text-gray-700 text-sm">Designed and deployed multi-target cloud-native frameworks on SAP BTP</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Full Stack Excellence</h3>
                <p className="text-gray-700 text-sm">End-to-end development from React frontends to CAP backends with OData services</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
