import React, { useEffect, useState } from 'react';
import ProductCard from '../catalog/productcards';
import localproducts from '../../fixtures/productdetails.json';
import FilterUI from './filterui';
import axios from 'axios';
import ProductModal from '../productModal';

const Catalog: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

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
            size: 15, 
          }
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
      // starRating: 4, 
      // isNew: new Date(product.date_created) > new Date(new Date().setDate(new Date().getDate() - 30)), 
      onClick: () => openModal(product),
    }));
  };

  // Map through local product details
  const localProductDetails = localproducts.map((product: any) => ({
    name: product.productName.trim(),
    starRating: product.starRating || 0,
    isNew: product.isNew === "true",
    category: product.category,
    fullDetails: product.fullDetails,
  }));

  // console.log("localproducts:", localProductDetails)

    // Merge the two arrays based on the product name
    const mergeProducts = (apiProducts: any[], localDetails: any[]) => {
      return apiProducts.map(apiProduct => {
        const localDetail = localDetails.find((p: any) => p.name === apiProduct.name) || {};
        return {
          ...apiProduct,
          starRating: localDetail.starRating !== undefined ? localDetail.starRating : 4,
          isNew: localDetail.isNew !== undefined ? localDetail.isNew : "true",
          category: localDetail.category !== undefined ? localDetail.category : "SOFAS",
          fullDetails: localDetail.fullDetails !== undefined ? localDetail.fullDetails : "The Serengenti chair is characterized by its artistic and organic shape. The chair has two main components: a large, sweeping backrest and a contoured seat, both crafted from polished wood with rich, warm tones varying from golden yellow to deep amber. ",
        };
      });
    };
  
    const apiProducts = mapProducts(products);
    const mergedProducts = mergeProducts(apiProducts, localProductDetails);
    // setFilteredProducts(mergedProducts);

    console.log ("mergedprodt", mergedProducts);


    const handleCategoryChange = (category: string) => {
      const filtered = mergedProducts.filter(product => product.category === category);
      setFilteredProducts(filtered);
    };


  return (
    <div className="container mt-[28px] mb-[74.5px] px-4 lg:px-0 lg:mb-[215px] lg:mx-auto">
      <div className="flex justify-between mb-[31.5px] lg:mb-[107px]">
        <h2 className="text-base lg:text-[32px] tracking-wider font-normal">Catalog</h2>
        <div className="hidden lg:flex">
          <FilterUI onCategoryChange={handleCategoryChange}  />
        </div>
      </div>


      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-2 px-4 lg:px-[21.5px] product-grid cursor-pointer">
        {mergedProducts.map((product: any) => (
          <div key={product.id} onClick={() => openModal(product)}>
            <ProductCard
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
      )}

      <ProductModal isOpen={isModalOpen} onClose={closeModal} product={selectedProduct || {}} />
    </div>
  );
};

export default Catalog;
