import React from "react";
import { useState } from "react";

export const AlertContext = React.createContext();

const AlertProvider = ({children}) =>{
    const [openAlert, setOpenAlert] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [alertText, setAlertText] = useState("Pomyślnie dodano post!");

const value = {
inputProps: {
    severity: {
        value: severity,
        onChange: (e) => setSeverity(e.target.value),
      },
      openAlert: {
        value: openAlert,
        onChange: (e) => setOpenAlert(e.target.value),
      },
      alertText: {
        value: alertText,
        onChange: (e) => setAlertText(e.target.value),
      },
    },
    open: (event) => {
      event.preventDefault();

      setOpenAlert(true);
    },
}

    return (
        <AlertContext.Provider value={value}>
            {children}
        </AlertContext.Provider>
    );
}

export default AlertProvider;