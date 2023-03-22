import login from "../../../assets/login.jpg";

const BackGroundComp = () => {
  return (
    <>
      {/* BACKGROUND IMAGE AND BLUR */}
      <div
        className="student-image h-screen fixed left-0 top-0
         bottom-0 right-0 lg:left-60"
      >
        <img
          src={login}
          alt="coridor"
          className="object-cover object-center block w-full h-full"
        />
      </div>
      {/* BACKGROUND BLUR SET UP */}
      <div
        className=" student-image left-0  lg:left-[15%] fixed top-0 h-screen 
          botttom-0 right-0 bg-black opacity-60"
      ></div>
    </>
  );
};

export default BackGroundComp;
