// jshint esversion:6
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AsideNavigation } from "../aside";

function Navigation() {

    const [navOpen, setNavOpen] = useState<boolean>(false);

    function handleToggleNav() {
        setNavOpen(!navOpen);
    }

    return (
        <>

            <nav className="fixed inset-x-0 top-0 h-[60px] bg-blue-500 px-5 text-white flex justify-between items-center">
                <h1 className="font-bold text-xl">Vitrous</h1>

                {/* Mobile Hamburger Menu */}
                <div className="md:hidden cursor-pointer" onClick={handleToggleNav}>
                    {navOpen ? (
                        <AiOutlineClose size={25} color={"#ffffff"} />
                    ) : (
                        <AiOutlineMenu size={25} color={"#ffffff"} />
                    )}
                </div>
            </nav>

            {/* Outlet View */}
            <div className="md:hidden fixed inset-x-0 top-[50px] bottom-0 bg-pink-300 flex items-center justify-center">
                <Outlet />
            </div>

            {/* Aside Navigation */}
            <div className={`fixed w-[250px] inset-y-0 md:top-[60px] md:left-0 transition-all ease-in delay-[100ms] ${navOpen ? "left-0" : "-left-full"} `}>
                <AsideNavigation />
            </div>
        </>
    );
}

export { Navigation };