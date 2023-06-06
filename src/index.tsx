import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mapbox-gl/dist/mapbox-gl.css';
import {ThemeProvider} from "@mui/material";
import {darkTheme, lightTheme} from "./styled/themes.index";
const RootComponent = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const theme = isDarkMode ? darkTheme : lightTheme;
    return (
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    );
};

ReactDOM.render(<RootComponent />, document.getElementById('root'));

