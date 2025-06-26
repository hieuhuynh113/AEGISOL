import "../fade-animations.css";
import "../hero-animations.css";
import { useInView } from "../hooks/useInView";
import { useEffect, useState } from "react";

const About = () => {
  const [ref, inView] = useInView();
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (inView) setAnimate(true);
  }, [inView]);
  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 bg-white animate-fade-up${inView ? " in-view" : ""}`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-16 lg:grid-cols-2">
          {/* Left Column - Only Title and Description */}
          <div
            className={`text-white h-full flex flex-col justify-center ${
              animate ? "about-slide-in-left" : "opacity-0"
            }`}
          >
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              Leading the Future of
              <span className="block text-blue-700">AI-Driven Testing</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              AEGISOL was founded with a simple mission: to revolutionize
              software testing through artificial intelligence. Our team of
              experienced engineers and AI specialists work tirelessly to
              deliver solutions that not only meet today's challenges but
              anticipate tomorrow's needs.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              We believe that intelligent automation should enhance human
              creativity, not replace it. That's why our AI-integrated systems
              are designed to work alongside your team, amplifying their
              capabilities and freeing them to focus on innovation.
            </p>
          </div>

          {/* Right Column - Image */}
          <div
            className={`h-full flex items-stretch ${
              animate ? "about-slide-in-right" : "opacity-0"
            }`}
          >
            <img
              src="/images/about_company.png"
              alt=""
              className="object-cover w-full h-full shadow-xl rounded-2xl"
            />
          </div>
        </div>

        {/* Why Choose Section - Full Width Below */}
        <div className="mt-10 space-y-4">
          <h3 className="text-xl font-semibold text-blue-700">
            Why Choose AEGISOL?
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-gray-700">Cutting-edge AI technology</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-gray-700">
                Proven track record with enterprise clients
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-gray-700">24/7 dedicated support</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-gray-700">
                Continuous innovation and updates
              </span>
            </li>
          </ul>
        </div>

        {/* Team Section */}
        {/* <div className="mt-20 text-center">
          <h3 className="mb-8 text-2xl font-bold text-blue-700">
            Our Leadership Team
          </h3>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
            <div className="max-w-full p-8 text-center bg-white shadow-xl bg-opacity-20 backdrop-blur-lg rounded-3xl w-80">
              <div className="flex items-center justify-center mx-auto mb-6 text-xl font-bold text-white rounded-full shadow-lg w-28 h-28 bg-gradient-to-r from-green-400 to-teal-500">
                <img
                  className="object-cover border-4 rounded-full shadow-md w-28 h-28 border-white/50"
                  src="/images/about1.png"
                  alt=""
                />
              </div>
              <h4 className="mb-1 text-xl font-semibold text-gray-900">
                Shaun Huynh
              </h4>
              <p className="mb-2 text-base text-blue-700">CEO & Founder</p>
            </div>
            <div className="max-w-full p-8 text-center bg-white shadow-xl bg-opacity-20 backdrop-blur-lg rounded-3xl w-80">
              <div className="flex items-center justify-center mx-auto mb-6 text-xl font-bold text-white rounded-full shadow-lg w-28 h-28 bg-gradient-to-r from-green-400 to-teal-500">
                <img
                  className="object-cover border-4 rounded-full shadow-md w-28 h-28 border-white/50"
                  src=""
                  alt="Hình 2"
                />
              </div>
              <h4 className="mb-1 text-xl font-semibold text-gray-900">
                Van Nguyen
              </h4>
              <p className="mb-2 text-base text-blue-700">CTO</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
