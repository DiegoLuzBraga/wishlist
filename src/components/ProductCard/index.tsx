import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { ProductInfo } from "../../types/products";
import { useWishlistVM } from "../../viewModels/useWishlistVM";
import * as S from "./styles";
import { formatMoney } from "../../utils/formatters";
import { Typography } from "@mui/material";

interface ProductCardProps {
  product: ProductInfo;
  isCartView?: boolean;
}

export const ProductCard = ({ product, isCartView }: ProductCardProps) => {
  const { addToWishlist, removeFromWhislist } = useWishlistVM();

  let action;

  if (isCartView) {
    action = (
      <S.CancelContainer>
        <CancelOutlinedIcon
          data-testid="cancel-button"
          onClick={() => removeFromWhislist(product.sku.toString())}
          sx={{ cursor: "pointer" }}
        />
      </S.CancelContainer>
    );
  } else {
    if (product.isWished) {
      action = (
        <S.WishableContainer>
          <FavoriteIcon
            onClick={() => removeFromWhislist(product.sku.toString())}
            sx={{ color: "#d4181a", cursor: "pointer" }}
          />
        </S.WishableContainer>
      );
    } else {
      action = (
        <S.WishableContainer>
          <FavoriteBorderIcon
            onClick={() => addToWishlist(product)}
            sx={{ color: "#f9f9f9", cursor: "pointer" }}
          />
        </S.WishableContainer>
      );
    }
  }

  return (
    <S.Card>
      <S.Image src={product.image} loading="lazy" />
      <Typography fontWeight="bold">{product.title}</Typography>
      <Typography color="#e4cf1c" fontWeight="bold" mt="16px">
        {formatMoney(product.price, product.currencyFormat)}
      </Typography>
      {action}
    </S.Card>
  );
};
