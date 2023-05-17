export interface Products {
  products: Array<ProductInfo>;
}

export interface ProductInfo {
  id: number;
  sku: number;
  title: string;
  description: string;
  availableSizes: {
    [key: string]: number;
  };
  style: string;
  price: number;
  installments: number;
  currencyId: string;
  currencyFormat: string;
  isFreeShipping: true;
  image: string;
}
