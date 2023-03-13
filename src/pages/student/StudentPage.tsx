// jshint esversion:6
import { Route, Routes } from "react-router-dom";
import StudentSharedLayout from "./StudentSharedLayout";
import {
  StudentHome,
  StudentProfile,
  StudentPasswordReset,
  StudentResult,
} from "./StudentSubroutes";

function StudentPage() {
  return (
    <Routes>
      <Route path="" element={<StudentSharedLayout />}>
        <Route index element={<StudentHome />} />
        <Route path="profile" element={<StudentProfile />} />
        <Route path="password" element={<StudentPasswordReset />} />
        <Route path="result" element={<StudentResult />} />
      </Route>
    </Routes>
  );
}

export { StudentPage };
