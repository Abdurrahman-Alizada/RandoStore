import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function SingleProduct() {
  const navigate = useNavigate();

  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const getProductDetails = () => {
    axios.get(`http://localhost:3000/items/${productId}`).then((response) => {
      setProduct(response.data);
    });
  };
  useEffect(() => {
    getProductDetails();
  }, []);

  const addProductToCart = () => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const newProducts = [...storedProducts, product];
    console.log(storedProducts, newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  return (
    <div>
      <div className="">
        <div className="p-6">
          <div className="mx-aut flex items-center justify-center ">
            <div className=" md:w-2/3 self-center lg:pr-8">
              <div className=" mx-auto overflow-hidden rounded-lg">
                <img
                  src="/products/1.jpg"
                  alt="product"
                  className="h-96 w-full object-cover"
                />

                <h1 className="text-2xl mt-5 font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {product?.name || ""}
                </h1>

                <div className="mt-4 lg:row-span-3 lg:mt-0">
                  <p className="text-3xl tracking-tight text-gray-900">
                    Price: ${product?.price || ""}
                  </p>

                  <button
                    onClick={addProductToCart}
                    type="submit"
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add to bag
                  </button>
                  <button 
                  onClick={()=>navigate("/products")}
                  className="flex items-center mt-2 justify-center w-full px-2 py-1 text-white transition-colors duration-300 transform bg-gray-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-indigo-500 focus:bg-indigo-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />{" "}
                    </svg>
                    <span className="mx-1">Go back</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
