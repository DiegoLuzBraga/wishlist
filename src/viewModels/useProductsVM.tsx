import { useEffect, useState, useMemo } from "react";
import { getProducts } from "../models/productsModel";
import { Products } from "../types/products";
import { useNotificationVM } from "./useNotificationVM";
import { formatProduct } from "../utils/formatters";
import { useWishlistVM } from "./useWishlistVM";

export const useProductsVM = () => {
  const { wishlist } = useWishlistVM();
  const { setNotification } = useNotificationVM();
  const [allProducts, setAllProducts] = useState<Products>({ products: [] });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const response = await getProducts();
      const productsResponse: Products = await response.json();
      const formated = formatProduct(productsResponse, wishlist);
      setAllProducts({ products: [...formated] });
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

  const products: Products = useMemo(() => {
    return { products: [...formatProduct(allProducts, wishlist)] };
  }, [wishlist, allProducts]);

  return {
    products,
    loading,
  };
};
