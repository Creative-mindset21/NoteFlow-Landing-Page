import logo from "../assets/logo.svg";
import { footerLinks } from "../util/data";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="box py-10 flex flex-col lg:flex-row justify-between items-start">
      <p className="flex items-center gap-4 font-semibold leading-8 tracking-[-5%] text-lg mb-10">
        <img src={logo} alt="" className="max-w-10" />
        NoteFlow
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-x-12">
        {footerLinks.map((footer) => (
          <div className="space-y-8">
            <h4 className="font-semibold text-lg leading-8 tracking-[-2.5%]">
              {footer.title}
            </h4>

            <ul className="space-y-4">
              {footer.links.map((link) => (
                <FooterLinks {...link} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
