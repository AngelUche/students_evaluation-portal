// jshint esversion:6
import { getFormattedDate, getTotalUsers } from "../../../utils/admin";
import { SearchBar } from "../../../components/admin";
import { UserOverview, BroadcastMessages, IssuesList } from "../../../components/admin/dashboard";
import StudentSVG from "../../../assets/admin/svg/studentSVG.svg";
import teacherSVG from "../../../assets/admin/svg/teacherSVG.svg";
import staffSVG from "../../../assets/admin/svg/staffSVG.svg"
import { useState } from "react";
import { StudentTable, StaffTable } from "../../../components/admin/tables";

interface UserTableType {
    student: boolean
    staff: boolean
}

const resetUserTable = { student: false, staff: false, teacher: false }

function HomeView() {

    const [currentUserTable, setCurrentUserTable] = useState({ student: true, staff: false } as UserTableType)

    const { year, month, day } = getFormattedDate();
    const { studentCount, staffCount, teacherCount } = getTotalUsers();

    function handleUserTableChange(type: string) {
        const state = { ...currentUserTable, ...resetUserTable, [type]: true }
        console.log(state);
        setCurrentUserTable(state);
    }

    return (
        <>
            <div className="px-9 py-7">

                {/* Dashboard Title */}
                <div className="flex justify-between items-start gap-x-5 h-[60px]">
                    <div className="basis-[200px]">
                        <div>
                            <h2 className="text-[#474646]">Welcome Back</h2>
                            <h2 className="text-xl">{"Royal"}</h2>
                        </div>

                    </div>

                    <div className="basis-[200px] grow flex flex-col items-end">
                        <div className="w-full max-w-[400px] flex-1">
                            <SearchBar />
                        </div>
                        <p className="font-mono text-[grey] text-xs my-1">{`${day} ${month}, ${year}`}</p>
                    </div>
                </div>

                {/* Dashboard Area */}
                <div className="mt-7 gap-x-7">
                    {/* Main Viewinf Area */}
                    <div className="overflow-y-auto">
                        <div>
                            <h1 className="font-bold text-xl">Dashboard</h1>
                            <div className="w-full flex flex-nowrap mb-3 py-3 gap-x-5 overflow-x-auto">
                                <div className="shrink-0 border-[1px] border-[#f8f6f6] cursor-pointer hover:shadow-md">
                                    <UserOverview title="Students" count={studentCount + 56} avatar={StudentSVG} />
                                </div>
                                <div className="shrink-0 border-[1px] border-[#f8f6f6]  cursor-pointer hover:shadow-md">
                                    <UserOverview title="Teachers" count={teacherCount} avatar={staffSVG} />
                                </div>
                                <div className="shrink-0 border-[1px] border-[#f8f6f6]  cursor-pointer hover:shadow-md">
                                    <UserOverview title="Staffs" count={staffCount + 13} avatar={teacherSVG} />
                                </div>
                            </div>
                        </div>

                        {/* Table containig database design */}
                        <div className="my-9">
                            <div className="bg-[white] flex shadow max-w-[800px]">
                                <div className={`p-3 cursor-pointer hover:bg-[#f0f0fa] ${currentUserTable.student && "border-b-2 border-b-blue-500 bg-[#f0f0fa]"}`} onClick={() => handleUserTableChange("student")} >Student</div>
                                <div className={`p-3 cursor-pointer hover:bg-[#f0f0fa] ${currentUserTable.staff && "border-b-2 border-b-blue-500 bg-[#f0f0fa]"}`} onClick={() => handleUserTableChange("staff")}  >Staff</div>
                            </div>
                            <>
                                {currentUserTable.student && <StudentTable />}
                            </>
                            <>
                                {currentUserTable.staff && <StaffTable />}
                            </>

                        </div>
                    </div>
                </div>
                {/* Messages area */}
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-y-[5rem] gap-x-9 lg:gap-x-[6rem]">
                    <div className="max-h-[350px] min-h-[200px]">
                        <IssuesList />
                    </div>
                    <div className="max-h-[350px] min-h-[200px]">
                        <BroadcastMessages />
                    </div>
                </div>
            </div>
        </>
    );

}

export { HomeView };
