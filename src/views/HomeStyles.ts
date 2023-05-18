import { styled } from "@mui/material";

export const HomeContainer = styled("main")({
  padding: "32px",
  height: "100%",
});

export const ProductCardContainer = styled("div")({
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  justifyItems: "flex-start",

  "@media only screen and (max-width: 480px)": {
    justifyItems: "center",
  },
});

export const NoContentContainer = styled("div")({
  width: "100%",
  height: "100%",
  textAlign: "center",
});
