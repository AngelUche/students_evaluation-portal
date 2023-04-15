// jshint esversion:6
import { useNavigate } from "react-router-dom";
import { CancelSVG } from "../../../../assets/admin";
import { retrieveUserData, getUserPosition, getUserClass } from "../../../../utils/admin";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../../store/admin";
import { toggleShowUserPreview } from "../../../../features/admin/userpreviewSlice";
import { toggleShowUserProfile } from "../../../../features/admin/userprofileSlice";

/**
 * @desc: View a preview of the User profile | redirect to the main user profile page
 * @param id: Id used to retrieve user details from mock DB 
 * @returns User object containing details about User
 */
function UserPreviewModal() {

    const dispatch: AppDispatch = useDispatch();

    const { status, id: UserId } = useSelector((store: RootState) => store.userPreview)

    // To enable redirection
    const navigate = useNavigate();

    // Fetch User Details
    const User = retrieveUserData(UserId);
    console.log("User gotten");
    console.log(User);


    // Navigate to user profile upon request
    function handleViewProfileClick() {
        // Close the user preview modal
        dispatch(toggleShowUserPreview({ status: false, id: undefined }));
        
        // disable the user profile prompt modal to access profile directly
        dispatch(toggleShowUserProfile({ status: false, id: UserId }));

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
                            <h3 className="text-gray-700">{getUserPosition(User!.position)?.value}</h3>
                            <span className="text-[12px] text-gray-500">ID: {User!.id}</span>
                        </div>
                        <div className="h-full flex flex-col gap-1 justify-between items-end">
                            <p className="text-[10px] text-gray-500 font-mono">Last login: 07 Aug 2023, 14:04PM</p>
                            {User!.classDesignation && <p className="text-[12px] text-gray-800 font-mono">Class: {getUserClass(User!.classDesignation)?.classDesignation}</p>}
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
                            dispatch(toggleShowUserPreview({ status: false, id: undefined }));
                        }}><CancelSVG size={16} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { UserPreviewModal }
