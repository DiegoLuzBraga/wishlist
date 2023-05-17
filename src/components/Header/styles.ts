import { styled } from "@mui/material";

export const Container = styled("header")({
  backgroundColor: "#5a2d82",
  color: "white",
  display: "flex",
  padding: "32px",
});

export const MainTitle = styled("h1")({
  fontWeight: "bold",
  fontSize: "32px",
  width: "30%",
});

export const HeaderAside = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  width: "100%",
});

export const InfoContainer = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "16px",
});
