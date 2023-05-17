import { useEffect, useState } from "react";
import { getProducts } from "../models/productsModel";
import { Products } from "../types/products";

export const useProductsVM = () => {
  const [products, setProducts] = useState<Products | null>(null);
  useEffect(() => {
    loadProducts;
  }, []);

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      const allProducts: Products = await response.json();
      setProducts(allProducts);
    } catch (error) {
      setProducts(null);
    }
  };
};
