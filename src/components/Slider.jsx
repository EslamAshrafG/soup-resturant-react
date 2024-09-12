/* eslint-disable react/prop-types */
import "../index.css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const autoPlayTime = 3000;

export default function Slider({
  className = "h-full flex items-center justify-center",
  space = 50,
  slidesPerView = 1,
  children,
  isAutoPlay = true,
  loop = true,
  breakPoints = {},
}) {
  return (
    <Swiper
      className={className}
      spaceBetween={space}
      slidesPerView={slidesPerView}
      pagination={{ clickable: true }}
      navigation
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={
        isAutoPlay
          ? {
              delay: autoPlayTime, // 2.5 seconds
              disableOnInteraction: false, // Keeps autoplay on even after interaction
            }
          : false
      }
      loop={loop}
      breakpoints={breakPoints}
    >
      {children}
    </Swiper>
  );
}
