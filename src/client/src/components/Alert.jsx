import Alert from "@mui/material/Alert";
import { useContext } from "react";
import AlertContext from "../contexts/AlertContext";

export const Notification = () => {
  const [alert, alertDispatch] = useContext(AlertContext);
  if (alert === null) {
    return null;
  }

  return (
    <div>
      <Alert severity="info">{alert}</Alert>
    </div>
  );
};
