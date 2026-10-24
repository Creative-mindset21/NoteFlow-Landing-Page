const FooterLinks = ({ label, href }) => {
  return (
    <li>
      <a
        href={href}
        className="text-primary-100 font-light text-base leading-8"
      >
        {label}
      </a>
    </li>
  );
};

export default FooterLinks;
