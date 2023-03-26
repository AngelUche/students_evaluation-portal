// jshint esversion:6
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BroadcastSVG, CancelSVG } from "../../../../assets/admin/svg";

import { PositionData } from "../../../../data/admin";

function BroadcastModal() {

    const [messageTitle, setMessageTitle] = useState("");
    const [messageBody, setMessageBody] = useState("");

    const [selectedPosition, setSelectedPosition] = useState("");

    const navigate = useNavigate();

    function handleCloseBroadcastMail() {
        navigate("/admin")
    }

    function handleSubmitBroadcastMail(e: any) {
        // Prevent default refeshing of page
        e.preventDefault();

        // Submit details to backend
        alert("Implementation coming soon! redirecting to home page")
        navigate("/admin")
    }

    return (
        <>
            <div className=" w-[400px] px-8 py-9 rounded-[10px] bg-white">

                {/* Broadcast Header */}
                <div className="flex items-center gap-x-3">
                    <h2 className="font-bold text-xl text-sideNavbg">Broadcast Mail</h2>
                    <span className="text-[#038f4d]"><BroadcastSVG size={25} /> </span>
                </div>

                {/* Form fields */}
                <form className="my-5 flex flex-col gap-y-5" onSubmit={handleSubmitBroadcastMail}>
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
                                Select Target
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

                            <option value="all">All Users</option>

                        </select>
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <input className={"p-2 w-full outline-none text-sm selection:shadow-inner rounded-[4px] border-[1px] border-[#1e462a59]  focus-visible:shadow-md"} placeholder="Enter the subject here" type="text" id="messageTitle" value={messageTitle} required disabled={!selectedPosition} onChange={(e) => {
                            setMessageTitle(e.target.value);
                        }} />
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <textarea id="messageBody" className="p-2 w-full h-[150px] shadow-inner rounded-[4px] resize-none text-sm border-[1px] outline-none border-[#1e462a59] focus-visible:shadow-md" required disabled={!selectedPosition} placeholder="Enter message body" value={messageBody} onChange={(e) => {
                            setMessageBody(e.target.value);
                        }}></textarea>
                    </div>

                    <div className="grid grid-cols-[5fr,_1fr] gap-3">
                        <button type="submit" className="p-1 py-3 mt-3 rounded bg-[#038f4d] text-white hover:bg-[#055c32]" disabled={!selectedPosition}>Send Message</button>
                        <button className="p-1 py-3 mt-3 flex justify-center items-center rounded bg-danger text-white hover:bg-[#a5201b]" onClick={(e) => {
                            e.stopPropagation();
                            handleCloseBroadcastMail();
                        }}><CancelSVG size={16} /></button>
                    </div>
                </form>
            </div>
        </>
    );
}

export { BroadcastModal };