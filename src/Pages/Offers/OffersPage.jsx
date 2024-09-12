import PageTitle from "../../components/PageTitle";
import { Offer, Check, UnCheck } from "../Home/components/Offers";
import freeBurger from "../../assets/imgs/free-burger.jpg";
import chipFriday from "../../assets/imgs/chip-friday.jpg";
import freePizza from "../../assets/imgs/free-pizza.jpg";
import { Suspense } from "react";
import Spinner from "./../../components/Spinner";

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

export default function OffersPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <PageTitle
        titleText="Special Offers"
        subtitle="Some informations about our restaurant"
        bgColor=""
        size={70}
      />
      <div className="flex flex-col gap-10 justify-center items-center md:p-10">
        <Offers />
      </div>
    </Suspense>
  );
}

function Offers() {
  return (
    <div className="flex flex-col gap-10 justify-center w-fit p-10">
      {offersData.map((offer) => (
        <Offer
          key={offer.id}
          img={offer.img}
          title={offer.title}
          desc={offer.desc}
          features={offer.features}
        />
      ))}
    </div>
  );
}
