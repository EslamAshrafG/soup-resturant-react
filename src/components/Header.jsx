/* eslint-disable react/prop-types */
import "../index.css";
import logo from "../assets/imgs/logo-light.svg";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ShoppingCart from "./ShoppingCart";
import scrollIntoView from "./scrollintoView";
import logoSmall from "../assets/imgs/logo-small.svg";

export default function Header({ cartItems, setCartItems }) {
  const [isOpen, setIsOpen] = useState(true);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const toggleNav = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth <= 1024) {
        setIsOpen(false);
      } else setIsOpen(true);
    };
    toggleNav();
    window.addEventListener("resize", toggleNav);

    return () => window.removeEventListener("resize", toggleNav);
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const scrollProgress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollHeight(scrollProgress);
    };

    window.addEventListener("scroll", updateProgress);

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className={`bg-lightColor shadow-lg sticky top-0 left-0 z-[1000]`}>
      <div className="container mx-auto lg:px-14 px-5 flex items-center justify-between h-24">
        <LogoLarge navigate={navigate} />
        <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} width={width} />
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
        <LogoSmall navigate={navigate} />
        <IconBars setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <div
        className="h-[4px] absolute bottom-0 left-0 bg-yellowColor"
        style={{ width: `${scrollHeight}%` }}
      ></div>
      <div
        className="fixed bottom-10 right-10 cursor-pointer"
        onClick={scrollIntoView}
      >
        <IconArrowUpCircleFill />
      </div>
    </div>
  );
}

function LogoSmall({ navigate }) {
  return (
    <div
      className="bg-white lg:hidden items-center justify-center flex cursor-pointer"
      onClick={() => {
        navigate("/Home");
        scrollIntoView();
      }}
    >
      <img src={logoSmall} alt="SOUP Logo" className="max-w-28" />
    </div>
  );
}
function LogoLarge({ navigate }) {
  return (
    <div
      className="bg-darkColor h-64 w-48 hidden relative p-20 lg:block z-[10] cursor-pointer"
      onClick={() => {
        navigate("/Home");
        scrollIntoView();
      }}
    >
      <img
        src={logo}
        alt="SOUP Logo"
        className="max-w-20 bg-darkColor absolute left-1/2 top-1/2 -translate-x-1/2 "
      />
    </div>
  );
}

function NavLinks({ isOpen, setIsOpen, width }) {
  function handleClick() {
    scrollIntoView();
    if (width <= 1024) setIsOpen(false);
  }
  return (
    <ul
      className={`${
        !isOpen ? "hidden" : "flex flex-col lg:flex-row"
      } items-center justify-center gap-8 p-5 m-5 absolute lg:relative lg:top-0 lg:left-0 top-16 -left-5 w-full lg:bg-white lg:text-black bg-black text-white z-[100]`}
    >
      {["Home", "About", "Menu", "Offers", "Contact", "FAQ"].map((item) => (
        <Link key={item} to={`/${item}`} onClick={handleClick}>
          {item}
        </Link>
      ))}
      <Button
        className="px-6 py-[6px] text-white transition-all"
        onClick={handleClick}
      >
        Order
      </Button>
    </ul>
  );
}

function Cart({ cartItems, setCartItems }) {
  const [open, setOpen] = useState(false);

  function toggleCart() {
    setOpen((open) => !open);
  }

  return (
    <>
      <div
        className="flex gap-3 items-center cursor-pointer relative"
        onClick={toggleCart}
      >
        <span className="absolute -top-2 -left-2 bg-yellowColor text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cartItems.length}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className=""
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg>
        <span className="text-lg text-gray-400">|</span>
        <span className="text-lg">
          $
          {cartItems
            .reduce((acc, item) => acc + +(item.price * item.quantity), 0)
            .toFixed(2)}
        </span>
      </div>
      <ShoppingCart
        open={open}
        setOpen={setOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </>
  );
}

function IconBars({ setIsOpen, isOpen }) {
  const toggleNav = () => setIsOpen((is) => !is);
  return (
    <div className="cursor-pointer block lg:hidden" onClick={toggleNav}>
      {isOpen ? (
        <svg viewBox="0 0 512 512" fill="currentColor" height="2em" width="2em">
          <path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm64 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm384 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
        </svg>
      ) : (
        <svg viewBox="0 0 448 512" fill="currentColor" height="2em" width="2em">
          <path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
        </svg>
      )}
    </div>
  );
}

function IconArrowUpCircleFill() {
  return (
    <svg
      fill="#ddae71"
      viewBox="0 0 16 16"
      height="3.5em"
      width="3.5em"
      className="hover:scale-110 transition-all bg-black rounded-full p-1"
    >
      <path d="M16 8A8 8 0 100 8a8 8 0 0016 0zm-7.5 3.5a.5.5 0 01-1 0V5.707L5.354 7.854a.5.5 0 11-.708-.708l3-3a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 5.707V11.5z" />
    </svg>
  );
}
