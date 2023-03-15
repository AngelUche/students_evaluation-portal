// jshint esversion:6
import { NavLink } from "react-router-dom"
import { HomeSVG, UserSVG, AddUserSVG, ResultSVG, MailSVG, KeySVG } from "../../../assets/admin"
import { useContext, Fragment } from "react"
import { UserPreviewModalContext, UserProfileModalContext } from "../../../contexts/admin"

function AsideNavigation() {
    const { showUserProfile, toggleShowUserProfile } = useContext(UserProfileModalContext);
    const { showUserPreview, toggleShowUserPreview } = useContext(UserPreviewModalContext)

    // Close all modals upon any click in the side navigation bar
    function handleCloseAllModalsClick() {
        toggleShowUserProfile({ status: true, id: undefined });
        toggleShowUserPreview({ status: false, id: undefined });
    }

    return (
        <>
            <aside className="w-full h-full bg-[#0f5257] shadow-lg overflow-y-auto" onClick={handleCloseAllModalsClick}>
                {/* <h1 className="p-5 mb-2 absolute font-bold text-white text-2xl md:hidden">Vitcrous</h1> */}
                <div className="h-full flex flex-col justify-center gap-y-3">
                    <NavLink to="" end
                        className={({ isActive }) => `p-4 pl-5 text-white flex justify-start items-center gap-5 hover:border-l-4 ${isActive ? "bg-sideNavbg px-5 border-l-4" : undefined}`}>
                        <HomeSVG />
                        <span className="text-xl">Home</span>
                    </NavLink>
                    <NavLink to="userprofile"
                        className={({ isActive }) => `p-4 pl-5 text-white flex justify-start items-center gap-5 hover:border-l-4 ${isActive ? "bg-sideNavbg px-5 border-l-4" : undefined}`}>
                        <UserSVG size={25} />
                        <span className="text-xl">User Profiles</span>
                    </NavLink>
                    <NavLink to="adduser"
                        className={({ isActive }) => `p-4 pl-5 text-white flex justify-start items-center gap-5 hover:border-l-4 ${isActive ? "bg-sideNavbg px-5 border-l-4" : undefined}`}>
                        <AddUserSVG />
                        <span className="text-xl">Add User</span>
                    </NavLink>
                    <NavLink to="viewresult"
                        className={({ isActive }) => `p-4 pl-5 text-white flex justify-start items-center gap-5 hover:border-l-4 ${isActive ? "bg-sideNavbg px-5 border-l-4" : undefined}`}>
                        <ResultSVG />
                        <span className="text-xl">View Results</span>
                    </NavLink>
                    <NavLink to="broadcastmail"
                        className={({ isActive }) => `p-4 pl-5 text-white flex justify-start items-center gap-5 hover:border-l-4 ${isActive ? "bg-sideNavbg px-5 border-l-4" : undefined}`}>
                        <MailSVG />
                        <span className="text-xl">Broadcast Mail</span>
                    </NavLink>
                    <NavLink to="passwordreset"
                        className={({ isActive }) => `p-4 pl-5 text-white flex justify-start items-center gap-5 hover:border-l-4 ${isActive ? "bg-sideNavbg px-5 border-l-4" : undefined}`}>
                        <KeySVG />
                        <span className="text-xl">Reset Password</span>
                    </NavLink>
                </div>
            </aside>
        </>
    )
}
export { AsideNavigation }