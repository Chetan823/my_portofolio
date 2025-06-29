export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-accent-teal mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-1 bg-gradient-to-b from-accent-teal via-blue-500 to-accent-orange shadow-lg z-0"></div>
          
          {/* Tech Mahindra Experience */}
          <div className="relative flex items-center mb-16">
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-accent-teal to-blue-500 rounded-full border-4 border-gray-100 shadow-lg animate-pulse z-10"></div>
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8 relative z-20">
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-xl border-l-6 border-accent-teal hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-navy mb-1">Associate Software Engineer</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-semibold text-accent-teal">Tech Mahindra</span>
                      <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                      <span className="text-sm text-gray-500">Current Role</span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-white bg-gradient-to-r from-accent-teal to-blue-500 px-4 py-2 rounded-full shadow-md">Aug 2024 - Present</span>
                </div>
                
                <div className="mb-6 p-4 bg-accent-teal/5 rounded-lg border-l-4 border-accent-teal">
                  <p className="text-gray-700 font-medium italic">
                    "Leading enterprise AI/ML initiatives with cutting-edge technologies, delivering scalable solutions that transform business processes."
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-400">
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <i className="fas fa-robot text-green-600"></i>
                      </div>
                      <div>
                        <h5 className="font-bold text-navy mb-1">Enterprise RAG System Architecture</h5>
                        <p className="text-gray-700">Architected and deployed a full-stack <strong>Agentic RAG system</strong> using <strong>LangGraph and Databricks</strong>, automating enterprise policy compliance checks to improve decision accuracy and reduce manual review time.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <i className="fas fa-eye text-blue-600"></i>
                      </div>
                      <div>
                        <h5 className="font-bold text-navy mb-1">Multi-Agent AI Workflows</h5>
                        <p className="text-gray-700">Engineered a <strong>multi-agent LangGraph workflow</strong> for stateful, multi-turn reasoning, enabling initial transaction evaluations and subsequent re-runs with user-provided receipts via <strong>GPT-4o vision agent</strong>.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-400">
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <i className="fas fa-search text-purple-600"></i>
                      </div>
                      <div>
                        <h5 className="font-bold text-navy mb-1">Advanced Retrieval Pipeline</h5>
                        <p className="text-gray-700">Developed sophisticated retrieval pipeline on <strong>Databricks Vector Search</strong> with <strong>MMR for context diversity</strong> and <strong>Cross-Encoder re-ranking</strong> to deliver highly precise context to LLMs.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-400">
                    <div className="flex items-start space-x-3">
                      <div className="bg-orange-100 p-2 rounded-full">
                        <i className="fas fa-server text-orange-600"></i>
                      </div>
                      <div>
                        <h5 className="font-bold text-navy mb-1">Enterprise Backend & Security</h5>
                        <p className="text-gray-700">Built complete backend service using <strong>Spring Boot</strong> with <strong>Azure AD Service Principals</strong> integration and <strong>Azure Key Vault</strong> security, implementing CI/CD pipeline with Jenkins & BitBucket.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="bg-accent-teal text-white px-3 py-1 rounded-full text-sm font-medium">LangGraph</span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Databricks</span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Spring Boot</span>
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">Azure AI</span>
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">GPT-4o</span>
                </div>
              </div>
            </div>
          </div>

          {/* DataTech Labs Experience */}
          <div className="relative flex items-center justify-end mb-12">
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-gradient-to-r from-accent-orange to-red-500 rounded-full border-4 border-gray-100 shadow-lg z-10"></div>
            <div className="ml-16 md:ml-0 md:w-1/2 md:pl-8 relative z-20">
              <div className="bg-gradient-to-br from-white to-orange-50 p-6 rounded-xl shadow-lg border-l-4 border-accent-orange hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-1">Software Engineer Intern</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-semibold text-accent-orange">The DataTech Labs</span>
                      <div className="w-2 h-2 bg-accent-orange rounded-full"></div>
                      <span className="text-sm text-gray-500">Foundation Role</span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-white bg-gradient-to-r from-accent-orange to-red-500 px-3 py-2 rounded-full shadow-md">Jan 2024 - Jun 2024</span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-green-400">
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-rocket text-green-600"></i>
                      <span className="text-gray-700">Architected marketing automation framework reducing deployment time by <strong>50%</strong></span>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-blue-400">
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-shield-alt text-blue-600"></i>
                      <span className="text-gray-700">Managed and secured project database using SQL with <strong>zero security breaches</strong></span>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-purple-400">
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-chart-line text-purple-600"></i>
                      <span className="text-gray-700">Optimized email workflows and implemented real-time analytics dashboard</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent-orange text-white px-2 py-1 rounded-full text-xs font-medium">Marketing Automation</span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">SQL</span>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
