import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components";
import { AdminPage, StudentPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/admin/" element={<AdminPage />}></Route>
      <Route path="/student//*" element={<StudentPage />}></Route>
      {/* <Route path="/login" element={<Login />}></Route> */}
    </Routes>
  );
}

export default App;
