// jshint esversion:6
import { useState } from "react";
import { KeySVG, CancelSVG, CancelFillSVG } from "../../../../assets/admin";
import { useNavigate } from "react-router-dom";

function ResetPasswordModal() {

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Return a navigator to enable routing
    const navigate = useNavigate();

    function handleFormClose() {
        navigate("/admin");
    }

    function handleFormSubmit(e: any) {
        e.stopPropagation();
        handleFormClose();
        alert("Password sucessfully changed");
    }

    return (
        <>
            <div className="w-[380px] p-9 bg-white rounded-md">
                {/* Form Header */}
                <h1 className="flex gap-x-2 items-center">
                    <span className="text-2xl font-bold text-sideNavbg">Reset Password</span>
                    <span className="text-[#038f4d]" ><KeySVG /></span>
                    <span className="text-red-500 hover:shadow-lg hover:text-red-700 ml-auto" onClick={((e: any) => {
                        e.stopPropagation();
                        handleFormClose();
                    })} ><CancelFillSVG size={20} /></span>
                </h1>
                {/* Form Fields */}
                <form className="flex flex-col my-5 gap-y-5" onSubmit={handleFormSubmit}>
                    <div className="flex flex-col gap-y-1">
                        <label className="font-mono text-sm font-bold text-gray-500" htmlFor="currentPassword">Current password</label>
                        <input
                            type="password"
                            id="currentPassword"
                            required
                            className={"p-3 w-full outline-none selection:shadow-inner rounded-[4px] border-[1px] border-[#1e462a59] focus-visible:shadow-md"}
                            onClick={((e: any) => setCurrentPassword(e.target.value))}
                        />
                    </div>
                    
                    <div className="flex flex-col gap-y-1">
                        <label className="font-mono text-sm font-bold text-gray-500" htmlFor="newPassword">New password</label>
                        <input
                            type="password"
                            id="newPassword"
                            required
                            onClick={((e: any) => setNewPassword(e.target.value))}
                            className={"p-3 w-full outline-none selection:shadow-inner rounded-[4px] border-[1px] border-[#1e462a59]  focus-visible:shadow-md"} />
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <label className="font-mono text-sm font-bold text-gray-500" htmlFor="confirmPassword">Confirm password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            required
                            onClick={((e: any) => setConfirmPassword(e.target.value))}
                            className={"p-3 w-full outline-none selection:shadow-inner rounded-[4px] border-[1px] border-[#1e462a59]  focus-visible:shadow-md"} />
                    </div>

                    {/* Submit buttons */}
                    <div className="mt-[1rem]">
                        <button type="submit" className="p-1 py-4 w-full mt-3 font-bold rounded bg-[#038f4d] text-white hover:bg-[#055c32]" >Submit</button>
                    </div>
                </form>

            </div>

        </>

    );
}

export { ResetPasswordModal };