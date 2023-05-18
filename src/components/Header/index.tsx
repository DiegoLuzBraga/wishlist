import { TextWithIcon } from "../TextWithIcon";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { SearchBar } from "../SearchBar";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.MainTitle onClick={() => navigate("/")}>MagaNets</S.MainTitle>
      <S.HeaderAside>
        <S.InfoContainer>
          <TextWithIcon text="Cidade: São Paulo" icon={<LocationOnIcon />} />
          <TextWithIcon
            text="Central de atendimento"
            icon={<LocalPhoneIcon />}
          />
          <TextWithIcon
            text="Lista de desejos"
            icon={<FavoriteIcon />}
            onClick={() => navigate("/cart")}
          />
        </S.InfoContainer>
        <SearchBar searchQuery="" setSearchQuery={console.log} />
      </S.HeaderAside>
    </S.Container>
  );
};
