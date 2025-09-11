import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Login from './pages/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Colors } from './Globals';
import Register from './pages/Register';
import GameStart from './pages/GameStart';
import Account from './pages/Account';

let theme = createTheme({
    typography: {
        fontWeightBold: {
            color: Colors.primary,
        },
        body1: {
            color: Colors.primary,
        },
        h1: {
            color: Colors.primary,
        },
        h2: {
            color: Colors.primary,
        },
        h3: {
            color: Colors.primary,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '12px 24px',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& fieldset': {
                        borderColor: Colors.primary,
                    },
                    '&:hover fieldset': {
                        borderColor: Colors.primary,
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: Colors.primary,
                    },
                },
            },
        },
    },
    palette: {
        background: {
            default: Colors.background
        },
        primary: {
            main: Colors.theme,
        },
        secondary: {
            main: Colors.theme,
        },
        text: {
            primary: Colors.primary,
            secondary: Colors.theme,
        },
    },
});

function Main() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="account" element={<Account/>}/>
                <Route path="gamestart/:game" element={<GameStart />} />
            </Route>
        </Routes>
    );
}

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <ThemeProvider theme={theme}> {/* Use ThemeProvider from MUI */}
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            </ThemeProvider>
        </React.StrictMode>
    );
}