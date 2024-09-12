import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, useState, useEffect } from "react";
const Header = lazy(() => import("./components/Header.jsx"));
const Home = lazy(() => import("./Pages/Home/Home.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const About = lazy(() => import("./Pages/About/About.jsx"));
const Menu = lazy(() => import("./Pages/Menu/Menu.jsx"));
const OffersPage = lazy(() => import("./Pages/Offers/OffersPage.jsx"));
const Contact = lazy(() => import("./Pages/Contact/Contact.jsx"));
const FAQ = lazy(() => import("./Pages/FAQ/FAQ.jsx"));
import { Suspense } from "react";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    function loadCartItems() {
      const storedCartItems = localStorage.getItem("cartItems");
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    }
    window.addEventListener("load", loadCartItems);
    return () => {
      window.removeEventListener("load", loadCartItems);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Header cartItems={cartItems} setCartItems={setCartItems} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/menu"
              element={
                <Menu cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

function Loading() {
  return (
    <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col items-center justify-center w-screen h-screen z-50">
      <svg
        aria-hidden="true"
        className="w-40 aspect-square text-gray-200 animate-spin dark:text-gray-600 fill-yellowColor"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
      <p className="text-zinc-600 dark:text-zinc-400 text-3xl font-bold">
        Your adventure is about to begin
      </p>
    </div>
  );
}

export default App;
