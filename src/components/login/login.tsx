import logo from "../../assets/logo.png";
import coridor from "../../assets/coridor.jpg";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate, NavLink } from "react-router-dom";

const user = "admin";

const Login = () => {
  const navigate = useNavigate();

  function NavigateToAdminDashbord() {
    navigate("/admin");
  }

  return (
    <div className="w-full h-screen relative">
      <div className="home-image-con">
        <img src={coridor} alt="coridor" className="home-image" />
      </div>
      <div
        className="w-full h-screen flex flex-col pt-12 
        items-center"
      >
        <div className="overflow-hidden w-48 h-26 mr-16 ">
          <img className="w-full h-full block" src={logo} alt="logo" />
        </div>
        <div>
          <h1>Welcome Back, Kindly Login here</h1>
          <form action="">
            <div>
              <i>
                <BsFillPersonFill />
              </i>
              <input
                type="text"
                placeholder="confirm Password"
                className="border-2 rounded-md text-xs outline-none
              w-48 h-8  mb-6"
              />
            </div>
            <div>
              <select
                name="result"
                id="result"
                className="border-2 rounded-md text-xs w-48 h-8  mb-6"
              >
                <option value="date">2023/2022</option>
              </select>
            </div>
            <div>
              <i>
                <BsFillPersonFill />
              </i>
              <input
                type="password"
                placeholder="confirm Password"
                className="border-2 rounded-md text-xs
              w-48 h-8  mb-6 outline-none"
              />
            </div>
          </form>
        </div>
        {/* <button
          className="bg-amber-300"
          onClick={() => {
            NavigateToAdminDashbord();
          }}
        >
          login
        </button> */}
        <NavLink to="/admin">login</NavLink>
      </div>
    </div>
  );
};

export { Login };
