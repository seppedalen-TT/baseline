import { createTheme } from '@mui/material/styles';

const globalTheme = createTheme({
    palette: {
        primary: {
            100: '#f5f5f5',
            200: '#eeeeee',
            300: '#e0e0e0',
            400: '#bdbdbd',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: "#424242",
            900: '#212121',
            main: '#626364'
        },
        secondary: {
            main: '#2B3649',
        },
        warning: {
            main: '#F59E0B',
        },
        error: {
            main: '#B91C1C',
        },
        red: {
            500: '#B91C1C',
        },
        white: {
            main: '#FFFF',
        },
    },
    typography: {
        h1: {
            fontFamily: '"Inter", "Helvetica", "Arial", "sans-serif"',
            fontSize: '3.75rem',
            lineHeight: 1.2,
        },
        fontWeightLight: 300
    },
});


const theme = createTheme(globalTheme, {
    components: {
        MuiButton: {
            styleOverrides: {

            },
        }
    },

})
export default theme;