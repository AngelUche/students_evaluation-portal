// jshint esversion:6
import { useState} from "react";
import { PersonvcardSVG } from "../../../../assets/admin";
import { PositionData } from "../../../../data/admin";
import { toggleAddUserPromptStatus } from "../../../../features/admin/adduserSlice";
import { useDispatch } from "react-redux";

function AddUserModal() {

    const dispatch = useDispatch();

    // Determine type of user to view profile
    const [selectedPosition, setSelectedPosition] = useState("");

    // Add New User upon submit
    function handleProfileSubmit() {
        dispatch(toggleAddUserPromptStatus({ status: false, type: selectedPosition }))
    }

    return (
        <>
            <div className="w-[350px] py-8 px-8 bg-white rounded-[10px] overflow-hidden shadow-xl flex flex-col gap-y-6" onClick={(e) => {
                // Prevent propagation of button click to avoid closing the modal when operating it
                e.stopPropagation();
            }}>
                {/* User Profile Header */}
                <div className="flex text-gray-700 items-center gap-3">
                    <h2 className="text-lg font-bold text-gray-700">Add New User</h2>
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
                </div>
                <button className="w-full rounded uppercase py-3 bg-[blue] hover:bg-[#0202c5] hover:shadow-xl text-white font-mono font-bold" onClick={handleProfileSubmit} disabled={selectedPosition == ""}>Add New User</button>
            </div>
        </>
    );
}

export { AddUserModal };