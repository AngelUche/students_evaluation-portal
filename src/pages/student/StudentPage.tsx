// jshint esversion:6
import { Route, Routes } from "react-router-dom";
// import { StudentSideNav } from "../../components";
import { StudentHome } from "./studenthome";
import { StudentProfile } from "./studentProfile";

function StudentPage() {
  return (
    <Routes>
      {/* <Route path="/" element={<StudentSideNav />}> */}
      <Route index element={<StudentHome />} />
      <Route path="/student/profile" element={<StudentProfile />} />

      {/* </Route> */}
    </Routes>
  );
}

export { StudentPage };
