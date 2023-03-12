import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components";
import {
  AdminPage,
  Home,
  // to be rerendered later
  StudentPage,
  ParentPage,
  StudentProfile,
  ParentProfile,
  StudentResult,
  StudentResultPortal,
  StudentPasswordReset,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminPage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/student" element={<StudentPage />} />
      {/* to be rerendered later */}
      <Route path="/student/profile" element={<StudentProfile />} />
      <Route path="/student/result" element={<StudentResult />} />
      <Route path="/student/resultt" element={<StudentResultPortal />} />
      <Route path="/student/password" element={<StudentPasswordReset />} />
      <Route path="/parent" element={<ParentPage />} />
      <Route path="/parent/profile" element={<ParentProfile />} />
    </Routes>
  );
}

export default App;
