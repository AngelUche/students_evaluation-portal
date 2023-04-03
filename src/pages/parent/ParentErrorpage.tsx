import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const ParentErrorpage = () => {
  return (
    <div
      className="bg-black h-screen  text-white flex flex-col
      items-center pt-[100px] gap-4 font-bold
         h48 text-3xl"
    >
      <h1>Error 404</h1>
      <p>Back Home</p>
      <Link to="/student">
        <AiFillHome size={50} color="#f9c9e9" />
      </Link>
    </div>
  );
};

export default ParentErrorpage;
