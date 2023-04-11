// jahint esversion:6
import { StudentTableView } from "./studentTableView";
import { useState } from "react";
import { studentData } from "../../../../data/admin";
import { Pagination } from "../../pagination";
import { paginationData } from "../../../../utils/admin";

function StudentTable() {

    const [currentPage, setCurrentPage] = useState<number>(1);

    const recordsPerPage = 5;

    const { records, totalPageLinks, firstIndex } = paginationData(studentData, currentPage, recordsPerPage);

    function onPrevPage() {
        if (currentPage !== (firstIndex + 1)) {
            setCurrentPage(currentPage - 1);
        }
    }

    function onNextPage() {
        if (currentPage !== totalPageLinks) {
            setCurrentPage(currentPage + 1);
        }
    }

    function changeCurrentPage(pageNumber: number) {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <StudentTableView Users={records} SN={firstIndex} />
            <div className="mt-4">
                <Pagination totalPageLinks={totalPageLinks} onPrevPage={onPrevPage} onNextPage={onNextPage} changeCurrentPage={changeCurrentPage} currentPage={currentPage} />
            </div>
        </>
    );
}

export { StudentTable }