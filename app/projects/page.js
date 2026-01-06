export const metadata = {
  title: 'Projects',
  description: 'Saurav Kumar\'s personal projects including ChatWave real-time chat application built with React, Node.js, Socket.io, and MongoDB. Full stack development showcasing scalability and security.',
  openGraph: {
    title: 'Projects | Saurav Kumar',
    description: 'Personal projects showcasing full stack development, real-time systems, and cloud architecture',
    url: 'https://sauravx.com/projects',
  },
};

export default function Projects() {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "ChatWave",
    "description": "Full-Stack Real-Time Chat Application handling 500+ concurrent users with sub-200ms latency",
    "author": {
      "@type": "Person",
      "name": "Saurav Kumar"
    },
    "dateCreated": "2023-04",
    "dateModified": "2024-07",
    "url": "https://github.com/Saurava69/realtime-chat-app",
    "programmingLanguage": ["JavaScript", "Node.js", "React"],
    "keywords": ["real-time chat", "websockets", "socket.io", "full stack", "react", "node.js"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white-900 mb-4">Personal Projects</h1>
          <p className="text-xl text-white-600">
            Building scalable full stack applications with modern technologies
          </p>
        </header>

        <section className="space-y-12">
          <article className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-purple-600">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">ChatWave</h2>
                <p className="text-lg text-purple-600 font-semibold">Full-Stack Real-Time Chat Application</p>
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <a
                  href="https://github.com/Saurava69/realtime-chat-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm"
                >
                  View on GitHub
                </a>
                <span className="text-gray-600 font-medium">Apr 2023 – Jul 2024</span>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Production-ready real-time chat platform built with React.js and Node.js, demonstrating expertise in event-driven architecture, WebSocket communication, and scalable backend design. The application handles high concurrent user loads with optimized performance and enterprise-grade security.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features & Technical Implementation</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 font-bold">•</span>
                    <div>
                      <strong>High-Performance Real-Time Communication:</strong> Built a <strong>React.js + Node.js</strong> chat platform handling <strong>500+ concurrent users</strong> with <strong>sub-200ms latency</strong> using <strong>Socket.io</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 font-bold">•</span>
                    <div>
                      <strong>Event-Driven Architecture:</strong> Designed event-driven architecture with message compression and <strong>40% bandwidth reduction</strong> via binary protocol optimization
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 font-bold">•</span>
                    <div>
                      <strong>Enterprise-Grade Security:</strong> Secured sessions using <strong>JWT authentication</strong>, token rotation, and <strong>AES-256 encryption</strong> for <strong>MongoDB Atlas</strong> storage
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 font-bold">•</span>
                    <div>
                      <strong>Modern UI/UX:</strong> Created responsive <strong>Chakra UI</strong> interface with theme switching and accessibility compliance
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 font-bold">•</span>
                    <div>
                      <strong>Advanced Features:</strong> Implemented group chat CRUD operations, role-based access control, and <strong>Redis caching</strong> for participant lists
                    </div>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">F</span>
                    Frontend Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">React.js</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Chakra UI</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Socket.io Client</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Responsive Design</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">B</span>
                    Backend Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Express.js</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Socket.io</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">MongoDB Atlas</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Redis</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">S</span>
                    Security & Authentication
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">JWT</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">AES-256</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Token Rotation</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Role-Based Access</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">P</span>
                    Performance Optimizations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Message Compression</span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Binary Protocol</span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Redis Caching</span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Event-Driven</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3 text-lg">Performance Metrics & Impact</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="bg-purple-600 text-white rounded-lg px-4 py-3 font-bold text-2xl mr-4">500+</div>
                    <div>
                      <p className="font-semibold text-gray-900">Concurrent Users</p>
                      <p className="text-sm text-gray-600">Simultaneous connections handled</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-600 text-white rounded-lg px-4 py-3 font-bold text-2xl mr-4">&lt;200ms</div>
                    <div>
                      <p className="font-semibold text-gray-900">Message Latency</p>
                      <p className="text-sm text-gray-600">Average response time</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-600 text-white rounded-lg px-4 py-3 font-bold text-2xl mr-4">40%</div>
                    <div>
                      <p className="font-semibold text-gray-900">Bandwidth Reduction</p>
                      <p className="text-sm text-gray-600">Via protocol optimization</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-600 text-white rounded-lg px-4 py-3 font-bold text-2xl mr-4">100%</div>
                    <div>
                      <p className="font-semibold text-gray-900">Security Coverage</p>
                      <p className="text-sm text-gray-600">End-to-end encryption</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3 text-lg">Technical Challenges Solved</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-1">✓</span>
                    <div>
                      <p className="font-medium text-gray-900">Scalability under high load</p>
                      <p className="text-sm text-gray-600">Implemented event-driven architecture with Socket.io to handle 500+ concurrent connections efficiently</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-1">✓</span>
                    <div>
                      <p className="font-medium text-gray-900">Network bandwidth optimization</p>
                      <p className="text-sm text-gray-600">Reduced bandwidth usage by 40% through message compression and binary protocol optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-1">✓</span>
                    <div>
                      <p className="font-medium text-gray-900">Security and data protection</p>
                      <p className="text-sm text-gray-600">Implemented JWT authentication with token rotation and AES-256 encryption for secure data storage</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-1">✓</span>
                    <div>
                      <p className="font-medium text-gray-900">Real-time state management</p>
                      <p className="text-sm text-gray-600">Used Redis caching for participant lists and optimized state synchronization across clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Development Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Architecture First</h3>
              <p className="text-gray-700 text-sm">
                Designed scalable event-driven architecture considering performance, security, and maintainability from the start
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Iterative Development</h3>
              <p className="text-gray-700 text-sm">
                Built features incrementally with continuous testing and optimization based on performance metrics
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Production Ready</h3>
              <p className="text-gray-700 text-sm">
                Implemented enterprise-grade security, error handling, and monitoring for production deployment
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
