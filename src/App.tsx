import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HelpCenter from "./components/HelpCenter";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 font-inter">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <Products />
                  <About />
                  <Contact />
                </>
              }
            />
            <Route path="/help-center" element={<HelpCenter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
