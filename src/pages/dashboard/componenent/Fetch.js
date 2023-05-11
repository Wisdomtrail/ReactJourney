import React, { useState, useEffect } from "react";

function Dan() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://dummyjson.com/products/");
      const data = await response.json();
      setProducts(data);
    }
    getData();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Brand: {product.brand}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Dan;
