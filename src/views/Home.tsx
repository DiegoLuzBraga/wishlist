import { CustomLoading } from "../components/CustomLoading";
import { CustomBreadcrumbs } from "../components/Breadcrumbs";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { useProductsVM } from "../viewModels/useProductsVM";
import * as S from "./HomeStyles";

export const Home = () => {
  const { products, loading } = useProductsVM();
  
  return (
    <>
      <Header />
      {loading ? (
        <CustomLoading />
      ) : (
        <S.HomeContainer>
          <CustomBreadcrumbs breadcrumbs={[{ title: "Home" }]} />
          <S.ProductCardContainer>
            {products?.products.map((product) => {
              return <ProductCard product={product} key={product.sku} />;
            })}
          </S.ProductCardContainer>
        </S.HomeContainer>
      )}
    </>
  );
};
