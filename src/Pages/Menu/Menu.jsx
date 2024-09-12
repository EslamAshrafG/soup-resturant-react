/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "../../index.css";
import { useState, useEffect, Suspense } from "react";
import Button from "../../components/Button.jsx";
const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza";
import Spinner from "../../components/Spinner.jsx";
import PageTitle from "../../components/PageTitle.jsx";
import scrollIntoView from "../../components/scrollintoView.jsx";
import Overlay from "../../components/Overlay.jsx";

const menuItems = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80",
    title: "Margherita Pizza",
    price: "12.99",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=300&q=80",
    title: "Spaghetti Carbonara",
    price: "14.50",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80",
    title: "Cheeseburger",
    price: "9.99",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=300&q=80",
    title: "Caesar Salad",
    price: "8.50",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=300&q=80",
    title: "Ribeye Steak",
    price: "29.99",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=300&q=80",
    title: "Sushi Platter",
    price: "24.99",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=300&q=80",
    title: "Fish Tacos",
    price: "11.99",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=300&q=80",
    title: "Club Sandwich",
    price: "10.50",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=300&q=80",
    title: "Chicken Curry",
    price: "15.99",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=300&q=80",
    title: "Mushroom Risotto",
    price: "16.50",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=300&q=80",
    title: "Beef Lasagna",
    price: "13.99",
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=300&q=80",
    title: "Vegetable Stir Fry",
    price: "11.50",
  },
  {
    id: 13,
    img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=300&q=80",
    title: "Chicken Alfredo",
    price: "14.99",
  },
  {
    id: 14,
    img: "https://images.unsplash.com/photo-1548869206-93b036288d7e?auto=format&fit=crop&w=300&q=80",
    title: "Beef Burrito",
    price: "10.99",
  },
  {
    id: 15,
    img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=300&q=80",
    title: "Pad Thai",
    price: "12.50",
  },
  {
    id: 16,
    img: "https://images.unsplash.com/photo-1560717845-968823efbee1?auto=format&fit=crop&w=300&q=80",
    title: "Grilled Salmon",
    price: "18.99",
  },
  {
    id: 17,
    img: "https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=300&q=80",
    title: "Veggie Wrap",
    price: "9.50",
  },
  {
    id: 18,
    img: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=300&q=80",
    title: "BBQ Ribs",
    price: "19.99",
  },
  {
    id: 19,
    img: "https://images.unsplash.com/photo-1543826173-70651703c5a4?auto=format&fit=crop&w=300&q=80",
    title: "Chicken Parmesan",
    price: "15.50",
  },
  {
    id: 20,
    img: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=300&q=80",
    title: "Vegetable Soup",
    price: "7.99",
  },
  {
    id: 21,
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80",
    title: "Beef Stroganoff",
    price: "16.99",
  },
  {
    id: 22,
    img: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=300&q=80",
    title: "Seafood Paella",
    price: "22.99",
  },
  {
    id: 23,
    img: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?auto=format&fit=crop&w=300&q=80",
    title: "Eggplant Parmesan",
    price: "13.50",
  },
  {
    id: 24,
    img: "https://images.unsplash.com/photo-1567529692333-de9fd6772897?auto=format&fit=crop&w=300&q=80",
    title: "Beef Teriyaki",
    price: "15.99",
  },
  {
    id: 25,
    img: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=300&q=80",
    title: "Vegetable Lasagna",
    price: "12.99",
  },
  {
    id: 26,
    img: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?auto=format&fit=crop&w=300&q=80",
    title: "Chicken Fajitas",
    price: "14.50",
  },
  {
    id: 27,
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80",
    title: "Beef Stir Fry",
    price: "13.99",
  },
  {
    id: 28,
    img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=300&q=80",
    title: "Shrimp Tacos",
    price: "12.50",
  },
  {
    id: 29,
    img: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?auto=format&fit=crop&w=300&q=80",
    title: "Vegetable Curry",
    price: "11.99",
  },
  {
    id: 30,
    img: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?auto=format&fit=crop&w=300&q=80",
    title: "Beef Enchiladas",
    price: "13.50",
  },
  {
    id: 31,
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80",
    title: "Chicken Noodle Soup",
    price: "8.99",
  },
  {
    id: 32,
    img: "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=300&q=80",
    title: "Pork Chops",
    price: "16.50",
  },
  {
    id: 33,
    img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=300&q=80",
    title: "Vegetable Quiche",
    price: "10.99",
  },
  {
    id: 34,
    img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=300&q=80",
    title: "Beef Kabobs",
    price: "17.50",
  },
  {
    id: 35,
    img: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=300&q=80",
    title: "Chicken Caesar Wrap",
    price: "9.99",
  },
  {
    id: 36,
    img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=300&q=80",
    title: "Beef Pho",
    price: "13.99",
  },
  {
    id: 37,
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=300&q=80",
    title: "Shrimp Fried Rice",
    price: "14.50",
  },
  {
    id: 38,
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=300&q=80",
    title: "Vegetable Pizza",
    price: "11.99",
  },
  {
    id: 39,
    img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=300&q=80",
    title: "Beef Tacos",
    price: "10.50",
  },
  {
    id: 40,
    img: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=300&q=80",
    title: "Chicken Shawarma",
    price: "12.99",
  },
  {
    id: 41,
    img: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=300&q=80",
    title: "Vegetable Pad Thai",
    price: "11.50",
  },
  {
    id: 42,
    img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=300&q=80",
    title: "Beef Gyros",
    price: "13.50",
  },
  {
    id: 43,
    img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=300&q=80",
    title: "Shrimp Pasta",
    price: "15.99",
  },
  {
    id: 44,
    img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80",
    title: "Vegetable Sushi Roll",
    price: "12.50",
  },
  {
    id: 45,
    img: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=300&q=80",
    title: "Beef Brisket",
    price: "18.99",
  },
  {
    id: 46,
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=300&q=80",
    title: "Chicken Tikka Masala",
    price: "14.99",
  },
  {
    id: 47,
    img: "https://images.unsplash.com/photo-1600850056064-a8b380df8395?auto=format&fit=crop&w=300&q=80",
    title: "Vegetable Fajitas",
    price: "11.99",
  },
  {
    id: 48,
    img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=300&q=80",
    title: "Tiramisu",
    price: "7.99",
  },
];

export default function Menu({ cartItems, setCartItems }) {
  const [items, setItems] = useState(menuItems);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(11);
  const [page, setPage] = useState(1);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const itemsPerPage = 11;

  function handlePrev() {
    if (start === 1) return;
    setStart(start - itemsPerPage);
    setEnd(end - itemsPerPage);
    setPage(page - 1);
    scrollIntoView();
  }

  function handleNext() {
    if (end >= items.length) return;
    setStart(start + itemsPerPage);
    setEnd(end + itemsPerPage);
    setPage(page + 1);
    scrollIntoView();
  }

  useEffect(function () {
    async function getMenu() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch menu");

        const data = await res.json();
        if (data.status !== "success") throw new Error("Failed to fetch menu");

        let recipes = data.data.recipes;
        recipes = recipes.map((recipe) => {
          return {
            id: recipe.id,
            img: recipe.image_url,
            title: recipe.title,
            price: (Math.random() * 100).toFixed(2),
          };
        });

        setItems(recipes);
        console.log(recipes);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    // getMenu();
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <PageTitle
        titleText="Menu"
        subtitle="Some informations about our restaurant"
        bgColor=""
      />
      <div className="flex flex-col items-center justify-center mt-10">
        {error && <div>{error}</div>}
        {isLoading && <Spinner />}
        {!isLoading && !error && (
          <MenuItems
            setCartItems={setCartItems}
            cartItems={cartItems}
            items={items.slice(start, end)}
            selectedItemId={selectedItemId}
            setSelectedItemId={setSelectedItemId}
          />
        )}
        <div className="flex justify-center items-center gap-24 py-6 mt-10">
          {page > 1 && (
            <button
              onClick={handlePrev}
              className="rounded-full bg-yellowColor aspect-square w-10 text-white flex items-center justify-center text-xl font-bold pb-1"
            >
              <span>{"<"}</span>
            </button>
          )}
          <span
            className="text-lg font-bold flex items-center px-4 justify-center border-2 pointer-events-none aspect-square w-6 "
            style={{ borderRadius: "50%" }}
          >
            {page}
          </span>
          {end < items.length && (
            <button
              onClick={handleNext}
              className="rounded-full bg-yellowColor aspect-square w-10 text-white flex items-center justify-center text-xl pb-1 font-bold"
            >
              <span>{">"}</span>
            </button>
          )}
        </div>
      </div>
      {selectedItemId && (
        <SelectedItem
          selectedItemId={selectedItemId}
          items={items}
          setSelectedItemId={setSelectedItemId}
        />
      )}
    </Suspense>
  );
}

// function MenuCategories() {
//   return (
//     <ul>
//       <li>All</li>
//       <li>Pizza</li>
//       <li>Burger</li>
//       <li>Salad</li>
//       <li>Dessert</li>
//     </ul>
//   );
// }

function MenuItems({
  setCartItems,
  items,
  cartItems,
  selectedItemId,
  setSelectedItemId,
}) {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="grid grid-cols-1 vsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center justify-center p-2">
          {items.map((item) => (
            <MenuItem
              key={item.id}
              img={item.img}
              price={item.price}
              title={item.title}
              id={item.id}
              setCartItems={setCartItems}
              cartItems={cartItems}
              selectedItemId={selectedItemId}
              setSelectedItemId={setSelectedItemId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MenuItem({
  id,
  img,
  price = "100",
  title,
  setCartItems,
  cartItems,
  selectedItemId,
  setSelectedItemId,
}) {
  const item = {
    id,
    img,
    price,
    title,
  };

  function handleAddToCart() {
    const itemInCart = cartItems.find((item) => item.id === id);
    if (itemInCart) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  }

  function selectItem() {
    if (selectedItemId === id) setSelectedItemId(null);
    else setSelectedItemId(id);
  }

  return (
    <div className="max-w-[300px] p-6 border-2 hover:bg-gray-100 transition-all cursor-pointer">
      <div>
        <img
          src={img}
          alt={title}
          className="w-[250px] object-cover rounded-sm h-[200px] "
          loading="lazy"
          onClick={selectItem}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl lg:text-2xl font-bold text-yellowColor ">
          {title}
        </h3>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-400">
          from <span className="font-bold text-black">${price}</span>
        </p>
        <Button
          className="py-[8px] px-[5px] text-[12px]"
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}

function SelectedItem({ selectedItemId, items, setSelectedItemId }) {
  const selectedItem = items.find((item) => item.id === selectedItemId);
  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] max-w-4xl max-h-[800px] flex flex-col md:flex-row items-center justify-center z-[10000] bg-white rounded-lg overflow-hidden shadow-xl">
        <div
          style={{
            background: `url("${selectedItem.img}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full md:w-1/2 h-1/3 md:h-full"
        />
        <div className="flex flex-col w-full md:w-1/2 h-2/3 md:h-full bg-gray-100 p-4 md:p-8 overflow-y-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
            {selectedItem.title}
          </h2>
          <p className="text-lg md:text-xl mb-2">
            Price: ${selectedItem.price}
          </p>
          <p className="text-sm md:text-base text-gray-600 mb-4">
            {selectedItem.description ||
              "A delicious menu item perfect for any occasion. Made with fresh, locally-sourced ingredients and prepared to perfection by our expert chefs. This dish combines bold flavors and exquisite textures to create a memorable dining experience."}
          </p>
          <div className="w-full">
            <h3 className="text-lg md:text-xl font-bold mb-2">Ingredients:</h3>
            <ul className="list-disc list-inside text-sm md:text-base">
              <li>Fresh vegetables (tomatoes, lettuce, onions)</li>
              <li>High-quality protein (chicken, beef, or tofu)</li>
              <li>Aromatic herbs and spices</li>
              <li>Artisanal bread or pasta</li>
              <li>Locally-sourced dairy products</li>
            </ul>
          </div>
        </div>
        <button
          className="absolute top-2 right-2 text-3xl cursor-pointer bg-white rounded-full p-1 text-gray-700 hover:text-gray-900 transition-colors"
          onClick={() => setSelectedItemId(null)}
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      </div>
      <Overlay />
    </>
  );
}
