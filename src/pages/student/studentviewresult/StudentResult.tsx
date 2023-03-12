import { Link } from "react-router-dom";

const StudentResult = () => {
  return (
    <>
      <div className="bg-zinc-500 fixed w-screen h-screen opacity-30"></div>
      <div
        className="bg-white w-64 lg:w-72 lg:h-80 
    h-80  my-36 rounded-2xl fixed z-20 top-10 left-1/4 lg:left-2/4"
      >
        <h1 className="mt-4 font-bold text-red-900 mb-2">View Result</h1>
        <div>
          <form>
            <div>
              <label
                htmlFor="result"
                className=" font-bold text-xs flex ml-12 mt-7"
              >
                Session
              </label>
            </div>
            <select
              name="result"
              id="result"
              className="border-2 rounded-md text-xs w-48 h-8  mb-6 hover:cursor-pointer"
            >
              <option value="date" className="fex ">
                2023/2022
              </option>
              <option value="date">2022/2021</option>
              <option value="date">2021/2020</option>
            </select>
            <div>
              <div>
                <label
                  htmlFor="term"
                  className=" font-bold text-xs flex ml-12 mt-2 "
                >
                  Term
                </label>
              </div>
              <select
                name="term"
                id="term"
                className="border-2 rounded-md w-48 h-8 text-xs mb-8 hover:cursor-pointer"
              >
                <option value="date">First Termm</option>
                <option value="date">Second Term</option>
                <option value="date">Third Term</option>
              </select>
            </div>
          </form>
        </div>
        <div>
          <ul className="mt-6 flex justify-center  items-center gap-4">
            <li className="list-none">
              <Link
                className="px-5 py-2  bg-slate-300 rounded-lg"
                to="/student/profile"
              >
                cancel
              </Link>
            </li>
            <li>
              <Link
                to="/student/resultt"
                className="px-6 py-2 rounded-lg bg-yellow-600"
              >
                view{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export { StudentResult };
