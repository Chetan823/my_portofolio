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
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-accent-teal"></div>
          
          {/* Tech Mahindra Experience */}
          <div className="relative flex items-center mb-12">
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent-teal rounded-full border-4 border-white shadow"></div>
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent-teal">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-navy">Associate Software Engineer</h3>
                  <span className="text-sm font-medium text-accent-teal bg-accent-teal/10 px-3 py-1 rounded-full">Aug 2024 - Present</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-700 mb-4">Tech Mahindra</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent-teal mt-1 mr-2 flex-shrink-0"></i>
                    <span>Architected and deployed a full-stack Agentic RAG system using LangGraph and Databricks, automating enterprise policy compliance checks</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent-teal mt-1 mr-2 flex-shrink-0"></i>
                    <span>Engineered multi-agent LangGraph workflow with GPT-4o vision for stateful, multi-turn reasoning</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent-teal mt-1 mr-2 flex-shrink-0"></i>
                    <span>Developed sophisticated retrieval pipeline with MMR and Cross-Encoder re-ranking on Databricks Vector Search</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent-teal mt-1 mr-2 flex-shrink-0"></i>
                    <span>Built complete backend service using Spring Boot with Azure AD integration and Key Vault security</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* DataTech Labs Experience */}
          <div className="relative flex items-center justify-end mb-12">
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent-orange rounded-full border-4 border-white shadow"></div>
            <div className="ml-16 md:ml-0 md:w-1/2 md:pl-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent-orange">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-navy">Software Engineer Intern</h3>
                  <span className="text-sm font-medium text-accent-orange bg-accent-orange/10 px-3 py-1 rounded-full">Jan 2024 - Jun 2024</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-700 mb-4">The DataTech Labs</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent-orange mt-1 mr-2 flex-shrink-0"></i>
                    <span>Architected marketing automation framework reducing campaign deployment time by <strong>50%</strong></span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent-orange mt-1 mr-2 flex-shrink-0"></i>
                    <span>Managed and secured project database using SQL with zero security breaches</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent-orange mt-1 mr-2 flex-shrink-0"></i>
                    <span>Optimized email workflows and implemented real-time analytics dashboard</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
