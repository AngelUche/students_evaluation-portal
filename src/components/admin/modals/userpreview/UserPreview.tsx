// jshint esversion:6
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserPreviewModalContext, UserProfileModalContext } from "../../../../contexts/admin";
import { CancelSVG } from "../../../../assets/admin";
import { retrieveUserData } from "../../../../utils/admin";

// Interface for the props of UserPreviewModal
interface UserProfileModalProps {
    id: number | undefined;
}

/**
 * @desc: View a preview of the User profile | redirect to the main user profile page
 * @param id: Id used to retrieve user details from mock DB 
 * @returns User object containing details about User
 */
function UserPreviewModal({ id }: UserProfileModalProps) {
    // To enable from dashboard | disable User preview modal
    const { showUserPreview, toggleShowUserPreview } = useContext(UserPreviewModalContext);

    // This will disable the Select User Profile prompt and redirect to the user profile main page
    const { toggleShowUserProfile } = useContext(UserProfileModalContext);

    // To enable redirection
    const navigate = useNavigate();

    // Fetch User Details
    const User = retrieveUserData(showUserPreview.id!);

    // Navigate to user profile upon request
    function handleViewProfileClick() {
        toggleShowUserProfile({ status: false, id: showUserPreview.id });
        navigate("/admin/userprofile");
    }

    return (
        <div className="w-[350px] bg-white rounded-[10px] overflow-hidden shadow-xl" onClick={(e) => e.stopPropagation()}>
            {/* Preview wrapped */}
            <div className="flex flex-col">
                
                {/* Preview Hero image */}
                <img className="w-[350px] h-[240px]" src={User!.image} alt="avatar-img" />
                
                {/* User Preview Details */}
                <div className="flex flex-col gap-3 py-6 px-5">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col justify-between">
                            <h3 className="text-gray-700">{User!.position}</h3>
                            <span className="text-[12px] text-gray-500">ID: {User!.id}</span>
                        </div>
                        <div className="h-full flex flex-col gap-1 justify-between items-end">
                            <p className="text-[10px] text-gray-500 font-mono">Last login: 07 Aug 2023, 14:04PM</p>
                            {User!.classDesignation && <p className="text-[12px] text-gray-800 font-mono">Class: {User!.classDesignation}</p>}
                            <a href={`mailto:${User!.email}`} className="text-[12px] text-blue-700 font-mono">{User!.email}</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-2">
                            <p className="text-sm py-2 text-gray-900 uppercase w-full border-b-[1px] border-gray-300">{User!.name}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-700 pb-2 border-b-[1px] border-gray-300">{User!.phoneNumber}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[5fr,_1fr] gap-3">
                        <button className="p-1 py-3 mt-3 rounded bg-[#038f4d] text-white hover:bg-[#055c32]" onClick={(e) => {
                            e.stopPropagation();
                            handleViewProfileClick();
                        }}>View Profile</button>
                        <button className="p-1 py-3 mt-3 flex justify-center items-center rounded bg-danger text-white hover:bg-[#a5201b] " onClick={(e) => {
                            e.stopPropagation();
                            toggleShowUserPreview({ status: false, id: undefined })
                        }}><CancelSVG size={16} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { UserPreviewModal }
