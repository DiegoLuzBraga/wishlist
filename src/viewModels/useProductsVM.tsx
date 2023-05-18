import { useEffect, useState } from "react";
import { getProducts } from "../models/productsModel";
import { Products } from "../types/products";
import { useNotificationVM } from "./useNotificationVM";

export const useProductsVM = () => {
  const { setNotification } = useNotificationVM();
  const [products, setProducts] = useState<Products | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const response = await getProducts();
      const allProducts = await response.json();
      setProducts(allProducts);
    } catch (error) {
      setNotification({
        open: true,
        message: "Houve um erro em nosso servidor, tente novamente mais tarde",
        severity: "error",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    products,
    loading,
  };
};
