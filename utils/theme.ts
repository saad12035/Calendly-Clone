import { createTheme } from "@mui/material";
import variables from '../styles/variables.module.scss';

export const theme = createTheme({
    palette: {
      primary: {
        main: variables.primaryColor
      },
      secondary: {
        main: variables.secondaryColor
      },
    },

    typography:{
      fontFamily: variables.fontFamily
    }
})