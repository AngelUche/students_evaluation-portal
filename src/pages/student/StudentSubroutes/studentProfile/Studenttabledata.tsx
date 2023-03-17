import { BiPhoneCall, BiMaleFemale } from "react-icons/bi";
import { MdErrorOutline, MdSchool } from "react-icons/md";
import { AiOutlineMail, AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

export const Studentdata = [
  {
    id: 1,
    icon: <BsFillPersonFill size={25} color="gray" />,
    info: "First name",
    Name: "Uche",
  },
  {
    id: 2,
    icon: <BsFillPersonFill size={25} color="gray" />,
    info: "Last Name",
    Name: "Orji",
  },

  {
    id: 3,
    icon: <BsFillPersonFill size={25} color="gray" />,
    info: "user Name",
    Name: "UcheOrji",
  },
  {
    id: 4,
    icon: <AiOutlineMail size={25} color="gray" />,
    info: "Email",
    Name: "ucheorji9974@gmail.com",
  },
  {
    id: 5,
    icon: <BiPhoneCall size={25} color="gray" />,
    info: "Phone number",
    Name: "08068589974",
  },
  {
    id: 6,
    icon: <AiFillHome size={25} color="gray" />,
    info: "Address",
    Name: "garki 2 Abuja",
  },
  {
    id: 7,
    icon: <BiMaleFemale size={25} color="gray" />,
    info: "gender",
    Name: "female",
  },
  {
    id: 8,
    icon: <MdErrorOutline size={25} color="gray" />,
    info: "desigantion",
    Name: "student",
  },
  {
    id: 9,
    icon: <MdSchool size={25} color="gray" />,
    info: "class",
    Name: "ss1",
  },
];
