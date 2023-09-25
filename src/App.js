import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./pages/homePage";
import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.style";
import GlobalStyles from "./styles/global.style";
import ScrollTop from "./components/scrollTop";
import { RouterProvider } from "react-router-dom";
import router from "./route/route";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <GlobalStyles />
        <ScrollTop />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
