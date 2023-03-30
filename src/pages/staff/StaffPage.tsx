// jshint esversion:6
import { Route, Routes } from "react-router-dom";
import { Navigation } from "../../components/staff";
import { HomePage, ViewResultPage, UserProfilePage } from "./subroutes";

function StafPage() {
    return (
        <>
            <Routes>

                <Route element={<Navigation />}>
                    <Route index element={<HomePage />} />
                    <Route path="/viewresult" element={<ViewResultPage />} />
                    <Route path="/userprofile" element={<UserProfilePage />} />
                </Route>

            </Routes>
        </>
    );
}

export { StafPage }