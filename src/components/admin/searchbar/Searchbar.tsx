import { useState } from "react";

// jshint esversion:6
function SearchBar() {
    const [searchItem, setSearchItem] = useState<string>("");

    return (
        <>
            <div className="w-[70%] max-w-[600px] h-[60px] relative">
                <input type="text" className="w-full h-full p-3 pr-10 outline-none bg-[#fdfdfd] shadow-pry rounded focus:border focus:border-[#0a369d]" onChange={(e) => setSearchItem(e.target.value)} value={searchItem} placeholder="Search..." />
                <span className="cursor-pointer absolute top-[50%] right-3 translate-y-[-50%] text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </span>
            </div>
        </>
    );
}

export { SearchBar }