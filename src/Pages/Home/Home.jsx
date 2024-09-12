import Landing from "./components/Landing.jsx";
import Testmonials from "./components/Testmonials.jsx";
import Features from "./components/Features.jsx";
import Menu from "./components/Menu.jsx";
import Offers from "./components/Offers.jsx";
import VideoModal from "./components/VideoModal.jsx";
import { Suspense } from "react";
import Spinner from "../../components/Spinner.jsx";

export default function Home() {
  return (
    <Suspense fallback={<Spinner />}>
      <Landing />
      <Testmonials>
        <Features />
      </Testmonials>
      <Menu />
      <Offers />
      <VideoModal />
    </Suspense>
  );
}
