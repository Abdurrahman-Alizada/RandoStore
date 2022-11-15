import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import AllProducts from "./pages/AllProducts";
import Navbar from "./components/Navbar";
import SingleProduct from "./pages/SingleProduct";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<AllProducts />} />
        <Route path="products/:productId" element={<SingleProduct />} />
        <Route path="cart" element={<Home />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
};

export default App;
