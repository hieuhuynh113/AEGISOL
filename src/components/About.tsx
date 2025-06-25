import { Award, Users, Zap, Globe } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Active Users', value: '50,000+' },
  { icon: Globe, label: 'Countries Served', value: '25+' },
  { icon: Zap, label: 'Tests Generated', value: '10M+' },
  { icon: Award, label: 'Industry Awards', value: '15+' }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Leading the Future of
                <span className="block">AI-Driven Testing</span>
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                AEGISOL was founded with a simple mission: to revolutionize software testing through 
                artificial intelligence. Our team of experienced engineers and AI specialists work 
                tirelessly to deliver solutions that not only meet today's challenges but anticipate 
                tomorrow's needs.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                We believe that intelligent automation should enhance human creativity, not replace it. 
                That's why our AI-integrated systems are designed to work alongside your team, 
                amplifying their capabilities and freeing them to focus on innovation.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Why Choose AEGISOL?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-blue-100">Cutting-edge AI technology</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-blue-100">Proven track record with enterprise clients</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-blue-100">24/7 dedicated support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-blue-100">Continuous innovation and updates</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Our Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                AS
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">Alex Smith</h4>
              <p className="text-blue-100 text-sm mb-2">CEO & Co-Founder</p>
              <p className="text-blue-100 text-xs">Former VP of Engineering at TechCorp, 15+ years in AI</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                MJ
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">Maria Johnson</h4>
              <p className="text-blue-100 text-sm mb-2">CTO & Co-Founder</p>
              <p className="text-blue-100 text-xs">PhD in Machine Learning, former Google AI researcher</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                DL
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">David Lee</h4>
              <p className="text-blue-100 text-sm mb-2">VP of Products</p>
              <p className="text-blue-100 text-xs">Former Microsoft Product Manager, expert in enterprise software</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;