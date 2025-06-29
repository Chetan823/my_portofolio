export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent-teal mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a dedicated GenAI Engineer with a passion for creating intelligent systems that solve real-world problems. 
              With a strong foundation in computer science and a CGPA of 9.06 from D.Y Patil College of Engineering, 
              I specialize in building scalable GenAI applications and full-stack solutions.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Currently working as an Associate Software Engineer at Tech Mahindra, I architect and deploy 
              sophisticated RAG systems, multi-agent workflows, and enterprise-scale applications. My expertise 
              spans from backend development with Spring Boot and Django to advanced GenAI frameworks like LangGraph and LangChain.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-accent-teal">1+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-accent-teal">5+</div>
                <div className="text-gray-600">Major Projects</div>
              </div>
            </div>
            
            {/* Achievements */}
            <div className="mt-8 p-6 bg-gradient-to-r from-accent-teal/5 to-blue-50 rounded-xl border-l-4 border-accent-teal">
              <h3 className="text-lg font-bold text-navy mb-4 flex items-center">
                <i className="fas fa-trophy text-accent-teal mr-2"></i>
                Recent Achievements
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Best Achiever Bravo Award</strong> - Recognized for outstanding performance as best performer in team at Tech Mahindra
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Best Outgoing Student</strong> - Honored for academic excellence and exceptional extracurricular participation in final year of degree
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <i className="fas fa-graduation-cap text-2xl text-accent-teal"></i>
              <div>
                <h3 className="font-semibold text-navy">Education</h3>
                <p className="text-gray-600">BE in AI & Data Science (CGPA: 9.06)</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-briefcase text-2xl text-accent-teal"></i>
              <div>
                <h3 className="font-semibold text-navy">Current Role</h3>
                <p className="text-gray-600">Associate Software Engineer at Tech Mahindra</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-map-marker-alt text-2xl text-accent-teal"></i>
              <div>
                <h3 className="font-semibold text-navy">Location</h3>
                <p className="text-gray-600">Pune, India</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-certificate text-2xl text-accent-teal"></i>
              <div>
                <h3 className="font-semibold text-navy">Certifications</h3>
                <p className="text-gray-600">Azure AI Engineer, AWS Cloud Practitioner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
