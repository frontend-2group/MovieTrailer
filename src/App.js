import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./pages/homePage";
import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.style";
import GlobalStyles from "./styles/global.style";
import ScrollTop from "./components/scrollTop";
import Header from "./components/Layout/header";
import Footer from "./components/Layout/footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Footer />
        <ScrollTop />
        <HomePage />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
