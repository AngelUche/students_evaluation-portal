// jshint esversion:6
import { useContext } from "react";
import { HomeView } from "../../../../views/admin";
import { UserPreviewModalContext } from "../../../../contexts/admin";
import { UserPreviewModal } from "../../../../components/admin/modals";

function Home() {
  const { showUserPreview, toggleShowUserPreview } = useContext(UserPreviewModalContext);

  return (

    <div className="w-full h-full">
      {/* Display preview if toggled */}
      {showUserPreview.status && (
        <div className="fixed top-0 bottom-0 left-0 md:left-[250px] right-0 overflow-y-auto flex justify-center items-center bg-[#00000044] z-10" onClick={() => {
          toggleShowUserPreview({ status: false, id: undefined });
        }}>
          <UserPreviewModal id={showUserPreview.id} />
        </div>
      )}

      <div className="w-full h-full">
        <HomeView />
      </div>
    </div>
    
  );
}

export { Home };
