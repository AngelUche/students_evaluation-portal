import logo from "../../assets/logo.png";
// import coridor from "../../assets/coridor.jpg";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import { KeySVG } from "../../assets/admin";

// }
const Login = () => {
  // DEFINENING CHOOKS TO HANDLE THE INPUT
  const [UserId, setUserId] = useState("");

  // DEFINENING CHOOKS TO HANDLE THE PASSWORD
  const [UserPassword, setUserPassword] = useState("");

  const navigate = useNavigate();

  // FUNCTION TO HANDLE IN CHANGE EVENT

  // FUNCTION TO NAVIGATE TO THE VARIOUS USER DASHBOARD
  function NavigateToAdminDashbord(e: any) {
    e.preventDefault();

    const UserIdType = UserId.substring(0, 2).toLowerCase();

    switch (UserIdType) {
      case "st": {
        navigate("/student");
        break;
      }
      case "ad": {
        navigate("/admin");
        break;
      }
      default:
        break;
    }
  }

  return (
    // BACKGROUND IMAGE SET UP
    <div className="w-full h-screen relative bg-loginBgImg bg-cover bg-no-repeat bg-center">
      {/* <div className="home-image-con">
        <img src={coridor} alt="coridor" className="home-image" />
      </div> */}

      <div className="absolute inset-0 bg-[#ffffff6e] flex flex-col justify-center items-center">
        {/* LOGO SET UP */}
        <div className="absolute top-[5vh] left-[50%] translate-x-[-50%] overflow-hidden">
          <img className="w-full h-full" src={logo} alt="logo" />
        </div>

        {/* MAIN PAGE FOR WELCOME BACK */}
        <div className="mt-[50px] bg-sideNavbg w-[24rem] h-[24rem] flex flex-col pt-10 px-10 rounded-lg">
          <h1 className="font-bold mb-3 self-start text-gray-100">
            Welcome Back, Kindly Login Here
          </h1>

          <div className="flex flex-col mt-3 gap-y-14">
            <form
              className="flex flex-col gap-y-9"
              onSubmit={NavigateToAdminDashbord}
            >
              {/* ID FIELD DATA */}
              <div className="relative h-12">
                <i>
                  <BsFillPersonFill
                    className="absolute top-[50%] translate-y-[-50%] left-3"
                    color="gray"
                    size={22}
                  />
                </i>
                <input
                  type="text"
                  placeholder="ID"
                  className="border-2 focus:border-amber-700 rounded-sm pl-[40px]
                  w-full h-full mb-6 outline-none"
                  value={UserId}
                  required
                  onChange={(e) => {
                    setUserId(e.target.value);
                  }}
                />
              </div>

              <div>
                {/* PASSWORD FIELD */}
                <div className="flex text-xs justify-between mr-2 font-semibold  text-amber-500 mb-2 ">
                  <h1>Forgot password</h1>
                  <button>Keep me logged in</button>
                </div>

                <div className="relative h-12">
                  <span className="absolute top-[50%] translate-y-[-50%] text-[grey] left-3">
                    <KeySVG size={22} />
                  </span>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="border-2 focus:border-amber-700 rounded-sm pl-[40px] w-full h-full mb-6 outline-none"
                    required
                    value={UserPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full mt-5 flex justify-center">
                <button
                  type="submit"
                  className="px-[60px] py-[10px] md:px-[100px] rounded-[6px] bg-amber-700 text-white capitalize"
                >
                  login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Login };
