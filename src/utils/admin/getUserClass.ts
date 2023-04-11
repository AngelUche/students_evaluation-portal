// jshint esversion:6

import { classData } from "../../data/admin";

function getUserClass(id: string) {
    return classData.find((classdata) => classdata.id === id);
}

export { getUserClass }