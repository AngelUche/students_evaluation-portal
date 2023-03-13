// jshint esversion:6
import { useContext } from "react";
import {
  SearchBar as SearchBarAdmin,
  StaffListView,
  StudentListView,
} from "../../../../components/admin";
import { UserModalContext } from "../../../../contexts/admin";
import { UserProfileModal } from "../../../../components/admin/modals";

function Home() {
  const { showUser, toggleUserModal } = useContext(UserModalContext);

  return (
    <div className="w-full h-full">
      {showUser && <UserProfileModal />}
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
  );
}

export { Home };
