import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { GlobalStyles, ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          "*": { margin: 0, padding: 0, boxSizing: "border-box" },
          body: {
            height: "100%",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
          },
          html: { height: "100%" },
        }}
      />
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
