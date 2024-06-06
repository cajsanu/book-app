import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { useContext } from "react";
import AlertContext from "../contexts/AlertContext";

export const Notification = () => {
  const [alert, alertDispatch] = useContext(AlertContext);
  if (alert === null) {
    return null;
  }
  console.log("hrerrerer")
  return (
    <div>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        {alert}
      </Alert>
    </div>
  );
};
