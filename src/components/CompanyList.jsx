const CompanyList = ({ companyList }) => {
  return (
    <li key={companyList.alt}>
      <img
        src={companyList.imgSrc}
        alt={`Logo of ${companyList.alt}`}
        className="w-20 cursor-pointer"
      />
    </li>
  );
};

export default CompanyList;
