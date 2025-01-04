import {NavLink} from "react-router-dom";
import {useState} from "react";
import {Menu} from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="bg-white shadow-md w-full">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <div className="text-2xl font-bold text-blue-500"> Todos </div>
                <div className="hidden md:flex space-x-6">
                    <NavLink
                        to="/"
                        onClick={closeMenu}
                        className={({isActive})=>`font-medium 
                           ${isActive?"text-blue-600 border-b-2 border-blue-600":"text-grey-600"}
                           `}
                    >

                        Home
                    </NavLink>
                    <NavLink
                        to="/edit"
                        onClick={closeMenu}
                        className={({isActive})=>`font-medium 
                           ${isActive?"text-purple-600 border-b-2 border-purple-600":"text-grey-600"}
                           `}
                    >
                        Edit
                    </NavLink>
                    <NavLink
                        to="/delete"
                        onClick={closeMenu}
                        className={({isActive})=>`font-medium 
                           ${isActive?"text-red-600 border-b-2 border-red-600":"text-grey-600"}
                           `}
                    >
                        Delete
                    </NavLink>
                    <NavLink
                        to="/create"
                        onClick={closeMenu}
                        className={({isActive})=>`font-medium 
                           ${isActive?"text-green-600 border-b-2 border-green-600":"text-grey-600"}
                           `}
                    >
                        Create
                    </NavLink>
                    <NavLink
                        to="/profile"
                        onClick={closeMenu}
                        className={({isActive})=>`font-medium 
                           ${isActive?"text-yellow-600 border-b-2 border-yellow-600":"text-grey-600"}
                           `}
                    >
                        profile
                    </NavLink>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
                        <Menu className="w-6 h-6"/>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div
                    className="absolute top-0 left-0 w-full h-full bg-white z-10 flex flex-col items-center justify-center space-y-6">
                    <NavLink
                        to="/"
                        onClick={closeMenu}
                        className={({isActive}) =>
                            `text-xl font-medium ${isActive ? "text-blue-600" : "text-gray-600"}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/edit"
                        onClick={closeMenu}
                        className={({isActive}) =>
                            `text-xl font-medium ${isActive ? "text-purple-600" : "text-gray-600"}`
                        }
                    >
                        Edit
                    </NavLink>
                    <NavLink
                        to="/delete"
                        onClick={closeMenu}
                        className={({isActive}) =>
                            `text-xl font-medium ${isActive ? "text-red-600" : "text-gray-600"}`
                        }
                    >
                        Delete
                    </NavLink>
                    <NavLink
                        to="/create"
                        onClick={closeMenu}
                        className={({isActive}) =>
                            `text-xl font-medium ${isActive ? "text-green-600" : "text-gray-600"}`
                        }
                    >
                        create
                    </NavLink>
                    <NavLink
                        to="/profile"
                        onClick={closeMenu}
                        className={({isActive}) =>
                            `text-xl font-medium ${isActive ? "text-yellow-600" : "text-gray-600"}`
                        }
                    >
                        Profile
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;