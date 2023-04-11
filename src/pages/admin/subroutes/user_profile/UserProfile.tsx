// jshint esversion:6
import { useContext } from "react";
import { UserProfileModalContext } from "../../../../contexts/admin";
import { UserProfileModal } from "../../../../components/admin/modals";
import { UserProfileView } from "../../../../views/admin";

function UserProfilePage() {
    // Render the Profile Modal prompt or main profile page
    const { showUserProfile } = useContext(UserProfileModalContext);

    const { id: UserId, status: EmptyProfileStatus } = showUserProfile;

    return (
        <div className="w-full h-full">

            {/* Render the Profile prompt modal to pick a profile if no profile has been directly selected from dashboard home page */}
            {(EmptyProfileStatus) && (
                <div className="w-full h-full flex justify-center items-center bg-[#00000044]">
                    <UserProfileModal />
                </div>
            )}

            {/* Render nothing if no id is gotter */}
            {
                UserId == undefined ? null : <UserProfileView />
            }
        </div>
    );
}

export { UserProfilePage }