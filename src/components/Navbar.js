import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [productsLenght, setProductsLength] = useState(
    JSON.parse(localStorage.getItem("products"))?.length || []
  );
  return (
    <nav
      x-data="{ isOpen: false }"
      class="relative bg-white shadow dark:bg-gray-800"
    >
      <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <Link
            to="/"
            class="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
          >
            RandoStore
          </Link>
        </div>

        <div class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
          <div class="flex flex-col md:flex-row md:mx-6">
            <Link
              to="products"
              class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Products
            </Link>
            <Link
              to="add-new-product"
              class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              List your product
            </Link>
          </div>

          <div class="flex justify-center md:block">
            <Link to="cart" class="relative text-gray-200 transition-colors duration-300 transform d hover:text-gray-400 ">
              <svg
                class="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span class="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
    // <div>
    //   <nav className="bg-indigo-200  ">
    //     <div className="max-w-7xl mx-auto px-8">
    //       <div className="flex items-center justify-between h-16">
    //         <div className=" flex items-center">
    //           <div className="ml-10 flex items-baseline space-x-4">
    //             <Link
    //               to="/"
    //               className="text-gray-800  hover:text-gray-400 px-3 py-2 rounded-md text-lg font-medium"
    //             >
    //               Home
    //             </Link>
    //             <Link
    //               to="products"
    //               className="text-gray-800  hover:text-gray-400 px-3 py-2 rounded-md text-lg font-medium"
    //             >
    //               Products
    //             </Link>
    //             <Link
    //               to="add-new-product"
    //               className="text-gray-800  hover:text-gray-400 px-3 py-2 rounded-md text-lg font-medium"
    //             >
    //               Add your product
    //             </Link>

    //             <Link
    //               to="cart"
    //               className="text-gray-800  hover:text-gray-400 px-3 py-2 rounded-md text-lg font-medium"
    //             >
    //               <div className="flex ">
    //                 Cart
    //                 <span className=" px-2 text-sm">{productsLenght}</span>
    //               </div>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
}

export default Navbar;
