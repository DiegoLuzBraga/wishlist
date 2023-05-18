import { createContext, useContext, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert, AlertColor } from "@mui/material";

interface SnackbarNotificationProps {
  open: boolean;
  severity: AlertColor | undefined;
  message: string;
}

interface Notification {
  setNotification: React.Dispatch<
    React.SetStateAction<SnackbarNotificationProps>
  >;
}

const NotificationContext = createContext<Notification>({
  setNotification: () => {},
});

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [notification, setNotification] = useState<SnackbarNotificationProps>({
    open: false,
    message: "",
    severity: undefined,
  });

  const handleClose = () => {
    setNotification({ open: false, message: "", severity: undefined });
  };

  return (
    <NotificationContext.Provider
      value={{
        setNotification,
      }}
    >
      {children}
      <Snackbar
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={notification.open}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={notification.severity}
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};

export const useNotificationVM = () => {
  return useContext(NotificationContext);
};
