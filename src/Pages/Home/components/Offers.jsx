/* eslint-disable react/prop-types */
import "../../../index.css";
import Slider from "../../../components/Slider";
import Title from "../../../components/Title";
import freeBurger from "../../../assets/imgs/free-burger.jpg";
import chipFriday from "../../../assets/imgs/chip-friday.jpg";
import freePizza from "../../../assets/imgs/free-pizza.jpg";
import { SwiperSlide } from "swiper/react";

const Check = () => {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="green"
      height="1em"
      width="1em"
      className="inline mr-2"
    >
      <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z" />
    </svg>
  );
};

function UnCheck() {
  return (
    <svg
      viewBox="0 0 320 512"
      fill="red"
      height="1em"
      width="1em"
      className="inline mr-2"
    >
      <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256l105.3-105.4z" />
    </svg>
  );
}

const offersData = [
  {
    img: freeBurger,
    title: "Free Burger",
    desc: "Get free burger from orders higher that $40!",
    features: (
      <>
        <li>
          <Check />
          Only on Tuesdays
        </li>
        <li>
          <UnCheck />
          Order higher that $40
        </li>
        <li>
          <Check />
          Unless one burger ordered
        </li>
      </>
    ),
  },
  {
    img: chipFriday,
    title: "Free Small Pizza",
    desc: "10% Off for all dishes!",
    features: (
      <>
        <li>
          <Check />
          Only on Weekends
        </li>
        <li>
          <UnCheck />
          Order higher that $40
        </li>
      </>
    ),
  },
  {
    img: freePizza,
    title: "Chip Friday",
    desc: "Get free burger from orders higher that $40!",
    features: (
      <>
        <li>
          <Check />
          Only on Friday
        </li>
        <li>
          <Check />
          All products
        </li>
        <li>
          <Check />
          Online order
        </li>
      </>
    ),
  },
];

export default function Offers() {
  return (
    <div className="py-10 bg-lightBg container mx-auto">
      <Title titleText={"Special offers"} align={"center"} />
      <div>
        <Slider className="w-[80%]" space={15}>
          {offersData.map((offer) => (
            <>
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "fit-content",
                }}
                key={offer.title}
              >
                <Offer
                  img={offer.img}
                  title={offer.title}
                  desc={offer.desc}
                  features={offer.features}
                  key={offer.title}
                />
              </SwiperSlide>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
}

function Offer({ img, title, desc, features }) {
  return (
    <div className="lg:flex">
      <div className="flex items-center justify-center">
        <img src={img} alt="" className="max-w-full" />
      </div>
      <div className="p-10 bg-white border-2 h-fit">
        <h3 className="text-4xl">{title}</h3>
        <p className="text-grayColor text-sm mb-3">{desc}</p>
        <ul className="flex flex-col gap-2 text-lg text-grayColor">
          {features}
        </ul>
      </div>
    </div>
  );
}

export { Offer, Check, UnCheck };
