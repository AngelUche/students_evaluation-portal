// jshint esversion:6
import { Route, Routes } from "react-router-dom";
import { Navigation } from "../../components/admin";
import { Home, UserProfilePage, ViewResult, BroadcastMail, PasswordReset, AddUserPage } from "./subroutes";
import { UserPreviewModalContextProvider, UserProfileModalContextProvider, AddUSerModalContextProvider } from "../../contexts/admin";

function AdminPage() {
    return (
        // Context to manage rendering of User Profile Modal
        <UserProfileModalContextProvider>
            {/* Context to manage rendering of Add User Modal */}
            <AddUSerModalContextProvider>
                {/* Context to manage rendering of User Profile Preview Modal */}
                <UserPreviewModalContextProvider>
                    <Routes>
                        {/* Layout Route - doesn't add any segment to the url */}
                        {/* Rendered with child components */}
                        <Route element={<Navigation />}>
                            {/* Default sub-route */}
                            <Route index element={<Home />} />
                            {/* Other Sub-routes */}
                            <Route path="userprofile" element={<UserProfilePage />} />
                            <Route path="adduser" element={<AddUserPage />} />
                            <Route path="viewresult" element={<ViewResult />} />
                            <Route path="broadcastmail" element={<BroadcastMail />} />
                            <Route path="passwordreset" element={<PasswordReset />} />
                        </Route>
                    </Routes>
                </UserPreviewModalContextProvider>
            </AddUSerModalContextProvider>
        </UserProfileModalContextProvider>
    );
}

export { AdminPage }