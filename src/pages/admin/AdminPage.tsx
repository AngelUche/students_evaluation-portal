// jshint esversion:6
import { Route, Routes } from "react-router-dom";
import { Navigation } from "../../components/admin";
import { Home } from "./home";


function AdminPage() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
}

export { AdminPage }