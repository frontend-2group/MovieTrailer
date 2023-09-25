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
}

export default App;
