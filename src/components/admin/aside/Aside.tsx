// jshint esversion:6
import { NavLink } from "react-router-dom"

function AsideNavigation() {
    return (
        <>
            <aside className="w-full h-full flex flex-col overflow-y-auto bg-[#f8f8f8] z-10">
                <h1 className="p-5 mb-[40px] font-bold text-green-700 text-2xl">Vitcrous</h1>
                <NavLink to="/admin"
                    className={({ isActive }) => `p-4 pl-5 flex justify-start items-center gap-9 ${isActive ? "bg-[#bfbff8] px-5 border-l-4 border-l-[#0d0de2bd]" : undefined}`}>
                    <span className="footer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                        <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                    </svg></span>
                    <span className="font-bold text-xl">Home</span>
                </NavLink>
                <NavLink to="/admin/"
                    className={({ isActive }) => `p-4 pl-5 flex justify-start items-center gap-9 ${isActive ? "bg-[#bfbff8] px-5 border-l-4 border-l-[#0d0de2bd]" : undefined}`}>
                    <span className="footer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                        <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                    </svg></span>
                    <span className="font-bold text-xl">Home</span>
                </NavLink>
            </aside>
        </>
    )
}

export { AsideNavigation }