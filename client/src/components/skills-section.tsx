export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent-teal mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proficient in cutting-edge technologies with hands-on experience in enterprise-level projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Programming Languages */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="flex items-center mb-4">
              <i className="fas fa-code text-2xl text-accent-teal mr-3 group-hover:scale-110 transition-transform"></i>
              <h3 className="text-lg font-semibold text-navy group-hover:text-accent-teal transition-colors">Languages</h3>
            </div>
            <div className="space-y-2">
              <div className="skill-item">
                <span className="inline-block bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer">Python</span>
                <div className="text-xs text-gray-500 mt-1">Advanced</div>
              </div>
              <div className="skill-item ml-2">
                <span className="inline-block bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-3 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer">Java</span>
                <div className="text-xs text-gray-500 mt-1">Proficient</div>
              </div>
              <div className="skill-item">
                <span className="inline-block bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-3 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer">SQL</span>
                <div className="text-xs text-gray-500 mt-1">Expert</div>
              </div>
            </div>
          </div>

          {/* Frameworks */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <i className="fas fa-layer-group text-2xl text-accent-teal mr-3"></i>
              <h3 className="text-lg font-semibold text-navy">Frameworks</h3>
            </div>
            <div className="space-y-2">
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Spring Boot</span>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm ml-2">Django</span>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">LangChain</span>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm ml-2">LangGraph</span>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">TensorFlow</span>
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <i className="fas fa-tools text-2xl text-accent-teal mr-3"></i>
              <h3 className="text-lg font-semibold text-navy">Tools</h3>
            </div>
            <div className="space-y-2">
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Git</span>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm ml-2">Docker</span>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Jenkins</span>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm ml-2">Postman</span>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Jira</span>
            </div>
          </div>

          {/* Cloud & Data */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <i className="fas fa-cloud text-2xl text-accent-teal mr-3"></i>
              <h3 className="text-lg font-semibold text-navy">Cloud & Data</h3>
            </div>
            <div className="space-y-2">
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Azure Databricks</span>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm ml-2">Azure AI</span>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm ml-2">MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
