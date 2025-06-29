import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent-teal mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Indian Sign Language Recognition Project */}
          <div className="bg-gradient-to-br from-white to-teal-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Hand gesture recognition and sign language processing" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-accent-teal font-bold text-sm">90% Accuracy</span>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-3">
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-accent-teal transition-colors">Indian Sign Language Recognition</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-accent-teal/10 text-accent-teal px-2 py-1 rounded-full text-xs font-medium">MediaPipe</span>
                  <span className="bg-blue-500/10 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">TensorFlow</span>
                  <span className="bg-green-500/10 text-green-600 px-2 py-1 rounded-full text-xs font-medium">Computer Vision</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-green-400">
                  <div className="flex items-start space-x-2">
                    <i className="fas fa-hand-paper text-green-600 mt-1"></i>
                    <div>
                      <p className="text-sm text-gray-700">Developed gesture recognition system achieving <strong>90% accuracy</strong> in real-time Indian Sign Language interpretation</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-blue-400">
                  <div className="flex items-start space-x-2">
                    <i className="fas fa-cogs text-blue-600 mt-1"></i>
                    <div>
                      <p className="text-sm text-gray-700">Engineered custom pipeline for keypoint extraction, improving recognition accuracy by <strong>40%</strong></p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-purple-400">
                  <div className="flex items-start space-x-2">
                    <i className="fas fa-eye text-purple-600 mt-1"></i>
                    <div>
                      <p className="text-sm text-gray-700">Integrated advanced computer vision for robust performance across various lighting conditions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-universal-access text-accent-teal"></i>
                  <span className="text-sm text-gray-600">Accessibility Enhancement</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500">Active Project</span>
                </div>
              </div>
            </div>
          </div>

          {/* Twitter Sentiment Analysis Project */}
          <div className="bg-gradient-to-br from-white to-orange-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Social media analytics dashboard with sentiment analysis graphs" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-accent-orange font-bold text-sm">+30% Speed</span>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-3">
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-accent-orange transition-colors">Twitter Sentiment Analysis</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-accent-orange/10 text-accent-orange px-2 py-1 rounded-full text-xs font-medium">Django</span>
                  <span className="bg-blue-500/10 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">Python</span>
                  <span className="bg-green-500/10 text-green-600 px-2 py-1 rounded-full text-xs font-medium">NLP</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-green-400">
                  <div className="flex items-start space-x-2">
                    <i className="fas fa-brain text-green-600 mt-1"></i>
                    <div>
                      <p className="text-sm text-gray-700">Developed Python web application for real-time sentiment classification with enhanced accuracy</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-blue-400">
                  <div className="flex items-start space-x-2">
                    <i className="fas fa-code text-blue-600 mt-1"></i>
                    <div>
                      <p className="text-sm text-gray-700">Implemented custom preprocessing functions with advanced text processing techniques</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-purple-400">
                  <div className="flex items-start space-x-2">
                    <i className="fas fa-rocket text-purple-600 mt-1"></i>
                    <div>
                      <p className="text-sm text-gray-700">Integrated Twitter API for real-time analysis, achieving <strong>30% increase</strong> in processing speed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-twitter text-accent-orange"></i>
                  <span className="text-sm text-gray-600">Real-time Analysis</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500">Live Data</span>
                </div>
              </div>
            </div>
          </div>

          {/* Blogging Application Project */}
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Modern blogging platform with content management system" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-blue-600 font-bold text-sm">Full-Stack</span>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-3">
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-blue-600 transition-colors">Blogging Application</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-500/10 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">Spring Boot</span>
                  <span className="bg-orange-500/10 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">Java</span>
                  <span className="bg-green-500/10 text-green-600 px-2 py-1 rounded-full text-xs font-medium">MySQL</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-green-400">
                  <div className="flex items-start space-x-2">
                    <i className="fas fa-blog text-green-600 mt-1"></i>
                    <div>
                      <p className="text-sm text-gray-700">Developed comprehensive blogging platform with CRUD operations, categorization, and pagination</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-blue-400">
                  <div className="flex items-start space-x-2">
                    <i className="fas fa-shield-alt text-blue-600 mt-1"></i>
                    <div>
                      <p className="text-sm text-gray-700">Implemented role-based authentication and input validation for enhanced security</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-purple-400">
                  <div className="flex items-start space-x-2">
                    <i className="fas fa-cogs text-purple-600 mt-1"></i>
                    <div>
                      <p className="text-sm text-gray-700">Built robust exception handling and sorting functionalities for better user experience</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-server text-blue-600"></i>
                  <span className="text-sm text-gray-600">Backend Focus</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500">Enterprise Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
