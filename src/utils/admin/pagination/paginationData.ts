// jshint esversion:6

import { studentDataType } from "../../../data/admin"


function paginationData(Data: any[], currentPage: number, recordsPerPage: number) {

    // Get last index of the record of a requested page
    const lastIndex = currentPage * recordsPerPage;

    // const first Index of the record of a requested page
    const firstIndex = lastIndex - recordsPerPage;

    // const user Records
    const records = Data.slice(firstIndex, lastIndex);

    // Get total number of page links
    const totalPageLinks = Math.ceil(Data.length / recordsPerPage);

    return ({ records, totalPageLinks, firstIndex, lastIndex });
}

export { paginationData };