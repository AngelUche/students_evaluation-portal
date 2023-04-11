// jshint esversion:6
import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AsideNavigation } from "../../../components/admin";
import { SearchBar as SearchBarAdmin } from "../../../components/admin";

function AdminLayout() {
    const [navOpen, setNavOpen] = useState<boolean>(false);

    function toggleNav() {
        setNavOpen(!navOpen);
    }

    function closeNav() {
        setNavOpen(false);
    }

    return (
        <div onClick={closeNav}>
            {/* Admin Navigation - Visible across all screen sizes */}
            <nav
                className="sticky top-0 w-full h-[60px] flex items-center justify-center px-4 py-2 md:px-6 md:py-2 bg-sideNavbg shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-full h-full flex justify-between items-center">
                    <h1 className="text-3xl text-white font-bold"> <NavLink to="/">Virtuos</NavLink></h1>
                    <div className="hidden md:block">
                        <SearchBarAdmin />
                    </div>

                    {/* Mobile hamburger open and close menu */}
                    <div className="block md:hidden cursor-pointer" onClick={toggleNav}>
                        {navOpen ? (
                            <AiOutlineClose size={25} color={"#ffffff"} />
                        ) : (
                            <AiOutlineMenu size={25} color={"#ffffff"} />
                        )}
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            {navOpen && (
                <div
                    className="fixed top-[60px] bottom-0 w-3/4 max-w-[250px] md:hidden z-10 overflow-y-auto"
                    onClick={closeNav}
                >
                    <AsideNavigation />
                </div>
            )}

            {/* Mobile Outlet Viewing Area */}
            <div className="md:hidden fixed top-[60px] inset-x-0 bottom-0 overflow-y-auto bg-slate-50">
                <Outlet />
            </div>

            {/* Desktop Viewing area */}
            <div className="hidden md:block">
                {/* Visible side navigation */}
                <div className="fixed top-[60px] bottom-0 w-[250px] overflow-y-auto">
                    <AsideNavigation />
                </div>

                {/* Outlet viewing area */}
                <div className="fixed top-[0] bottom-0 left-[250px] right-0 overflow-y-auto bg-white">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export { AdminLayout };