import { createTheme } from "@mui/material";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#3F51B5",
      light: "#C5CAE9",
      dark: "#303F9F",
      text: "#FFFFFF",
      warning: "#FF6403",
      danger: "F6001C"
    },
    secondary: {
      main: "#757575",
      accent: "#03A9F4",
      text: "#212121",
      divider: "#BDBDBD"
    }
  }
});

export { mainTheme };
