// jshint esversion:6
import { BroadcastMessagePreview } from "./broadcastMessagePreview";
import { broadcastMessagesData } from "../../../../data/admin";

function BroadcastMessages() {
    return (
        <div className="h-full w-full border-r-[1px] border-r-[#b1b1f7]">
            <h3 className="text-lg border-[1px] border-r-0 border-[#b1b1f7] py-3 px-5 font-serif">Broadcast messages</h3>
            <div className="h-[80%] overflow-y-auto flex flex-col gap-y-3 mt-2 bg-[#ffffff]">
                {broadcastMessagesData.map((broadcast) => {
                    return (
                        <BroadcastMessagePreview key={broadcast.id} title={broadcast.title} message={broadcast.message} />
                    );
                })}
            </div>
        </div>
    );
}

export { BroadcastMessages };
