import { useState } from "react";

const faqs = [
  {
    category: "Services & Solutions",
    questions: [
      {
        q: "What services does AEGISOL provide?",
        a: "We offer automated software testing solutions, AI-powered testing, consulting, and process optimization for enterprise clients.",
      },
      {
        q: "How can I request a quote for testing services?",
        a: "You can contact us directly via our hotline 1800-123-456 or submit a request on the Contact page to receive a detailed consultation and quotation.",
      },
      {
        q: "Does AEGISOL support large-scale software testing projects?",
        a: "Yes, we have extensive experience in delivering automated, performance, and security testing for large enterprise projects.",
      },
    ],
  },
  {
    category: "Technical Support",
    questions: [
      {
        q: "How do I submit a technical support request?",
        a: "You can submit your request via the Help Center or email support@aegisol.com. Our technical team will respond within 24 business hours.",
      },
      {
        q: "Does AEGISOL provide automated testing?",
        a: "Our platform supports AI-powered automated testing. Please contact us for a tailored solution for your project.",
      },
      {
        q: "How can I track the progress of my testing project?",
        a: "After using our services, you will receive progress and test result reports via email or as agreed with your project team.",
      },
    ],
  },
  {
    category: "Billing & Contracts",
    questions: [
      {
        q: "What payment methods does AEGISOL accept?",
        a: "We accept bank transfer, credit card, and provide electronic invoices for businesses.",
      },
      {
        q: "How do I receive a VAT invoice?",
        a: "After payment, you will receive a VAT invoice via your registered email or you can request delivery to your company address.",
      },
      {
        q: "Does AEGISOL provide service contracts for enterprises?",
        a: "We offer clear service contracts for enterprise clients. Please contact our sales team for detailed consultation.",
      },
    ],
  },
  {
    category: "Contact & Customer Support",
    questions: [
      {
        q: "How can I contact customer support?",
        a: "You can reach us via email at support@aegisol.com or hotline 1800-123-456. You may also use the online contact form on our website for the fastest support.",
      },
      {
        q: "What are your support hours?",
        a: "Our support team is available from 8:00 to 18:00 on business days (excluding public holidays).",
      },
    ],
  },
];

const HelpCenter = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredFaqs = faqs
    .filter((cat) => !activeCategory || cat.category === activeCategory)
    .map((cat) => ({
      ...cat,
      questions: cat.questions.filter(
        (q) =>
          q.q.toLowerCase().includes(search.toLowerCase()) ||
          q.a.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.questions.length > 0);

  return (
    <div className="min-h-screen px-4 py-16 bg-gray-50 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-4 text-4xl font-bold text-center text-blue-900">
          Help Center
        </h1>
        <p className="mb-8 text-lg text-center text-gray-700">
          How can we help you? Search our FAQs or contact support for further
          assistance.
        </p>
        <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
          <input
            type="text"
            placeholder="Search for answers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex flex-wrap justify-center gap-2 md:justify-end">
            {faqs.map((cat) => (
              <button
                key={cat.category}
                onClick={() =>
                  setActiveCategory(
                    cat.category === activeCategory ? null : cat.category
                  )
                }
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors duration-200 ${
                  activeCategory === cat.category
                    ? "bg-blue-700 text-white border-blue-700"
                    : "bg-white text-blue-700 border-blue-300 hover:bg-blue-50"
                }`}
              >
                {cat.category}
              </button>
            ))}
            {activeCategory && (
              <button
                onClick={() => setActiveCategory(null)}
                className="px-3 py-2 ml-2 text-xs text-gray-500 border border-gray-300 rounded-full hover:bg-gray-100"
              >
                Clear
              </button>
            )}
          </div>
        </div>
        <div className="p-6 mb-10 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-2xl font-semibold text-blue-800">
            Frequently Asked Questions
          </h2>
          {filteredFaqs.length === 0 && (
            <p className="text-gray-500">No results found.</p>
          )}
          {filteredFaqs.map((cat) => (
            <div key={cat.category} className="mb-6">
              <h3 className="mb-2 text-lg font-bold text-blue-700">
                {cat.category}
              </h3>
              <ul className="space-y-3">
                {cat.questions.map((q, idx) => (
                  <li key={idx} className="pb-3 border-b">
                    <div className="font-medium text-gray-900">{q.q}</div>
                    <div className="mt-1 text-gray-600">{q.a}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 p-8 mb-10 rounded-lg shadow bg-gradient-to-r from-blue-100 to-blue-50 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="mb-2 text-xl font-semibold text-blue-900">
              Still need help?
            </h2>
            <p className="mb-2 text-gray-700">
              Contact our support team and we’ll get back to you as soon as
              possible.
            </p>
            <div className="flex items-center gap-4 text-blue-800">
              <span className="font-semibold">Email:</span> support@aegisol.com
            </div>
            <div className="flex items-center gap-4 mt-1 text-blue-800">
              <span className="font-semibold">Hotline:</span> 1800-123-456
            </div>
          </div>
          <form className="flex flex-col w-full gap-4 md:w-1/2">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              placeholder="How can we help you?"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={3}
              required
            />
            <button
              type="submit"
              className="px-6 py-2 font-semibold text-white transition-colors duration-200 bg-blue-700 rounded-lg shadow hover:bg-blue-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
