import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent-teal mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Indian Sign Language Recognition Project */}
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Hand gesture recognition and sign language processing" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-navy">Indian Sign Language Recognition</h3>
                <div className="flex space-x-2">
                  <span className="bg-accent-teal/10 text-accent-teal px-2 py-1 rounded-full text-xs font-medium">MediaPipe</span>
                  <span className="bg-accent-teal/10 text-accent-teal px-2 py-1 rounded-full text-xs font-medium">TensorFlow</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Real-time sign language recognition system achieving 85% accuracy using advanced computer vision 
                techniques and MediaPipe for enhanced accessibility.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-trophy text-accent-teal mr-2"></i>
                  <span><strong>85% accuracy</strong> in gesture recognition</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-chart-line text-accent-teal mr-2"></i>
                  <span><strong>40% improvement</strong> in translation accuracy</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-users text-accent-teal mr-2"></i>
                  <span>Enhanced accessibility for speech-impaired individuals</span>
                </div>
              </div>
              <div className="flex space-x-3">
                <Button className="flex-1 bg-accent-teal hover:bg-accent-teal/90 text-white font-medium">
                  <i className="fas fa-play mr-2"></i>View Demo
                </Button>
                <Button variant="outline" className="flex-1 border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-white font-medium">
                  <i className="fab fa-github mr-2"></i>GitHub
                </Button>
              </div>
            </div>
          </div>

          {/* Twitter Sentiment Analysis Project */}
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Social media analytics dashboard with sentiment analysis graphs" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-navy">Twitter Sentiment Analysis</h3>
                <div className="flex space-x-2">
                  <span className="bg-accent-orange/10 text-accent-orange px-2 py-1 rounded-full text-xs font-medium">Django</span>
                  <span className="bg-accent-orange/10 text-accent-orange px-2 py-1 rounded-full text-xs font-medium">NLP</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Python-based web application for real-time Twitter sentiment analysis using Django, TextBlob, 
                and Tweepy with advanced preprocessing techniques.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-clock text-accent-orange mr-2"></i>
                  <span><strong>30% faster</strong> processing speed</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-sync text-accent-orange mr-2"></i>
                  <span>Real-time tweet fetching and analysis</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-database text-accent-orange mr-2"></i>
                  <span>Efficient large dataset handling</span>
                </div>
              </div>
              <div className="flex space-x-3">
                <Button className="flex-1 bg-accent-orange hover:bg-accent-orange/90 text-white font-medium">
                  <i className="fas fa-play mr-2"></i>View Demo
                </Button>
                <Button variant="outline" className="flex-1 border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white font-medium">
                  <i className="fab fa-github mr-2"></i>GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
