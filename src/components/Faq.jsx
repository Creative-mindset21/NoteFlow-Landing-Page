import { useState } from "react";

import { faqQuestions } from "../util/data";
import FaqItem from "./FaqItem";

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState("General");

  const categories = ["General", "Pricing", "Features", "Integrations"];

  const filteredQuestions = faqQuestions.filter(
    (question) => question.type === activeCategory
  );

  return (
    <section className="box mt-10 space-y-10 max-w-206.5">
      <h2 className="text-left md:text-center">Frequently Asked Questions</h2>

      <div className="flex flex-wrap gap-6 items-center md:justify-center">
        {categories.map((category) => (
          <button
            className={`btn w-max ${activeCategory === category ? "btn-secondary btn-glow" : ""}`}
            onClick={() => setActiveCategory(category)}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-12">
        {filteredQuestions.map(({ question, answer, icon }, i) => (
          <FaqItem key={i} question={question} answer={answer} icon={icon} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
