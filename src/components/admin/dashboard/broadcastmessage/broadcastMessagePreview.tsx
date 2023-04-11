// jshint esversion:6
import { truncateStr } from "../../../../utils/admin";
import { CancelFillSVG } from "../../../../assets/admin";

interface BroadcastMessageProps {
    title: string
    message: string
}

function BroadcastMessagePreview({ title, message }: BroadcastMessageProps) {

    return (
        <>
            <div className="px-5 py-2  h-[200px]  flex flex-col justify-start border-l-[3px] border-l-blue-500 cursor-pointer bg-[#f0f0fa]">
                <div className="flex justify-between items-center pb-2 border-b-[1px] border-b-[#9b9b9b]">
                    <h3 className="text-sm text-[black]">{truncateStr(title, 15)}</h3>
                    <div className="flex items-center gap-x-3">
                        <p className="font-mono text-[11px] text-[grey]">11, Apr 2022</p>
                        <div className="text-red-500 hover:shadow-lg hover:text-red-700">
                            <CancelFillSVG size={12} />
                        </div>
                    </div>
                </div>
                <p className="text-xs font-mono text-[#424141] pt-2">{truncateStr(message, 80)}</p>
            </div>
        </>
    );
}

export { BroadcastMessagePreview };