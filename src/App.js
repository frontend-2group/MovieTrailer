import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./pages/homePage";
import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.style";
import GlobalStyles from "./styles/global.style";
import ScrollTop from "./components/scrollTop";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ScrollTop />
        <HomePage />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
