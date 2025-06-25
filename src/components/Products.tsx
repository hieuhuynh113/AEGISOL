import "../fade-animations.css";
import {
  Brain,
  Plus,
  Edit3,
  Trash2,
  Play,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useInView } from "../hooks/useInView";

const Products = () => {
  const [ref, inView] = useInView();
  return (
    <section
      id="products"
      ref={ref}
      className={`py-20 bg-white animate-fade-up${inView ? " in-view" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Test Case Management
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our flagship product uses advanced AI to automatically generate,
            manage, and execute test cases, revolutionizing your software
            testing workflow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    AI Test Generation
                  </h3>
                  <p className="text-gray-600">
                    Automatically create comprehensive test cases based on your
                    application requirements and user stories.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Plus className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Easy Test Creation
                  </h3>
                  <p className="text-gray-600">
                    Add new test cases manually or let AI suggest relevant
                    scenarios based on existing patterns.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Edit3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Smart Editing
                  </h3>
                  <p className="text-gray-600">
                    Edit test cases with AI-powered suggestions and automatic
                    validation of test logic.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Trash2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Intelligent Cleanup
                  </h3>
                  <p className="text-gray-600">
                    Remove redundant or obsolete test cases with AI
                    recommendations for optimization.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  95% reduction in manual test creation time
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  Improved test coverage and quality
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  Automated maintenance and updates
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Demo Interface */}
          <div className="relative">
            <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-gray-800 px-6 py-4 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-300 text-sm font-mono">
                  AEGISOL Test Manager
                </span>
              </div>

              {/* Demo Content */}
              <div className="p-6 space-y-4">
                <div className="text-green-400 font-mono text-sm">
                  $ aegisol generate-tests --feature="user-login"
                </div>

                <div className="space-y-3">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Play className="h-4 w-4 text-blue-400" />
                      <span className="text-blue-400 font-mono text-sm">
                        Test Case #001
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Valid email and password login
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-green-400 text-xs">PASSED</span>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Play className="h-4 w-4 text-blue-400" />
                      <span className="text-blue-400 font-mono text-sm">
                        Test Case #002
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Invalid email format validation
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <AlertCircle className="h-4 w-4 text-yellow-400" />
                      <span className="text-yellow-400 text-xs">
                        RUNNING...
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Brain className="h-4 w-4 text-purple-400" />
                      <span className="text-purple-400 font-mono text-sm">
                        AI Suggestion
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Consider testing password reset flow
                    </p>
                    <button className="mt-2 bg-purple-600 text-white px-3 py-1 rounded text-xs hover:bg-purple-700 transition-colors">
                      Add Test
                    </button>
                  </div>
                </div>

                <div className="text-green-400 font-mono text-sm mt-4">
                  ✓ Generated 15 test cases in 2.3 seconds
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-teal-500 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
