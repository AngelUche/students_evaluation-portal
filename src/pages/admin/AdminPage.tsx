// jshint esversion:6
import { Route, Routes } from "react-router-dom";
import { Navigation } from "../../components/admin";
import { Home, UserProfile, ViewResult, BroadcastMail, PasswordReset, AddUser } from "./subroutes";
import { UserModalContextProvider } from "../../contexts/admin/adminModalsContext";

function AdminPage() {
    return (
        <UserModalContextProvider>
            <Routes>
                {/* Layout Route - doesn't add any segment to the url */}
                {/* Rendered with child components */}
                <Route element={<Navigation />}>
                    {/* Default sub-route */}
                    <Route index element={<Home />} />
                    {/* Other Sub-routes */}
                    <Route path="userprofile" element={<UserProfile />} />
                    <Route path="adduser" element={<AddUser />} />
                    <Route path="viewresult" element={<ViewResult />} />
                    <Route path="broadcastmail" element={<BroadcastMail />} />
                    <Route path="passwordreset" element={<PasswordReset />} />
                </Route>
            </Routes>
        </UserModalContextProvider>
    );
}

export { AdminPage }