
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./pages/homePage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );


import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.style";
import GlobalStyles from "./styles/global.style";
import ScrollTop from "./components/scrollTop";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ScrollTop />
    </ThemeProvider>
  );
}

export default App;
