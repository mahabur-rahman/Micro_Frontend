import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.scss";
import ProductCard from "./components/ProductCard";

const App = () => (
  <div className="max-w-6xl mx-auto mt-10 text-3xl">
    <Header/>
    <div className="text-2xl font-bold my-14">Home page</div>
    <ProductCard />
    <Footer />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
