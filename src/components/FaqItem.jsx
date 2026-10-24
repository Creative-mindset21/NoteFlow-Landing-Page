import { useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqItem = ({ question, answer, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const textRef = useRef(null);

  const handleToggle = (e) => {
    const isNowOpen = e.currentTarget.open;
    setIsOpen(isNowOpen);

    if (isNowOpen) {
      setTimeout(() => {
        textRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 50);
    }
  };

  return (
    <details
      className="space-y-4 pb-4 transition-all duration-300"
      onToggle={handleToggle}
    >
      <summary className="flex justify-between items-center cursor-pointer font-medium text-lg">
        <div className="flex items-center gap-2">
          <button className="size-10 border-primary-50 border-2 rounded-lg">
            {Icon && <Icon className=" size-full p-1.5" />}
          </button>

          <p className="text-base font-medium leading-6">{question}</p>
        </div>

        <span className="text-sm">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </summary>

      <p ref={textRef} className="text-primary-100 leading-8 font-light">
        {answer}
      </p>
    </details>
  );
};

export default FaqItem;
