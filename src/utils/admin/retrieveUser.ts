// jshint esversion:6

import { AllData } from "../../data/admin";

/**
 * 
 * @param id: Id used to retrieve user details from mock DB 
 * @returns User object containing details about User
 */
export function retrieveUserData(id: number | undefined) {
    // Get User Details
    const User = AllData.find((user) => user.id === id);
    return User;
}