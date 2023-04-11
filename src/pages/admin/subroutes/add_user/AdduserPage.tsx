// jshint esversion:6
import { useContext } from "react";
import { AddUserModalContext } from "../../../../contexts/admin";
import { AddUserView } from "../../../../views/admin";
import { AddUserModal } from "../../../../components/admin/modals";

function AddUserPage() {
    const { AddUserPromptStatus} = useContext(AddUserModalContext);

    const { status: AddUserPrompt } = AddUserPromptStatus;

    return (
        <>
            {/* Render the Add user prompt modal to select a type of user to Add */}
            {(AddUserPrompt) && (
                <div className="w-full h-full flex justify-center items-center bg-[#00000044]">
                    <AddUserModal />
                </div>
            )}

            {/* Render the Add User Form if the modal is not rendered */}
            {
                AddUserPrompt ? null : <AddUserView />
            }

        </>
    );

}

export { AddUserPage }