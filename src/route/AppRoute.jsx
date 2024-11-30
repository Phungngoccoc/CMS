import { Routes, Route } from 'react-router-dom';
import HomePage from "../componient/HomePage/HomPage"
const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
    );
}

export default AppRoute;
