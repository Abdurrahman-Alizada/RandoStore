import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const getAllProducts = () => {
    axios.get("http://localhost:3000/items").then((response) => {
      setProducts(response.data);
    });
  };

  const addProductToCart = (id)=>{
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const newProducts = [...storedProducts, products[id - 1]];
    localStorage.setItem('products', JSON.stringify(newProducts));  
  }
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 gap-y-10 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
        {products.map((product, index) => (
          <div
            key={index}
            className="max-w-xs overflow-hidden bg-white rounded-lg shadow-xl border border-gray-300 "
          >
            {/* we normaly do not do like this. we receive img url and make it src. here we receive images link that is in another directory so I did like this for convenience */}
            <img
              className="object-cover w-full h-48 "
              // src={product?.imgURL}   // normal way
              src={`/products/${product.id}.jpg`}
              alt={product?.name || "product image"}
            />

            <div className="px-4 py-2 bg-indigo-400">
              <h1 className="text-2xl font-bold text-gray-800 uppercase dark:text-white">
                {product?.name}
              </h1>
            </div>
            <div className="flex items-center justify-between px-4 py-2 bg-indigo-400">

              <h1 className="text-lg font-bold text-white">
                ${product?.price}
              </h1>
              <div className="flex justify-between items-center">
                <button onClick={()=>addProductToCart(product.id)} className="px-2 py-1 text-xs font-semibold mx-2 text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                  Add to cart
                </button>
                <Link
                  to={`${product.id}`}
                  className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
