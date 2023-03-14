import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import React from "react";
import StudentMobileSideBar from "./StudentMobileSideBar";

const Hambuerger = () => {
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);
  function ToggleHAmbuger() {
    setIsNavbarOpen(() => !isNavbarOpen);
  }

  return (
    <button
      className="fixed top-4 right-6 z-40 lg:invisible"
      onClick={ToggleHAmbuger}
    >
      {isNavbarOpen ? (
        <RxCross1 size={30} color="red" className=" font-bold" width={20} />
      ) : (
        <GiHamburgerMenu size={30} color="#947154" />
      )}

      {isNavbarOpen && <StudentMobileSideBar />}
    </button>
  );
};

export default Hambuerger;
