// jshint esversion:6
import { UserProfileModal } from "../../../../components/admin/modals";
import { UserProfileView } from "../../../../views/admin";
import { useSelector } from "react-redux";
import { RootState} from "../../../../store/admin";

function UserProfilePage() {
    // Render the Profile Modal prompt or main profile page
    const { status: EmptyProfileStatus, id: UserId} = useSelector((store: RootState) => store.userProfile);

    return (
        <div className="w-full h-full">

            {/* Render the Profile prompt modal to pick a profile if no profile has been directly selected from dashboard home page */}
            {(EmptyProfileStatus) && (
                <div className="w-full h-full flex justify-center items-center bg-[#00000044]">
                    <UserProfileModal />
                </div>
            )}

            {/* Render nothing if no id is gotten */}
            {
                UserId == undefined ? null : <UserProfileView />
            }
        </div>
    );
}

export { UserProfilePage }