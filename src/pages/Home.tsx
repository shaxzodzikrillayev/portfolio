import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Companies from "../components/Companies/Companies";
import Services from "../components/Services/Services";
import Philosophy from "../components/Philosophy/Philosophy";
import Projects from "../components/Projects/Projects";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Companies />
        <Services />
        <Philosophy />
        <Projects />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
