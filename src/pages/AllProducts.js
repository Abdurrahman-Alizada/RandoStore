import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "King Size Bed", price: "300", img: "./img/bed.jpg" },
  { id: 2, name: "Comfy Slippers", price: "15", img: "./img/slippers.jpg" },
  { id: 3, name: "CD Rack", price: "100", img: "./img/rack.jpg" },
  { id: 4, name: "Glow Stick Bundle", price: "10", img: "./img/sticks.jpg" },
  { id: 5, name: "Cookie Jar", price: "25", img: "./img/cookies.jpg" },
];
function AllProducts() {
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
      {products.map((product, index) => (
        <Link to={`${product.id}`} key={index} class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div class="px-4 py-2">
            <h1 class="text-2xl font-bold text-gray-800 uppercase dark:text-white">
              {product?.name}
            </h1>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
            </p>
          </div>

          <img
            class="object-cover w-full h-48 mt-2"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
            alt="NIKE AIR"
          />

          <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 class="text-lg font-bold text-white">${product?.price}</h1>
            <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
              Add to cart
            </button>
          </div>
        </Link>
      ))}
      </div>
    </div>
  );
}

export default AllProducts;
