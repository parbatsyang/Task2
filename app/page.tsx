"use client";
import React, { useEffect, useRef } from "react";
import FeatureImage from "./FeaturedImage";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./store/Features/product/ProductSlice";
import { AppDispatch, RootState } from "./store/Store";
import Product from "../components/Product";
import Link from "next/link";
// import ProductDetails from "@/products/ProductDetails";

export default function Home() {
  const productRef = useRef(false);
  const { entities, searchText } = useSelector(
    (state: RootState) => state.product
  );

  console.log(searchText);
  const filterProduct = (entities: any, searchText: string) => {
    return entities.filter((item: any) => {
      return item.title.toLowerCase().includes(searchText.toLowerCase());
    });
  };

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (productRef.current === false) {
      dispatch(fetchProducts());
    }
    return () => {
      productRef.current = true;
    };
  }, []);

  return (
    <div>
      <FeatureImage />
      <Product
        product={searchText ? filterProduct(entities, searchText) : entities}
      />
    </div>
  );
}
