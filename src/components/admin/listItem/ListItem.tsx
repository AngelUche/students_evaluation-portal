// jshint esversion:6
import avatar from "../../../assets/admin/avatar.jpg";

function ListItem() {
    return (
        <>
            <div className="px-2 cursor-pointer hover:border hover:border-violet-500">
                <div className="py-2 flex items-center gap-3 border-b-2 hover:border-none">
                    <div className="w-[45px] h-[45px] rounded-md overflow-hidden">
                        <img className="w-full h-full" src={avatar} alt="avatar" />
                    </div>
                    <div className="basis-full flex justify-between">
                        <span className="font-normal text-[#474761b6] text-sm font-arial">Shaffi Zakariyah</span>
                        <span className="font-bold text-sm text-gray-500">Creche</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export { ListItem }