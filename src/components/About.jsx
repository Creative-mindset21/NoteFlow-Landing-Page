import { aboutDetails } from "../util/data";

const About = () => {
  return (
    <section className="box" id="about">
      <h2>
        All The Tools You Need to{" "}
        <span className="text-primary-500 text-glow">Supercharge</span> Your
        Note Taking
      </h2>

      <ul className="grid grid-cols-1 gap-16">
        {aboutDetails.map(({ id, title, desc, imgSrc, order }) => (
          <li
            key={id}
            className="flex flex-col gap-8 md:flex-row md:items-center justify-between"
          >
            {/* Text block: Always order-1 on mobile, custom order on large screens */}
            <div
              className={`max-w-106.25 order-1 ${
                order === 2 ? "md:order-2" : "md:order-1"
              }`}
            >
              <h3>{title}</h3>
              <p className="text-primary-100 leading-9 font-light">{desc}</p>
            </div>

            {/* Image block: Always order-2 on mobile, swapped on large screens */}
            <img
              src={imgSrc}
              alt=""
              className={`max-w-100 w-full object-contain order-2 ${
                order === 2 ? "md:order-1" : "md:order-2"
              }`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
