import { ArrowRight, Zap, Target, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="h-4 w-4" />
                <span>AI-Powered Testing Solutions</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Revolutionize Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">
                  {" "}
                  Testing Process
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                AEGISOL delivers cutting-edge AI-integrated vendor supply
                systems that automatically generate, manage, and optimize test
                cases. Transform your development workflow with intelligent
                automation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-700 hover:text-blue-700 transition-all duration-200 font-semibold">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-700">
                  95%
                </div>
                <div className="text-sm text-gray-600">Faster Testing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-teal-600">
                  500+
                </div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-orange-600">
                  99.9%
                </div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-6 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                  <span className="font-semibold text-gray-900">
                    AI Test Generator
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      User Authentication Tests ✓
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-700">
                      API Integration Tests... ⚡
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-500">
                      Database Tests (Queued)
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-900">
                      AI Insights
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Generated 847 test cases with 99.2% accuracy
                  </p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-500 rounded-full opacity-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
