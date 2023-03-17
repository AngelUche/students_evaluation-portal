import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/login/LandingPage";
import { Login } from "./components";
import { AdminPage, StudentPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/*" element={<AdminPage />} />
      <Route path="/student/*" element={<StudentPage />} />
    </Routes>
  );
}

export default App;
