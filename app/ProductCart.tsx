import React from "react";
import Link from "next/link";

interface Prop {
  prod: {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: { rate: number; count: number };
    title: string;
  };
}

const ProductCart = ({ prod }: Prop) => {
  const {
    id,
    image,
    price,
    description,
    category,
    rating: { rate, count },
    title,
  } = prod;
  return (
    <div>
      <div className=" md:border md:border-[#facb7a] h-[300px] mb-4 relative overflow-hidden group transition rounded-xl">
        <div className="h-full flex justify-center items-center flex-col">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={image}
              className="max-h-[160px] group-hover:scale-110 transition duration-300 hover:scale-75"
              alt="Photo"
            />
          </div>
          <div className="mt-2">
            <div className="w-[200px] font-semibold cursor-pointer hover:underline overflow-hidden text-overflow-ellipsis whitespace-nowrap">
              <Link href={`/products/${id}`}>{title}</Link>
            </div>

            <div className="mt-1">
              Price: <span className="font-bold">${price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
