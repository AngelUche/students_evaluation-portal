// jshint esversion:6

import { studentData } from "../../data/admin";
import { staffData } from "../../data/admin";

function getTotalUsers() {

    const studentCount = studentData.reduce((acc, student) => {
        return acc + 1;
    }, 0);

    const staffCount = staffData.reduce((acc, staff) => {
        return acc + 1;
    }, 0);

    return (
        { studentCount, staffCount, teacherCount: 12 }
    );
}

export { getTotalUsers };