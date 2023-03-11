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

    function closeNav() {
        setNavOpen(false);
    }

    return (
        <div onClick={closeNav}>
            {/* Admin Navigation - Visible across all screen sizes */}
            <nav className="sticky top-0 w-full h-[60px] flex items-center justify-center px-2 py-2 md:px-6 md:py-2 bg-sideNavbg " onClick={(e) => e.stopPropagation()}>
                <div className="w-full h-full flex justify-between items-center">
                    <h1 className="text-3xl text-white font-bold">Virtuos</h1>

                    {/* Mobile hamburger open and close menu */}
                    <div className="block md:hidden cursor-pointer" onClick={toggleNav} >
                        {navOpen ? (<AiOutlineClose size={25} />) : (<AiOutlineMenu size={25} />)}
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            {navOpen &&
                (
                <div className="fixed top-0 bottom-0 w-3/4 max-w-[250px] md:hidden z-10" onClick={closeNav}>
                        <AsideNavigation />
                    </div>
                )
            }

            {/* Mobile Outlet Viewing Area */}
            <div className="md:hidden fixed top-[60px] left-0 right-0 bottom-0 overflow-y-auto h-full bg-slate-50">
                <Outlet />
            </div>

            {/* Desktop Viewing area */}
            <div className="hidden fixed top-[60px] left-0 right-0 bottom-0 overflow-y-auto md:grid grid-cols-[minmax(200px,250px)_minmax(0,1fr)]">
                {/* Visible side navigation */}
                <div>
                    <AsideNavigation />
                </div>

                {/* Outlet viewing area */}
                <div className="h-full">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export { Navigation }