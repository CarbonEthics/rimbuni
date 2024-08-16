import { Route, Routes } from "react-router-dom";
import Digimon from "./pages/Digimon";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Digimon />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
