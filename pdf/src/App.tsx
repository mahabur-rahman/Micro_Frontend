import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "home/Header";
import Footer from "home/Footer";
import ProductCard from "home/ProductCard";

import "home/styles";

const CartShow = lazy(() => import("home/CartShow"));
import List from "todoList/List";

const App = () => {
  const [shortItems, setShortItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=5&skip=10&select=id,name,image")
      .then((res) => res.json())
      .then((data) => setShortItems(data.recipes));
  }, []);

  return (
    <>
      <div className="max-w-6xl mx-auto mt-10 text-3xl">
        <Header />

        {/* <div className="text-2xl font-bold text-red-500 my-14">
          <ProductCard />
        </div> */}
{/* 
        <div className="short-list-container">
          <Suspense fallback={<p>Loading...</p>}>
            {shortItems.length &&
              shortItems.map((item) => {
                return <CartShow data={item}></CartShow>;
              })}
          </Suspense>
        </div> */}

        <List />
        <Footer />
      </div>
    </>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
