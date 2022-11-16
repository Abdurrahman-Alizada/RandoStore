import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import AllProducts from "./pages/AllProducts";
import Navbar from "./components/Navbar";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart"
import AddNewProduct from "./pages/AddNewProduct";
const App = () => {
  return (
<div className="bg-indigo-50 h-screen overflow-auto">
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="add-new-product" element={<AddNewProduct />} />
        <Route path="products" element={<AllProducts />} />
        <Route path="products/:productId" element={<SingleProduct />} />
        <Route path="cart" element={<Cart />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
