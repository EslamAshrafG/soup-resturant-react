/* eslint-disable react/prop-types */
import "../../../index.css";
import Slider from "../../../components/Slider";
import Button from "../../../components/Button";
// import Swiper core and required modules
import { SwiperSlide } from "swiper/react";
// Import Images
import img1 from "../../../assets/imgs/slider-burger.jpg";
import img2 from "../../../assets/imgs/slider-desert.jpg";
import img3 from "../../../assets/imgs/slider-pasta.jpg";

const yellowColor = "##ddae71";
const buttonStyle =
  "bg-transparent border block mx-auto mt-10 w-44 px-5 py-3 transition border-yellowColor";

const foodSliderDate = [
  {
    img: img1,
    desc: "and use it with your next order!",
    title: "get 10% off coupon",
    descDirectionTop: false,
  },
  {
    img: img2,
    desc: "and use it with your next order!",
    title: "delicious Desserts",
    descDirectionTop: false,
  },
  {
    img: img3,
    desc: "New Product!",
    title: "Boscaiola Pasta",
    descDirectionTop: true,
  },
];

export default function Landing() {
  return (
    <div id="hero">
      <Slider className="h-full cursor-grab" space={50} slidesPerView={1}>
        {foodSliderDate.map((slide) => (
          <SwiperSlide className="md:px-14 px-5 relative " key={slide.title}>
            <FoodSlide
              img={slide.img}
              desc={slide.desc}
              title={slide.title}
              descDirectionTop={slide.descDirectionTop}
            />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
}

function FoodSlide({
  img,
  desc,
  title,
  buttonText = "Order Now !",
  descDirectionTop = false,
}) {
  return (
    <>
      <div
        className={`h-[88vh] bg-center`}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="absolute lg:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-10 bg-darkColor text-white bg-opacity-95">
        {descDirectionTop && (
          <p className="text-grayColor text-lg my-5">{desc}</p>
        )}
        <h1 className="capitalize text-3xl md:text-6xl">{title}</h1>
        {!descDirectionTop && (
          <p className="text-grayColor text-lg my-5">{desc}</p>
        )}
        <Button
          className={buttonStyle}
          bgColor="transparent"
          borderColor={yellowColor}
          textColor="white"
        >
          {buttonText}
        </Button>
      </div>
    </>
  );
}
