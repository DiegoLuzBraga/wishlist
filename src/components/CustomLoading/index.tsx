import { CircularProgress } from "@mui/material";
import * as S from "./styles";

export const CustomLoading = () => {
  return (
    <S.LoadingContainer>
      <CircularProgress sx={{ color: "#5a2d82" }} />
    </S.LoadingContainer>
  );
};
