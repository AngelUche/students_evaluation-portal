// jshint esversion:6
import logo from "../../assets/logo.png";
import coridor from "../../assets/coridor.jpg";

function Login() {
  return (
    <>
      <div className="w-full h-screen bg-hero- bg-no-repeat bg-center bg-cover">
        <div className="home-image-con">
          <img src={coridor} alt="coridor" className="home-image" />
        </div>
        <div className=" overflow-hidden fixed top-24 right-44">
          <img className="w-full h-full block" src={logo} alt="logo" />
        </div>
        <div
          className="w-full h-screen flex flex-col gap-3 justify-center 
        items-center"
        >
          <p className="font-bold text-2xl text-red-500">
            Welcome Back, kindly Login here
          </p>
        </div>
      </div>
    </>
  );
}

export { Login };
