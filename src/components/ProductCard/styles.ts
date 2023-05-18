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
  position: "relative",
  "@media only screen and (max-width: 480px)": {
    width: "300px",
  },
});

export const Image = styled("img")({
  width: "150px",
  height: "150px",
  marginBottom: "16px",
});

export const WishableContainer = styled("div")({
  width: "30px",
  height: "30px",
  background: "black",
  paddingTop: "4px",
  position: "absolute",
  borderRadius: "4px 4px 2px 2px",
  left: "8px",
  top: "-2px",

  "&:after": {
    content: "''",
    position: "absolute",
    top: "28px",
    left: "0",
    width: "0",
    height: "0",
    borderStyle: "solid",
    borderWidth: "20px 15px 0 15px",
    borderColor: "#000000 transparent transparent transparent",
  },
});

export const CancelContainer = styled("div")({
  position: "absolute",
  right: "4px",
  top: "0",
});
