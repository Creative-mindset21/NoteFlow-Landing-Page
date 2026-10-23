import { companyList } from "../util/data";
import CompanyList from "./CompanyList";

const Company = () => {
  return (
    <div className="box mb-20 overflow-hidden">
      <p className="text-center mb-8">
        Organizations powered by <span className="font-semibold">NoteFlow</span>
      </p>

      <div className="flex w-max group items-center">
        <ul
          className="flex items-center gap-8 animate-companyMove shrink-0 pr-8 group-hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {companyList.map((company) => (
            <CompanyList companyList={company} />
          ))}
        </ul>

        <ul
          className="flex items-center gap-8 animate-companyMove shrink-0 pr-8 group-hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {companyList.map((company) => (
            <CompanyList companyList={company} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Company;
