// jshint esversion:6
// import { Table } from "react-bootstrap";
import { staffDataType, PositionData } from "../../../../data/admin";
import { InfoFillSVG } from "../../../../assets/admin/svg";
import { getUserPosition } from "../../../../utils/admin";
import { toggleShowUserPreview } from "../../../../features/admin/userpreviewSlice";
import { useAppDispatch } from "../../../../hooks/admin/redux";

interface StaffTableViewProps {
    Users: staffDataType[]
    SN: number
}

function StaffTableView({ Users, SN }: StaffTableViewProps) {

    const dispatch = useAppDispatch();

    function handleProfilePreview(id: any) {
        dispatch(toggleShowUserPreview({ status: true, id }));
    }

    return (
        <>
            <table className="max-w-[800px] w-full border-spacing-1 table-fixed">
                <thead>
                    <tr className="[&>*]:p-2">
                        <th className="text-sm font-medium w-[40px] text-left">#</th>
                        <th className="text-sm font-medium text-left w-[100px]"><span>Firstname</span></th>
                        <th className="hidden sm:table-cell text-sm font-medium text-left w-[100px]">Lastname</th>
                        <th className="text-sm font-medium text-left w-[80px]">ID</th>
                        <th className="hidden xs:table-cell font-medium text-left w-[120px]">Position</th>
                        <th className="hidden lg:table-cell text-sm font-medium text-left w-[80px]">Age</th>
                        <th className="hidden lg:table-cell text-sm font-medium text-left w-[130px]">Phone</th>
                    </tr>
                </thead>
                <tbody className="[&>*:nth-child(even)]:bg-[#f0f0fa]">
                    {
                        Users.map((user: any, index: any) => {
                            return (
                                <tr key={user.id} className="cursor-pointer [&>*:last-child]:hover:text-gray-600 text-[#575656] text-sm font-mono [&>*]:p-2" onClick={() => handleProfilePreview(user.id)}>
                                    <td className="inline-block w-full truncate"><span>{SN + index}</span></td>
                                    <td className="w-full h-full truncate"><span>{user.firstName}</span></td>
                                    <td className="hidden h-full sm:table-cell truncate"><span>{user.lastName}</span></td>
                                    <td className="inline-block w-full truncate"><span>{user.id}</span></td>
                                    <td className="hidden xs:table-cell w-full truncate"><span>{getUserPosition(user.position)?.value}</span></td>
                                    <td className="hidden lg:table-cell w-full truncate"><span>23</span></td>
                                    <td className="hidden lg:table-cell w-full truncate"><span>{user.phoneNumber}</span></td>
                                    <td className="cursor-pointer text-gray-300"><InfoFillSVG size={16} /></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export { StaffTableView };