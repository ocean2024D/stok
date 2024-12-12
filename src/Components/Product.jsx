import React from "react";
import { Link } from "react-router-dom";

function Product({ product, deleteProduct }) {
  const { id, title, price, currency, year, stock, imgSrc } = product;

  return (
    <>
      <table className="  text-gray-800 text-2xl w-full border-8 border-gray-400 bg-[#fafafab8]">
        <thead>
          <tr>
            <th className="border-b-2 px-4 py-2">ID</th>
            <th className="border-b-2 px-4 py-2">Title</th>
            <th className="border-b-2 px-4 py-2">Price</th>
            <th className="border-b-2 px-4 py-2">Currency</th>
            <th className="border-b-2 px-4 py-2">Year</th>
            <th className="border-b-2 px-4 py-2">Stock</th>
            <th className="border-b-2 px-4 py-2">Image</th>
            <th className="border-b-2 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{price}</td>
            <td>{currency}</td>
            <td>{year}</td>
            <td>{stock}</td>
            <td>
              {imgSrc && <img src={imgSrc} alt={title} className="w-16 h-16" />}
            </td>
            <td>
              <div className="flex col border-2 border-white justify-between bg-neutral-700">
                <Link to="/AddProduct">
                  <button className="bg-[#3f0338] text-white px-4 py-2 rounded-lg ml-2">
                    Add
                  </button>
                </Link>
                <Link to={`/EditProduct/${id}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Edit
                  </button>
                </Link>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg ml-2"
                  onClick={() => deleteProduct(id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Product;
