import { styled } from "@mui/material";

export const Container = styled("div")<{ isClickable: boolean }>(
  ({ isClickable }) => ({
    display: "flex",
    width: "auto",
    cursor: isClickable ? "pointer" : "default",

    svg: {
      width: "16px",
    },
    p: {
      display: "block",
      marginLeft: "8px",
      fontWeight: "bold",
    },
  })
);
