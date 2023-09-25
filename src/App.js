
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

function App() {
  return <div></div>;

}

export default App;
