import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profil from "../pages/Profil";
import Logout from "../pages/Logout";
import Error404 from "../pages/Error404";


function RoutesPath() {
    return(
        <HashRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profil" element={<Profil />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </Layout>
        </HashRouter>
    );
}

export default RoutesPath;