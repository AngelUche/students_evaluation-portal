// jshint esversion:6
import { useContext } from "react";
import { useImageUpload } from "../../../hooks/admin";
import { useState } from "react";
import { CancelFillSVG } from "../../../assets/admin";
import { AddUserModalContext } from "../../../contexts/admin";
import { UploadImage } from "../uploadimage";
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

function AddUserView() {
    const { AddUserPromptStatus, toggleAddUserPromptStatus } = useContext(AddUserModalContext);

    const [imageUpload, setImageUpload] = useState<File>()

    const [currentUser, setCurrentUser] = useState({ id: 4592781, position: AddUserPromptStatus.type } as UserProfileInterface);

    // Selected class if user a student
    const [selectedClass, setSelectedClass] = useState("");

    // Selected class if user a student
    const [selectedGender, setSelectedGender] = useState("");

    function handleOpenAddUserModal() {
        toggleAddUserPromptStatus({ status: true, type: undefined });
    }

    function handleFileUpload(event: any) {
        setImageUpload(event.target.files[0]);
    }

    // User saves Changes
    function submitEditedProfile() {
        // Build up remaining data from select input
        setCurrentUser((currentUser: UserProfileInterface) => {
            return { ...currentUser, classDesignation: selectedClass, gender: selectedGender }
        })

        // Run checks to ensure all fields were filled correctly

        // Submit details to backend.......

        // Alert user has been saved
        alert(`User: ${currentUser.firstName} Position: ${currentUser.position} has been saved`)
    }

    return (
        <>
            <form className="max-w-[900px] mx-auto mt-6 px-6 py-[30px]" onSubmit={submitEditedProfile}>

                {/* Form container */}
                <div className="relative shadow-md py-5 px-4 bg-[#ffffff]">

                    {/* Cancel button */}
                    <div className="absolute  top-5 right-5 cursor-pointer">
                        <div className="text-red-500 hover:shadow-lg hover:text-red-700" onClick={handleOpenAddUserModal}>
                            <CancelFillSVG size={20} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="py-3 border-b-[1px] border-b-gray-400 flex items-start gap-3">
                            {/* User Rounded Image */}
                            <div className="w-[80px] h-[80px] rounded-sm overflow-hidden">
                                <UploadImage submitImage={handleFileUpload} />
                            </div>

                            {/* User ID */}
                            <div className="text-gray-600">
                                {/* <h2 className="text-gray-800">{`${currentUser?.firstName} ${currentUser?.lastName}`}</h2> */}
                                <span className="font-bold text-xs">ID: </span>
                                <span className="text-xs">{currentUser?.id}</span>
                            </div>

                            {/* User POSITION */}
                            <div className="ml-auto text-xs text-gray-700 font-mono self-center">
                                <p className="text-sm font-mono text-gray-600 uppercase" >{`${currentUser.position}`}</p>
                            </div>
                        </div>

                        {/* Form fields */}
                        <div className="py-1 max-h-[45vh] flex flex-col gap-y-2 overflow-y-auto">
                            {/* Name Section */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                {/* FirstName */}
                                <div className="flex flex-col">
                                    <label className="text-sm font-bold text-gray-700" htmlFor="surname">First name</label>
                                    <input className={`p-2 text-gray-700 text-[14px] rounded-sm border-[1px] border-gray-300 bg-editFormFieldBg focus:border-blue-500 outline-none`} type="text" value={currentUser.firstName} required onChange={(e) => {
                                        setCurrentUser((currentUser: UserProfileInterface) => {
                                            return { ...currentUser, firstName: e.target.value }
                                        })
                                    }} />
                                </div>
                                {/* LastName */}
                                <div className="flex flex-col">
                                    <label className="text-sm font-bold text-gray-700" htmlFor="surname">Last name</label>
                                    <input className={`p-2 text-gray-700 text-[14px] rounded-sm border-[1px] border-gray-300 bg-editFormFieldBg focus:border-blue-500 outline-none`} type="text" value={currentUser?.lastName} required onChange={(e) => {
                                        setCurrentUser((currentUser: UserProfileInterface) => {
                                            return { ...currentUser, lastName: e.target.value }
                                        })
                                    }} />
                                </div>
                                {/* Othername */}
                                <div className="flex flex-col">
                                    <label className="text-sm font-bold text-gray-700" htmlFor="otherName">Other name</label>
                                    <input className={`p-2 text-gray-700 text-[14px] rounded-sm border-[1px] border-gray-300 bg-editFormFieldBg focus:border-blue-500 outline-none`} value={currentUser?.otherName} required onChange={(e) => {
                                        setCurrentUser((currentUser: UserProfileInterface) => {
                                            return { ...currentUser, otherName: e.target.value }
                                        })
                                    }} />
                                </div>
                            </div>

                            {/* Email and phone Number section*/}
                            <div className="flex flex-col gap-y-2">
                                {/* Email - if found */}
                                {
                                    currentUser.position != "Student" && (
                                        <div className="flex flex-col">
                                            <label className="text-sm font-bold text-gray-700" htmlFor="email">Email</label>
                                            <input className={`p-2 text-gray-700 text-[14px] rounded-sm border-[1px] border-gray-300 bg-editFormFieldBg focus:border-blue-500 outline-none`} type="email" id="email" value={currentUser.email} required onChange={(e) => {
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
                                    <input className={`p-2 text-gray-700 text-[14px] rounded-sm border-[1px] border-gray-300 bg-editFormFieldBg focus:border-blue-500 outline-none`} type="tel" id="telephone" value={currentUser?.phoneNumber} required onChange={(e) => {
                                        setCurrentUser((currentUser: UserProfileInterface) => {
                                            return { ...currentUser, phoneNumber: e.target.value }
                                        })
                                    }} />
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex flex-col">
                                <label className="text-sm font-bold text-gray-700" htmlFor="address">Address</label>
                                <input className={`p-2 text-gray-700 text-[14px] rounded-sm border-[1px] border-gray-300 bg-editFormFieldBg focus:border-blue-500 outline-none`} type="text" id="address" value={currentUser?.address} required onChange={(e) => {
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
                                    <input className={`p-2 text-gray-700 text-[14px] rounded-sm border-[1px] border-gray-300 bg-formFieldBg focus:border-blue-500 outline-none `} type="text" id="position" value={currentUser?.position} disabled />
                                </div>

                                {/* Gender */}
                                <div className="flex flex-col justify-end basis-full">
                                    <label className="text-sm font-bold text-gray-700" htmlFor="gender">Gender</label>
                                    <select id="gender" className={`p-[10px] text-gray-700 text-[14px] rounded-sm border-[1px] border-gray-300 bg-editFormFieldBg focus:border-blue-500 outline-none`} value={selectedGender} onChange={(e) => {
                                        setSelectedGender(e.target.value);
                                    }}>
                                        <option value="" disabled>Select Gender</option>
                                        <option value={"Male"}>Male</option>
                                        <option value={"Female"}>Female</option>
                                    </select>
                                </div>

                                {/* Designation */}
                                {currentUser.position == "Student" && (
                                    <div>
                                        <label className="text-sm font-bold text-gray-700" htmlFor="designation">Designation</label>
                                        <select
                                            className="w-full p-[10px] text-[14px] rounded-sm outline-none text-gray-700 bg-editFormFieldBg border-[1px] border-gray-300 focus:border-blue-500"
                                            aria-label="Select a list of class names to get available students"
                                            value={selectedClass}
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

                <div className="mt-5 flex justify-center">
                    <button type="submit" className="w-full max-w-[300px] mx-auto rounded uppercase py-3 bg-[#0e6931] hover:bg-[#0d791f] hover:shadow-xl text-white font-mono font-bold">Save User profile</button>
                </div>
            </form>
        </>
    );
}

export { AddUserView }