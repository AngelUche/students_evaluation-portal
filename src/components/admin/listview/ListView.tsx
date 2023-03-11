// jshint esversion:6

import { ListItem } from "../listItem";

function ListView() {
    return (
        <div className="w-[70%] max-w-[400px] shadow-md">
            <div className="bg-[#0049d1] p-5 w-full flex gap-3 font-arial rounded-t-md">
                <span className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                </svg></span>

                <div className="flex justify-between basis-full">
                    <span className="text-white font-bold">Teachers</span>
                    <span className="text-white">23</span>
                </div>
            </div>
            <div className="border w-full max-h-[250px] overflow-y-auto overflow-x-hidden rounded-b-md">
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
        </div>
    );
}

export { ListView };