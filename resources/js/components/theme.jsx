import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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

export default theme;