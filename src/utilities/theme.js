import {  unstable_createMuiStrictModeTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

import PoppinsRegularttf from "../resources/fonts/Poppins/Poppins-Regular.ttf";
import RobotoRegularttf from "../resources/fonts/Roboto/Roboto-Regular.ttf";

const roboto = {
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Roboto'),
    local('Roboto-Regular'),
    url(${RobotoRegularttf}) format('truetype')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const poppins = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Poppins'),
    local('Poppins-Regular'),
    url(${PoppinsRegularttf}) format('truetype')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const theme = unstable_createMuiStrictModeTheme({
  // The default theme creator function(createMuiTheme) was causing a warning. To inspect that warning import createMuiTheme from @material-ui/core/styles and invoke that function instead of unstable_createMuiStrictModeTheme.
  typography: {
    fontFamily: "Roboto, Arial",
    h1: {
      fontFamily: "Poppins, Arial",
      fontSize: "4rem",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [roboto, poppins],
      },
    },
  },
  palette: {
    primary: {
      main: grey[100],
    },
    secondary: {
      main: grey[900],
    },
  },
});

export default theme;
