import { Outlet } from "react-router-dom";
import { StudentNavigation } from "../../components";

const StudentSharedLayout = () => {
  return (
    <>
      <StudentNavigation />
      <Outlet />
    </>
  );
};

export default StudentSharedLayout;
