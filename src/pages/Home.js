import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <header className="">
      <div className="lg:flex">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold text-gray-800 lg:text-3xl">
              Purchase and sell{" "}
              <span className="text-indigo-500">Anything</span>
            </h2>

            <p className="mt-2 text-sm text-gray-400 lg:text-base">
              Simply add your product and intrested people will buy your product
            </p>

            <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
              <Link
                to="products"
                className="block px-6 py-2.5 text-sm font-medium tracking-wider text-center text-white uppercase transition-colors duration-300 transform bg-indigo-500 rounded-md hover:bg-indigo-700"
              >
                Browse Products
              </Link>
              <Link
                to="add-new-product"
                className="block px-6 py-2.5 text-sm font-medium tracking-wider text-center text-gray-700 uppercase transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
              >
                List your product
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <img
            className="w-full object-cover h-screen"
            src="https://images.unsplash.com/photo-1570857502809-08184874388e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          {/* <div className="w-full h-full bg-black opacity-25"></div> */}
        </div>
      </div>
    </header>
  );
}

export default Home;
