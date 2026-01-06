export const metadata = {
  title: 'Technical Skills',
  description: 'Saurav Kumar\'s technical skills and expertise in programming languages (C++, Java, Python, JavaScript), frameworks (React, Node.js, Spring Boot, SAP UI5), cloud platforms (SAP BTP, HANA Cloud), and databases (MySQL, MongoDB).',
  openGraph: {
    title: 'Technical Skills | Saurav Kumar',
    description: 'Technical expertise in Full Stack Development, Cloud Computing, AI/ML, and Enterprise Systems',
    url: 'https://sauravx.com/skills',
  },
};

export default function Skills() {
  const skillsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Programming Languages",
        "description": "C++, Java, Python, JavaScript, SQL, HTML, CSS, CAP"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Frameworks & Libraries",
        "description": "Node.js, Express.js, Spring Boot, SAP UI5, React.js"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Cloud & Databases",
        "description": "SAP BTP, HANA Cloud, MySQL, MongoDB, Redis"
      }
    ]
  };

  const skills = {
    languages: [
      { name: 'C++', level: 'Advanced', color: 'blue' },
      { name: 'Java', level: 'Advanced', color: 'red' },
      { name: 'Python', level: 'Advanced', color: 'yellow' },
      { name: 'JavaScript', level: 'Advanced', color: 'green' },
      { name: 'SQL', level: 'Intermediate', color: 'indigo' },
      { name: 'HTML', level: 'Advanced', color: 'orange' },
      { name: 'CSS', level: 'Advanced', color: 'purple' },
      { name: 'CAP', level: 'Intermediate', color: 'blue' }
    ],
    frameworks: [
      { name: 'React.js', level: 'Advanced', category: 'Frontend' },
      { name: 'Node.js', level: 'Advanced', category: 'Backend' },
      { name: 'Express.js', level: 'Advanced', category: 'Backend' },
      { name: 'Spring Boot', level: 'Intermediate', category: 'Backend' },
      { name: 'SAP UI5', level: 'Advanced', category: 'Frontend' },
      { name: 'TensorFlow', level: 'Intermediate', category: 'AI/ML' },
      { name: 'Socket.io', level: 'Advanced', category: 'Real-time' },
      { name: 'Tailwind CSS', level: 'Advanced', category: 'Frontend' }
    ],
    cloud: [
      { name: 'SAP BTP', level: 'Advanced' },
      { name: 'SAP HANA Cloud', level: 'Advanced' },
      { name: 'MySQL', level: 'Advanced' },
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'MongoDB Atlas', level: 'Advanced' },
      { name: 'Redis', level: 'Intermediate' }
    ],
    tools: [
      { name: 'Git', category: 'Version Control' },
      { name: 'GitHub', category: 'Version Control' },
      { name: 'Visual Studio Code', category: 'IDE' },
      { name: 'Docker', category: 'DevOps' },
      { name: 'Postman', category: 'API Testing' },
      { name: 'JWT', category: 'Authentication' }
    ],
    concepts: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming (OOP)',
      'Operating Systems',
      'Artificial Intelligence and Machine Learning',
      'Database Management Systems (DBMS)',
      'Computer Networks',
      'System Design',
      'RESTful API Design',
      'Microservices Architecture',
      'Event-Driven Architecture',
      'Cloud-Native Development',
      'Agile Methodology'
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white-900 mb-4">Technical Skills</h1>
          <p className="text-xl text-white-600">
            Comprehensive expertise across full stack development, cloud platforms, and modern technologies
          </p>
        </header>

        <section className="space-y-12">
          <article className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 text-white rounded-lg px-3 py-1 mr-3">01</span>
              Programming Languages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.languages.map((skill, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.name}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    skill.level === 'Advanced' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-green-600 text-white rounded-lg px-3 py-1 mr-3">02</span>
              Frameworks & Libraries
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Frontend Development</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {skills.frameworks.filter(f => f.category === 'Frontend').map((skill, index) => (
                    <div key={index} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                      <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                      <span className="text-sm text-gray-600">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Backend Development</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {skills.frameworks.filter(f => f.category === 'Backend').map((skill, index) => (
                    <div key={index} className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                      <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                      <span className="text-sm text-gray-600">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Specialized Technologies</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {skills.frameworks.filter(f => f.category === 'AI/ML' || f.category === 'Real-time').map((skill, index) => (
                    <div key={index} className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                      <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm text-gray-600">{skill.level}</span>
                        <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">{skill.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-indigo-600 text-white rounded-lg px-3 py-1 mr-3">03</span>
              Cloud Platforms & Databases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                  </svg>
                  Cloud Platforms
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-black font-medium">SAP BTP</span>
                    <span className="ml-auto text-sm text-gray-600">Advanced</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span className=" text-black font-medium">SAP HANA Cloud</span>
                    <span className="ml-auto text-sm text-gray-600">Advanced</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                  </svg>
                  Databases
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    <span className="text-black font-medium">MySQL</span>
                    <span className="ml-auto text-sm text-gray-600">Advanced</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    <span className="text-black font-medium">MongoDB</span>
                    <span className="ml-auto text-sm text-gray-600">Advanced</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    <span className="text-black font-medium">MongoDB Atlas</span>
                    <span className="ml-auto text-sm text-gray-600">Advanced</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    <span className="text-black font-medium">Redis</span>
                    <span className="ml-auto text-sm text-gray-600">Intermediate</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-purple-600 text-white rounded-lg px-3 py-1 mr-3">04</span>
              Developer Tools & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.tools.map((tool, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                  <p className="font-semibold text-gray-900">{tool.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{tool.category}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-orange-600 text-white rounded-lg px-3 py-1 mr-3">05</span>
              Core Computer Science Concepts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.concepts.map((concept, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <svg className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-900 font-medium">{concept}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Continuous Learning</h2>
          <p className="text-lg mb-6">
            Actively expanding expertise in emerging technologies including GenAI, cloud-native architectures, and enterprise system integration. Committed to staying current with industry best practices and modern development methodologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Current Focus</h3>
              <p className="text-sm">GenAI Integration, SAP BTP Advanced Features, Microservices Architecture</p>
            </div>
            <div className="bg-slate-900 bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Learning Approach</h3>
              <p className="text-sm">Hands-on projects, Production deployments, Technical documentation</p>
            </div>
            <div className="bg-slate-900 bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Problem Solving</h3>
              <p className="text-sm">LeetCode practice, System design, Competitive programming (Codeforces)</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
