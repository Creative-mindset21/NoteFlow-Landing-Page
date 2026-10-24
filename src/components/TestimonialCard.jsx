import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ name, title, testimonial, rating, image }) => {
  return (
    <div className="testimonial-card">
      {/* Star */}
      <div>
        <div className="flex items-center gap-2">
          {Array.from({ length: rating }).map((_, i) => (
            <FaStar key={i} size={25} />
          ))}
        </div>
      </div>

      <p className="text-primary-50 text-base leading-8 font-light">
        {testimonial}
      </p>

      <div className="flex items-center gap-4">
        <img src={image} alt="" className="size-16 rounded-[99%]" />

        <div>
          <p className="text-primary-300 font-bold tracking-[-2.5%] leading-7">
            {name}
          </p>

          <p className="text-primary-75 leading-8 tracking-[-2.5%] text-base">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
