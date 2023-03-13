// jshint esversion:6
import { Route, Routes } from "react-router-dom";
// import { StudentSideNav } from "../../components";
import { ParenttHome } from "./Parenthome";
import { ParentProfile } from "./parenttProfile";

function ParentPage() {
  return (
    <Routes>
      {/* <Route path="/" element={<StudentSideNav />}> */}
      <Route index element={<ParenttHome />} />
      <Route index element={<ParentProfile />} />

      {/* </Route> */}
    </Routes>
  );
}

export { ParentPage };
