
import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createTheme({
    palette: {
      primary: {
        main: "#2A2F35"
      },
      secondary: {
        main: "#F4B301"
      },
      info: {
        main: "#F0F0F0",
        dark: "#C9C5C0"
      }
    },

    typography: {
      h1: {
        color: '#F0F0F0', //main white
        fontFamily: 'Arial Black',
        textTransform: 'uppercase',
        fontSize: '4rem'
      },
      subtitle1: {
        color: '#C9C5C0', //secondary white
        fontFamily: 'Arial Black',
      },
      h2: {
        fontFamily: 'Arial Black',
        textTransform: 'uppercase',
      },
      h3: {
        fontFamily: 'Arial Black',
        textTransform: 'uppercase',

      },
      h4: {
        fontFamily: 'Arial Black',

      },
    },

  });

  theme = responsiveFontSizes(theme);

  export default theme;