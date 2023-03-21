import { AiFillHome, AiFillFile, AiOutlineLogout } from "react-icons/ai";
import { BsFillPersonFill, BsKeyFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ViewResultContext } from "../../../../contexts/student";

// SETTING UP THE CONTEXT HOOK FOR OPENING THE MODAL
const StudentDeskTopsideba = () => {
  const { OpenViewResult, CloseViewResult } = useContext(ViewResultContext);

  return (
    // SIDE BAR MOBILE VIEW FIXED WITH
    <aside
      onClick={() => {
        CloseViewResult({ resultstatus: false });
      }}
      className=" w-72  pt-28 fixed bottom-0 top-0 bg-[#2b3b3c] shadow-lg overflow-y-auto invisible
  lg:visible"
    >
      <div className="flex flex-col gap-y-3">
        <NavLink
          to=""
          end
          className={({ isActive }) =>
            `p-4 mt-4 pl-5 text-white flex duration-500 hover:transition-all
            justify-start items-center gap-5 hover:border-l-4
             ${isActive ? "bg-studentactive px-5 border-l-4" : undefined}`
          }
        >
          <AiFillHome size={25} />
          <span className="text-xl">Home</span>
        </NavLink>
        <NavLink
          to="profile"
          className={({ isActive }) =>
            `p-4 pl-5 text-white flex justify-start items-center gap-5
             hover:border-l-4 transitiononhover
              ${isActive ? "bg-studentactive px-5 border-l-4" : undefined}`
          }
        >
          <BsFillPersonFill size={25} />
          <span className="text-xl">Student profile</span>
        </NavLink>

        <button
          onClick={(e) => {
            e.stopPropagation();
            OpenViewResult({ resultstatus: true });
            // CloseViewResult({ resultstatus: false });
          }}
          className="p-4 pl-5 text-white flex justify-start items-center gap-5 
          hover:border-l-4 px-5 border-l-4"
        >
          <AiFillFile size={25} className="text-[#b4b8b8]" />
          <span className="text-xl">View Result</span>
        </button>
        <NavLink
          to="password"
          className={({ isActive }) =>
            `p-4 pl-5 text-white flex justify-start items-center gap-5 hover:border-l-4 ${
              isActive ? "bg-studentactive px-5 border-l-4" : null
            }`
          }
        >
          <BsKeyFill size={25} className="text-[#b4b8b8]" />
          <span className="text-xl">Reset Password</span>
        </NavLink>
        <NavLink
          to="logout"
          className={({ isActive }) =>
            `p-4 pl-5 text-white flex justify-start items-center gap-5 
            hover:border-l-4 mt-48 ${
              isActive ? "bg-studentactive px-5 border-l-4" : null
            }`
          }
        >
          <AiOutlineLogout size={25} />
          <span className="text-xl">Log out</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default StudentDeskTopsideba;
