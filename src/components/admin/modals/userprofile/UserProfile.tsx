// jshint esversion:6

import { useState } from "react";
import { UserSVG } from "../../../../assets/admin";
import { PersonvcardSVG } from "../../../../assets/admin";

import { classData } from "../../../../data/admin";
import { AllData } from "../../../../data/admin";

function UserProfileModal() {

    const [selectedClass, setSelectedClass] = useState("");
    const [selectedMember, setSlectedMember] = useState("");

    return (
        <div className="w-[350px] py-8 px-8 bg-white rounded-[10px] overflow-hidden shadow-xl flex flex-col gap-y-6" onClick={(e) => {
            e.stopPropagation()
        }}>
            <div className="flex text-gray-700 items-center gap-3">
                <h2 className="text-lg font-bold text-gray-700">User Profile</h2>
                <PersonvcardSVG size={28} />
            </div>
            <div className="flex flex-col gap-y-5">
                <div>
                    <select
                        className="w-full p-3 rounded outline-none focus:border-2 focus:border-[#0f5257]"
                        aria-label="Select a list of class names to get available students"
                        value={selectedClass}
                        onChange={(event) => {
                            setSelectedClass(event.target.value)
                            setSlectedMember("");
                        }}
                    >
                        <option value="" disabled>
                            <span>Select Member Class</span>
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
                <div>
                    <div>
                        <select
                            className="w-full p-3 rounded outline-none focus:border-2 focus:border-[#0f5257]"
                            aria-label="Select a list of members of a class to view profile"
                            value={selectedMember}
                            onChange={(event) => setSlectedMember(event.target.value)}
                        >
                            <option value="" selected disabled>
                                Select Member
                            </option>
                            {
                                AllData.map((data) => {
                                    if (data.classDesignation === selectedClass) {
                                        return (
                                            <option key={data.id} value={data.id}>
                                                {data.name}
                                            </option>
                                        );
                                    }

                                })
                            }

                        </select>
                    </div>
                </div>
            </div>
            <button className="w-full rounded uppercase py-2 bg-[blue] hover:bg-[#0202c5] hover:shadow-xl text-white ">View full profile</button>
        </div>
    );
}

export { UserProfileModal };