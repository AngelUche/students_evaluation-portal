import login from "../../../../assets/login.jpg";
import { StudentDataBase } from "../../../../data/student";
import { BiPhoneCall, BiMaleFemale } from "react-icons/bi";
import { MdError, MdSchool } from "react-icons/md";
import { AiFillHome, AiOutlineCalendar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { useState } from "react";

const Studenttable = () => {
  const [NameValue, setNameValue] = useState("");
  return (
    <>
      {/* STUDENNT PROFILE TABLE */}
      <section
        className="text-white absolute top-[75px] left-9 right-9  lg:left-72
         bg-sideNavbg bottom-[79px] rounded-lg lg:right-16 lg:ml-20 lg:mr-8 
         overflow-hidden z-10 "
      >
        {/* PROFILE INFORMATION */}
        <section
          className=" flex justify-between items-center gap-3 
        md:ml-12 md:mr-80 mt-7 ml-8 "
        >
          <div className=" flex items-center w-[60%]">
            <div>
              <p className="font-bold text-lg lg:text-xl uppercase text-amber-500">
                Orji Uche
              </p>
              <p className=" text-sm">ID:12345</p>
            </div>
          </div>
          <div className="w-2/3 text-center mr-10">
            <p className="text-sm font-semibold">
              Designation:
              <span className="font-bold text-lg ml-1">Student</span>
            </p>
          </div>
        </section>

        {/* PROFILE TABLE */}

        <div>
          <div
            className="border-collapse border border-zinc-100
             bg-white text-black mx-auto my-auto mt-4 rounded-md  
             overflow-hidden w-full md:w-11/12 capitalize felx 
             justify-center items-center"
          >
            <div
              className="grid lg:grid-cols-2 lg:gap-y-1 gap-x-[1px]
               overflow-y-scroll h-[450px] lg:h-[500px] 
            lg:overflow-y-auto pb-7"
            >
              {StudentDataBase.map((studentData) => {
                return (
                  <>
                    <div
                      className=" flex row gap-3 border-2 items-center pl-5 pb-3 pt-3"
                      key={studentData.id}
                    >
                      <div>{studentData.icon}</div>
                      <div className="">
                        <h1 className="text-amber-900 font-bold">
                          {studentData.name}
                        </h1>
                        <div>{studentData.value}</div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Studenttable;
