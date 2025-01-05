import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import CustomizedBreadcrumbs from "./Breadcrumb.tsx";

const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 text-gray-900 flex flex-col justify-center item-center ">
            <Navbar/>
            <CustomizedBreadcrumbs/>
            <main className="flex-grow p-6">
                
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
