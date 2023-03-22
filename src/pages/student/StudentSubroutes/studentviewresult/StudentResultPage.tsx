import { StudentResultPortal } from "./StudentResultPortal";
import { StudentResultModal } from "./StudentResultModal";
import { ViewResultContext } from "../../../../contexts/student";
import React from "react";

const StudentResultPage = () => {
  // CONSUME PAGE RESULT CONTEXT
  const { showResultPage } = React.useContext(ViewResultContext);

  return (
    <div>
      {showResultPage.isViewResultTrue ? (
        <StudentResultModal />
      ) : (
        <StudentResultPortal />
      )}
    </div>
  );
};

export { StudentResultPage };
