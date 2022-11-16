import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [productsLenght, setProductsLength] = useState(
    JSON.parse(localStorage.getItem("products"))?.length || []
  );
  return (
    <div>
      <nav className="bg-indigo-200  ">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-800  hover:text-gray-400 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Home
                </Link>
                <Link
                  to="products"
                  className="text-gray-800  hover:text-gray-400 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Products
                </Link>

                <Link
                  to="cart"
                  className="text-gray-800  hover:text-gray-400 px-3 py-2 rounded-md text-lg font-medium"
                >
                  <div className="flex ">
                    Cart
                    <span className=" px-2 text-sm">{productsLenght}</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
