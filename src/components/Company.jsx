import { companyList } from "../util/data";
import CompanyList from "./CompanyList";

const Company = () => {
  return (
    <section className="box mb-20 overflow-hidden w-full h-full">
      <p className="text-center mb-8">
        Organizations powered by <span className="font-semibold">NoteFlow</span>
      </p>

      <div className="flex w-max group items-center">
        <ul
          className="flex items-center gap-8 animate-companyMove shrink-0 pr-8 group-hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {companyList.map((company, id) => (
            <CompanyList companyList={company} key={id} />
          ))}
        </ul>

        <ul
          className="flex items-center gap-8 animate-companyMove shrink-0 pr-8 group-hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {companyList.map((company, id) => (
            <CompanyList key={id} companyList={company} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Company;
