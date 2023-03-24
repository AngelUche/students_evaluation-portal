import logo from "../../assets/logo.png";
import coridor from "../../assets/coridor.jpg";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";

// }
const Login = () => {
  // DEFINENING CHOOKS TO HANDLE THE INPUT
  const [UserId, setUserId] = useState("");

  // FUNCTION TO HANDLE IN CHANGE EVENT

  // FUNCTION TO NAVIGATE TO THE VARIOUS USER DASHBOARD
  const navigate = useNavigate();
  function NavigateToAdminDashbord() {
    navigate("/admin");
  }

  return (
    // BACKGROUND IMAGE SET UP
    <div className="w-full h-screen relative">
      <div className="home-image-con">
        <img src={coridor} alt="coridor" className="home-image" />
      </div>
      <div
        className="w-full h-scree
        items-center"
      >
        {/* LOGO SET UP */}
        <div className="overflow-hidden w-48 h-26 mr-16 mt-9">
          <img className="w-full h-full block" src={logo} alt="logo" />
        </div>
        {/* MAIN PAGE FOR WELCOME BACK */}
        <div
          className="mt-[50px] bg-sideNavbg w-[24rem] h-[24rem]
        flex flex-col items-center pt-10 rounded-lg "
        >
          <h1 className="font-bold mb-3  text-gray-100">
            Welcome Back, Kindly Login Here
          </h1>

          <div className="flex flex-col gap-y-14">
            <form action="" className="flex flex-col gap-y-5">
              {/* ID FIELD DATA */}
              <div className="relative">
                <i>
                  <BsFillPersonFill
                    className="absolute top-[8px] left-3"
                    color="gray"
                  />
                </i>
                <input
                  type="name"
                  placeholder="ID"
                  className="border-2 capitalize rounded-md text-xs pl-[40px]
                  w-64 md:w-80 h-8  mb-6 outline-none"
                  onChange={(e) => {
                    setUserId(e.target.value);
                  }}
                />
              </div>

              <div className="relative">
                {/* PASSWORD FIELD */}
                <div
                  className="flex text-xs justify-between mr-2
                 font-semibold  text-amber-500 mb-2 "
                >
                  <h1>Forgot password</h1>
                  <button>Keep me logged in</button>
                </div>
                <i>
                  <BsFillPersonFill
                    className="absolute top-[30px] left-3"
                    color="gray"
                  />
                  {/* PASSWORD INPUT */}
                </i>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="border-2 rounded-md text-xs pl-[40px]
                w-64 md:w-80 h-8  mb-6 outline-none"
                />
              </div>
            </form>
            <div className="flex mr-14 justify-center md:mr-[58px]">
              <button
                onClick={NavigateToAdminDashbord}
                className="px-[60px] py-[10px] md:px-[100px] md:ml-9 
                rounded-[6px] bg-amber-700 text-white capitalize ml-10"
              >
                login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Login };
