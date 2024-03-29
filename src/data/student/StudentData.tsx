// fetch result data from the server using the ID
import { BiPhoneCall, BiMaleFemale } from "react-icons/bi";
import { MdError, MdSchool } from "react-icons/md";
import { AiFillHome, AiOutlineCalendar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

export const StudentDataBase = [
  {
    id: 1,
    icon: <BsFillPersonFill size={25} />,
    name: "First name",
    value: "Uche",
  },
  {
    id: 2,
    icon: <BsFillPersonFill size={25} />,
    name: "last name",
    value: "Orji",
  },
  {
    id: 3,
    icon: <BsFillPersonFill size={25} />,
    name: "Other Name",
    value: "Esere",
  },
  {
    id: 4,
    icon: <BiPhoneCall size={25} />,
    name: "Phone number",
    value: "+23480568589974",
  },
  {
    id: 5,
    icon: <AiFillHome size={25} />,
    name: "adress",
    value: "garki2 abuja",
  },
  {
    id: 6,
    icon: <BiMaleFemale size={25} />,
    name: "gender",
    value: "Female",
  },
  {
    id: 7,
    icon: <MdError size={25} />,
    name: "designation",
    value: "student",
  },
  {
    id: 8,
    icon: <MdSchool size={25} />,
    name: "Class",
    value: "SS1",
  },
  {
    id: 9,
    icon: <AiOutlineCalendar size={25} />,
    name: "Registered date",
    value: "20th january 2023",
  },
];

// STUDENT NAMES AND CLASS FROM DATABASE
export const StudentName = {
  id: 1,
  name: "orji uche",
  StudentId: "1234459575",
};

export const StudentClass = {
  id: 2,
  name: "Designation",
  StudentId: "Student",
};
