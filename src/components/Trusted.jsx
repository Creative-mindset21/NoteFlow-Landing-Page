import { trustedImgs } from "../util/data";

const Trusted = () => {
  return (
    <div className="py-20 box flex items-center gap-4">
      <div className="flex items-center ">
        {trustedImgs.map((imgs) => (
          <img
            src={imgs}
            alt=""
            className="size-12 rounded-[99%] -ml-4 border-2 border-primary-100"
          />
        ))}
      </div>

      <p className="text-primary-100 text-sm md:text-xl font-light">
        Trusted by <span className="text-primary-500 font-bold">12,653+</span>{" "}
        productivity junkies
      </p>
    </div>
  );
};

export default Trusted;
