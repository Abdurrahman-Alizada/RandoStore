import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const isValidUrl = (url) => {
  try {
    new URL(url);
  } catch (e) {
    return false;
  }
  return true;
};
const productSchema = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  price: Yup.string().required("Price is Required"),
  imageURL: Yup.string()
    .test("is-url-valid", "URL is not valid", (value) => {
      return isValidUrl(value);
    })
    .required("Image URL is Required"),
});

function AddNewProduct() {
  const navigate = useNavigate();

  const addNewProduct = (product) => {
    axios
      .post("http://localhost:3000/items", {
        name: product.name,
        price: product.price,
        img: product.imageURL,
      })
      .then((response) => {
        navigate("/products")
      });
  };
  return (
    <section className="max-w-2xl p-6 mx-auto my-12 bg-white rounded-md shadow-md ">
      <h2 className="text-xl font-bold text-gray-700 capitalize ">
        Put Items up for Sale
      </h2>

      <h2 className="text-md mt-10 font-semibold text-gray-700 capitalize ">
        Please enter detail
      </h2>
      <Formik
        initialValues={{ name: "", price: "", imageURL: "" }}
        validationSchema={productSchema}
        onSubmit={(values) => {
          addNewProduct(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className=" mt-4 ">
              <label className="text-gray-700 " for="name">
                Name
              </label>
              <input
                placeholder="Name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
              {errors.name && touched.name ? (
                <div className="text-red-500 my-2">{errors.name}</div>
              ) : null}
            </div>
            <div className=" mt-4 ">
              <label className="text-gray-700 " for="price">
                Price
              </label>
              <input
                placeholder="Price"
                name="price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
              {errors.price && touched.price ? (
                <div className="text-red-500 my-2">{errors.price}</div>
              ) : null}
            </div>
            <div className=" mt-4 ">
              <label className="text-gray-700 " for="imageURL">
                Image URL
              </label>
              <input
                placeholder="Image URL"
                name="imageURL"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.imageURL}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
              {errors.imageURL && touched.imageURL ? (
                <div className="text-red-500 my-2">{errors.imageURL}</div>
              ) : null}
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-2.5 leading-5 w-full text-white transition-colors duration-300 transform bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-gray-600"
              >
                Add
              </button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
}

export default AddNewProduct;
