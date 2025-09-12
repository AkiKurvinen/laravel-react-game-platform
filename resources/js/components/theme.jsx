import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    cssVariables: true,
    palette: {
        primary: {
            main: '#a80600',
            light: '#ff4545',
            dark: '#530006'
        }
    }
});

export default theme;