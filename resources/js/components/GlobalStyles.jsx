import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

body {
  scrollbar-width: thin;
  scrollbar-color: var(--mui-palette-primary-main) var(--mui-palette-background-paper);
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: var(--mui-palette-background-paper);
}
body::-webkit-scrollbar {
  width: 15px;
}
body::-webkit-scrollbar-track {
  background: var(--mui-palette-background-paper);
}
body::-webkit-scrollbar-thumb {
  background-color: var(--mui-palette-primary-main);
  border-radius: 6px;
  border: 3px solid var(--mui-palette-background-paper);
}
`;