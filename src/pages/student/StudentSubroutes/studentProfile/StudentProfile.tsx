import React from "react";
import login from "../../../../assets/login.jpg";
import Studenttable from "./Studenttable";
import { StudentResult } from "../studentviewresult/StudentResult";
import { ViewResultContext } from "../../../../contexts/student";

const StudentProfile = () => {
  const { showviewResult } = React.useContext(ViewResultContext);

  return (
    <section className="">
      {showviewResult.resultstatus && <StudentResult />}

      <div>
        {/* BSCKROOUND SETUP  */}
        <div
          // front blur
          className="left-0 lg:left-72 fixed top-0 h-screen
        botttom-0 right-0 bg-gradient-to-b from-black to-zinc-800 opacity-70"
        ></div>

        <div
          // BACKGROUND IMAGE
          className="student-image h-screen fixed left-0 top-0
         bottom-0 right-0 lg:left-60 -z-10"
        >
          <img
            src={login}
            alt="coridor"
            className="  object-cover object-center block w-full h-full"
          />
        </div>
      </div>
      <Studenttable />
    </section>
  );
};

export { StudentProfile };
