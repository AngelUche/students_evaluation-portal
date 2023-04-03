// jshint esversion:6
import { Route, Routes } from "react-router-dom";
import ParentSharedLayer from "./ParentSharedLayer";
import ParentErrorpage from "./ParentErrorpage";
import { ParenttHome } from "./Parenthome";

function ParentPage() {
  return (
    <Routes>
      <Route element={<ParentSharedLayer />}>
        {/* landing page for the parent dashboard */}
        <Route index element={<ParenttHome />} />
      </Route>
      <Route path="*" element={<ParentErrorpage />} />
    </Routes>
  );
}

export { ParentPage };
