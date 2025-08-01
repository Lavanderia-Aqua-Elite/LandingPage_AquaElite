import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Location from "../pages/Location";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ubicacion" element={<Location />} />
                {/* Redirección para anchors */}
                <Route path="/#:section" element={<Home />} />
            </Routes>
        </Router>
    );
}