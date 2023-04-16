// jshint esversion:6
import { HomeView } from "../../../../views/admin";
import { UserPreviewModal } from "../../../../components/admin/modals";
import { toggleShowUserPreview } from "../../../../features/admin/userpreviewSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/admin/redux";

function Home() {
  // Create the dispatch to carry out actions
  const dispatch = useAppDispatch();

  // Get the state from the store
  const { status: showUserPreviewStatus } = useAppSelector((store) => store.userPreview)

  return (

    <div className="w-full h-full">
      {/* Display preview if toggled */}
      {showUserPreviewStatus && (
        <div className="fixed top-0 bottom-0 left-0 md:left-[250px] right-0 overflow-y-auto flex justify-center items-center bg-[#00000044] z-10" onClick={() => {
          dispatch(toggleShowUserPreview({ status: false, id: undefined }))
        }}>
          <UserPreviewModal />
        </div>
      )}

      <div className="w-full h-full">
        <HomeView />
      </div>
    </div>
    
  );
}

export { Home };
