import { IoClose } from "react-icons/io5";
import noise from "../assets/Noise.webp";
import { useContext } from "react";
import { AppContext } from "../App";

const Login = () => {
  const { isOpen, openLogin } = useContext(AppContext);

  return (
    <div
      className={`${isOpen ? "visible" : "hidden"} transition-all duration-300`}
    >
      <div className={`fixed inset-0 bg-[#0e2e2e66] backdrop-blur-sm`}></div>

      <div
        className="flex fixed top-[50%] left-[50%] translate-[-50%] bg-primary-1400 bg-blend-overlay pt-30 pb-12 px-8 z-60 min-w-86.25 rounded-2xl lg:py-0 lg:px-0 lg:min-h-162"
        style={{
          backgroundImage: `url(${noise})`,
        }}
      >
        <button
          className="absolute top-10 right-10 cursor-pointer"
          onClick={openLogin}
        >
          <IoClose size={40} />
        </button>

        <div className="bg-primary-1300 rounded-l-2xl">
          <div className="hidden lg:flex items-center flex-col max-w-105.5 justify-center text-center h-full px-10">
            <h2 className="mb-8">Lets Get You Signed Up</h2>
            <p>No charges, no fees. Get note taking in minutes!</p>
          </div>
        </div>

        <form
          className="grid place-content-center lg:px-10"
          onSubmit={openLogin}
        >
          <div className="form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="janedone@gmail.com"
              required
              autoComplete="email"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*************"
              required
            />

            <div className="mt-10 lg:mt-5 space-y-4">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <input
                  type="checkbox"
                  name="agree-terms"
                  id="agree-terms"
                  className="appearance-none border border-primary-100 size-3.5 rounded-xs bg-transparent transition-colors duration-300 checked:bg-primary-500 cursor-pointer"
                />
                <label htmlFor="agree-terms">I agree to all terms</label>
              </div>

              <button className="btn btn-secondary transition-all duration-300 hover:btn-glow">
                Get Started
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
