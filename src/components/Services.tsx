import "../fade-animations.css";
import { Truck, Bot, Database, Zap, Settings, BarChart3 } from "lucide-react";
import { useInView } from "../hooks/useInView";

const services = [
  {
    icon: Truck,
    title: "Vendor Supply Management",
    description:
      "Streamline your vendor relationships with AI-powered supply chain optimization and automated procurement processes.",
    features: [
      "Automated vendor selection",
      "Real-time inventory tracking",
      "Cost optimization algorithms",
    ],
  },
  {
    icon: Bot,
    title: "AI Integration Systems",
    description:
      "Seamlessly integrate artificial intelligence into your existing workflows for enhanced productivity and decision-making.",
    features: [
      "Custom AI model deployment",
      "API integration services",
      "Machine learning workflows",
    ],
  },
  {
    icon: Database,
    title: "Test Case Automation",
    description:
      "Our AI-powered platform automatically generates comprehensive test cases, reducing manual effort by up to 95%.",
    features: [
      "Automated test generation",
      "Smart test case management",
      "Continuous integration support",
    ],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimize your systems performance with AI-driven analytics and predictive maintenance capabilities.",
    features: [
      "Performance monitoring",
      "Predictive analytics",
      "Automated scaling solutions",
    ],
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description:
      "Tailored AI solutions designed specifically for your business needs and industry requirements.",
    features: [
      "Bespoke AI development",
      "Industry-specific solutions",
      "Dedicated support team",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Gain valuable insights from your data with advanced analytics and intelligent reporting systems.",
    features: [
      "Real-time dashboards",
      "Predictive insights",
      "Custom reporting tools",
    ],
  },
];

const Services = () => {
  const [ref, inView] = useInView();
  return (
    <section
      id="services"
      ref={ref}
      className={`py-20 bg-gray-50 animate-fade-up${inView ? " in-view" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive AI-integrated solutions that transform how
            you manage vendors, automate testing, and optimize your business
            processes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
