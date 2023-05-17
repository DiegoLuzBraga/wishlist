import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import * as S from "./styles";

interface Props {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export const SearchBar = ({ searchQuery, setSearchQuery }: Props) => (
  <TextField
    onChange={(e) => setSearchQuery(e.target.value)}
    variant="outlined"
    placeholder="Buscar"
    sx={{
      color: "white",
      width: "100%",
    }}
    InputProps={{
      startAdornment: <SearchIcon />,
      endAdornment: searchQuery ? (
        <S.Clear onClick={() => setSearchQuery("")} />
      ) : null,
      sx: {
        background: "white",
        width: "100%",
      },
    }}
  />
);
