// jshint esversion:6
import { NavLink } from "react-router-dom"

function AsideNavigation() {
    return (
        <>
            <aside className="h-full w-full relative overflow-y-auto bg-[rgb(6,40,99)] shadow-lg">
                <h1 className="p-5 mb-2 absolute font-bold text-white text-2xl md:hidden">Vitcrous</h1>
                <div className="h-full flex flex-col justify-center gap-3">
                    <NavLink to="" end
                        className={({ isActive }) => `p-4 pl-5 text-white flex justify-start items-center gap-5 hover:border-l-4 ${isActive ? "bg-[#0a369d] px-5 border-l-4" : undefined}`}>
                        <span className="footer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                        </svg></span>
                        <span className="text-xl">Home</span>
                    </NavLink>
                    <NavLink to="userprofile"
                        className={({ isActive }) => `p-4 pl-5 text-white flex justify-start items-center gap-5 hover:border-l-4 ${isActive ? "bg-[#0a369d] px-5 border-l-4" : undefined}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="currentColor"><path d="M12 2.5a5.25 5.25 0 0 0-2.519 9.857 9.005 9.005 0 0 0-6.477 8.37.75.75 0 0 0 .727.773H20.27a.75.75 0 0 0 .727-.772 9.005 9.005 0 0 0-6.477-8.37A5.25 5.25 0 0 0 12 2.5Z"></path></svg>
                        <span className="text-xl">User Profiles</span>
                    </NavLink>
                    <NavLink to="adduser"
                        className={({ isActive }) => `p-4 pl-5 text-white flex justify-start items-center gap-5 hover:border-l-4 ${isActive ? "bg-[#0a369d] px-5 border-l-4" : undefined}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person-fill-add" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                        </svg>
                        <span className="text-xl">Add User</span>
                    </NavLink>
                    <NavLink to="viewresult"
                        className={({ isActive }) => `p-4 pl-5 text-white flex justify-start items-center gap-5 hover:border-l-4 ${isActive ? "bg-[#0a369d] px-5 border-l-4" : undefined}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-file-bar-graph" viewBox="0 0 16 16">
                            <path d="M4.5 12a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1z" />
                            <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                        </svg>
                        <span className="text-xl">View Results</span>
                    </NavLink>
                    <NavLink to="broadcastmail"
                        className={({ isActive }) => `p-4 pl-5 text-white flex justify-start items-center gap-5 hover:border-l-4 ${isActive ? "bg-[#0a369d] px-5 border-l-4" : undefined}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
                        </svg>
                        <span className="text-xl">Broadcast Mail</span>
                    </NavLink>
                    <NavLink to="passwordreset"
                        className={({ isActive }) => `p-4 pl-5 text-white flex justify-start items-center gap-5 hover:border-l-4 ${isActive ? "bg-[#0a369d] px-5 border-l-4" : undefined}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-key-fill" viewBox="0 0 16 16">
                            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                        <span className="text-xl">Reset Password</span>
                    </NavLink>
                </div>
            </aside>
        </>
    )
}

export { AsideNavigation }