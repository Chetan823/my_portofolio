import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      
      {/* Recruiter CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Build Something Amazing Together?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm actively seeking new opportunities to apply my GenAI and backend development expertise. 
              Let's discuss how I can contribute to your team's success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <i className="fas fa-rocket text-3xl text-accent-teal mb-3"></i>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Quick Learner</h3>
              <p className="text-gray-600 text-sm">Rapidly adapts to new technologies and frameworks</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <i className="fas fa-users text-3xl text-accent-teal mb-3"></i>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Team Player</h3>
              <p className="text-gray-600 text-sm">Proven track record of collaborative success</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <i className="fas fa-trophy text-3xl text-accent-teal mb-3"></i>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Results-Driven</h3>
              <p className="text-gray-600 text-sm">Delivered measurable improvements in enterprise projects</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/api/download-resume';
                link.download = 'Chetan_Chaudhari_Resume.pdf';
                link.click();
              }}
              className="bg-accent-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-teal/90 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-download mr-2"></i>Download Resume
            </button>
          </div>
        </div>
      </section>
      
      <ContactSection />
      
      {/* Floating Contact Button for Mobile Users */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button
          onClick={() => {
            const element = document.getElementById("contact");
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-accent-teal text-white p-4 rounded-full shadow-2xl hover:bg-accent-teal/90 transition-all duration-200 transform hover:scale-110 animate-bounce"
        >
          <i className="fas fa-envelope text-lg"></i>
        </button>
      </div>
      
      {/* Footer */}
      <footer className="bg-navy-light text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white/60 mb-2">
              © 2024 Chetan Chaudhari. Built with passion for GenAI and innovation.
            </p>
            <div className="flex justify-center space-x-4 text-white/40 text-sm">
              <span>🎯 Open to Work</span>
              <span>•</span>
              <span>💼 GenAI Engineer</span>
              <span>•</span>
              <span>🚀 Ready to Innovate</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
