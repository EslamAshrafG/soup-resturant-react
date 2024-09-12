/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../index.css";
import Button from "./Button";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

export default function ShoppingCart({
  open,
  setOpen,
  cartItems,
  setCartItems,
}) {
  if (!open) return null;

  return (
    <aside className="fixed top-0 right-0 border-2 h-full w-full md:w-[28rem] resize-x bg-white shadow-lg overflow-y-auto z-[10000] p-4 py-8">
      <button
        onClick={() => setOpen(false)}
        className="absolute top-5 right-2 text-4xl text-gray-500 hover:text-gray-700"
      >
        &times;
      </button>
      <h2 className="text-lg font-medium text-gray-900 mb-4">Shopping cart</h2>
      <div className="flex flex-col gap-4 overflow-y-auto h-[65vh]">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            setCartItems={setCartItems}
            cartItems={cartItems}
          />
        ))}
      </div>

      <div className="flex justify-between items-center w-[96.3%] mx-auto p-6 px-4 border-2 border-gray-300 rounded-md my-2">
        <p className="text-gray-500">Total</p>
        <p className="text-gray-500">
          $
          {cartItems
            .reduce((acc, item) => acc + +(item.price * item.quantity), 0)
            .toFixed(2)}
        </p>
      </div>
      <div className="flex justify-center items-center  w-full px-6 gap-4">
        <button className="w-1/2 mt-auto  py-4 rounded-md  transition-all duration-300 text-center text-lg mb-4 bg-blue-600 hover:bg-blue-700 text-white ">
          Checkout
        </button>
        <button
          className="w-1/2 mt-auto  py-4 rounded-md  transition-all duration-300 text-center text-lg mb-4 bg-red-800 hover:bg-red-700 text-white"
          onClick={() => setCartItems([])}
        >
          Clear
        </button>
      </div>
    </aside>
  );
}

function CartItem({ item, setCartItems, cartItems }) {
  function handleRemoveFromCart() {
    setCartItems((prev) => prev.filter((prevItem) => prevItem.id !== item.id));
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center border-2 p-4">
        <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
        <div className="flex flex-col gap-2">
          <p className="text-gray-500">
            Price: ${String(item.price) * item.quantity}
          </p>
          <p className="text-gray-500">Quantity: {item.quantity}</p>
          <button onClick={handleRemoveFromCart} className="text-red-400">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
