import "../fade-animations.css";
import "../hero-animations.css";
import { Brain, Plus, Edit3, Trash2, CheckCircle } from "lucide-react";
import { useInView } from "../hooks/useInView";
import React, { useState, useEffect } from "react";

const carouselImages = [
  "/images/project_carousel1.png",
  "/images/project_carousel2.png",
  "/images/project_carousel3.png",
];

const Products = () => {
  const [ref, inView] = useInView();
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (inView) setAnimate(true);
  }, [inView]);
  const [current, setCurrent] = useState(0);

  const prevImage = () =>
    setCurrent((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrent((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));

  return (
    <section
      id="products"
      ref={ref}
      className={`py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-teal-700 animate-fade-up${
        inView ? " in-view" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            AI-Powered Test Case Management
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Our flagship product uses advanced AI to automatically generate,
            manage, and execute test cases, revolutionizing your software
            testing workflow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Left Column - Features */}
          <div className={`space-y-8 h-full flex flex-col justify-center`}>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    AI Test Generation
                  </h3>
                  <p className="text-white/80">
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
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Easy Test Creation
                  </h3>
                  <p className="text-white/80">
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
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Smart Editing
                  </h3>
                  <p className="text-white/80">
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
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Intelligent Cleanup
                  </h3>
                  <p className="text-white/80">
                    Remove redundant or obsolete test cases with AI
                    recommendations for optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Carousel */}
          <div
            className={`relative w-full h-[520px] flex flex-col items-center justify-center products-fade-up ${
              animate ? "" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center w-full h-full bg-white rounded-2xl p-4">
              <img
                src={carouselImages[current]}
                alt={`Project Carousel ${current + 1}`}
                className="rounded-2xl w-full h-full object-contain shadow-xl transition-all duration-500 bg-white"
              />
            </div>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow-md"
              aria-label="Previous"
            >
              &#8592;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow-md"
              aria-label="Next"
            >
              &#8594;
            </button>
            <div className="flex justify-center mt-4 space-x-2">
              {carouselImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`inline-block w-3 h-3 rounded-full ${
                    idx === current ? "bg-blue-700" : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>

        {/* Key Benefits - Full Width Below */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 mt-10">
          <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-800">
              <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
              95% reduction in manual test creation time
            </li>
            <li className="flex items-center text-sm text-gray-800">
              <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
              Improved test coverage and quality
            </li>
            <li className="flex items-center text-sm text-gray-800">
              <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
              Automated maintenance and updates
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Products;
