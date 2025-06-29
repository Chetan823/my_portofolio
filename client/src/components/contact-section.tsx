export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent-teal mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-4">
            Ready to collaborate on your next GenAI project? Let's connect and build something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
            <i className="fas fa-envelope text-3xl text-accent-teal mb-4"></i>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a href="mailto:chetan99700rc@gmail.com" className="text-white/80 hover:text-accent-teal transition-colors duration-200">
              chetan99700rc@gmail.com
            </a>
          </div>
          
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
            <i className="fas fa-phone text-3xl text-accent-teal mb-4"></i>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <a href="tel:+919834619103" className="text-white/80 hover:text-accent-teal transition-colors duration-200">
              +91 9834619103
            </a>
          </div>
          
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
            <i className="fas fa-map-marker-alt text-3xl text-accent-teal mb-4"></i>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-white/80">Pune, India</p>
          </div>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a href="https://linkedin.com/in/chetan-chaudhari" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-accent-teal text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="https://github.com/chetan-chaudhari" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-accent-teal text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="mailto:chetan99700rc@gmail.com" className="bg-white/10 hover:bg-accent-teal text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110">
            <i className="fas fa-envelope text-xl"></i>
          </a>
          <a href="tel:+919834619103" className="bg-white/10 hover:bg-accent-teal text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110">
            <i className="fas fa-phone text-xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
