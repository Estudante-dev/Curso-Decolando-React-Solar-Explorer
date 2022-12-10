import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaInicio from "./paginas/inicio";
import tema from "./Tema";

export default function App() {
  return (<>
    <ThemeProvider theme={tema}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<PaginaInicio/>} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>);
}