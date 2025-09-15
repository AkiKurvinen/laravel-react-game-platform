/** @type { import('@storybook/react-vite').Preview } */
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../resources/js/components/theme';
import { GlobalStyles } from '../resources/js/components/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: "todo",
        },
    },
};
export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            <Story />
        </ThemeProvider>
    ),
];
export default preview;
