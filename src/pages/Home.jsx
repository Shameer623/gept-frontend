import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import Expertise from "../components/Expertise";
import Clients from "../components/Clients";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Services />
      <WhyChooseUs />
      <Clients />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;