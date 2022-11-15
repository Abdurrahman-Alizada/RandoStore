import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-500  ">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Home
                </Link>
                <Link
                  to="products"
                  className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Products
                </Link>
                <Link
                  to="users"
                  className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  users
                </Link>
                <Link
                  to="cart"
                  className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  cart
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
