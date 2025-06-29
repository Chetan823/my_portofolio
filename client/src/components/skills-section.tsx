export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent-teal mx-auto mb-4"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Proficient in cutting-edge technologies with hands-on experience in enterprise-level projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="flex items-center mb-4">
              <i className="fas fa-layer-group text-2xl text-accent-teal mr-3 group-hover:scale-110 transition-transform"></i>
              <h3 className="text-lg font-semibold text-navy group-hover:text-accent-teal transition-colors">Frameworks</h3>
            </div>
            <div className="space-y-2">
              <div className="skill-item">
                <span className="inline-block bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-3 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer">Spring Boot</span>
                <div className="text-xs text-gray-500 mt-1">Expert</div>
              </div>
              <div className="skill-item ml-2">
                <span className="inline-block bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-3 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer">Django</span>
                <div className="text-xs text-gray-500 mt-1">Proficient</div>
              </div>
              <div className="skill-item">
                <span className="inline-block bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-3 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer">LangChain</span>
                <div className="text-xs text-gray-500 mt-1">Advanced</div>
              </div>
              <div className="skill-item ml-2">
                <span className="inline-block bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-3 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer">LangGraph</span>
                <div className="text-xs text-gray-500 mt-1">Advanced</div>
              </div>
              <div className="skill-item">
                <span className="inline-block bg-gradient-to-r from-red-100 to-red-200 text-red-800 px-3 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer">TensorFlow</span>
                <div className="text-xs text-gray-500 mt-1">Proficient</div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="flex items-center mb-4">
              <i className="fas fa-tools text-2xl text-accent-teal mr-3 group-hover:scale-110 transition-transform"></i>
              <h3 className="text-lg font-semibold text-navy group-hover:text-accent-teal transition-colors">Tools</h3>
            </div>
            <div className="space-y-2">
              <div className="skill-item">
                <span className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-3 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer">Git</span>
                <div className="text-xs text-gray-500 mt-1">Expert</div>
              </div>
              <div className="skill-item ml-2">
                <span className="inline-block bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer">Docker</span>
                <div className="text-xs text-gray-500 mt-1">Proficient</div>
              </div>
              <div className="skill-item">
                <span className="inline-block bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 px-3 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer">Jenkins</span>
                <div className="text-xs text-gray-500 mt-1">Intermediate</div>
              </div>
              <div className="skill-item ml-2">
                <span className="inline-block bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-3 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer">Postman</span>
                <div className="text-xs text-gray-500 mt-1">Advanced</div>
              </div>
              <div className="skill-item">
                <span className="inline-block bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 px-3 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer">Jira</span>
                <div className="text-xs text-gray-500 mt-1">Proficient</div>
              </div>
            </div>
          </div>

          {/* Cloud & Data */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="flex items-center mb-4">
              <i className="fas fa-cloud text-2xl text-accent-teal mr-3 group-hover:scale-110 transition-transform"></i>
              <h3 className="text-lg font-semibold text-navy group-hover:text-accent-teal transition-colors">Cloud & Data</h3>
            </div>
            <div className="space-y-2">
              <div className="skill-item">
                <span className="inline-block bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer">Azure Databricks</span>
                <div className="text-xs text-gray-500 mt-1">Advanced</div>
              </div>
              <div className="skill-item ml-2">
                <span className="inline-block bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer">Azure AI</span>
                <div className="text-xs text-gray-500 mt-1">Expert</div>
              </div>
              <div className="skill-item">
                <span className="inline-block bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-3 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer">PostgreSQL</span>
                <div className="text-xs text-gray-500 mt-1">Proficient</div>
              </div>
              <div className="skill-item ml-2">
                <span className="inline-block bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-3 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer">MySQL</span>
                <div className="text-xs text-gray-500 mt-1">Proficient</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
