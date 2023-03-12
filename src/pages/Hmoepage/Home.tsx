// importing the necessary components
import { GetStarted } from "../../components";
import coridor from "./assets/coridor.jpg";
import logo from "./assets/logo.png";

function Home() {
  return (
    <section className="Home-page-wraper">
      <div className="home-image-con">
        <img src={coridor} alt="coridor" className="home-image" />
      </div>
      <div className="logo-svg w-32 h-20 overflow-hidden fixed">
        <img className="w-full h-full block" src={logo} alt="logo" />
      </div>
      <div className=" ml-10 mr-32 w-4/5 h-80 mt-52 wrapper ">
        <h1
          className="text-4xl font-semibold 
        capitalize mt-32"
        >
          Student Performance Evaluation Portal
        </h1>
        <p className=" mt-8 text-grey-900 ml-24 mr-24 mb-8 font-semibold">
          A place where parents have access to their children's result
        </p>
        <h2 className="text-zinc-900 text-xl font-semibold capitalize">
          result portal
        </h2>
      </div>
      <div>
        <GetStarted />
      </div>
    </section>
  );
}

export { Home };
