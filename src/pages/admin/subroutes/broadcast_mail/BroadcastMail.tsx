// jshint esversion:6

import { BroadcastModal } from "../../../../components/admin/modals"

function BroadcastMailPage() {
    return (
        <>
            {/* Render the Add user prompt modal to select a type of user to Add */}        
            <div className="w-full h-full flex justify-center items-center bg-[#00000044]">
                <BroadcastModal />
            </div>
        </>
    )
}

export { BroadcastMailPage }