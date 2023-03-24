import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import BackGroundComp from "../BackGroundComp";
import { ViewResultContext } from "../../../../contexts/student";

export interface Loggoutinterface {
  status: boolean;
  id: number | undefined;
}

function StudentLogOutModal() {
  // INVOKING THE USE NAVIGATE
  const navigateTo = useNavigate();
  // SETTING UP THE GLOBAL CONTEXT ON THE RESULT MODAL
  const { CloseViewResult } = useContext(ViewResultContext);

  // STATE VARIABLE TO HANDLE THE LOGOUT PAGE
  const [logout, setLogOut] = useState<Loggoutinterface>({
    status: false,
    id: undefined,
  });
  // FUNCTION TO NAVIGATE TO THE LOGIN PAGE
  function NavigateToLogin() {
    setLogOut({ id: undefined, status: false });
    navigateTo("/login");
  }

  return (
    <>
      <BackGroundComp />
      <div
        className="flex flex-col items-center gap-20 top-40 bottom-52 left-[18%] right-[18%] 
       
        text-white capitalize bg-[#2a262aee] rounded-xl pt-10 
        fixed z-20 lg:left-[50%] lg:right-[25%] md:left-[36%] md:right-[28%]"
      >
        <h1 className="">are you sure you want to log out?</h1>
        <div>
          <button
            className="px-12 py-2 bg-amber-800 rounded-lg
          capitalize"
            onClick={NavigateToLogin}
          >
            log me out
          </button>
        </div>

        <button
          className="px-4 py-2 bg-amber-800 rounded-lg mb-3
        capitalize"
          onClick={(e) => {
            e.stopPropagation();
            CloseViewResult({ resultstatus: false });
          }}
        >
          keep me logged in
        </button>
      </div>
    </>
  );
}

export { StudentLogOutModal };
