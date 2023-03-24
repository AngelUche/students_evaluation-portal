import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ViewResultContext } from "../../../../contexts/student";
import { studdentTerms, Studentsession } from "../../../../data/student";
import BackGroundComp from "../BackGroundComp";
// importing context interface from context interface
import { ShowViewResltinterface } from "../../../../contexts/student";
import { StudentLogOutModal } from "../studentLogOut/StudentLogOut";

interface CloseviewresultModalprops {
  closeviewReselt: (Close: ShowViewResltinterface) => void;
}

const StudentResultModal = () => {
  // SETTING UP THE GLOBAL CONTEXT ON THE RESULT MODAL
  const { showviewResult, CloseResultPage, CloseViewResult } =
    useContext(ViewResultContext);

  // SETTING UP THE STATE VRIABLE FOR SELECTED TERMS
  const [SelectedSession, setSelectedSession] = useState(" ");

  // SETTING UP THE STATE VRIABLE FOR SELECTED TERMS
  const [SelectedTerms, setSelectedTerms] = useState(" ");
  // SETTING THE STATE VARIABLE TO CLOE THE MODAL
  const [viewResult, setViewResult] = useState(false);

  // FUNCTION TO HANDLE THE CLOSE BUTTON
  function closeViewResultModal() {
    setViewResult(false);
  }

  return (
    <>
      {/* NACKGROUND SET UP */}
      <BackGroundComp />

      {/* MAIN VIEW RESULT SESSION */}
      <div onClick={() => CloseViewResult({ resultstatus: false })}>
        {showviewResult.resultstatus && <StudentLogOutModal />}

        <div
          className="bg-[#2b3b3c] md:w-[430px] h-[450px]
         my-32 rounded-2xl absolute md:left-[25%] lg:left-[45%]
         flex flex-col items-center capitalize gap-3
         left-[10%] right-[10%] sm:left-[20%] sm:right-[16%]
         "
        >
          <h1 className="mt-4 font-bold text-white">View Result</h1>
          <div>
            <div>
              <label
                htmlFor="result"
                className=" font-bold text-xs flex ml-1 mt-7 mb-1 text-white"
              >
                Session
              </label>
            </div>
            <select
              value={SelectedSession}
              onChange={(event) => {
                setSelectedSession(event.target.value);
                setSelectedTerms("");
              }}
              className="border-2 rounded-md outline-none text-sm w-72 h-8  
              mb-6 hover:cursor-pointer pl-6 pb-1"
            >
              <option value="" disabled>
                Select Session
              </option>
              {Studentsession.map((student) => {
                return (
                  <option value={student.session} key={student.id}>
                    {student.session}
                  </option>
                );
              })}
            </select>
            <div>
              <div>
                <label
                  htmlFor="term"
                  className=" font-bold text-xs flex ml-1 mt-10 text-white "
                >
                  Term
                </label>
              </div>
              <select
                name="term"
                value={SelectedTerms}
                onChange={(e) => {
                  setSelectedTerms(e.target.value);
                }}
                className="border-2 rounded-md capitalize text-sm w-72 h-8 
                  outline-none mb-14 mt-1 hover:cursor-pointer pl-6 pb-1"
              >
                <option value="date" disabled>
                  select terms
                </option>
                {studdentTerms.map((term) => {
                  return (
                    <option value="date" key={term.id}>
                      {term.term}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div>
            <ul
              className="mt-6 flex justify-center  items-center 
                gap-x-8  font-semibold"
            >
              <button className="list-none">
                <Link
                  className="px-10 py-2  bg-slate-300 rounded-lg"
                  to="/student"
                >
                  cancel
                </Link>
              </button>
              <li>
                <button
                  onClick={() =>
                    CloseResultPage({ isViewResultTrue: false, id: 2 })
                  }
                  disabled={SelectedTerms == ""}
                  className="px-11 py-2 rounded-lg capitalize
                   text-white bg-studentactive"
                >
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

export { StudentResultModal };
