import { ProductInfo } from "../../types/products";
import * as S from "./styles";

interface ProductCardProps {
  product: ProductInfo;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <S.Card>
      <S.Image src={product.image} loading="lazy" />
      <p>{product.title}</p>
      <p>{product.price}</p>
    </S.Card>
  );
};
