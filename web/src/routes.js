import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { Context } from "./context/AuthContext"
import { useContext } from "react";

function RequireAuth({ children }) {
    const AuthContext = useContext(Context)
    if (!AuthContext.isUserAuthenticated) {
        return <Navigate to="/" replace />
    }
    return children
}

export default function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={
                <RequireAuth>
                    <Admin />
                </RequireAuth>

            } />
        </Routes>
    );
}
