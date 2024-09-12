/* eslint-disable react/prop-types */
import "../../../index.css";
import bgImg from "../../../assets/imgs/bg1.jpg";
import avatar1 from "../../../assets/imgs/avatar02.jpg";
import avatar2 from "../../../assets/imgs/avatar01.jpg";
import Stars from "../../../components/Stars";
import Details from "../../../components/Details";

const testmonialsData = [
  {
    name: "Mark Johnson",
    company: "Google",
    quote: "It’ was amazing feeling for my belly!",
    avatar: avatar1,
  },
  {
    name: "Kate Hudson",
    company: "LinkedIn",
    quote: "Great food and great atmosphere!",
    avatar: avatar2,
  },
];

export default function Testmonials({ children }) {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 lg:gap-10 text-center lg:text-left lg:ml-40">
        <div>
          <Details
            title="The best food in London!"
            desc="Donec a eros metus. Vivamus volutpat leo dictum risus ullamcorper
            condimentum. Cras sollicitudin varius condimentum. Praesent a dolor
            sem...."
            count={5}
            filledNumber={3}
          />

          <div className="lg:block flex items-center justify-center gap-3 flex-wrap w-full my-7">
            {testmonialsData.map((test, i) => (
              <Testmonial
                name={test.name}
                company={test.company}
                quote={test.quote}
                avatar={test.avatar}
                key={test.name}
                className={`lg:translate-x-${i * 10} translate-x-0`}
              />
            ))}
          </div>
        </div>
        <div
          style={{ backgroundImage: `url("${bgImg}")` }}
          className="h-[900px] bg-cover hidden lg:block"
        ></div>
      </div>
      {children}
    </div>
  );
}

function Testmonial({ name, quote, avatar, company, className }) {
  return (
    <div className={`sm:w-96 w-80 my-6 ${className}`}>
      <div className="bg-darkColor p-5 rounded-t-md">
        <Stars count={5} filledNumber={3} />
        <p className="text-3xl text-lightColor">{quote}</p>
      </div>
      <div className="flex items-center gap-3 px-3 py-6 rounded-b-md border-2">
        <img src={avatar} alt="" className="rounded-full w-10" />
        <span className="">
          {name}, <span className="text-yellowColor">{company}</span>
        </span>
      </div>
    </div>
  );
}
