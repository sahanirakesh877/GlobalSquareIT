"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
}

const ProductDetails: React.FC<{ params: { id: string } }> = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = params;

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          setLoading(true);
          const response = await axios.get(
            `https://fakestoreapi.com/products/${id}`
          );
          setProduct(response.data);
        } catch (err) {
          setError("Failed to fetch product details.");
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
     
        <div className="relative w-full h-96">
          <Image
            src={product?.image || ""}
            alt={product?.title || "Product Image"}
            fill
            loading="lazy"
            className="object-contain rounded-md shadow-lg"
          />
        </div>

       
        <div>
          <h1 className="text-4xl font-bold mb-4">{product?.title}</h1>
          <p className="text-xl font-semibold text-gray-800 mb-2">
            Rs. {product?.price}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {product?.description}
          </p>

          
          <div className="flex space-x-4">
            <button className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              <FaShoppingCart className="mr-2" /> Add to Cart
            </button>
            <button className="flex items-center bg-[#ff6347] text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition duration-300">
              <FaHeart className="mr-2" /> Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
