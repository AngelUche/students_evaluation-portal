import axios from "axios";
import { useEffect } from "react";

// STUDENT DATA URL
const AllStudent = "https://academic-profiler.onrender.com//admin/students";

// FUNCTION TO FECT ALL STUDENTS
function FetchAllStudents() {
  const FtechData = async () => {
    try {
      const response = await axios(AllStudent);
      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {}, []);
}

// fetching academic sessiondata from the server
export const studdentTerms = [
  {
    id: 1,
    term: "First Term",
  },
  {
    id: 2,
    term: "Second Term",
  },
  {
    id: 3,
    term: "Third Term",
  },
];

export const Studentsession = [
  {
    id: 1,
    session: "2023/2022",
  },
  {
    id: 2,
    session: "2022/2021",
  },
  {
    id: 3,
    session: "2021/2020",
  },
];
