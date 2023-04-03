// jshint esversion:6
import { Route, Routes } from "react-router-dom";
import StudentSharedLayout from "./StudentSharedLayout";
import {
  StudentHome,
  StudentProfile,
  StudentPasswordReset,
  StudentResultPage,
  StudentLogOutModal,
  StudentErrorPage,
} from "./StudentSubroutes";
// IMPORTING THE ERROR PAGE

import { ViewResultContextprovider } from "../../contexts/student";

function StudentPage() {
  return (
    // STUDENTS MODAL CONTEXTS FOR VIEW RESULTS
    <ViewResultContextprovider>
      {/* routing the various pagess */}
      <Routes>
        <Route path="" element={<StudentSharedLayout />}>
          <Route index element={<StudentHome />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="password" element={<StudentPasswordReset />} />
          <Route path="result" element={<StudentResultPage />} />
          <Route path="/logout" element={<StudentLogOutModal />} />
        </Route>

        <Route path="*" element={<StudentErrorPage />} />
      </Routes>
    </ViewResultContextprovider>
  );
}

export { StudentPage };
