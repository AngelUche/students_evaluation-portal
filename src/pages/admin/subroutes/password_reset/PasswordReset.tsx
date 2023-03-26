// jshint esversion:6
import { ResetPasswordModal } from "../../../../components/admin/modals";

function PasswordReset() {
    return (
        <>
            {/* Render the Add user prompt modal to select a type of user to Add */}
            <div className="fixed top-[60px] bottom-0 left-0 md:left-[250px] right-0 overflow-y-auto flex justify-center items-center bg-[#00000044]">
                <ResetPasswordModal />
            </div>
        </>
    );
}

export { PasswordReset }