// jhsint esversion:6
import { issuesData } from "../../../../data/admin";
import { IssuesPreview } from "./issuePreview";

function IssuesList() {
    return (
        <>
            <div className="h-full w-full border-r-[1px] border-r-[#f7b1b1]">
                <h3 className="text-lg border-[1px] border-r-0 border-[#f7b1b1] py-3 px-5 font-serif">Issues</h3>
                <div className="h-[80%] overflow-y-auto flex flex-col gap-y-3 mt-2 bg-[#ffffff]">
                    {issuesData.map((issue) => {
                        return (
                            <IssuesPreview key={issue.id} title={issue.title} message={issue.message} />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export { IssuesList }