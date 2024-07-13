import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '@/components/pagination';
import ProductModal from '@/components/productModal';
import AllProductCard from '@/components/AllProductcard';
import localproducts from '@/fixtures/productdetails.json';
import Link from 'next/link';
import Image from "next/image";

const AllProducts: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const PRODUCTS_PER_PAGE = 10;

  const openModal = (product: any) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/fetchProducts', {
          params: {
            page: 1,
            size: 30,
          },
        });
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const mapProducts = (products: any[]) => {
    return products.map(product => ({
      id: product.id,
      name: product.name.trim(),
      imageSrc: `https://api.timbu.cloud/images/${product.photos[0]?.url}`,
      productName: product.name,
      productDetail: product.description || 'No description available',
      price: product.current_price[0].NGN[0].toLocaleString(),
      onClick: () => openModal(product),
    }));
  };

  const localProductDetails = localproducts.map((product: any) => ({
    name: product.productName.trim(),
    starRating: product.starRating || 0,
    isNew: product.isNew === "true",
    category: product.category,
    fullDetails: product.fullDetails,
  }));

  const mergeProducts = (apiProducts: any[], localDetails: any[]) => {
    return apiProducts.map(apiProduct => {
      const localDetail = localDetails.find((p: any) => p.name === apiProduct.name) || {};
      return {
        ...apiProduct,
        starRating: localDetail.starRating !== undefined ? localDetail.starRating : 4,
        isNew: localDetail.isNew !== undefined ? localDetail.isNew : "true",
        category: localDetail.category !== undefined ? localDetail.category : "SOFAS",
        fullDetails: localDetail.fullDetails !== undefined ? localDetail.fullDetails : "The Serengenti chair is characterized by its artistic and organic shape. The chair has two main components: a large, sweeping backrest and a contoured seat, both crafted from polished wood with rich, warm tones varying from golden yellow to deep amber.",
      };
    });
  };

  const apiProducts = mapProducts(products);
  const mergedProducts = mergeProducts(apiProducts, localProductDetails);

  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = mergedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="container mt-[28px] mb-[74.5px] px-4 lg:px-0 lg:mt-[115px] lg:mx-auto">
      <div className="flex items-center mt-[33px] lg:mt-[136px]">
      <div>
        <Link href="/" className="flex items-center">
          <Image
            src="/icons/ChevronLeftOutline.svg"
            width={40}
            height={40}
            alt="Instagram"
          />
        </Link>
      </div>
      <h1 className="text-2xl font-semibold ml-4 px-w py-2 ">Products</h1>
    </div>

    <hr className=" mt-[37px] lg:mt-[42px] mb-[36px] lg:mb-[46px]" />

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-6 px-4 lg:px-[21.5px] product-grid cursor-pointer">
            {currentProducts.map((product: any) => (
              <div key={product.id} onClick={() => openModal(product)}>
                <AllProductCard
                  imageSrc={product.imageSrc}
                  productName={product.productName}
                  starRating={product.starRating}
                  price={product.price}
                  productDetail={product.productDetail}
                  isNew={product.isNew}
                  onClick={() => openModal(product)}
                />
              </div>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(mergedProducts.length / PRODUCTS_PER_PAGE)}
            onPageChange={setCurrentPage}
          />
        </div>
      )}

      <ProductModal isOpen={isModalOpen} onClose={closeModal} product={selectedProduct || {}} />
    </div>
  );
};

export default AllProducts;
