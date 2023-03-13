import { Link } from "react-router-dom";
const StudentPasswordReset = () => {
  return (
    <div>
      <>
        <div className="bg-zinc-500 fixed w-screen h-screen opacity-30"></div>
        <div className="bg-white w-64 lg:w-72 lg:h-auto h-auto  my-36 rounded-2xl fixed z-20 top-10 left-1/4 lg:left-2/4">
          <h1 className="mt-4 font-bold text-red-900 mb-2">View Result</h1>
          <div>
            <form>
              <div>
                <label
                  htmlFor="result"
                  className=" font-bold text-xs flex ml-12 mt-7"
                >
                  current Password
                </label>
                <input
                  type="text"
                  placeholder="Enter Current Password"
                  className="border-2 rounded-md text-xs
                 w-48 h-8  mb-6 hover:cursor-pointer"
                />
              </div>

              <div>
                <label
                  htmlFor="term"
                  className=" font-bold text-xs flex ml-12 mt-2 "
                >
                  New Password
                </label>
                <input
                  type="text"
                  placeholder="Enter new Password"
                  className="border-2 rounded-md text-xs
                 w-48 h-8  mb-6 hover:cursor-pointer"
                />
              </div>
              <div>
                <label
                  htmlFor="term"
                  className=" font-bold text-xs flex ml-12 mt-2 "
                >
                  Confirm Password
                </label>
                <input
                  type="text"
                  placeholder="confirm Password"
                  className="border-2 rounded-md text-xs
                 w-48 h-8  mb-6 hover:cursor-pointer"
                />
              </div>
            </form>
          </div>
          <div>
            <ul className="mt-2 mb-6 flex justify-center  items-center gap-4">
              <li className="list-none">
                <Link
                  className="px-5 py-2  bg-slate-300 rounded-lg"
                  to="/student/profile"
                >
                  cancel
                </Link>
              </li>
              <li>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-yellow-600"
                >
                  view
                </button>
              </li>
            </ul>
          </div>
        </div>
      </>
    </div>
  );
};

export { StudentPasswordReset };
