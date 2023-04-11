import { useState } from "react";

// jshint esversion:6
function SearchBar() {
    const [searchItem, setSearchItem] = useState<string>("");

    return (
        <>
            <div className="w-full h-full relative">
                <span className="cursor-pointer absolute top-[50%] left-3 translate-y-[-50%] text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </span>
                <input type="text" className="w-full h-full p-2 pl-10 outline-none bg-[#f5f1f1] focus:shadow-sm rounded focus:border" onChange={(e) => setSearchItem(e.target.value)} value={searchItem} placeholder="Search for student, teacher, document..." />
            </div>
        </>
    );
}

export { SearchBar }