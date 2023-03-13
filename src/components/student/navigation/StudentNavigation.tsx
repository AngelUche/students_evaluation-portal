import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { AiFillHome, AiFillFile, AiOutlineLogout } from "react-icons/ai";
import { BsFillPersonFill, BsKeyFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const StudentNavigation = () => {
  return (
    <div className="fixed top-0 bottom-0 bg-slate-400 z-10 left-0 w-48 md:w-60">
      <ul>
        <li>
          <NavLink to="">
            <span>
              <AiFillHome />
            </span>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="profile">
            <span>
              <BsFillPersonFill />
            </span>
            <span>View Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="password">
            <span>
              <BsFillPersonFill />
            </span>
            <span>Reset Password</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="logout">
            <span>
              <BsFillPersonFill />
            </span>
            <span>Log Out</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export { StudentNavigation };
