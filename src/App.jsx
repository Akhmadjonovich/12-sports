// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SportsList from "./pages/SportsList";
import SportDetail from "./pages/SportDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SportsList />} />
        <Route path="/sports/:id" element={<SportDetail />} />
      </Routes>
    </Router>
  );
}
