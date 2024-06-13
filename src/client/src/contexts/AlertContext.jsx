import { createContext, useReducer, useEffect } from "react";

const AlertReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return `Logged in as ${action.payload}`;
    case "LOGOUT":
      return action.payload;
    case "SIGNUP":
      return `Created user ${action.payload}. Now please log in to see your account`;
    case "CREATE":
      return `Added new book ${action.payload}`;
    case "READ":
      return action.payload;
    case "DELETE":
      return action.payload;
    case "ERROR":
      return action.payload;
    case "CLEAR":
      return null;
    default:
      return state;
  }
};

const AlertContext = createContext();

export const AlertContextProvider = (props) => {
  const [alert, alertDispatch] = useReducer(AlertReducer, null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      alertDispatch({ type: "CLEAR" });
    }, 5000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <AlertContext.Provider value={[alert, alertDispatch]}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
