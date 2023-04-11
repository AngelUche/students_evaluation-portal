// jshint esversion:6
interface PaginationProps {
    currentPage: number
    totalPageLinks: number
    onPrevPage: () => void
    onNextPage: () => void
    changeCurrentPage: (pageNumber: number) => void
}


function Pagination({ totalPageLinks, onPrevPage, onNextPage, changeCurrentPage, currentPage }: PaginationProps) {

    const pageNumbers = [...Array(totalPageLinks + 1).keys()].slice(1);

    function handlePrevClick() {
        onPrevPage();
    }

    function handleNextClick() {
        onNextPage();
    }

    return (
        <div>
            <ul className="flex shadow-sm w-max items-stretch">

                {/* Previous button */}
                <li><button className="p-[0.4rem] px-3 bg-gray-200 text-[#534f4f] hover:bg-[#c9c4c4]"  onClick={handlePrevClick}>&lsaquo;</button></li>
                
                {/* Display total page number buttons */}
                {pageNumbers.map((pageNumber: number) => {
                    return (
                        <li key={pageNumber} className={`cursor-pointer flex items-center p-[0.4rem] px-3 mx-[0.1rem] text-xs hover:bg-blue-500 bg:text-white ${currentPage === pageNumber && "bg-blue-500 text-white"}`} onClick={() => changeCurrentPage(pageNumber)}><span>{pageNumber}</span></li>
                    );
                })}

                {/* Next button */}
                <li><button className="p-[0.4rem] px-3  bg-gray-200 text-[#534f4f] hover:bg-[#c9c4c4]" onClick={handleNextClick}>&rsaquo;</button></li>
            </ul>
        </div>
    );
}

export { Pagination };
