// jshint esversion:6
import { Route, Routes } from "react-router-dom";
import { Navigation } from "../../components/admin";
import { Home } from "./home";
import { UserProfile } from "./user_profile"
import { AddUser } from "./add_user";
import { BroadcastMail } from "./broadcast_mail";
import { PasswordReset } from "./password_reset";
import { ViewResult } from "./view_result";

function AdminPage() {
    return (
        <Routes>
            {/* Layout Route - doesn't add any segment to the url */}
            {/* Rendered with child components */}
            <Route element={<Navigation />}>
                {/* Default route */}
                <Route index element={<Home />} />
                {/* Sub-routes */}
                <Route path="userprofile" element={<UserProfile />} />
                <Route path="adduser" element={<AddUser />} />
                <Route path="viewresult" element={<ViewResult />} />
                <Route path="broadcastmail" element={<BroadcastMail />} />
                <Route path="passwordreset" element={<PasswordReset />} />
            </Route>
        </Routes>
    );
}

export { AdminPage }