import "../../index.css";
import sign from "../../assets/imgs/signature.svg";
import bgChef from "../../assets/imgs/bg-chef.jpg";
import Details from "../../components/Details";
import Button from "../../components/Button";
import { Suspense } from "react";
import Spinner from "../../components/Spinner";
import PageTitle from "../../components/PageTitle";

export default function About() {
  return (
    <Suspense fallback={<Spinner />}>
      <AboutContent />
    </Suspense>
  );
}

function AboutContent() {
  return (
    <div className="container mx-auto">
      <PageTitle
        titleText="About Us"
        subtitle="Some informations about our restaurant"
        bgColor="white"
      />
      <AboutArea />
    </div>
  );
}

function AboutArea() {
  return (
    <div className="container mx-auto lg:pr-6 px-4 lg:px-0">
      <div className="grid lg:grid-cols-2 lg:gap-10 text-center lg:text-left ">
        <div className="flex flex-col items-center justify-between">
          <img src={bgChef} alt="bgChef" className="w-full h-full" />
        </div>
        <div className="lg:mr-20 mr-0 pt-20">
          <Details
            title="The best food in London!"
            desc="Donec a eros metus. Vivamus volutpat leo dictum risus ullamcorper
            condimentum. Cras sollicitudin varius condimentum. Praesent a dolor
            sem...."
            count={5}
            filledNumber={3}
          />
          <p className="text-grayColor opacity-75 pt-10">
            Nam eleifend elementum sapien et bibendum. Nunc ac diam efficitur,
            ultrices lorem quis, consectetur odio. Nullam vulputate, eros quis
            accumsan cursus, elit lectus bibendum nulla, sed dapibus ligula
            tellus at purus. Fusce id eros id mi cursus semper. Quisque
            efficitur bibendum nunc a consectetur. Maecenas vitae quam iaculis,
            scelerisque purus nec, varius purus. Nullam eget varius elit. Donec
            eget facilisis nunc, non rutrum lorem.
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-3 mt-10">
            <img src={sign} alt="sign" />
            <p className="text-grayColor opacity-75">
              Mark Johnson, <span className="text-yellowColor">Chef</span>
            </p>
          </div>
          <div className="my-10">
            <h4 className="text-yellowColor text-2xl capitalize">
              What people say about us ?
            </h4>
            <Button className="mt-8">Check our Reviews</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
