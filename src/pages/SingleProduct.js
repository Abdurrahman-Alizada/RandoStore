import React from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
    const { productId } = useParams();

  return <div>SingleProduct : {productId}</div>;
}

export default SingleProduct;
