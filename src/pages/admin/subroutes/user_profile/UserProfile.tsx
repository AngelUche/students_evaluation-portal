// jshint esversion:6
import { useContext } from "react";
import { UserProfileModalContext } from "../../../../contexts/admin";
import { UserProfileModal } from "../../../../components/admin/modals";
import { UserProfileView } from "../../../../components/admin";

function UserProfilePage() {
    // Render the Profile Modal prompt or main profile page
    const { showUserProfile, toggleShowUserProfile } = useContext(UserProfileModalContext);

    const { id: UserId, status: EmptyProfileStatus } = showUserProfile;

    return (
        <div className="w-full h-full">
            {EmptyProfileStatus && (
                <div className="fixed top-[60px] bottom-0 left-0 md:left-[250px] right-0 overflow-y-auto flex justify-center items-center bg-[#00000044]">
                    <UserProfileModal toggleModal={toggleShowUserProfile} />
                </div>
            )}
            <UserProfileView id={UserId} />
        </div>
    );
}

export { UserProfilePage }