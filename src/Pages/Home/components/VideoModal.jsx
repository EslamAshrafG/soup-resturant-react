/* eslint-disable react/prop-types */
import "../../../index.css";
import Title from "../../../components/Title";
import bgCr from "../../../assets/imgs/bg-croissant.jpg";
import Overlay from "../../../components/Overlay";
import { useState } from "react";

function IconCirclePlay({ onClick }) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill=""
      height="10rem"
      width="10rem"
      className="border-2 bg-white rounded-full hover:bg-yellowColor hover:border-yellowColor transition-all"
      onClick={onClick}
    >
      <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9v176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
    </svg>
  );
}

export default function VideoModal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{ background: `url("${bgCr}")` }}
      className="pb-12 pt-28 container mx-auto"
    >
      <Title
        titleText={"Check our promo video!"}
        size={50}
        style={{ color: "white", margin: "0" }}
        align={"center"}
      />
      <p className="text-gray-400 text-center">
        Book a table even right now or make an online order!
      </p>
      <div className="flex justify-center my-10 cursor-pointer w-fit aspect-square mx-auto">
        <IconCirclePlay onClick={() => setIsOpen(true)} />
      </div>
      {isOpen && (
        <>
          <VideoFrame setIsOpen={setIsOpen} />
          <Overlay />
        </>
      )}
    </div>
  );
}

function VideoFrame({ setIsOpen }) {
  return (
    <div
      className="z-[20000] left-1/2 top-1/2 max-w-fit"
      style={{ position: "fixed", transform: "translate(-50%,-50%)" }}
    >
      <span
        className="fixed text-white text-7xl -right-14 -top-20 cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        &times;
      </span>
      <iframe
        src="https://www.youtube.com/embed/uVju5--RqtY?si=hRakLwy6nodw5cS9"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="video-modal"
      ></iframe>
    </div>
  );
}
