import { useContext, useState } from "react";
import { ViewResultContext } from "../../../../contexts/student";
import BackGroundComp from "../BackGroundComp";
import { StudentLogOutModal } from "../studentLogOut/StudentLogOut";
// navigate state
import { useNavigate } from "react-router-dom";

const StudentPasswordReset = () => {
  // SETTING UP THE GLOBAL CONTEXT ON THE RESULT MODAL
  const { CloseViewResult, showviewResult } = useContext(ViewResultContext);
  const [CurrentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  // creating creatingn state variable for the use navigation
  const NavigateToHome = useNavigate();

  // setting a fucntion to navigate back to homepage
  function navigateBackToHome() {
    NavigateToHome("/student");
  }

  function ResetPaswordForm(e: any) {
    e.stopPropagation();
    navigateBackToHome();
  }

  return (
    <>
      {/* BACKGROUND IMAGE AND BLUR */}
      <BackGroundComp />
      {/* LOGOUT MODDAL */}
      {showviewResult.resultstatus && <StudentLogOutModal />}
      <div>
        {/* MAIN RESET PASWORD MENU */}
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[380px] bg-[#2b3b3c] py-[3rem] rounded">
          <h1 className="w-[80%] mx-auto font-bold text-yellow-500">Reset Passsword</h1>
          <div>
            <form onSubmit={ResetPaswordForm}>
              {/* Form fields Wrapper */}
              <div className="w-[80%] mx-auto flex flex-col gap-y-7 my-[3rem]">

                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="currentPassword"
                    className="w-full font-bold text-xs text-white "
                  >
                    Current password
                  </label>
                  <input
                    id="currentPassword"
                    type="password"
                    placeholder="Current password"
                    required
                    className="w-full h-8 border-2 rounded capitalize text-xs 
                  outline-none"
                    value={CurrentPassword}
                    onChange={(e: any) => {
                      setCurrentPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="newpassword"
                    className="w-full font-bold text-xs text-white "
                  >
                    New Pasword
                  </label>
                  <input
                    type="passowrd"
                    id="newpassword"
                    placeholder="new pasword"
                    required
                    className="w-full h-8 border-2 rounded capitalize text-xs  
                  outline-none"
                    value={newPassword}
                    onChange={(e: any) => {
                      setNewPassword(e.target.value);
                      return e.target.value;
                    }}
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="confirmpassword"
                    className=" font-bold text-xs text-white"
                  >
                    confirm Pasword
                  </label>
                  <input
                    type="password"
                    id="confirmpassword"
                    required
                    placeholder="confirm pasword"
                    className=" w-full h-8 border-2 rounded capitalize text-xs 
                  outline-none"
                    value={ConfirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-center gap-x-[3rem]">
                <button
                  className="px-10 py-2  bg-slate-300 rounded-lg  hover:bg-slate-500"
                  onClick={() => navigateBackToHome()}
                >
                  cancel
                </button>
                <button
                  type="submit"
                  className="px-10 py-2 rounded-lg bg-yellow-600 hover:bg-yellow-800"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { StudentPasswordReset };
