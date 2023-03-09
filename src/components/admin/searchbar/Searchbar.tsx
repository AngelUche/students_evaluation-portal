import { useState } from "react";

// jshint esversion:6
function SearchBar() {
    const [searchItem, setSearchItem] = useState<string>("");

    return (
        <>
            <div className="w-[400px] h-[60px] relative">
                <input type="text" className="w-full h-full p-3 pr-10 outline-none bg-slate-100 shadow rounded focus:border focus:border-[#0a369d]" onChange={(e) => setSearchItem(e.target.value)} value={searchItem} placeholder="Search..." />  
            </div>
        </>
    );
}

export { SearchBar }