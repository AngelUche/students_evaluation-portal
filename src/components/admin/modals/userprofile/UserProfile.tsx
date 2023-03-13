// jshint esversion:6
import { useContext } from "react";
import { UserModalContext } from "../../../../contexts/admin";

function UserProfileModal() {
    const { toggleUserModal } = useContext(UserModalContext);

    return (
        <div className="fixed top-[60px] bottom-0 left-0 md:left-[250px] right-0 overflow-y-auto flex justify-center items-center bg-[#00000044]">
            <div className="p-[100px] bg-white flex flex-col justify-center">
                <p className="font bold mb-4"> TESTING OVERLAY</p>
                <button className="bg-red-700 text-white p-3 hover:shadow-md" onClick={() => {
                    toggleUserModal(false);
                }}>Close Modal</button>
            </div>
        </div>
    );
}

export { UserProfileModal }