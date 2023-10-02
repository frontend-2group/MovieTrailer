import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "react-query";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.style";
import GlobalStyles from "./styles/global.style";
import ScrollTop from "./components/scrollTop";
import { RouterProvider } from "react-router-dom";
import router from "./route/route";
import { ChakraProvider } from "@chakra-ui/react";
import ErrorPage from "./pages/errorPage/error";

// 아래 두 코드 터미널에 입력해서 설치해주세요
// npm install react-query --force
// npm install axios

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ChakraProvider theme={theme}>
          <QueryErrorResetBoundary
            fallback={<ErrorPage />}
            onError={(err) => console.log(err)}
          >
            <RouterProvider router={router} />
          </QueryErrorResetBoundary>
          <GlobalStyles />
          <ScrollTop />
        </ChakraProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
