import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [flagOfChange, setFlagOfChange] = useState(false);

  const getAllProducts = () => {
    setFlagOfChange(false);
    setProducts(JSON.parse(localStorage.getItem("products")) || []);
  };

  const removeItemFromCart = (id) => {
    products.splice(id, 1);
    localStorage.setItem("products", JSON.stringify(products));
    setFlagOfChange(true);
  };

  useEffect(() => {
    getAllProducts();
  }, [flagOfChange]);
  return (
    <div className="flex self-center flex-col px-20 py-10 bg-white items-center">
      {products.length > 0 ? (
        <div className="w-1/2">
          <div className="flex-1 w-full overflow-y-auto py-6 px-4 sm:px-6 ">
            <div className="flex w-full justify-between">
              <h2
                className="text-lg font-medium text-gray-900"
                id="slide-over-title"
              >
                Shopping cart
              </h2>
            </div>

            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {products.map((product, index) => (
                    <li className="flex py-6" key={index}>
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product?.img}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{product?.name}</h3>
                            <p className="ml-4">${product?.price}</p>
                          </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="flex">
                            <button
                              onClick={() => removeItemFromCart(index)}
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t w-full border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>
                $
                {products.reduce(
                  (total, item) => total + Number(item.price),
                  0
                )}
              </p>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </a>
            </div>
            <div className="mt-6  text-center text-sm text-gray-500">
              <p>or</p>
              <button
                type="button"
                className="font-medium text-blue-600 hover:text-blue-500"
                onClick={() => navigate("/products")}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-lg shadow-lg overflow-hidden mb-4">
          <div className="px-6 py-8 bg-indigo-400 sm:p-10 sm:pb-6">
            <div className="mt-4 flex justify-center text-6xl leading-none font-extrabold dark:text-white">
              Cart is Empty
            </div>
          </div>
          <div className="px-6 pt-6 pb-8 bg-indigo-400 sm:p-10 sm:pt-6">
            <div className="mt-6 rounded-md shadow">
              <button
                onClick={() => navigate("/products")}
                className="flex items-center w-full justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Continue shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
