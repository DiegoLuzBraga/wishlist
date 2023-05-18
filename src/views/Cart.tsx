import { CustomBreadcrumbs } from "../components/Breadcrumbs";
import { CustomLoading } from "../components/CustomLoading";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { useProductsVM } from "../viewModels/useProductsVM";
import * as S from "./HomeStyles";

export const Cart = () => {
  const { products, loading } = useProductsVM();
  return (
    <>
      <Header />
      <S.HomeContainer>
        <CustomBreadcrumbs
          breadcrumbs={[
            { title: "Home", to: "/" },
            { title: "Lista de desejos" },
          ]}
        />
        {loading ? (
          <CustomLoading />
        ) : (
          <S.ProductCardContainer>
            {products?.products.map((product) => {
              return <ProductCard product={product} key={product.sku} />;
            })}
          </S.ProductCardContainer>
        )}
      </S.HomeContainer>
    </>
  );
};
