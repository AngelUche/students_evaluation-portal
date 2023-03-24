// visible lg:invisible z-30
import { AiFillHome, AiFillFile, AiOutlineLogout } from "react-icons/ai";
import { BsFillPersonFill, BsKeyFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ViewResultContext } from "../../../../contexts/student";
import login from "../../../../assets/login.jpg";

const StudentMobileSideBar = () => {
  const { OpenResultPage, CloseViewResult, OpenViewResult } =
    useContext(ViewResultContext);
  return (
    // SIDE BAR MOBILE VIEW FIXED WITH
    <>
      <aside
        onClick={() => {
          CloseViewResult({ resultstatus: false });
        }}
        className=" w-72  pt-14 fixed bottom-0 top-0 bg-[#2b3b3c] 
        left-0
        shadow-lg overflow-y-auto visible lg:invisible z-30 "
      >
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col items-center">
            <div className=" w-[70px] h-16 ml-1 overflow-hidden rounded-full">
              <img
                src={login}
                alt="logo"
                className="w-full h-full overflow-hidden block"
              />
            </div>
            <div>
              <p className="text-white font-bold mt-2 mb-1 text-2xl">
                Orji Uche Esere
              </p>
              <p className="text-amber-500 font-bold text-lg">Student</p>
            </div>
          </div>
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
          <NavLink
            to="result"
            className={({ isActive }) =>
              `p-4 pl-5 text-white flex justify-start items-center gap-5
             hover:border-l-4 transitiononhover
              ${isActive ? "bg-studentactive px-5 border-l-4" : undefined}`
            }
            onClick={(e) => {
              e.stopPropagation();
              OpenResultPage({ isViewResultTrue: true, id: 2 });
            }}
          >
            <AiFillFile size={25} />
            <span className="text-xl">View Result</span>
          </NavLink>
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

          <button
            onClick={(e) => {
              e.stopPropagation();
              OpenViewResult({ resultstatus: true });
              // CloseViewResult({ resultstatus: false });
            }}
            className="p-4 pl-5 text-white flex justify-start items-center gap-5 
          hover:border-l-4 px-5 border-l-4 mt-20"
          >
            <AiOutlineLogout size={25} />

            <span className="text-xl">logout</span>
          </button>
          {/* <NavLink
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
        </NavLink> */}
        </div>
      </aside>
    </>
  );
};

export default StudentMobileSideBar;
