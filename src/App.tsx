import { RouterProvider } from "react-router-dom";
import { GlobalStyles, ThemeProvider, createTheme } from "@mui/material";
import { WishlistProvider } from "./viewModels/useWishlistVM";
import { routes } from "./routes";
import { globalStyles } from "./globalStyles";
import { NotificationProvider } from "./viewModels/useNotificationVM";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={globalStyles} />
      <WishlistProvider>
        <NotificationProvider>
          <RouterProvider router={routes} />
        </NotificationProvider>
      </WishlistProvider>
    </ThemeProvider>
  );
}

export default App;
