// jshint esversion:6
import { useContext } from "react";
import { UserProfileModalContext } from "../../../../contexts/admin";
import { UserProfileModal } from "../../../../components/admin/modals/userprofile/UserProfile";

function UserProfileRoute() {
    const { showUserProfile, toggleShowUserProfile } = useContext(UserProfileModalContext);

    return (
        <div className="w-full h-full">
            {showUserProfile.status && (
                <div className="fixed top-[60px] bottom-0 left-0 md:left-[250px] right-0 overflow-y-auto flex justify-center items-center bg-[#00000044]">
                    <UserProfileModal />
                </div>
            )}
        </div>
    );
}

export { UserProfileRoute }