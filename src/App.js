import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.style";
import GlobalStyles from "./styles/global.style";
import ScrollTop from "./components/scrollTop";
import { RouterProvider } from "react-router-dom";
import router from "./route/route";
import { ChakraProvider } from "@chakra-ui/react";
import Cursor from "./components/cursor";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ChakraProvider theme={theme}>
          <RouterProvider router={router} />
          <GlobalStyles />
          <Cursor />
          <ScrollTop />
        </ChakraProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
