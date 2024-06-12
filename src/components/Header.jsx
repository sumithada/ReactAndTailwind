import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { Link, NavLink } from "react-router-dom";


function Header() {
    // hooks:-
    const [toggle, setToggle] = useState(false)
    return (
        <div className="bg-[#2699fb] w-full p-4">
            <div className="max-w-[1240px] py-[12px] mx-auto flex justify-between items-center">
                <Link to="/" className="text-4xl font-bold">XYZ</Link>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className="text-white text-2xl md:hidden block active:scale-125" />
                        :
                        <AiOutlineMenu onClick={() => setToggle(!toggle)} className="text-white text-2xl md:hidden block active:scale-125" />
                }
                <ul className="hidden md:flex text-white gap-10 text-xl">
                    <NavLink
                    to="/"
                    className="hover:text-[#f6f34f] cursor-pointer">
                        Home
                    </NavLink>
                    <NavLink
                    to="/company"
                    className="hover:text-[#f6f34f] cursor-pointer">
                        Company
                    </NavLink>
                    <li className="hover:text-[#f6f34f] cursor-pointer">
                        Resources
                    </li>
                    <li className="hover:text-[#f6f34f] cursor-pointer">
                        About
                    </li>
                    <NavLink
                    to="/contact"
                    className="hover:text-[#f6f34f] cursor-pointer">
                        Contact
                    </NavLink>
                </ul>

                {/* Responsive menu */}
                <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black ${toggle ? 'left-[0]' : 'left-[-100%]'} top-[92px]`}>
                    <li className="p-5 border-b border-white">
                        Home
                    </li>
                    <li className="p-5 border-b border-white">
                        Company
                    </li>
                    <li className="p-5 border-b border-white">
                        Resources
                    </li>
                    <li className="p-5 border-b border-white">
                        About
                    </li>
                    <li className="p-5 border-b border-white">
                        Contact
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;