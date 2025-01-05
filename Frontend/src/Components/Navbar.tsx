import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, Moon, Sun } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }
    }, []);



    const toggleDarkMode = () => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.remove('dark');
        } else {
            root.classList.add('dark');
        }
        setIsDarkMode(!isDarkMode);
    };
    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="bg-white dark:bg-black shadow-md w-full">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <div className="text-2xl font-bold text-blue-500"> Todos </div>
                <div className="hidden md:flex space-x-6">
                    <NavLink
                        to="/"
                        onClick={closeMenu}
                        className={({ isActive }) => `font-medium 
                           ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-grey-600 dark:text-white"}
                           `}
                    >

                        Home
                    </NavLink>
                    <NavLink
                        to="/completed"
                        onClick={closeMenu}
                        className={({ isActive }) => `font-medium 
                           ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-grey-600 dark:text-white"}
                           `}
                    >
                        Completed
                    </NavLink>
                    <NavLink
                        to="/progress"
                        onClick={closeMenu}
                        className={({ isActive }) => `font-medium 
                           ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-grey-600 dark:text-white"}
                           `}
                    >
                        Progress
                    </NavLink>
                    <NavLink
                        to="/create"
                        onClick={closeMenu}
                        className={({ isActive }) => `font-medium 
                           ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-grey-600 dark:text-white"}
                           `}
                    >
                        Create
                    </NavLink>
                   
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
                <button
                    onClick={toggleDarkMode}
                    className="px-4 py-2 rounded text-black dark:text-white"
                >
                    {isDarkMode ? <Sun /> : <Moon />}
                </button>
            </div>
            {isMenuOpen && (
                <div
                    className="absolute top-0 left-0 w-full h-full bg-white dark:bg-black z-10 flex flex-col items-center justify-center space-y-6">
                    <NavLink
                        to="/"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            `text-xl font-medium ${isActive ? "text-blue-600" : "text-gray-600 dark:text-white"}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/completed"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            `text-xl font-medium ${isActive ? "text-blue-600" : "text-gray-600 dark:text-white"}`
                        }
                    >
                        Completed
                    </NavLink>
                    <NavLink
                        to="/progress"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            `text-xl font-medium ${isActive ? "text-blue-600" : "text-gray-600 dark:text-white"}`
                        }
                    >
                       progress
                    </NavLink>
                    <NavLink
                        to="/create"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            `text-xl font-medium ${isActive ? "text-blue-600" : "text-gray-600 dark:text-white"}`
                        }
                    >
                        create
                    </NavLink>
                
                </div>
            )}
        </nav>
    );
};

export default Navbar;