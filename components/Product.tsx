import ProductCart from "@/app/ProductCart";
import React from "react";
import SearchProduct from "./SearchProduct";

interface Props {
  product: [
    {
      category: string;
      description: string;
      id: number;
      image: string;
      price: number;
      rating: { rate: number; count: number };
      title: string;
    }
  ];
}
const Product = ({ product }: Props) => {
  return (
    <div>
      <div className="py-10">
        <SearchProduct />
        <div className="container mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
            {product.map((prod, index) => {
              return (
                <div key={prod.id}>
                  <ProductCart prod={prod} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
