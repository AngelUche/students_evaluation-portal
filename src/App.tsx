import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/login/LandingPage";
import { Login } from "./components";
import { AdminPage, StudentPage, StafPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/*" element={<AdminPage />} />
      <Route path="/student/*" element={<StudentPage />} />
      <Route path="/staff/*" element={<StafPage />} />
    </Routes>
  );
}

export default App;
