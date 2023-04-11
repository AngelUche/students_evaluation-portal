import logo from "../../assets/logo.png";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import { KeySVG } from "../../assets/admin";

// }
const Login = () => {
  // DEFINENING HOOKS TO HANDLE THE INPUT
  const [PersonsLoggedin, setPersonsLoggedin] = useState({
    UserId: "",
    UserPassword: "",
  });

  const navigate = useNavigate();

  // FUNCTION TO HANDLE IN CHANGE EVENT

  // FUNCTION TO NAVIGATE TO THE VARIOUS USER DASHBOARD
  function NavigateToAdminDashbord(e: any) {
    e.preventDefault();
    // VARIABLE TO COLLECT THE DETAILS OF THE LOGGED IN USER
    const NewListEntry: any = { ...PersonsLoggedin };

    const UserIdType = PersonsLoggedin.UserId.substring(0, 2).toLowerCase();
    switch (UserIdType) {
      case "st": {
        navigate("/student");

        break;
      }
      case "ad": {
        navigate("/admin");
        break;
      }
      case "pa": {
        navigate("/parent");
        break;
      }
      case "sf": {
        navigate("/staff");
        break;
      }
      default:
        break;
    }
  }

  function HandleChange(e: any) {
    const name = e.target.name;
    const value = e.target.value;
    setPersonsLoggedin({ ...PersonsLoggedin, [name]: value });
  }

  return (
    // BACKGROUND IMAGE SET UP
    <div
      className="w-full h-screen relative bg-loginBgImg bg-cover
     bg-no-repeat bg-center"
    >
      {/* <div className="home-image-con">
        <img src={coridor} alt="coridor" className="home-image" />
      </div> */}

      <div className="absolute inset-0 bg-[rgba(0,0,0,0.43)] flex flex-col justify-center items-center">
        {/* LOGO SET UP */}
        <div
          className="absolute top-[7vh] left-[50%] translate-x-[-60%]
         overflow-hidden"
        >
          <img className="w-full h-full" src={logo} alt="logo" />
        </div>

        {/* MAIN PAGE FOR WELCOME BACK */}
        <div className="mt-[40px] bg-sideNavbg w-[24rem] h-[24rem] flex flex-col pt-10 px-10 rounded-lg">
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
                  value={PersonsLoggedin.UserId}
                  name="UserId"
                  required
                  onChange={HandleChange}
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
                    name="UserPassword"
                    value={PersonsLoggedin.UserPassword}
                    onChange={HandleChange}
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
