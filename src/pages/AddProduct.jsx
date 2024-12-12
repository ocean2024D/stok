import React, { useState } from "react";
import axios from "axios";

const Base_Url = "http://localhost:3000";
function AddProduct({ getProducts }) {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    currency: "",
    year: "",
    stock: "",
    imgSrc: "",
  });

  // CREATE
  const createProduct = async () => {
    try {
      await axios.post(`${Base_Url}/products`, newProduct);
      getProducts();
      setNewProduct({
        title: "",
        price: "",
        currency: "",
        year: "",
        stock: "",
        imgSrc: "",
      }); // Formu sıfırla
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div>
      <input
        className="font-custom inputDesign rounded-xl border-slate-800 w-full h-12 border-4"
        type="text"
        placeholder="Title"
        value={newProduct.title}
    onChange={(e) =>
          setNewProduct({ ...newProduct, title: e.target.value })
        }
      />
      <input
        className="font-custom inputDesign rounded-xl border-slate-800 w-full h-12 border-4"
        type="number"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct({ ...newProduct, price: e.target.value })
        }
      />
      <input
        className="font-custom inputDesign rounded-xl border-slate-800 w-full h-12 border-4"
        type="text"
        placeholder="Currency"
        value={newProduct.currency}
        onChange={(e) =>
          setNewProduct({ ...newProduct, currency: e.target.value })
        }
      />
      <input
        className="font-custom inputDesign rounded-xl border-slate-800 w-full h-12 border-4"
        type="text"
        placeholder="Year"
        value={newProduct.year}
        onChange={(e) =>
          setNewProduct({ ...newProduct, year: e.target.value })
        }
      />
      <input
        className="font-custom inputDesign rounded-xl border-slate-800 w-full h-12 border-4"
        type="number"
        placeholder="Stock"
        value={newProduct.stock}
        onChange={(e) =>
          setNewProduct({ ...newProduct, stock: e.target.value })
        }
      />
      <input
        className="font-custom inputDesign rounded-xl border-slate-800 w-full h-12 border-4"
        type="text"
        placeholder="Image URL"
        value={newProduct.imgSrc}
        onChange={(e) =>
          setNewProduct({ ...newProduct, imgSrc: e.target.value })
        }
      />
      <button
        className="button border-4 w-36 h-12 m-4 border-blue-950 rounded-xl bg-cyan-600 text-2xl"
        onClick={createProduct}
      >
    SAVE
      </button>
    </div>
  );
}

export default AddProduct;
