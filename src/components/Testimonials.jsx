import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { testimonials } from "../util/data";
import TestimonialCard from "./TestimonialCard";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const getInitialCount = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      return 6;
    } else if (typeof window !== "undefined" && window.innerWidth >= 768) {
      return 4;
    }
    return 2;
  };

  const [visibleCount, setVisibleCount] = useState(getInitialCount);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount((prev) => {
        const isDesktop = window.innerWidth >= 1024;
        return isDesktop ? Math.max(prev, 6) : prev;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    const isLargeScreen = window.innerWidth >= 1024;
    const initial = getInitialCount();

    setVisibleCount((prev) => {
      if (prev >= testimonials.length) {
        return initial;
      }

      const nextCount = isLargeScreen ? testimonials.length : prev + 2;
      return Math.min(nextCount, testimonials.length);
    });
  };

  const newTestimonialArr = testimonials.slice(0, visibleCount);

  return (
    <section className="box">
      <p className="btn btn-secondary btn-glow text-center w-max mx-auto mb-8">
        Testimonials
      </p>

      <h2 className="mb-5">What our AI-powered notetakers have to say</h2>
      <p className="font-light leading-8 text-center max-w-120.5 mx-auto mb-8">
        NoteFlow has helped 1000’s supercharge their productivity with cutting
        edge AI note taking tools
      </p>

      <div className="testimonials">
        {newTestimonialArr.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>

      <button
        className="btn w-auto mx-auto flex items-center gap-4 my-8 transition-all duration-300 hover:btn-glow"
        onClick={handleClick}
      >
        Show {visibleCount >= testimonials.length ? "Less" : "More"}
        {visibleCount >= testimonials.length ? (
          <FaChevronUp />
        ) : (
          <FaChevronDown />
        )}
      </button>
    </section>
  );
};

export default Testimonials;
