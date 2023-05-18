import { styled } from "@mui/material";

export const Card = styled("div")({
  width: "200px",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  border: "1px solid #e0e0e0",
  borderRadius: "4px",
  padding: "16px",
  marginBottom: "16px",
  boxShadow: "0px 12.2px 24px rgba(0, 0, 0, 0.09)",
  "@media only screen and (max-width: 480px)": {
    width: "300px",
  },
});

export const Image = styled("img")({
  width: "150px",
  height: "150px",
  marginBottom: "16px",
});
