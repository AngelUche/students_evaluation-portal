// jshint esversion:6
import { ContextType } from "react";
import { useOutletContext } from "react-router-dom"
import { SearchBar as SearchBarAdmin, StaffListView, StudentListView } from "../../../../components/admin"
import { useShowUserModal } from "../../../../components/admin/navigation/navigation";

function Home() {
    // const user = useShowUserModal();
    // console.log("Outlet context");
    // console.log(user);
    const showUser  = false;

    // console.log(showUser);

    return (
        <div className="w-full h-full">
            {showUser && (
                <div className="fixed top-[60px] bottom-0 left-0 md:left-[250px] right-0 overflow-y-auto flex justify-center items-center bg-[#00000044]">
                    <p className="p-[100px] bg-white font bold"> TESTING OVERLAY</p>
                </div>
            )}
            <div className="my-16 md:my-20 px-12">
                {/* <div className="w-full flex justify-center my-5">
                <SearchBarAdmin />
            </div> */}

                <div className="w-full mx-auto grid grid-cols-[repeat(auto-fit,_minmax(260px,_350px))] justify-center gap-10">
                    <StaffListView />
                    <StudentListView />
                    <StaffListView />
                    <StudentListView />
                </div>
            </div>
        </div>
    )
}

export { Home }