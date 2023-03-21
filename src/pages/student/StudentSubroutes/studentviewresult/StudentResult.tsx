import { useContext } from "react";
import { Link } from "react-router-dom";
import { ViewResultContext } from "../../../../contexts/student";
import { studdentTerms, Studentsession } from "../../../../data/student";

const StudentResult = () => {
  // SETTING UP THE GLOBAL CONTEXT ON THE RESULT MODAL
  const { CloseViewResult } = useContext(ViewResultContext);
  return (
    <>
      <div
        className="bg-black w-4/5 h-[600px] fixed z-50 top-20
      left-[20%] right-[60%] opacity-80 "
      ></div>
      <div>
        <div
          className="bg-[#2b3b3c] w-64 lg:w-[350px] lg:h-[400px] h-80 
         my-36 rounded-2xl fixed z-[100] top-10 left-1/4 lg:left-2/4
         flex flex-col  items-center capitalize
         "
        >
          <h1 className="mt-4 font-bold text-yellow-500">View Result</h1>
          <div>
            <form>
              <div>
                <label
                  htmlFor="result"
                  className=" font-bold text-xs flex ml-1 mt-7 mb-1 text-white"
                >
                  Session
                </label>
              </div>
              <select
                name="result"
                id="result"
                className="border-2 rounded-md outline-none text-xs w-64 h-8  mb-6 hover:cursor-pointer pl-6"
              >
                <option value="date" disabled>
                  Select Session
                </option>
                {Studentsession.map((student) => {
                  return (
                    <option value="date" key={student.id}>
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
                  id="term"
                  className="border-2 rounded-md capitalize text-xs w-64 h-8 
                  outline-none mb-14 mt-1 hover:cursor-pointer pl-6"
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
            </form>
          </div>
          <div>
            <ul className="mt-6 flex justify-center  items-center gap-x-12">
              <li className="list-none">
                <Link
                  className="px-10 py-2  bg-slate-300 rounded-lg"
                  to="/student"
                  onClick={() => {
                    CloseViewResult({ resultstatus: false });
                  }}
                >
                  cancel
                </Link>
              </li>
              <li>
                <Link
                  to="/student/result"
                  className="px-10 py-2 rounded-lg bg-yellow-600"
                >
                  view
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export { StudentResult };
