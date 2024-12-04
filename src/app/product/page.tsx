"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import ReactPaginate from "react-paginate";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const Product: React.FC = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching products data:", err);
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Pagination works
  const ProductsPerPage = 8;
  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };
  const offset = currentPage * ProductsPerPage;

  // search  works
  const filteredProducts = products?.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const currentProducts = filteredProducts?.slice(
    offset,
    offset + ProductsPerPage
  );

  return (
    <section className="bg-blue-50 dark:bg-slate-800" id="contact">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 space-y-4 md:space-y-0">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-red-400 border-b-2 inline">
            Our Products
          </h1>
          <div className="w-full md:w-auto">
            <input
              type="text"
              placeholder="Search products by name..."
              className="w-full md:w-[400px] p-2 border border-gray-300 rounded-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {loading && <p className="text-center text-gray-600">Loading . . .</p>}

        {error && (
          <p className="text-center text-red-500 font-semibold">{error}</p>
        )}

        {!loading && !error && products && (
          <>
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentProducts?.map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
                >
                  <Link href={`/product/${product.id}`}>
                    <div className="relative w-full h-48">
                      <Image
                        src={product.image}
                        alt={product.title}
                        layout="fill"
                        objectFit="contain"
                        className="p-4"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="font-bold text-lg text-gray-700 truncate">
                        {product.title}
                      </h2>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[#1e90ff] font-bold text-xl">
                          Rs.{product.price}
                        </span>
                        <button className="flex items-center space-x-2">
                          <FaShoppingCart className="text-[#ff6347]" />
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* React-Pagination  works */}
            {filteredProducts && filteredProducts.length > ProductsPerPage && (
              <div className="mt-8">
                <ReactPaginate
                  previousLabel={"← Previous"}
                  nextLabel={"Next →"}
                  pageCount={Math.ceil(
                    filteredProducts.length / ProductsPerPage
                  )}
                  onPageChange={handlePageClick}
                  containerClassName={"flex justify-center space-x-2"}
                  pageLinkClassName={
                    "px-3 py-1 border rounded-md text-red-500 hover:bg-blue-100"
                  }
                  previousLinkClassName={
                    "px-3 py-1 border rounded-md text-red-500 hover:bg-blue-100"
                  }
                  nextLinkClassName={
                    "px-3 py-1 border rounded-md text-red-500 hover:bg-blue-100"
                  }
                  activeLinkClassName={"bg-blue-500 text-white"}
                />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Product;
