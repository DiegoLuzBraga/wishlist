import { render } from "@testing-library/react";
import { ProductCard } from ".";
import { ProductInfo } from "../../types/products";

const product: ProductInfo = {
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
};
describe("ProductCard tests", () => {
  it("should render the default style", () => {
    const { container } = render(<ProductCard product={product} />);

    expect(container).toMatchSnapshot();
  });

  it("should render the wishlist style", () => {
    const { getByTestId, getByText } = render(
      <ProductCard product={product} isCartView />
    );

    expect(getByTestId("cancel-button")).toBeInTheDocument();
    expect(getByText("R$ 229,90")).toBeInTheDocument();
  });
});
