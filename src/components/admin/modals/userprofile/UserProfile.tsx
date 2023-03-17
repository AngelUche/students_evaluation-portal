// jshint esversion:6
import { useState } from "react";
import { PersonvcardSVG } from "../../../../assets/admin";

// Data fetched from server
import { classData, AllData, PositionData } from "../../../../data/admin";
import { ShowUserProfileInterface } from "../../../../contexts/admin";

interface UserProfileModalProps {
    toggleModal: (User: ShowUserProfileInterface) => void
}

function UserProfileModal({ toggleModal }: UserProfileModalProps) {

    // Determine type of user to view profile
    const [selectedPosition, setSelectedPosition] = useState("");

    // Selected class if user a student
    const [selectedClass, setSelectedClass] = useState("");

    // Selected members regardless of position
    const [selectedMember, setSlectedMember] = useState("");

    // View profile
    function handleProfileSubmit() {
        const id = parseInt(selectedMember);
        toggleModal({ status: false, id });
    }

    return (
        <div className="w-[350px] py-8 px-8 bg-white rounded-[10px] overflow-hidden shadow-xl flex flex-col gap-y-6" onClick={(e) => {
            // Prevent propagation of button click to avoid closing the modal when operating it
            e.stopPropagation();
        }}>
            {/* User Profile Header */}
            <div className="flex text-gray-700 items-center gap-3">
                <h2 className="text-lg font-bold text-gray-700">User Profile</h2>
                <PersonvcardSVG size={28} />
            </div>

            {/* user Input fields container */}
            <div className="flex flex-col gap-y-5">
                <div>
                    {/* Select User Position field */}
                    <select
                        className="w-full p-3 rounded outline-none text-gray-700 focus:border-2 focus:border-[#0bdf8d]"
                        aria-label="Select a list of class names to get available students"
                        value={selectedPosition}
                        onChange={(event) => {
                            setSelectedPosition(event.target.value);
                            setSelectedClass("");
                            setSlectedMember("");
                        }}
                    >
                        <option value="" disabled>
                            Select User Position
                        </option>

                        {
                            PositionData.map((positionData) => {
                                return (
                                    <option key={positionData.id} value={positionData.value}>
                                        {positionData.value}
                                    </option>
                                );
                            })

                        }

                    </select>
                </div>

                {selectedPosition == "Student" && (
                    <div>
                        <select
                            className="w-full p-3 rounded outline-none text-gray-700 focus:border-2 focus:border-[#0bdf8d]"
                            aria-label="Select a list of class names to get available students"
                            value={selectedClass}
                            onChange={(event) => {
                                setSelectedClass(event.target.value)
                                setSlectedMember("");
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

                <div>
                    <select
                        className="w-full p-3 rounded outline-none text-gray-700 focus:border-2 focus:border-[#0bdf8d]"
                        aria-label="Select a list of members of a class to view profile"
                        value={selectedMember}
                        onChange={(event) => {
                            setSlectedMember(event.target.value)
                        }
                        }
                    >
                        <option value="" disabled>
                            Select Member
                        </option>
                        {selectedPosition == "Student" && (AllData.map((data) => {
                            if (data.classDesignation === selectedClass) {
                                return (
                                    <option key={data.id} value={data.id}>
                                        {data.name}
                                    </option>
                                );
                            }
                        })
                        )}
                        {selectedPosition != "Student" && (AllData.map((data) => {
                            if (data.position === selectedPosition) {
                                return (
                                    <option key={data.id} value={data.id}>
                                        {data.name}
                                    </option>
                                );
                            }
                        })
                        )}

                    </select>
                </div>
            </div>
            <button className="w-full rounded uppercase py-3 bg-[blue] hover:bg-[#0202c5] hover:shadow-xl text-white font-mono font-bold" onClick={handleProfileSubmit} disabled={selectedMember == ""}>View full profile</button>
        </div>
    );
}

export { UserProfileModal };