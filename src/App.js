import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.style";
import GlobalStyles from "./styles/global.style";
import ScrollTop from "./components/scrollTop";
import { RouterProvider } from "react-router-dom";
import router from "./route/route";

// 아래 두 코드 터미널에 입력해서 설치해주세요
// npm install react-query --force
// npm install axios

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
