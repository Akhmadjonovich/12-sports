import { BrowserRouter, Routes, Route } from "react-router-dom";
import SportsList from "./pages/SportsList";
import SportDetail from "./pages/SportDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SportsList />} />
        <Route path="/sports/:id" element={<SportDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
