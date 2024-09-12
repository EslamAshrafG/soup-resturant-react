/* eslint-disable react/prop-types */
import "../index.css";
import logo from "../assets/imgs/logo-light.svg";

const newsData = [
  {
    title: "How to create a restaurant website?",
    date: "February 14, 2024",
  },
  {
    title: "How to create effective webdesign?",
    date: "Mars 14, 2020",
  },
  {
    title: "How to be a better chef?",
    date: "April 14, 2019",
  },
];

export default function Footer() {
  return (
    <footer className="container mx-auto bg-darkColor pt-12 pb-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:w-3/4 mx-auto px-10 md:px-0 border-b border-gray-500 pb-10">
        <div className="flex flex-col items-center justify-between">
          <img src={logo} alt="logo" className="w-32 h-32" />
        </div>
        <div className="flex flex-col items-center justify-between">
          <NewsLetter />
        </div>
        <div className="">
          <h3 className="text-4xl text-yellowColor mb-3">Subscribe Us!</h3>
          <form
            action=""
            className=" h-[50px]  relative my-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Email"
              className="outline-none bg-white border text-yellowColor  border-white p-5 h-full w-full  mb-4 "
            />
            <button
              type="submit"
              className="bg-yellowColor text-white p-[0.58rem] h-full absolute right-0 top-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <p className="text-center text-lightBg mt-4">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}

function NewsLetter() {
  return (
    <div>
      <h3 className="text-4xl text-yellowColor mb-6">Latest News</h3>
      <div className="flex flex-col justify-between">
        {newsData.map((item) => (
          <NewsItem key={item.title} title={item.title} date={item.date} />
        ))}
      </div>
    </div>
  );
}

function NewsItem({ title, date }) {
  return (
    <div className="mb-3">
      <p className="text-md text-white cursor-pointer hover:text-yellowColor transition-all ">
        {title}
      </p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  );
}
