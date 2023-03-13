import { AiFillHome, AiFillFile, AiOutlineLogout } from "react-icons/ai";
import { BsFillPersonFill, BsKeyFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const StudentMobileSideBar = () => {
  return (
    // SIDE BAR MOBILE VIEW FIXED WITH
    <aside
      className=" w-72  pt-28 fixed bottom-0 top-0 bg-[#2b3b3c] 
    shadow-lg overflow-y-auto visible md:invisible"
    >
      <div className="flex flex-col gap-y-3">
        <NavLink
          to=""
          end
          className={({ isActive }) =>
            `p-4 mt-4 pl-5 text-white flex justify-start items-center gap-5 hover:border-l-4 
             ${isActive ? "bg-studentactive px-5 border-l-4" : undefined}`
          }
        >
          <AiFillHome size={25} />
          <span className="text-xl">Home</span>
        </NavLink>
        <NavLink
          to="profile"
          className={({ isActive }) =>
            `p-4 pl-5 text-white flex justify-start items-center gap-5 hover:border-l-4 ${
              isActive ? "bg-studentactive px-5 border-l-4" : undefined
            }`
          }
        >
          <BsFillPersonFill size={25} />
          <span className="text-xl">Student profile</span>
        </NavLink>
        <NavLink
          to="result"
          className={({ isActive }) =>
            `p-4 pl-5 text-white flex justify-start items-center gap-5 hover:border-l-4 ${
              isActive ? "bg-studentactive px-5 border-l-4" : null
            }`
          }
        >
          <AiFillFile size={25} className="text-[#b4b8b8]" />
          <span className="text-xl">Reset Password</span>
        </NavLink>
        <NavLink
          to="logout"
          className={({ isActive }) =>
            `p-4 pl-5 text-white flex justify-start items-center gap-5 hover:border-l-4 ${
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

export default StudentMobileSideBar;
