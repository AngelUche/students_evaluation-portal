// jshint esversion:6
import { useContext, useEffect, useState } from "react";
import { retrieveUserData } from "../../../utils/admin";
import { UserProfileModalContext } from "../../../contexts/admin";
import { EditSVG, CancelFillSVG } from "../../../assets/admin";
import { FormInput } from "./formelements";
import { UserProfileFormHeader } from "./FormHeader";

import { classData } from "../../../data/admin";

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

const defaultUser: UserProfileInterface = {
    id: 0,
    name: "",
    firstName: "",
    lastName: "",
    otherName: "",
    address: "",
    phoneNumber: "",
    email: "",
    position: "",
    gender: "",
    image: "",
    classDesignation: ""
}

function UserProfileView() {
    const { showUserProfile, toggleShowUserProfile } = useContext(UserProfileModalContext);

    const [editProfileStatus, setEditProfileStatus] = useState<boolean>(false);

    // State to hold current user and edit user profile to make reverting possible.
    const [currentUser, setCurrentUser] = useState(defaultUser);
    const [temporaryUser, setTemporaryUser] = useState(defaultUser);

    // Selected Gender
    const [selectedGender, setSelectedGender] = useState("");

    // Selected class if user a student
    const [selectedClass, setSelectedClass] = useState<string>("");

    useEffect(() => {
        // Fetch user from data Base
        const User = retrieveUserData(showUserProfile.id);

        if (User) {
            // Set the users
            setCurrentUser(User);       // Display current user profile
            setTemporaryUser(User);       // Temporary hold user profile while editing to make rollback possible

            // Set the gender and Class of select(input type) components
            if (User.classDesignation) setSelectedClass(User?.classDesignation)
            setSelectedGender(User.gender)
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
        setCurrentUser(temporaryUser);    // Reset user details from previous profile details
    }

    // User saves Changes
    function submitEditedProfile() {
        // Submit details to backend.......

        // Set the Edit profile to hold latest user changes
        setTemporaryUser({ ...currentUser, gender: selectedGender, classDesignation: selectedClass });

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

                {/* Form Header */}
                <div className="flex flex-col gap-5">
                    <UserProfileFormHeader userId={currentUser.id} userImage={currentUser.image} userFirstName={currentUser.firstName} userLastName={currentUser.lastName} userName={currentUser.name} userPosition={currentUser?.position} />

                    {/* Form fields */}
                    <div className="py-1 flex flex-col gap-y-2 max-h-[51vh] overflow-y-auto">

                        {/* Name Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">

                            {/* FirstName */}
                            <FormInput id="firstName" type="text" label="First name" editProfileStatus={editProfileStatus} value={currentUser.firstName} onChange={(e) => {
                                setCurrentUser((currentUser: UserProfileInterface) => {
                                    return { ...currentUser, firstName: e.target.value }
                                })
                            }} />

                            {/* LastName */}
                            <FormInput id="lastName" type="text" label="Last name" editProfileStatus={editProfileStatus} value={currentUser.lastName} onChange={(e) => {
                                setCurrentUser((currentUser: UserProfileInterface) => {
                                    return { ...currentUser, lastName: e.target.value }
                                })
                            }} />


                            {/* Othername */}
                            <FormInput id="otherName" type="text" label="Other name" editProfileStatus={editProfileStatus} value={currentUser.otherName} onChange={(e) => {
                                setCurrentUser((currentUser: UserProfileInterface) => {
                                    return { ...currentUser, otherName: e.target.value }
                                })
                            }} />
                        </div>

                        {/* Email and phone NUmber section*/}
                        <div className="flex flex-col gap-y-2">
                            {/* Email - if found */}
                            {
                                currentUser?.email && (
                                    <FormInput id="email" type="email" label="Email" editProfileStatus={editProfileStatus} value={currentUser.email} onChange={(e) => {
                                        setCurrentUser((currentUser: UserProfileInterface) => {
                                            return { ...currentUser, email: e.target.value }
                                        })
                                    }} />
                                )
                            }

                            {/* Phone Number */}
                            <FormInput id="telephone" type="tel" label="Phone number" editProfileStatus={editProfileStatus} value={currentUser.phoneNumber} onChange={(e) => {
                                setCurrentUser((currentUser: UserProfileInterface) => {
                                    return { ...currentUser, phoneNumber: e.target.value }
                                })
                            }} />

                        </div>

                        {/* Address */}
                        <FormInput id="address" type="text" label="Address" editProfileStatus={editProfileStatus} value={currentUser.address} onChange={(e) => {
                            setCurrentUser((currentUser: UserProfileInterface) => {
                                return { ...currentUser, address: e.target.value }
                            })
                        }} />


                        {/* Position, Gender, Class? */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            {/* Position */}
                            <FormInput id="firstName" type="text" label="position" editProfileStatus={editProfileStatus} value={currentUser.position} onChange={(e) => {
                                setCurrentUser((currentUser: UserProfileInterface) => {
                                    return { ...currentUser, position: e.target.value }
                                })
                            }} />


                            {/* Gender */}
                            <div className="flex flex-col justify-end basis-full">
                                <label className="text-sm font-bold text-gray-700" htmlFor="gender">Gender</label>
                                <select id="gender" className={`p-[10px] text-gray-700 text-[14px] rounded-sm ${editProfileStatus ? "border-[1px] border-gray-300 bg-editFormFieldBg focus:border-blue-500 outline-none" : "bg-formFieldBg"} `} disabled={!editProfileStatus} value={selectedGender} onChange={(e) => {
                                    setSelectedGender(e.target.value);
                                }}>
                                    <option value="" disabled>
                                        Select Gender
                                    </option>
                                    <option value={"Male"}>Male</option>
                                    <option value={"Female"}>Female</option>
                                </select>
                            </div>

                            {/* Designation */}
                            {currentUser?.classDesignation && (
                                <div className="flex flex-col basis-full">
                                    <label className="text-sm font-bold text-gray-700" htmlFor="designation">Designation</label>
                                    <select
                                        className={`p-[10px] text-gray-700 text-[14px] rounded-sm ${editProfileStatus ? "border-[1px] border-gray-300 bg-editFormFieldBg focus:border-blue-500 outline-none" : "bg-formFieldBg"} `}
                                        value={selectedClass}
                                        disabled={!editProfileStatus}
                                        onChange={(e) => {
                                            setSelectedClass(e.target.value)
                                        }}
                                    >
                                        <option value="" disabled>
                                            Select Member Class
                                        </option>
                                        {
                                            classData.map((classData) => {
                                                return (
                                                    <option key={classData.id} value={classData.classDesignation}>
                                                        {classData.classDesignation}
                                                    </option>
                                                );
                                            })
                                        }
                                    </select>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Button to render based on edit profile status */}
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