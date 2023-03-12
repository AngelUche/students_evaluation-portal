import login from "../../../assets/login.jpg";

const Studenttable = () => {
  return (
    <>
      {/* STUDENNT PROFILE TABLE */}
      <section
        className="text-black fixed top-28 md:left-64 bg-orange-50
         left-6 right-4 bottom-24 rounded-lg md:right-9 md:ml-20 md:mr-8 overflow-hidden
        z-10"
      >
        {/* PROFILE INFORMATION */}
        <section className=" flex justify-between md:ml-12 md:mr-80 mt-10 ml-8">
          <div className=" flex gap-2">
            <div className="w-16 h-12 md:w-24 md:h-16 ml-1 overflow-hidden rounded-full">
              {/* student profile */}
              <img
                src={login}
                alt="logo"
                className="w-full h-full overflow-hidden block"
              />
            </div>
            <div className="w-2/3 text-start ml-2 ">
              <p className="font-bold text-xl uppercase">Uche</p>
              <p className=" text-sm">ID:12345</p>
            </div>
          </div>
          <div className="w-2/3 text-center mr-10 mt-4">
            <p className="text-lg font-semibold">
              Designation: <span className="font-normal">Student</span>{" "}
            </p>
          </div>
        </section>

        {/* PROFILE TABLE */}
        <div>
          <table
            className="border-collapse border border-zinc-900
             bg-white text-black mx-auto my-auto mt-10 rounded-md 
             overflow-hidden md:w-11/12 w-10/12"
          >
            <tbody className="rounded:xl h-16">
              <tr>
                <td className="border-4  border-collapse rounded-md">
                  <div className="flex gap-2 md:gap-5">
                    <div className="fex items-center my-auto">image</div>
                    <div>
                      <p className="text-xs">First Name</p>
                      <h1 className="text-lg">Uche</h1>
                    </div>
                  </div>
                </td>
                <td className="border-4  border-collapse rounded-md">
                  <div className="flex gap-2 md:gap-5">
                    <div className="fex items-center my-auto">image</div>
                    <div>
                      <p className="text-xs">First Name</p>
                      <h1 className="text-lg">Uche</h1>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody className="rounded:xl h-16">
              <tr>
                <td className="border-4  border-collapse rounded-md">
                  <div className="flex gap-2 md:gap-5">
                    <div className="fex items-center my-auto">image</div>
                    <div>
                      <p className="text-xs">First Name</p>
                      <h1 className="text-lg">Uche</h1>
                    </div>
                  </div>
                </td>
                <td className="border-4  border-collapse rounded-md">
                  <div className="flex gap-2 md:gap-5">
                    <div className="fex items-center my-auto">image</div>
                    <div>
                      <p className="text-xs">First Name</p>
                      <h1 className="text-lg">Uche</h1>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody className="rounded:xl h-16">
              <tr>
                <td className="border-4  border-collapse rounded-md">
                  <div className="flex gap-2 md:gap-5">
                    <div className="fex items-center my-auto">image</div>
                    <div>
                      <p className="text-xs">First Name</p>
                      <h1 className="text-lg">Uche</h1>
                    </div>
                  </div>
                </td>
                <td className="border-4  border-collapse rounded-md">
                  <div className="flex gap-2 md:gap-5">
                    <div className="fex items-center my-auto">image</div>
                    <div>
                      <p className="text-xs">First Name</p>
                      <h1 className="text-lg">Uche</h1>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody className="rounded:xl h-16">
              <tr>
                <td className="border-4  border-collapse rounded-md">
                  <div className="flex gap-2 md:gap-5">
                    <div className="fex items-center my-auto">image</div>
                    <div>
                      <p className="text-xs">First Name</p>
                      <h1 className="text-lg">Uche</h1>
                    </div>
                  </div>
                </td>
                <td className="border-4  border-collapse rounded-md">
                  <div className="flex gap-2 md:gap-5">
                    <div className="fex items-center my-auto">image</div>
                    <div>
                      <p className="text-xs">First Name</p>
                      <h1 className="text-lg">Uche</h1>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody className="rounded:xl h-16">
              <tr>
                <td className="border-4  border-collapse rounded-md">
                  <div className="flex gap-2 md:gap-5">
                    <div className="fex items-center my-auto">image</div>
                    <div>
                      <p className="text-xs">First Name</p>
                      <h1 className="text-lg">Uche</h1>
                    </div>
                  </div>
                </td>
                <td className="border-4  border-collapse rounded-md">
                  <div className="flex gap-2 md:gap-5">
                    <div className="fex items-center my-auto">image</div>
                    <div>
                      <p className="text-xs">First Name</p>
                      <h1 className="text-lg">Uche</h1>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Studenttable;
