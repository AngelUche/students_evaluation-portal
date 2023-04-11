// jshint esversion:6
import { StaffTableView } from "./staffTableView";
import { useState } from "react";
import { staffData } from "../../../../data/admin";
import { Pagination } from "../../pagination";
import { paginationData } from "../../../../utils/admin";

function StaffTable() {

    const [currentPage, setCurrentPage] = useState<number>(1);

    const recordsPerPage = 4;

    const { records, totalPageLinks, firstIndex } = paginationData(staffData, currentPage, recordsPerPage);

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
            <StaffTableView Users={records} SN={firstIndex} />
            <div className="mt-4">
                <Pagination totalPageLinks={totalPageLinks} onPrevPage={onPrevPage} onNextPage={onNextPage} changeCurrentPage={changeCurrentPage} currentPage={currentPage} />
            </div>
        </>
    );
}

export { StaffTable }