export default function EducationSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold text-navy mb-8">Education</h2>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <div className="flex items-start space-x-4">
                <i className="fas fa-graduation-cap text-3xl text-accent-teal mt-1"></i>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Bachelor of Engineering</h3>
                  <p className="text-lg text-gray-700 mb-1">Artificial Intelligence and Data Science</p>
                  <p className="text-accent-teal font-semibold mb-2">CGPA: 9.06</p>
                  <p className="text-gray-600 mb-1">D.Y Patil College of Engineering</p>
                  <p className="text-gray-500">Akurdi, Pune • 2020 - 2024</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md mt-4">
              <div className="flex items-start space-x-4">
                <i className="fas fa-school text-3xl text-accent-orange mt-1"></i>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">12th HSC, Science</h3>
                  <p className="text-accent-orange font-semibold mb-2">Percentage: 76.15%</p>
                  <p className="text-gray-600 mb-1">Fergusson College</p>
                  <p className="text-gray-500">Pune, India • 2017 - 2019</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md mt-4">
              <div className="flex items-start space-x-4">
                <i className="fas fa-graduation-cap text-3xl text-blue-600 mt-1"></i>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">10th CBSE</h3>
                  <p className="text-blue-600 font-semibold mb-2">CGPA: 10.0</p>
                  <p className="text-gray-600 mb-1">Smita Patil Public School</p>
                  <p className="text-gray-500">Shirpur • 2007 - 2017</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-3xl font-bold text-navy mb-8">Certifications</h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                <div className="flex items-start space-x-4">
                  <i className="fab fa-microsoft text-3xl text-blue-600 mt-1"></i>
                  <div>
                    <h3 className="text-lg font-bold text-navy">Microsoft Certified: Azure AI Engineer Associate</h3>
                    <p className="text-blue-600 font-medium">AI-102</p>
                    <p className="text-gray-600 text-sm">Advanced AI solution development on Azure</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-md border-l-4 border-blue-400">
                <div className="flex items-start space-x-4">
                  <i className="fab fa-microsoft text-3xl text-blue-500 mt-1"></i>
                  <div>
                    <h3 className="text-lg font-bold text-navy">Microsoft Certified: Azure AI Fundamentals</h3>
                    <p className="text-blue-500 font-medium">AI-900</p>
                    <p className="text-gray-600 text-sm">Core AI and ML concepts on Azure</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl shadow-md border-l-4 border-orange-500">
                <div className="flex items-start space-x-4">
                  <i className="fab fa-aws text-3xl text-orange-600 mt-1"></i>
                  <div>
                    <h3 className="text-lg font-bold text-navy">AWS Certified Cloud Practitioner</h3>
                    <p className="text-orange-600 font-medium">CLF-C02</p>
                    <p className="text-gray-600 text-sm">Cloud fundamentals and AWS services</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl shadow-md border-l-4 border-green-500">
                <div className="flex items-start space-x-4">
                  <i className="fas fa-certificate text-3xl text-green-600 mt-1"></i>
                  <div>
                    <h3 className="text-lg font-bold text-navy">Specialized Certifications</h3>
                    <p className="text-green-600 font-medium">Machine Learning & ChatGPT</p>
                    <p className="text-gray-600 text-sm">Advanced ML techniques and prompt engineering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
