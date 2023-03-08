// jshint esversion:6
import { useState } from "react"
import { Outlet } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AsideNavigation } from "../aside";

function Navigation() {
    const [navOpen, setNavOpen] = useState<boolean>(false);

    function toggleNav() {
        setNavOpen(!navOpen)
    }

    return (
        <>
            {/* Admin Navigation */}
            <nav className="sticky top-0 w-full h-[60px] flex items-center justify-center px-2 py-2 md:px-6 md:py-2 bg-red-400">
                <div className="w-full h-full flex justify-between items-center">
                    <h1 className="text-3xl text-[#00df9a] font-bold">Virtuos</h1>

                    <div className="block md:hidden cursor-pointer" onClick={toggleNav} >
                        {navOpen ? (<AiOutlineClose size={25} />) : (<AiOutlineMenu size={25} />)}
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            {navOpen &&
                (
                    <div className="fixed top-0 bottom-0 w-3/4 max-w-[250px] md:hidden">
                        <AsideNavigation />
                    </div>
                )
            }

            {/* Mobile Outlet Viewing Area */}
            <div className="bg-blue-300 h-[300px] md:hidden">
                <Outlet />
            </div>

            {/* Desktop Viewing area */}
            <div className="hidden fixed top-[60px] left-0 right-0 bottom-0 overflow-y-auto md:grid grid-cols-[minmax(200px,250px)_minmax(0,1fr)]">
                <div>
                    <AsideNavigation />
                </div>

                <div className="flex items-center justify-center">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export { Navigation }