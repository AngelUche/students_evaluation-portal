// jshint esversion:6
import { Table } from "react-bootstrap";
import { studentDataType } from "../../../../data/admin";
import { InfoFillSVG } from "../../../../assets/admin/svg";
import { getUserClass } from "../../../../utils/admin";
import { useDispatch } from "react-redux";
import { toggleShowUserPreview } from "../../../../features/admin/userpreviewSlice";

interface StudTableViewProps {
    Users: studentDataType[]
    SN: number
}

function StudentTableView({ Users, SN }: StudTableViewProps) {

    const dispatch = useDispatch();

    function handleProfilePreview(id: any) {
        dispatch(toggleShowUserPreview({ status: true, id }));
    }

    return (
        <>
            <Table className="max-w-[800px] w-full border-spacing-1 table-fixed">
                <thead>
                    <tr className="[&>*]:p-2">
                        <th className="text-sm font-medium w-[40px] text-left">#</th>
                        <th className="text-sm font-medium text-left w-[100px]"><span>Firstname</span></th>
                        <th className="hidden sm:table-cell text-sm font-medium text-left w-[100px]">Lastname</th>
                        <th className="text-sm font-medium text-left w-[80px]">ID</th>
                        <th className="hidden xs:table-cell font-medium text-center w-[80px]">Class</th>
                        <th className="hidden lg:table-cell text-sm font-medium text-center w-[80px]">Age</th>
                        <th className="hidden lg:table-cell text-sm font-medium text-left w-[80px]">Gender</th>
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
                                    <td className="hidden xs:table-cell w-full text-center truncate"><span>{getUserClass(user.classDesignation)?.classDesignation}</span></td>
                                    <td className="hidden lg:table-cell w-full text-center truncate"><span>23</span></td>
                                    <td className="hidden lg:table-cell w-full text-left truncate"><span>{user.gender}</span></td>
                                    <td className="text-gray-300"><InfoFillSVG size={16} /></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </>
    );
}

export { StudentTableView };