import { styled } from "@mui/material";

export const HomeContainer = styled("main")({
  padding: "32px",
  height: "100%",
});

export const ProductCardContainer = styled("div")({
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  justifyItems: "center",
});
