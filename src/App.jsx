import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ShowProducts from "./pages/ShowProducts";

function App() {
  return (
    <div>
   
      <h2 className="text-center text-blue-500 text-[39px]">

        Product Management
      </h2>
      <Router>
        <div className="bg-slate-600">
          <nav>
            <ul className="flex col justify-center align-middle">
              <li>
                <Link to="/ShowProducts">
                  <button className="bg-zinc-400 text-2xl rounded-xl text-gray-800 p-7 m-10">
                    Show Product
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/AddProduct">
                  <button className="bg-zinc-400 text-2xl rounded-xl text-gray-800 p-7 m-10">
                    Add New Product
                  </button>
                </Link>
              </li>
              <li></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/ShowProducts" element={<ShowProducts />} />
            <Route path="/AddProduct" element={<AddProduct />} />
            <Route path="/EditProduct/:id" element={<EditProduct />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
