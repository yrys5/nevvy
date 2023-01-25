import React, { useContext, useEffect } from "react";
import { Stack } from "@mui/system";
import { Snackbar } from "@mui/material";
import { AlertContext } from "../../context/react/AlertContext";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Alerts = () => {
  const {inputProps} = useContext(AlertContext);

    const handleClose = ( reason) => {
      if (reason === "clickaway") {
        return;
      }
      inputProps.openAlert.value = false;
      console.log(inputProps.openAlert.value);
    };

  return (
    <>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={inputProps.openAlert.value}
          autoHideDuration={600}
          onClose={handleClose}
          >
          <Alert
            onClose={handleClose}
            severity={inputProps.severity.value}
            sx={{ width: "100%" }}
            >
            {inputProps.alertText.value}
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
};

export default Alerts;
