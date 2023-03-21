import { useContext } from "react";
import { Link } from "react-router-dom";
import { ViewResultContext } from "../../../../contexts/student";
import { studdentTerms, Studentsession } from "../../../../data/student";
import login from "../../../../assets/login.jpg";

const StudentPasswordReset = () => {
  // SETTING UP THE GLOBAL CONTEXT ON THE RESULT MODAL
  const { CloseViewResult } = useContext(ViewResultContext);
  return (
    <>
      {/* BACKGROUND IMAGE AND BLUR */}
      <div
        className="student-image h-screen fixed left-0 top-0
         bottom-0 right-0 lg:left-60"
      >
        <img
          src={login}
          alt="coridor"
          className="object-cover object-center block w-full h-full"
        />
      </div>
      {/* BACKGROUND BLUR SET UP */}
      <div
        className=" student-image left-0  lg:left-1/4 fixed top-0 h-screen 
          botttom-0 right-0 bg-black opacity-60"
      ></div>
      <div>
        {/* MAIN RESET PASWORD MENU */}
        <div
          className="bg-[#2b3b3c] w-64 lg:w-[350px] lg:h-[400px] h-80 
         my-36 rounded-2xl fixed z-[100] top-10 left-1/4 lg:left-2/4
         flex flex-col  items-center capitalize
         "
        >
          <h1 className="mt-4 font-bold text-yellow-500">Reset Passsword</h1>
          <div>
            <form>
              <div></div>
              <div>
                <div>
                  <label
                    htmlFor="term"
                    className=" font-bold text-xs flex ml-1 mt-6 text-white "
                  >
                    old Password
                  </label>
                </div>

                <input
                  type="text"
                  placeholder="old pasword"
                  className="border-2 rounded-md capitalize text-xs w-64 h-8 
                  outline-none mt-1 pl-6"
                />
              </div>
              <div>
                <div>
                  <label
                    htmlFor="term"
                    className=" font-bold text-xs flex ml-1 mt-10 text-white "
                  >
                    New Pasword
                  </label>
                </div>

                <input
                  type="text"
                  placeholder="new pasword"
                  className="border-2 rounded-md capitalize text-xs w-64 h-8 
                  outline-none mt-1 pl-6"
                />
              </div>
              <div>
                <div>
                  <label
                    htmlFor="term"
                    className=" font-bold text-xs flex ml-1 mt-10 text-white "
                  >
                    confrim Pasword
                  </label>
                </div>

                <input
                  type="text"
                  placeholder="confirm pasword"
                  className="border-2 rounded-md capitalize text-xs w-64 h-8 
                  outline-none mb-2 mt-1 pl-6"
                />
              </div>
            </form>
          </div>
          <div>
            <ul className="mt-6 flex justify-center  items-center gap-x-12">
              <li className="list-none">
                <button
                  className="px-10 py-2  bg-slate-300 rounded-lg"
                  onClick={() => {
                    CloseViewResult({ resultstatus: false });
                  }}
                >
                  cancel
                </button>
              </li>
              <li>
                <button className="px-10 py-2 rounded-lg bg-yellow-600">
                  view
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export { StudentPasswordReset };
