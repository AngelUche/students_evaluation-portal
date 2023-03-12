import school from "../../../assets/school.jpg";

import Parenttable from "./Parenttable";

const ParentProfile = () => {
  return (
    <section className="">
      <div>
        {/* BSCKROOUND SETUP  */}
        <div
          // front blur
          className=" student-image left-0  md:left-1/4 fixed top-0 h-screen 
      botttom-0 right-0 bg-gradient-to-b from-black opacity-70"
        ></div>

        <div
          // BACKGROUND IMAGE
          className="student-image h-screen fixed left-0 top-0
         bottom-0 right-0 md:left-60 -z-20"
        >
          <img
            src={school}
            alt="coridor"
            className="  object-cover object-center block w-full h-full"
          />
        </div>
      </div>
      <Parenttable />
    </section>
  );
};

export { ParentProfile };
