import "../fade-animations.css";
import "../hero-animations.css";
import { ArrowDown } from "lucide-react";
import { useInView } from "../hooks/useInView";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [ref, inView] = useInView();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) setAnimate(true);
  }, [inView]);

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
      className={`py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-teal-700 animate-fade-up${
        inView ? " in-view" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div
            className={`space-y-8 ${
              animate ? "hero-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Revolutionize Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-teal-200">
                  {" "}
                  Testing Process
                </span>
              </h1>
              <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
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
              <button className="bg-white text-blue-800 border-2 border-blue-700 px-8 py-4 rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-200 font-semibold shadow-lg">
                Contact Us
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/30">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-200">
                  95%
                </div>
                <div className="text-sm text-white/80">Faster Testing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-teal-200">
                  500+
                </div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-orange-200">
                  99.9%
                </div>
                <div className="text-sm text-white/80">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <img
            src="/images/hero.jpg"
            alt=""
            className={`rounded-2xl ${
              animate ? "hero-slide-in-right" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
