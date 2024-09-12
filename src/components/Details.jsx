/* eslint-disable react/prop-types */
import "../index.css";
import Stars from "./Stars";

export default function Details({ title, desc, count, filledNumber }) {
  return (
    <div className="">
      <Stars count={count} filledNumber={filledNumber} />
      <h2 className="text-6xl my-8">{title}</h2>
      <p className="lg:w-[360px] text-grayColor opacity-75">{desc}</p>
    </div>
  );
}
