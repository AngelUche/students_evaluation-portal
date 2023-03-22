import React from "react";
import Studenttable from "./Studenttable";
import { ViewResultContext } from "../../../../contexts/student";
import BackGroundComp from "../BackGroundComp";
import { StudentLogOutModal } from "../studentLogOut/StudentLogOut";

const StudentProfile = () => {
  const { showviewResult } = React.useContext(ViewResultContext);

  return (
    <section className="">
      {/* BSCKROOUNxD SETUP  */}
      <BackGroundComp />
      {/* LOGOUT MODDAL */}
      {showviewResult.resultstatus && <StudentLogOutModal />}
      <Studenttable />
    </section>
  );
};

export { StudentProfile };
