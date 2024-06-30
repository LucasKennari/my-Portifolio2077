import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./paginas/desenvolvedor/home/Home";
import Header from "./components/header/Header";
import { Index } from "./paginas/arte/Index";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="desenvolvedor" element={<Home />} />
          <Route path="/artes" element={<Index />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
