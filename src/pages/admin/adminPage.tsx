// jshint esversion:6
import { Route, Routes } from "react-router-dom";
import { Navigation } from "../../components/admin";

function AdminPage() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                
            </Route>
        </Routes>
    );
}

export { AdminPage }