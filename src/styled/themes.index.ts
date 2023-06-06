import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    typography: {
        fontFamily: 'Raleway, Arial',
    },
    palette: {
        mode: "light",
        primary: {
            main: "rgba(255,255,255,0.5)"
        },
        secondary: {
            main: "#f50057"
        },
        background: {
            default:"rgba(255,255,255,0.5)"
        }
    }
});

export const darkTheme = createTheme({
    typography: {
        fontFamily: 'Raleway, Arial',
    },
    palette: {
        mode: "dark",
        primary: {
            main: "#90caf9"
        },
        secondary: {
            main: "#f48fb1"
        }
    }
});
