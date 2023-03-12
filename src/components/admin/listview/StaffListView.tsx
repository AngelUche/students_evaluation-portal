// jshint esversion:6
import { ListItem } from "../listItem";

import { staffData } from "../../../data/admin";

function StaffListView() {
    return (
        <div className="w-full shadow-md bg-white">
            <div className="bg-[#0049d1] p-5 w-full flex gap-3 font-arial rounded-t-md overflow-hidden">
                <span className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                </svg></span>

                <div className="flex justify-between basis-full">
                    <span className="text-white font-bold">Staffs</span>
                    <span className="text-white font-mono">23</span>
                </div>
            </div>
            <div className="border w-full max-h-[300px] overflow-y-auto overflow-x-hidden rounded-b-md">
                {staffData.map((staff) => {
                    return <ListItem key={staff.id} id={staff.id} name={staff.name} position={staff.position} />
                })}
            </div>
        </div>
    );
}

export { StaffListView };