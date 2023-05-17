import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
