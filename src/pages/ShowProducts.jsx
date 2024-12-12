import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Components/Product";

function ShowProducts() {
  const Base_Url = "https://67595b8e60576a194d147676.mockapi.io";

  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: "" });

  const getProducts = async () => {
    try {
      const response = await axios.get(`${Base_Url}/products`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  // DELETE product function
  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`${Base_Url}/products/${productId}`);
      getProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  return (
    <div>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          deleteProduct={deleteProduct}
          newProduct={newProduct}
          setNewProduct={setNewProduct}
        />
      ))}
    </div>
  );
}

export default ShowProducts;
