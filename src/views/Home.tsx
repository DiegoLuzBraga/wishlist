import { CustomLoading } from "../components/CustomLoading";
import { CustomBreadcrumbs } from "../components/Breadcrumbs";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { useProductsVM } from "../viewModels/useProductsVM";
import * as S from "./HomeStyles";
import { useSearch } from "../viewModels/useSearch";

export const Home = () => {
  const { products, loading } = useProductsVM();
  const searchParams = useSearch();

  let body;

  if (products?.products.length) {
    body = (
      <S.ProductCardContainer>
        {products?.products
          .filter((item) =>
            item.title
              .toLocaleLowerCase()
              .includes(searchParams.searchQuery.toLocaleLowerCase())
          )
          .map((product) => {
            return <ProductCard product={product} key={product.sku} />;
          })}
      </S.ProductCardContainer>
    );
  } else {
    body = (
      <S.NoContentContainer>
        <p>Parece que tivemos um problema ao carregar nossos produtos.</p>
        <p>Recarregue a página e tente novamente!</p>
      </S.NoContentContainer>
    );
  }

  return (
    <>
      <Header {...searchParams} />
      {loading ? (
        <CustomLoading />
      ) : (
        <S.HomeContainer>
          <CustomBreadcrumbs breadcrumbs={[{ title: "Home" }]} />
          {body}
        </S.HomeContainer>
      )}
    </>
  );
};
