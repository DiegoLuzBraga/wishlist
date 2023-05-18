import { createContext, useContext, useState, useEffect } from "react";
import { ProductInfo } from "../types/products";

interface Wishlist {
  wishlist: Array<ProductInfo>;
  addToWishlist: (product: ProductInfo) => void;
  removeFromWhislist: (productId: string) => void;
}

const WishlistContext = createContext<Wishlist>({
  wishlist: [],
  addToWishlist: () => {},
  removeFromWhislist: () => {},
});

export const WishlistProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [wishlist, setWishlist] = useState<Array<ProductInfo>>([]);

  useEffect(() => {
    const items = localStorage.getItem("wishlist");
    if (items) {
      setWishlist(JSON.parse(items));
    }
  }, []);

  const addToWishlist = (product: ProductInfo) => {
    const list = [...wishlist];
    list.push(product);
    setWishlist(list);
    localStorage.setItem("wishlist", JSON.stringify(list));
  };

  const removeFromWhislist = (productId: string) => {
    const list = wishlist.filter((item) => item.sku.toString() !== productId);
    setWishlist(list);
    localStorage.setItem("wishlist", JSON.stringify(list));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWhislist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlistVM = () => {
  return useContext(WishlistContext);
};
