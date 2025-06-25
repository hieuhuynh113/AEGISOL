import "../fade-animations.css";
import { ArrowDown, Zap } from "lucide-react";
import { useInView } from "../hooks/useInView";

const Hero = () => {
  const [ref, inView] = useInView();

  const handleScrollToNext = () => {
    const nextSection = document.getElementById("services");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className={`relative pt-16 pb-20 lg:pt-24 lg:pb-28 animate-fade-up${
        inView ? " in-view" : ""
      }`}
    >
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
              <button
                className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                onClick={handleScrollToNext}
              >
                <span>More</span>
                <ArrowDown className="h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-700 hover:text-blue-700 transition-all duration-200 font-semibold">
                Contact Us
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
          <img src="/images/hero.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
