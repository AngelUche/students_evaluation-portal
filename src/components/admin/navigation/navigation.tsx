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
            <nav className="w-full h-[60px] flex items-center justify-center px-2 py-2 md:px-6 md:py-2 bg-red-400">
                <div className="w-full h-full flex justify-between items-center">
                    <h1 className="text-3xl text-[#00df9a] font-bold">Virtuos</h1>
                    {/* Mobile open or close menu */}
                    <div className="block md:hidden cursor-pointer" onClick={toggleNav} >
                        {navOpen ? (<AiOutlineClose size={25} />) : (<AiOutlineMenu size={25} />)}
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            {navOpen &&
                (
                    <div className="fixed top-0 bottom-0 w-3/4 max-w-[250px]">
                        <AsideNavigation />
                    </div>
                )
            }

            <div className="grid grid-cols-[minmax(200px,_250px)_1fr]">
                {/* Ḍesktop Aside Navigation */}
                <div className="hidden md:block">
                    <AsideNavigation />
                </div>

                <main>
                    <p className="font-bold text-3xl mb-6">Main display Area</p>
                    {/* <Outlet /> */}
                    <p className="text-blue-400">Outlet rendered here</p>
                </main>
            </div>


        </>
    )
}

export { Navigation }