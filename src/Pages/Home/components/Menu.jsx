/* eslint-disable react/prop-types */
import "../../../index.css";
import Title from "../../../components/Title";
import Slider from "../../../components/Slider";
import cake from "../../../assets/imgs/cake.jpg";
import drinks from "../../../assets/imgs/drinks.jpg";
import pizza from "../../../assets/imgs/pizza.jpg";
import sushi from "../../../assets/imgs/sushi.jpg";
import burger from "../../../assets/imgs/burger.jpg";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
const menuData = [
  { title: "Cake", img: cake },
  { title: "Drinks", img: drinks },
  { title: "Pizza", img: pizza },
  { title: "Sushi", img: sushi },
  { title: "Burger", img: burger },
];

export default function Menu() {
  return (
    <div className="container mx-auto pb-10">
      <Title titleText="Our Menu" align="center" />
      <div className="flex justify-center items-center px-5">
        <Slider
          className="h-fit cursor-grab "
          slidesPerView={1}
          space={10}
          breakPoints={{
            1024: {
              slidesPerView: 3,
            },
            700: {
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 1,
            },
          }}
        >
          {menuData.map((item) => (
            <>
              <SwiperSlide key={item.title}>
                <MenuItem title={item.title} img={item.img} key={item.title} />
              </SwiperSlide>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
}

function MenuItem({ title, img }) {
  return (
    <div className="relative w-fit">
      <Link to={`/Menu`}>
        <img src={img} alt="" className=" object-cover w-full h-full" />
      </Link>
      <h3 className="text-4xl text-white absolute bottom-10 right-10">
        {title}
      </h3>
    </div>
  );
}
