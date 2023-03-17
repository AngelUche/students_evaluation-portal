// jshint esversion:6
import { useContext, useEffect, useState } from "react";
import { retrieveUserData } from "../../../utils/admin";
import { UserProfileModalContext } from "../../../contexts/admin";
import { EditSVG, SaveSVG, CancelFillSVG } from "../../../assets/admin";

interface UserProfileInterface {
    id: number;
    name: string;
    firstName: string;
    lastName: string;
    otherName: string;
    address: string;
    phoneNumber: string;
    email?: string;
    position: string;
    gender: string;
    image: string;
    classDesignation?: string;
}

interface UserProfileViewProps {
    id: number | undefined
}

function UserProfileView() {
    const { showUserProfile, toggleShowUserProfile } = useContext(UserProfileModalContext);

    const [editProfileStatus, setEditProfileStatus] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState({} as UserProfileInterface);
    const [editProfile, SetEditProfile] = useState({} as UserProfileInterface);


    useEffect(() => {
        // Fetch user from data Base
        const User = retrieveUserData(showUserProfile.id);

        if (User) {
            setCurrentUser(User);
            SetEditProfile(User);
        }
    }, [])


    if (!currentUser) {
        return null;
    };

    function handleViewProfileClick() {
        toggleShowUserProfile({ status: true, id: undefined });
    }

    function openEditStatus() {
        setEditProfileStatus(true);
    }

    // If User discards changes, reset user details
    function closeEditStatus() {
        setEditProfileStatus(false);
        setCurrentUser(editProfile);    // Reset user details from previous profile details
    }

    // User saves Changes
    function submitEditedProfile() {
        // Submit details to backend.......

        // Set the Edit profile to hold latest user changes
        SetEditProfile(currentUser);

        // Clear Edit menu
        setEditProfileStatus(false);
    }

    return (
        <div className="h-full max-w-[900px] mx-auto px-6 py-[30px]">

            {/* Form container */}
            <div className="relative shadow-md py-5 px-4 bg-[#fffcfc]">

                {/* Edit | Cancel button */}
                <div className="absolute  top-5 right-5 cursor-pointer">
                    {editProfileStatus ?
                        (<div className="text-red-500 hover:shadow-lg hover:text-red-700" onClick={closeEditStatus}>
                            <CancelFillSVG size={20} />
                        </div>) :
                        (<div className="text-blue-600 hover:text-blue-900" onClick={openEditStatus}>
                            <EditSVG size={20} />
                        </div>)
                    }
                </div>

                <div className="flex flex-col gap-5">
                    <div className="py-3 border-b-[1px] border-b-gray-400 flex items-center gap-3">
                        {/* User Rounded Image */}
                        <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                            <img className="w-full h-full" src={currentUser?.image} alt={`Image of ${currentUser?.name}`} />
                        </div>

                        {/* User ID */}
                        <div className="text-gray-600">
                            <h2 className="text-gray-800">{`${currentUser?.firstName} ${currentUser?.lastName}`}</h2>
                            <span className="font-bold text-xs">ID: </span>
                            <span className="text-xs">{currentUser?.id}</span>
                        </div>

                        {/* User POSITION */}
                        <div className="ml-auto text-xs text-gray-700 font-mono">
                            <p className="text-sm font-mono text-gray-600 uppercase" >{`${currentUser?.position}`}</p>
                        </div>
                    </div>

                    {/* Form fields */}
                    <div className="py-1 flex flex-col gap-y-2 max-h-[51vh] overflow-y-auto">
                        {/* Name Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            {/* FirstName */}
                            <div className="flex flex-col">
                                <label className="text-sm font-bold text-gray-700" htmlFor="surname">First name</label>
                                <input className={`p-2 text-gray-700 text-[14px] rounded-sm ${editProfileStatus ? "border-[1px] border-gray-300 bg-editFormFieldBg focus:border-blue-500 outline-none" : "bg-formFieldBg"} `} type="text" defaultValue={currentUser?.firstName} value={currentUser?.firstName} disabled={!editProfileStatus} onChange={(e) => {
                                    setCurrentUser((currentUser: UserProfileInterface) => {
                                        return { ...currentUser, firstName: e.target.value }
                                    })
                                }} />
                            </div>
                            {/* LastName */}
                            <div className="flex flex-col">
                                <label className="text-sm font-bold text-gray-700" htmlFor="surname">Last name</label>
                                <input className={`p-2 text-gray-700 text-[14px] rounded-sm ${editProfileStatus ? "border-[1px] border-gray-300 bg-editFormFieldBg focus:border-blue-500 outline-none" : "bg-formFieldBg"} `} type="text" defaultValue={currentUser?.lastName} value={currentUser?.lastName} disabled={!editProfileStatus} onChange={(e) => {
                                    setCurrentUser((currentUser: UserProfileInterface) => {
                                        return { ...currentUser, lastName: e.target.value }
                                    })
                                }} />
                            </div>
                            {/* Othername */}
                            <div className="flex flex-col">
                                <label className="text-sm font-bold text-gray-700" htmlFor="otherName">Other name</label>
                                <input className={`p-2 text-gray-700 text-[14px] rounded-sm ${editProfileStatus ? "border-[1px] border-gray-300 bg-editFormFieldBg focus:border-blue-500 outline-none" : "bg-formFieldBg"} `} defaultValue={currentUser?.otherName} value={currentUser?.otherName} disabled={!editProfileStatus} onChange={(e) => {
                                    setCurrentUser((currentUser: UserProfileInterface) => {
                                        return { ...currentUser, otherName: e.target.value }
                                    })
                                }} />
                            </div>
                        </div>

                        {/* Email and phone NUmber section*/}
                        <div className="flex flex-col gap-y-2">
                            {/* Email - if found */}
                            {
                                currentUser?.email && (
                                    <div className="flex flex-col">
                                        <label className="text-sm font-bold text-gray-700" htmlFor="email">Email</label>
                                        <input className={`p-2 text-gray-700 text-[14px] rounded-sm ${editProfileStatus ? "border-[1px] border-gray-300 bg-editFormFieldBg focus:border-blue-500 outline-none" : "bg-formFieldBg"} `} type="email" id="email" defaultValue={currentUser.email} value={currentUser.email} disabled={!editProfileStatus} onChange={(e) => {
                                            setCurrentUser((currentUser: UserProfileInterface) => {
                                                return { ...currentUser, email: e.target.value }
                                            })
                                        }} />
                                    </div>
                                )
                            }
                            {/* Phone Number */}
                            <div className="flex flex-col">
                                <label className="text-sm font-bold text-gray-700" htmlFor="telephone">Phone number</label>
                                <input className={`p-2 text-gray-700 text-[14px] rounded-sm ${editProfileStatus ? "border-[1px] border-gray-300 bg-editFormFieldBg focus:border-blue-500 outline-none" : "bg-formFieldBg"} `} type="tel" id="telephone" defaultValue={currentUser?.phoneNumber} value={currentUser?.phoneNumber} disabled={!editProfileStatus} onChange={(e) => {
                                    setCurrentUser((currentUser: UserProfileInterface) => {
                                        return { ...currentUser, phoneNumber: e.target.value }
                                    })
                                }} />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex flex-col">
                            <label className="text-sm font-bold text-gray-700" htmlFor="address">Address</label>
                            <input className={`p-2 text-gray-700 text-[14px] rounded-sm ${editProfileStatus ? "border-[1px] border-gray-300 bg-editFormFieldBg focus:border-blue-500 outline-none" : "bg-formFieldBg"} `} type="text" id="address" defaultValue={currentUser?.address} value={currentUser?.address} disabled={!editProfileStatus} onChange={(e) => {
                                setCurrentUser((currentUser: UserProfileInterface) => {
                                    return { ...currentUser, address: e.target.value }
                                })
                            }} />
                        </div>

                        {/* Position, Gender, Class? */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            {/* Position */}
                            <div className="flex flex-col basis-full">
                                <label className="text-sm font-bold text-gray-700" htmlFor="position">Position</label>
                                <input className={`p-2 text-gray-700 text-[14px] rounded-sm ${editProfileStatus ? "border-[1px] border-gray-300 bg-editFormFieldBg focus:border-blue-500 outline-none" : "bg-formFieldBg"} `} type="text" id="position" defaultValue={currentUser?.position} value={currentUser?.position} disabled={!editProfileStatus} onChange={(e) => {
                                    setCurrentUser((currentUser: UserProfileInterface) => {
                                        return { ...currentUser, position: e.target.value }
                                    })
                                }} />
                            </div>

                            {/* Gender */}
                            <div className="flex flex-col justify-end basis-full">
                                <label className="text-sm font-bold text-gray-700" htmlFor="gender">Gender</label>
                                <select id="gender" className={`p-[10px] text-gray-700 text-[14px] rounded-sm ${editProfileStatus ? "border-[1px] border-gray-300 bg-editFormFieldBg focus:border-blue-500 outline-none" : "bg-formFieldBg"} `} disabled={!editProfileStatus} value={currentUser?.gender} onChange={(e) => {
                                    setCurrentUser((currentUser: UserProfileInterface) => {
                                        return { ...currentUser, gender: e.target.value }
                                    })
                                }}>
                                    <option value={currentUser.gender} selected>{currentUser.gender}</option>
                                    <option value={"Male"}>Male</option>
                                    <option value={"Female"}>Female</option>
                                </select>
                            </div>

                            {/* Designation */}
                            {currentUser?.classDesignation && (
                                <div className="flex flex-col basis-full">
                                    <label className="text-sm font-bold text-gray-700" htmlFor="designation">Designation</label>
                                    <input className={`p-2 text-gray-700 text-[14px] rounded-sm ${editProfileStatus ? "border-[1px] border-gray-300 bg-editFormFieldBg focus:border-blue-500 outline-none" : "bg-formFieldBg"} `} type="text" id="designation" defaultValue={currentUser?.classDesignation} value={currentUser?.classDesignation} disabled={!editProfileStatus} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 flex justify-center">
                {editProfileStatus ? 
                    (<button className="w-full max-w-[300px] mx-auto rounded uppercase py-3 bg-[#0e6931] hover:bg-[#0d791f] hover:shadow-xl text-white font-mono font-bold" onClick={submitEditedProfile} >Save User profile</button>) 
                    : 
                    (<button className="w-full max-w-[300px] mx-auto rounded uppercase py-3 bg-[blue] hover:bg-[#0202c5] hover:shadow-xl text-white font-mono font-bold" onClick={handleViewProfileClick} >View user profile</button>)
                    }

            </div>
        </div >
    )
}

export { UserProfileView };