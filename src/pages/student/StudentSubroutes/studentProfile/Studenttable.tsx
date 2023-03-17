import login from "../../../../assets/login.jpg";
import { BiPhoneCall, BiMaleFemale } from "react-icons/bi";
import { MdError, MdSchool } from "react-icons/md";
import { AiOutlineMail, AiFillHome, AiOutlineCalendar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const Studenttable = () => {
  return (
    <>
      {/* STUDENNT PROFILE TABLE */}
      <section
        className="text-black fixed top-28  left-9 right-9  lg:left-72 bg-orange-50
        bottom-24 rounded-lg lg:right-16 lg:ml-20 lg:mr-8 overflow-hidden
        z-10"
      >
        {/* PROFILE INFORMATION */}
        <section className=" flex justify-between md:ml-12 md:mr-80 mt-10 ml-8">
          <div className=" flex gap-2">
            <div className="w-16 h-12 md:w-20 md:h-16 ml-1 overflow-hidden rounded-full">
              {/* student profile */}
              <img
                src={login}
                alt="logo"
                className="w-full h-full overflow-hidden block"
              />
            </div>
            <div className="w-2/3 text-start ml-2 ">
              <p className="font-bold text-xl uppercase text-red-900">
                Orji Uche
              </p>
              <p className=" text-sm">ID:12345</p>
            </div>
          </div>
          <div className="w-2/3 text-center mr-10 mt-4">
            <p className="text-xs font-semibold">
              Designation:{" "}
              <span className="font-semibold text-lg ">Student</span>
            </p>
          </div>
        </section>

        {/* PROFILE TABLE */}
        <div>
          <table
            className="border-collapse border border-zinc-100
             bg-white text-black mx-auto my-auto mt-10 rounded-md  
             overflow-hidden w-full md:w-11/12  capitalize felx justify-center items-center"
          >
            <tbody className="rounded:xl h-16">
              <tr>
                <td className="border-4  border-collapse rounded-md w-1/2 ">
                  <div className="flex gap-2 md:gap-5 ml-5">
                    <div className="fex items-center my-auto">
                      <BsFillPersonFill size={25} color="gray" />
                    </div>
                    <div>
                      <p className="text-xs">First Name</p>
                      <h1 className="text-sm lg:text-lg text-red-900 font-bold">
                        Uche
                      </h1>
                    </div>
                  </div>
                </td>
                <td className="border-4  border-collapse rounded-md">
                  <div className="flex gap-2 md:gap-5  ml-5">
                    <div className="fex items-center my-auto ">
                      <BsFillPersonFill size={25} color="gray" />
                    </div>
                    <div>
                      <p className="text-xs ">last name</p>
                      <h1 className="text-sm lg:text-lg text-red-900 font-bold">
                        orji
                      </h1>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody className="rounded:xl h-16">
              <tr>
                <td className="border-4  border-collapse rounded-md">
                  <div className="flex gap-2 md:gap-5 ml-5">
                    <div className="fex items-center my-auto">
                      <BsFillPersonFill size={25} color="gray" />
                    </div>
                    <div>
                      <p className="text-xs">user name</p>
                      <h1 className="text-sm lg:text-lg text-red-900 font-bold">
                        angeluche
                      </h1>
                    </div>
                  </div>
                </td>
                <td className="border-4  border-collapse rounded-md">
                  <div className="flex gap-2 md:gap-5 ml-5">
                    <div className="fex items-center my-auto">
                      <AiOutlineMail size={25} color="gray" />
                    </div>
                    <div>
                      <p className="text-xs ">email</p>
                      <h1 className="text-sm lg:text-lg text-red-900 font-bold lowercase">
                        ucheorji9974@gmail.com
                      </h1>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody className="rounded:xl h-16">
              <tr>
                <td className="border-4  border-collapse rounded-md">
                  <div className="flex gap-2 md:gap-5">
                    <div className="fex items-center my-auto ml-5">
                      <BiPhoneCall size={25} color="gray" />
                    </div>
                    <div>
                      <p className="text-xs">phone number</p>
                      <h1 className="text-sm lg:text-lg text-red-900 font-bold">
                        08068589974
                      </h1>
                    </div>
                  </div>
                </td>
                <td className="border-4  border-collapse rounded-md">
                  <div className="flex gap-2 md:gap-5 ml-5">
                    <div className="fex items-center my-auto">
                      <AiFillHome size={25} color="gray" />
                    </div>
                    <div>
                      <p className="text-xs">Adress</p>
                      <h1 className="text-sm lg:text-lg text-red-900 font-bold">
                        garki2 abuja
                      </h1>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody className="rounded:xl h-16">
              <tr>
                <td className="border-4  border-collapse rounded-md">
                  <div className="flex gap-2 md:gap-5">
                    <div className="fex items-center ml-5 my-auto">
                      <BiMaleFemale size={25} color="gray" />
                    </div>
                    <div>
                      <p className="text-xs">gender</p>
                      <h1 className="text-sm lg:text-lg text-red-900 font-bold">
                        female
                      </h1>
                    </div>
                  </div>
                </td>
                <td className="border-4  border-collapse rounded-md">
                  <div className="flex gap-2 md:gap-5">
                    <div className="fex items-center ml-5 my-auto">
                      <MdError size={25} color="gray" />
                    </div>
                    <div>
                      <p className="text-xs">Designation</p>
                      <h1 className="text-sm lg:text-lg text-red-900 font-bold">
                        student
                      </h1>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody className="rounded:xl h-16">
              <tr>
                <td className="border-4  border-collapse rounded-md">
                  <div className="flex gap-2 md:gap-5">
                    <div className="fex items-center ml-5 my-auto">
                      <MdSchool size={25} color="gray" />
                    </div>
                    <div>
                      <p className="text-xs">class</p>
                      <h1 className="text-sm lg:text-lg text-red-900 font-bold uppercase">
                        ss1
                      </h1>
                    </div>
                  </div>
                </td>
                <td className="border-4  border-collapse rounded-md">
                  <div className="flex gap-2 md:gap-5">
                    <div className="fex items-center ml-5 my-auto">
                      <AiOutlineCalendar size={25} color="gray" />
                    </div>
                    <div>
                      <p className="text-xs">registered date</p>
                      <h1 className="text-sm lg:text-lg text-red-900 font-bold">
                        20th january 2023
                      </h1>
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
