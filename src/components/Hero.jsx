import { FaArrowRightLong } from "react-icons/fa6";

import Trusted from "./Trusted";
import heroImage from "../assets/graphics/HeroGraphic.webp";
import Company from "./Company";
import About from "./About";
import Faq from "./Faq";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Login from "./Login";

const Hero = () => {
  return (
    <>
      <section>
        <div className="hero">
          <div>
            <h1>AI-Powered Notes. Organize and Summarize in Seconds</h1>
            <p>
              Let AI organize & summarize your notes, saving you time and
              boosting productivity
            </p>

            <button className="btn btn-secondary flex items-center gap-4 w-auto hover:scale-105 transition-transform duration-300">
              Get Started <FaArrowRightLong className="hidden lg:inline" />
            </button>
          </div>

          <img src={heroImage} alt="" className="max-w-132.25" />
        </div>
      </section>

      <Trusted />
      <Company />
      <About />
      <Faq />
      <Testimonials />
      <Footer />
      <Login />
    </>
  );
};

export default Hero;
