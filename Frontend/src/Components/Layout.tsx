import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";

const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
            <Navbar/>
            <main className="flex-grow p-6">
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
