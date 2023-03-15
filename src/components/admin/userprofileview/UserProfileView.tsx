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

            {/* Form box */}
            <div className="shadow-md py-5 px-4 bg-[#fffcfc]">
                <div className="flex flex-col gap-5">
                    <div className="py-3 border-b-[1px] border-b-gray-400 flex items-center gap-3">
                        {/* User Rounded Image */}
                        <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                            <img className="w-full h-full" src={User?.image} alt={`Image of ${User?.name}`} />
                        </div>

                        <div>
                            <h2 className="text-gray-800">{User?.name}</h2>
                            <p className="text-sm font-mono text-gray-600" >{`${User?.position}`}</p>
                        </div>
                        <div className="ml-auto text-sm text-gray-700 font-mono">
                            <span className="font-bold">ID:{" "}</span>
                            <span>{User?.id}</span>
                        </div>
                    </div>

                    {/* Form fields */}
                    <div className="flex flex-col gap-y-2 max-h-[50vh] overflow-y-auto">
                        {/* Name Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            {/* FirstName */}
                            <div className="flex flex-col basis-full">
                                <label className="text-sm font-bold text-gray-700" htmlFor="surname">First name</label>
                                <input className="p-2 bg-formFieldBg text-gray-700 text-[14px] rounded-sm" type="text" defaultValue={User?.firstName} />
                            </div>
                            {/* LastName */}
                            <div className="flex flex-col basis-full">
                                <label className="text-sm font-bold text-gray-700" htmlFor="surname">Last name</label>
                                <input className="p-2 bg-formFieldBg text-gray-700 text-[14px] rounded-sm" type="text" defaultValue={User?.lastName} />
                            </div>
                            {/* Othername */}
                            <div className="flex flex-col basis-full">
                                <label className="text-sm font-bold text-gray-700" htmlFor="otherName">Other name</label>
                                <input className="p-2 bg-formFieldBg text-gray-700 text-[14px] rounded-sm" type="text" defaultValue={User?.otherName} />
                            </div>
                        </div>

                        {/* Email and phone NUmber section*/}
                        <div className="flex flex-col gap-y-2">
                            {/* Email */}
                            {
                                User?.email && (
                                    <div className="flex flex-col">
                                        <label className="text-sm font-bold text-gray-700" htmlFor="email">Email</label>
                                        <input className="p-2 bg-formFieldBg text-gray-700 text-[14px] rounded-sm" type="email" id="email" defaultValue={User.email} />
                                    </div>
                                )
                            }
                            {/* Phone Number */}
                            <div className="flex flex-col">
                                <label className="text-sm font-bold text-gray-700" htmlFor="telephone">Phone number</label>
                                <input className="p-2 bg-formFieldBg text-gray-700 text-[14px] rounded-sm" type="tel" id="telephone" defaultValue={User?.phoneNumber} />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex flex-col">
                            <label className="text-sm font-bold text-gray-700" htmlFor="address">Address</label>
                            <input className="p-2 bg-formFieldBg text-gray-700 text-[14px] rounded-sm" type="text" id="address" defaultValue={User?.address} />
                        </div>

                        {/* Position, Gender, Class? */}
                        <div className="flex flex-col md:flex-row gap-2">
                            <div className="flex flex-col basis-full">
                                <label className="text-sm font-bold text-gray-700" htmlFor="position">Position</label>
                                <input className="p-2 bg-formFieldBg text-gray-700 text-[14px] rounded-sm" type="text" id="position" defaultValue={User?.position} />
                            </div>
                            <div className="flex flex-col basis-full">
                                <label className="text-sm font-bold text-gray-700" htmlFor="gender">Gender</label>
                                <input className="p-2 bg-formFieldBg text-gray-700 text-[14px] rounded-sm" type="text" id="gender" defaultValue={User?.gender} />
                            </div>
                            {User?.classDesignation && (
                                <div className="flex flex-col basis-full">
                                    <label className="text-sm font-bold text-gray-700" htmlFor="designation">Designation</label>
                                    <input className="p-2 bg-formFieldBg text-gray-700 text-[14px] rounded-sm" type="text" id="designation" defaultValue={User?.classDesignation} />
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