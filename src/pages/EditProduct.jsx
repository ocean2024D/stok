import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const { id } = useParams(); // URL'den id'yi alıyoruz
  const navigate = useNavigate(); // Sayfayı yönlendirebilmek için
  const [product, setProduct] = useState({
    // id: "",
    // title: "",
    // price: "",
    // currency: "",
    // year: "",
    // stock: "",
    // imgSrc: "",
  });

  useEffect(() => {
    // Ürün verisini almak için API isteği
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://67595b8e60576a194d147676.mockapi.io/products/${id}`
        );
        setProduct(response.data); // Veriyi state'e set ediyoruz
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]); // id değiştikçe yeniden veri alınacak

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value, // input alanındaki değeri alıp, state güncellemesi
    });
  };

  const handleSave = async () => {
    try {
      // Güncellenmiş ürün verisini API'ye kaydetme
      await axios.put(`https://67595b8e60576a194d147676.mockapi.io/products/${id}`, product);
      navigate("/ShowProducts"); // Kaydedildikten sonra ürün listesine yönlendiriyoruz
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  ///STYLES

  const labelStyle="m-2 text-2xl text-center p-2"
  const inputStyle="text-2xl p-2 m-2 bg-[#d1d2ca]  hover:border-r-rose-400"
  const divInputStyle = "flex gap-[10px] justify-center col bg-[#c13c66]"
  return (
<div className=" text-center  bg-gradient-to-r from-[#00f2ff] to-[yellow]">
      <h2 className="Title bg-gray-800 text-slate-500 text-4xl text-center">Edit Product</h2>
      <div className={divInputStyle}>
        <label className={labelStyle}>Title:</label>
        <input

        className={inputStyle}
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange} // input değiştiğinde handleChange çalışacak
        />
      </div>
<div >
        <label className={labelStyle}>Price:</label>
        <input
         className={inputStyle}
                 type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
       <div className={divInputStyle}>
        <label className={labelStyle}>Currency:</label>
          <input
           className={inputStyle}
            type="text"
            name="currency"
            value={product.currency}
            onChange={handleChange}
          />
        </div>
        <div>
        <label className={labelStyle}>Year :</label>
          <input
           className={inputStyle}
            type="text"
            name="year"
            value={product.year}
            onChange={handleChange}
          />
        </div>
        <div className={divInputStyle}>
        <label className={labelStyle}>Stock :</label>
          <input
           className={inputStyle}
            type="text"
            name="stock"
            value={product.stock}
            onChange={handleChange}
          />
        </div>
       <div >
        <label className={labelStyle}>Image</label>
          <input
           className={inputStyle}
            type="text"
            name="imgSrc"
            value={product.imgSrc}
            onChange={handleChange}
          />
        </div>
      </div>

      <button className="bg-slate-500 m-3 w-52 text-4xl text-center p-1 text-[#948c8c]" onClick={handleSave}>Save</button>
    </div>
  );
}

export default EditProduct;
