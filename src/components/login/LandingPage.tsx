// jshint esversion:6
import logo from "../../assets/logo.png";
import coridor from "../../assets/coridor.jpg";
import { GetStarted } from "../button";

function LandingPage() {
  return (
    <>
      <div className="w-full h-screen relative">
        <div className="home-image-con">
          <img src={coridor} alt="coridor" className="home-image" />
        </div>
        <div
          className="w-full h-screen flex flex-col pt-32 gap-y-20 
        items-center"
        >
          <div className="overflow-hidden w-48 h-26 mr-16 ">
            <img className="w-full h-full block" src={logo} alt="logo" />
          </div>
          <p
            className="font-bold text-lg text-black px-14 text-center md:mb-16 
          mb-12 md:w-3/4"
          >
            welcome to the Academic Profile of students. A place where the
            students interact with their teachers and parents has direct
            intereaction with the teachers
          </p>
          <GetStarted />
        </div>
      </div>
    </>
  );
}

export { LandingPage };
