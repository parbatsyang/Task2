// pages/products/[id].tsx

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "./Details.css";

interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

const ProductDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
        </div>
        <div>
          <h1 className="product-title">{product.title}</h1>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-rating">
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <p className="product-price">Price: ${product.price}</p>
          <p className="product-description">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
