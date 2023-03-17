// jshint esversion:6
import { useContext } from "react";
import { AllData } from "../../../data/admin";
import { UserProfileModalContext } from "../../../contexts/admin";

interface UserProfileViewProps {
    id: number | undefined
}

function UserProfileView({ id }: UserProfileViewProps) {

    const { showUserProfile, toggleShowUserProfile } = useContext(UserProfileModalContext);

    // Fetch user from data Base
    const User = AllData.find((user) => user.id == id)

    if (!User) {
        return null;
    };

    function handleViewProfileClick() {
        toggleShowUserProfile({ status: true, id: undefined });
    }

    return (
        <div className="h-full max-w-[900px] mx-auto px-6 py-[30px]">

            {/* Form container */}
            <div className="shadow-md py-5 px-4 bg-[#fffcfc]">
                <div className="flex flex-col gap-5">
                    <div className="py-3 border-b-[1px] border-b-gray-400 flex items-center gap-3">
                        {/* User Rounded Image */}
                        <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                            <img className="w-full h-full" src={User?.image} alt={`Image of ${User?.name}`} />
                        </div>

                        {/* User ID */}
                        <div className="text-gray-600">
                            <h2 className="text-gray-800">{User?.name}</h2>
                            <span className="font-bold text-xs">ID: </span>
                            <span className="text-xs">{User?.id}</span>
                        </div>

                        {/* User POSITION */}
                        <div className="ml-auto text-xs text-gray-700 font-mono">
                            <p className="text-sm font-mono text-gray-600 uppercase" >{`${User?.position}`}</p>
                        </div>
                    </div>

                    {/* Form fields */}
                    <div className="py-1 flex flex-col gap-y-2 max-h-[50vh] overflow-y-auto">
                        {/* Name Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            {/* FirstName */}
                            <div className="flex flex-col">
                                <label className="text-sm font-bold text-gray-700" htmlFor="surname">First name</label>
                                <input className="p-2 bg-formFieldBg text-gray-700 text-[14px] rounded-sm focus:border-[1px] focus:border-blue-300 focus:outline-none" type="text" defaultValue={User?.firstName} value={User?.firstName} />
                            </div>
                            {/* LastName */}
                            <div className="flex flex-col">
                                <label className="text-sm font-bold text-gray-700" htmlFor="surname">Last name</label>
                                <input className="p-2 bg-formFieldBg text-gray-700 text-[14px] rounded-sm focus:border-[1px] focus:border-blue-300 focus:outline-none" type="text" defaultValue={User?.lastName} value={User?.lastName} />
                            </div>
                            {/* Othername */}
                            <div className="flex flex-col">
                                <label className="text-sm font-bold text-gray-700" htmlFor="otherName">Other name</label>
                                <input className="p-2 bg-formFieldBg text-gray-700 text-[14px] rounded-sm focus:border-[1px] focus:border-blue-300 focus:outline-none" type="text" defaultValue={User?.otherName} value={User?.otherName} />
                            </div>
                        </div>

                        {/* Email and phone NUmber section*/}
                        <div className="flex flex-col gap-y-2">
                            {/* Email - if found */}
                            {
                                User?.email && (
                                    <div className="flex flex-col">
                                        <label className="text-sm font-bold text-gray-700" htmlFor="email">Email</label>
                                        <input className="p-2 bg-formFieldBg text-gray-700 text-[14px] rounded-sm focus:border-[1px] focus:border-blue-300 focus:outline-none" type="email" id="email" defaultValue={User.email} value={User.email} />
                                    </div>
                                )
                            }
                            {/* Phone Number */}
                            <div className="flex flex-col">
                                <label className="text-sm font-bold text-gray-700" htmlFor="telephone">Phone number</label>
                                <input className="p-2 bg-formFieldBg text-gray-700 text-[14px] rounded-sm focus:border-[1px] focus:border-blue-300 focus:outline-none" type="tel" id="telephone" defaultValue={User?.phoneNumber} value={User?.phoneNumber} />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex flex-col">
                            <label className="text-sm font-bold text-gray-700" htmlFor="address">Address</label>
                            <input className="p-2 bg-formFieldBg text-gray-700 text-[14px] rounded-sm focus:border-[1px] focus:border-blue-300 focus:outline-none" type="text" id="address" defaultValue={User?.address} value={User?.address} />
                        </div>

                        {/* Position, Gender, Class? */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            {/* Position */}
                            <div className="flex flex-col basis-full">
                                <label className="text-sm font-bold text-gray-700" htmlFor="position">Position</label>
                                <input className="p-2 bg-formFieldBg text-gray-700 text-[14px] rounded-sm focus:border-[1px] focus:border-blue-300 focus:outline-none" type="text" id="position" defaultValue={User?.position} value={User?.position} />
                            </div>

                            {/* Gender */}
                            <div className="flex flex-col basis-full">
                                <label className="text-sm font-bold text-gray-700" htmlFor="gender">Gender</label>
                                <input className="p-2 bg-formFieldBg text-gray-700 text-[14px] rounded-sm focus:border-[1px] focus:border-blue-300 focus:outline-none" type="text" id="gender" defaultValue={User?.gender} value={User?.gender} />
                            </div>

                            {/* Designation */}
                            {User?.classDesignation && (
                                <div className="flex flex-col basis-full">
                                    <label className="text-sm font-bold text-gray-700" htmlFor="designation">Designation</label>
                                    <input className="p-2 bg-formFieldBg text-gray-700 text-[14px] rounded-sm focus:border-[1px] focus:border-blue-300 focus:outline-none" type="text" id="designation" defaultValue={User?.classDesignation} value={User?.classDesignation} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 flex justify-center">
                <button className="w-full max-w-[300px] mx-auto rounded uppercase py-3 bg-[blue] hover:bg-[#0202c5] hover:shadow-xl text-white font-mono font-bold" onClick={handleViewProfileClick} >View user profile</button>
            </div>
        </div >
    )
}

export { UserProfileView };