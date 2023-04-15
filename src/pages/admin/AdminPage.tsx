// jshint esversion:6
import { Route, Routes } from "react-router-dom";
import { AdminLayout } from "../../layouts/admin";
import { Home, UserProfilePage, ViewResultPage, BroadcastMailPage, PasswordReset, AddUserPage } from "./subroutes";
import { store } from "../../store/admin";
import { Provider } from "react-redux";

function AdminPage() {
    return (
        // Redux App store Provider
        <Provider store={store}>
            <Routes>
                {/* Layout Route - doesn't add any segment to the url */}
                {/* Rendered with child components */}
                <Route element={<AdminLayout />}>
                    {/* Default sub-route */}
                    <Route index element={<Home />} />
                    {/* Other Sub-routes */}
                    <Route path="userprofile" element={<UserProfilePage />} />
                    <Route path="adduser" element={<AddUserPage />} />
                    <Route path="viewresult" element={<ViewResultPage />} />
                    <Route path="broadcastmail" element={<BroadcastMailPage />} />
                    <Route path="passwordreset" element={<PasswordReset />} />
                </Route>
            </Routes>
        </Provider>
    );
}

export { AdminPage }
