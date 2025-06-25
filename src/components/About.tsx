import "../fade-animations.css";
import { Award, Users, Zap, Globe } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";

const stats = [
  { icon: Users, label: "Active Users", value: 50000, suffix: "+" },
  { icon: Globe, label: "Countries Served", value: 25, suffix: "+" },
  { icon: Zap, label: "Tests Generated", value: 10000000, suffix: "+" },
  { icon: Award, label: "Industry Awards", value: 15, suffix: "+" },
];

interface StatCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  value: number;
  label: string;
  suffix: string;
  inView: boolean;
}

function StatCard({
  icon: IconComponent,
  value,
  label,
  suffix,
  inView,
}: StatCardProps) {
  const count = useCountUp(value, inView, 1200);
  const display =
    value >= 1000000
      ? `${Math.floor(count / 1000000)}M${suffix}`
      : value >= 1000
      ? `${Math.floor(count / 1000)}K${suffix}`
      : `${count}${suffix}`;
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <IconComponent className="h-8 w-8 text-white" />
      </div>
      <div className="text-3xl font-bold text-white mb-2">{display}</div>
      <div className="text-blue-100 text-sm">{label}</div>
    </div>
  );
}

const About = () => {
  const [ref, inView] = useInView();
  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 bg-gradient-to-r from-blue-600 to-teal-600 animate-fade-up${
        inView ? " in-view" : ""
      }`}
    >
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
                AEGISOL was founded with a simple mission: to revolutionize
                software testing through artificial intelligence. Our team of
                experienced engineers and AI specialists work tirelessly to
                deliver solutions that not only meet today's challenges but
                anticipate tomorrow's needs.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                We believe that intelligent automation should enhance human
                creativity, not replace it. That's why our AI-integrated systems
                are designed to work alongside your team, amplifying their
                capabilities and freeing them to focus on innovation.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Why Choose AEGISOL?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-blue-100">
                    Cutting-edge AI technology
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-blue-100">
                    Proven track record with enterprise clients
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-blue-100">24/7 dedicated support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-blue-100">
                    Continuous innovation and updates
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} inView={inView} />
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Our Leadership Team
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-8 text-center w-80 max-w-full shadow-xl">
              <div className="w-28 h-28 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                <img
                  className="rounded-full w-28 h-28 object-cover border-4 border-white/50 shadow-md"
                  src="public/images/about1.jpg"
                  alt=""
                />
              </div>
              <h4 className="text-xl font-semibold text-white mb-1">
                Shaun Huynh
              </h4>
              <p className="text-blue-100 text-base mb-2">CEO & Founder</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-8 text-center w-80 max-w-full shadow-xl">
              <div className="w-28 h-28 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                <img
                  className="rounded-full w-28 h-28 object-cover border-4 border-white/50 shadow-md"
                  src="public/images/about2.png"
                  alt=""
                />
              </div>
              <h4 className="text-xl font-semibold text-white mb-1">
                Van Nguyen
              </h4>
              <p className="text-blue-100 text-base mb-2">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
