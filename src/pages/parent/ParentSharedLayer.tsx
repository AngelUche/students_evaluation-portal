import { Outlet } from "react-router-dom";
import { ParentNavigation } from "../../components/parent";
const ParentSharedLayer = () => {
  return (
    <>
      <ParentNavigation />
      <Outlet />
    </>
  );
};

export default ParentSharedLayer;
