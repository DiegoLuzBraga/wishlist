import { TextWithIcon } from "../TextWithIcon";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { SearchBar } from "../SearchBar";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Container>
      <S.MainTitle>MagaNets</S.MainTitle>
      <S.HeaderAside>
        <S.InfoContainer>
          <TextWithIcon text="Cidade: São Paulo" icon={<LocationOnIcon />} />
          <TextWithIcon
            text="Central de atendimento"
            icon={<LocalPhoneIcon />}
          />
          <TextWithIcon text="Lista de desejos" icon={<FavoriteIcon />} />
        </S.InfoContainer>
        <SearchBar searchQuery="" setSearchQuery={console.log} />
      </S.HeaderAside>
    </S.Container>
  );
};
