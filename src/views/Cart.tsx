import { Link } from "react-router-dom";
import { CustomBreadcrumbs } from "../components/Breadcrumbs";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { useWishlistVM } from "../viewModels/useWishlistVM";
import { useSearch } from "../viewModels/useSearch";
import * as S from "./HomeStyles";

export const Cart = () => {
  const { wishlist } = useWishlistVM();
  const searchParams = useSearch();
  return (
    <>
      <Header {...searchParams} />
      <S.HomeContainer>
        <CustomBreadcrumbs
          breadcrumbs={[
            { title: "Home", to: "/" },
            { title: "Lista de desejos" },
          ]}
        />
        {wishlist.length ? (
          <S.ProductCardContainer>
            {wishlist
              .filter((item) =>
                item.title
                  .toLocaleLowerCase()
                  .includes(searchParams.searchQuery.toLocaleLowerCase())
              )
              .map((product) => {
                return (
                  <ProductCard product={product} key={product.sku} isCartView />
                );
              })}
          </S.ProductCardContainer>
        ) : (
          <S.NoContentContainer>
            <p>
              Parece que você não possui nenhum produto em sua lista de desejos
            </p>
            <p>
              O que acha de buscar algum clicando <Link to="/">aqui</Link>?
            </p>
          </S.NoContentContainer>
        )}
      </S.HomeContainer>
    </>
  );
};
