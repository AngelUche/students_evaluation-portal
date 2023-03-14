import login from "../../../../assets/login.jpg";

const list = { name: "uche", class: "ss1", userStatus: "Student" };

const StudentMainHome = () => {
  return (
    <>
      <section className="md:ml-72">
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
          className=" student-image left-0  lg:left-1/4 fixed top-0 h-screen 
          botttom-0 right-0 bg-black opacity-60"
        ></div>

        {/* STUDENT'S  MAIN PAGE SET UP */}
        <div className=" w-full h-full">
          <section
            className="text-slate-50 flex fixed right-0 left-20 student-image lg:left-60
             capitalize pt-20 lg:pt-11 pl-8 lg:justify-around justify-between "
          >
            <div className=" mr-1">
              {/* student's name */}
              <p className="ml-2">
                hello
                <span className="ml-2 uppercase text-amber-500 font-bold">
                  {list.name}
                </span>
              </p>
            </div>
            <div className="p-2 font-semibold">
              {/* student class */}
              <p className="text-xs">class</p>
              <p className="text-lg">{list.class}</p>
            </div>
            <div className="flex mr-8 w-26">
              <div className="w-3/4 text-start">
                <p>{list.name}</p>
                <p>{list.userStatus}</p>
              </div>
              <div className=" w-10 h-10 ml-1 overflow-hidden rounded-full">
                {/* student profile  image*/}
                <img
                  src={login}
                  alt="logo"
                  className="w-full h-full overflow-hidden block"
                />
              </div>
            </div>
          </section>
          <section
            className="student-image md:left-1/4 text-slate-50 fixed right-0 flex-col 
            gap-y-9 h-28 items-center text-lg top-72 flex  justify-center"
          >
            <h1 className="font-bold">
              Good Day
              <span className="text-amber-500 uppercase">{list.name}</span>
            </h1>
            <h1>Welcome to your Dashboard</h1>
          </section>
          EDUCATION DESCRIPTION
          <section
            className="text-slate-50 fixed right-0 left-0 h-32
            items-center text-lg bottom-24 flex justify-center lg:left-1/4"
          >
            <div className="w-96 md:w-3/5 text-center">
              Education is the passport to the future, for tomorrow belongs to
              those who prepare for it today.
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default StudentMainHome;
