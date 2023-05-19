import { Products } from "../types/products";
import { formatMoney, formatProduct } from "./formatters";

const products: Products = {
  products: [
    {
      id: 0,
      sku: 8552515751438644,
      title: "Camisa Nike Corinthians I",
      description: "14/15 s/nº",
      availableSizes: {
        S: 100,
        G: 5,
        GG: 120,
        GGG: 12,
      },
      style: "Branco com listras pretas",
      price: 229.9,
      installments: 9,
      currencyId: "BRL",
      currencyFormat: "R$",
      isFreeShipping: true,
      image: "https://via.placeholder.com/300x300",
      isWished: false,
    },
  ],
};

test("formatMoney should render currency correctly", () => {
  expect(formatMoney(229.9, "R$")).toBe("R$ 229,90");
});

test("formatMoney should render currency correctly", () => {
  expect(formatMoney(229.0, "R$")).toBe("R$ 229,00");
});

test("formatProduct should return true", () => {
  const formattedValues = formatProduct(products, [
    {
      id: 0,
      sku: 8552515751438644,
      title: "Camisa Nike Corinthians I",
      description: "14/15 s/nº",
      availableSizes: {
        S: 100,
        G: 5,
        GG: 120,
        GGG: 12,
      },
      style: "Branco com listras pretas",
      price: 229.9,
      installments: 9,
      currencyId: "BRL",
      currencyFormat: "R$",
      isFreeShipping: true,
      image: "https://via.placeholder.com/300x300",
      isWished: true,
    },
  ]);

  const areAllWished = formattedValues.every((item) => item.isWished);

  expect(areAllWished).toBe(true);
});

test("formatProduct should return false", () => {
  const formattedValues = formatProduct(products, []);

  const areAllWished = formattedValues.every((item) => item.isWished);

  expect(areAllWished).toBe(false);
});
