import { ProductInfo, Products } from "../types/products";

export const formatMoney = (price: number, currencyFormat: string): string => {
  if (price.toString().split(".")[1]?.length === 1) {
    return `${currencyFormat} ${price.toString().replace(".", ",")}0`;
  }
  return `${currencyFormat} ${price.toString()},00`;
};

export const formatProduct = (
  productList: Products,
  wishlist: ProductInfo[]
): ProductInfo[] => {
  return productList.products.map((item) => ({
    ...item,
    isWished: wishlist.findIndex((wished) => wished.sku === item.sku) !== -1,
  }));
};
