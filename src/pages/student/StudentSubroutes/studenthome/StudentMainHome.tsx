import BackGroundComp from "../BackGroundComp";
import { ViewResultContext } from "../../../../contexts/student";
import { useContext, useState, useEffect } from "react";
import { StudentLogOutModal } from "../studentLogOut/StudentLogOut";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "../../../../App.css";

import { ListOfQuotes } from "../../../../data";

const list = { name: "uche", class: "ss1", userStatus: "Student" };

const StudentMainHome = () => {
  // QUOTES SATTE SET UP
  const [Quotes, setQuotes] = useState(ListOfQuotes);
  const [index, setIndex] = useState<number>(0);
  // CONTEXT SET UP TO DISPLAY LOGOUT PAGE ON THE HOME PAGE
  const { showviewResult } = useContext(ViewResultContext);

  //SETTING UP THE NEXT SLIDE FUNCTION
  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > ListOfQuotes.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  // SETTING UP LAST SLIDE FUNCTION
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = ListOfQuotes.length - 1;
      }
      return index;
    });
  };
  // USEEFECT SETP UP FOR TIMER UPDATE ON THE SLIDER
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > ListOfQuotes.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 7000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <>
      <section className="md:ml-[300px]">
        {/*IMAGE  BACKGROUND SET */}
        <BackGroundComp />
        {/* LOG OUT MODAL */}
        {showviewResult.resultstatus && <StudentLogOutModal />}
        {/* STUDENT'S  MAIN PAGE SET UP */}
        <div className=" w-full h-full">
          <section
            className="text-slate-50 flex fixed right-0 left-0 student-image lg:left-40
             capitalize pt-[80px] lg:pt-11 justify-center gap-14 md:justify-evenly md:gap-8"
          >
            <div className=" mr-7 mt-3">
              <p className="ml-2">
                hello
                <span className="ml-2 uppercase text-amber-500 font-bold text-2xl">
                  {list.name}
                </span>
              </p>
            </div>
            <div className="font-semibold">
              <p className="text-sm">class</p>
              <p className="text-3xl text-amber-500 uppercase ">{list.class}</p>
            </div>
          </section>
          <section
            className="md:left-[20%] text-gray-200 fixed left-0 right-0 flex-col 
            gap-y-9 h-28 items-center text-lg top-[250px] flex justify-center lg:text-2xl"
          >
            <h1 className="font-bold">
              Good Day
              <span className="text-amber-500 text-2xl ml-3 uppercase">
                {list.name}
              </span>
            </h1>
            <h1>Welcome to your Result Dashboard</h1>
          </section>
          {/* EDUCATION DESCRIPTION */}
          <section
            className="text-yellow-400 fixed right-0 left-0 h-[150px]
           text-2xl bottom-[120px] flex justify-center lg:left-[18%] 
           overflow-hidden"
          >
            {ListOfQuotes.map((quote, nextIndex) => {
              let position = "QuotesNextSlide";
              if (nextIndex === index) {
                position = "QuotesActiveSlide";
              }
              if (
                nextIndex === index - 1 ||
                (index === 0 && nextIndex === ListOfQuotes.length - 1)
              ) {
                position = "QuotesLasttSlide";
              }
              return (
                <div
                  className={`${position} QuotesHome px-5 md:w-3/5  text-lg md:text-2xl
                  h-full`}
                  key={quote.id}
                >
                  {quote.quote}
                </div>
              );
            })}
            <button
              className=" absolute top-[53px] md:left-[12%] left-[4%]"
              onClick={prevSlide}
            >
              <FiChevronLeft size={25} color="gray" />
            </button>
            <button
              className=" absolute top-[53px] md:right-[12%] right-[4%]"
              onClick={nextSlide}
            >
              <FiChevronRight size={25} color="gray" />
            </button>
          </section>
        </div>
      </section>
    </>
  );
};

export default StudentMainHome;
