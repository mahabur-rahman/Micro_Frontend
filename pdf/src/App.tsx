import React from "react";
import ReactDOM from "react-dom/client";

import Header from "home/Header";
import Footer from "home/Footer";
import "home/styles";
import SafeComponent from "./SafeComponnet";

const App = () => (
  <div className="max-w-6xl mx-auto mt-10 text-3xl">
    <SafeComponent>
      <Header />
    </SafeComponent>
    <div className="text-2xl font-bold text-red-500 my-14">
      Product details page
    </div>
    <Footer />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
