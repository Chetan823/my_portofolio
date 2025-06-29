import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // Create a download link for the resume
    const link = document.createElement('a');
    link.href = '/api/download-resume';
    link.download = 'Chetan_Chaudhari_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="pt-16 bg-gradient-navy text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="/api/profile-photo" 
              alt="Chetan Chaudhari - Professional Profile" 
              className="w-80 h-80 rounded-full mx-auto object-cover shadow-2xl border-4 border-white/20"
            />
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-accent-teal">Chetan</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-medium mb-6 text-white/90">
              GenAI Engineer & Backend Developer
            </h2>
            <p className="text-lg lg:text-xl text-white/80 mb-6 leading-relaxed">
              Passionate about building intelligent systems and innovative solutions. Currently architecting 
              cutting-edge GenAI applications at Tech Mahindra with expertise in LangGraph, Databricks, and 
              enterprise-scale generative AI systems.
            </p>
            
            {/* Quick highlights for recruiters */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-accent-teal">GenAI</div>
                <div className="text-xs text-white/70">Expert</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-accent-teal">Spring Boot</div>
                <div className="text-xs text-white/70">& Django</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-accent-teal">Azure AI</div>
                <div className="text-xs text-white/70">Certified</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-accent-teal">1+ YRS</div>
                <div className="text-xs text-white/70">Experience</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-accent-teal hover:bg-accent-teal/90 text-white px-8 py-3 font-semibold transition-all duration-200 transform hover:scale-105"
                onClick={scrollToContact}
              >
                Get In Touch
              </Button>
              <Button 
                className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 px-8 py-3 font-semibold transition-all duration-200 backdrop-blur-sm"
                onClick={downloadResume}
              >
                <i className="fas fa-download mr-2"></i>Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
