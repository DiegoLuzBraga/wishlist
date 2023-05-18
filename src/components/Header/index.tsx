import { useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { TextWithIcon } from "../TextWithIcon";
import { SearchBar } from "../SearchBar";
import * as S from "./styles";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export const Header = ({ searchQuery, setSearchQuery }: HeaderProps) => {
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
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </S.HeaderAside>
    </S.Container>
  );
};
