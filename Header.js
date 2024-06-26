import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { logoutRedux } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import logo from '../Pictures_for_project/logo.jpg';


const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch(); // Call it to get the dispatch function

    const handleShowMenu = () => {
        setShowMenu(prev => !prev);
    }

    const handleLogout = () => {
        dispatch(logoutRedux());
    }

    return (
        <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
            {/*desktop */}
            <div className="flex -item-cneter h-full justify-between">
                <Link to={""}>
                    <div className='h-16'>
                        <img src={logo} className="h-full" alt="Logo" />
                    </div>
                </Link>
                <div className="flex items-center gap-5 md:gap-7">
                    <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
                        <Link to={""}>Home</Link>
                        <Link to={"menu"}>Menu</Link>
                        <Link to={"about"}>About</Link>
                        <Link to={"contact"}>Contact</Link>
                    </nav>
                    <div className="text-2xl text-slate-600 relative">
                        <FaShoppingCart />
                        <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-xs text-center ">0</div>
                    </div>
                    <div className="text-slate-600" onClick={handleShowMenu}>
                        <div className="text-3xl cursor-pointer">
                            <FaRegUserCircle />
                        </div>
                        {showMenu && (
                            <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
                              
                                <Link to={"login"} className="whitespace-nowrap cursor-pointer">Login</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/*mobile */}
        </header>
    )
}

export default Header;
