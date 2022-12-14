import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import tema from "./Tema";
import "./App.css";
import PaginaInicio from "./paginas/inicio";
import PaginaPlanetas from "./paginas/planetas";
import PaginaPlaneta from "./paginas/planeta";

export default function App() {
  return (<>
    <ThemeProvider theme={tema}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<PaginaInicio/>} />
          <Route path="/planetas" element={<PaginaPlanetas/>} />
          <Route path="/planeta/:slug" element={<PaginaPlaneta/>} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>);
}