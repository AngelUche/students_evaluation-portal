import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Navigation } from "./parentNavBar/Navigation";

const ParentNavigation = () => {
  const [isParentNavbarOpen, setIsParentNavbarOpen] = useState(false);

  function ToggleParentNavBar() {
    // initial value: false
    //  this function sets the navgation bar to either true or false
    setIsParentNavbarOpen(!isParentNavbarOpen);
  }
  return (
    <>
      <nav
        onClick={ToggleParentNavBar}
        className="md:hidden fixed inset-x-0 top-0 h-[60px] cursor-pointer
           bg-sideNavbg px-5 text-white flex items-center"
      >
        <div className="nth-child(1) mx-auto">
          <h1 className="font-bold text-xl capitalize">Acacdemic profiler</h1>
        </div>

        <div>
          {/* this is the mobile rendering of the hamburger Menue
           if the isParentNavbarOpen === true, render closebar and also render the navigatoon menue
           else if the isParentNavbarOpen === false render hamburger menue
           */}
          {isParentNavbarOpen ? (
            <AiOutlineClose size={25} color="red" />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </div>
      </nav>
      {/*
      Main view of the Parent DashBoard
        Renders the main pages of the dashbord
      */}
      <div
        className="md:hidden fixed inset-x-0 top-[60px] bottom-0 bg-[#e4f0e4] flex"
        onClick={() => setIsParentNavbarOpen(false)}
      >
        <Outlet />
      </div>
      {/* Aside Navigation */}
      <div
        className={`fixed w-[280px] top-[60px] md:top-0 inset-y-0 md:left-0 bg-sideNavbg text-white tansition ${
          isParentNavbarOpen ? "left-0" : "-left-full"
        } `}
      >
        <Navigation />
      </div>
    </>
  );
};

export { ParentNavigation };
