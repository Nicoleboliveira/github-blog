import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Home } from "./pages/Home";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
