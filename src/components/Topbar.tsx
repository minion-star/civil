import { useState } from "react";
import { Link } from "react-router-dom";


const Topbar = () => {
    // State for mobile menu
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="fixed w-full top-0 left-0 bg-pink-100/40 z-10">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <div id="logo">
                    <img src="/assets/logo-white.png" alt="logo" className="w-16 h-8" />
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex flex-row space-x-6">
                    <li><Link to="/" className="text-black hover:text-gray-700 duration-700">Home</Link></li>
                    <li><Link to="/about" className="text-black hover:text-gray-700 duration-700">About Us</Link></li>
                    <li><Link to="/projects" className="text-black hover:text-gray-700 duration-700">Projects</Link></li>
                    <li><Link to="/blog" className="text-black hover:text-gray-700 duration-700">Blog</Link></li>
                    <li><Link to="/pages" className="text-black hover:text-gray-700 duration-700">Pages</Link></li>
                    <li><Link to="/contact" className="text-black hover:text-gray-700 duration-700">Contact Us</Link></li>
                </ul>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-black text-3xl hover:cursor-pointer hover:scale-120 transition duration-700" 
                    onClick={toggleMenu}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu (Hidden by Default) */}
            <div className={`md:hidden bg-amber-600/90 w-full fixed top-0 left-0 transition-all duration-700 ease-in-out ${menuOpen ? "block" : "hidden"}`}>
                <ul className="flex flex-col items-center py-4 space-y-4">
                    <li><Link to="/" className="text-black hover:text-gray-700 duration-700 " onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/about" className="text-black hover:text-gray-700 duration-700" onClick={toggleMenu}>About Us</Link></li>
                    <li><Link to="/projects" className="text-black hover:text-gray-700 duration-700" onClick={toggleMenu}>Projects</Link></li>
                    <li><Link to="/blog" className="text-black hover:text-gray-700 duration-700" onClick={toggleMenu}>Blog</Link></li>
                    <li><Link to="/pages" className="text-black hover:text-gray-700 duration-700" onClick={toggleMenu}>Pages</Link></li>
                    <li><Link to="/contact" className="text-black hover:text-gray-700 duration-700" onClick={toggleMenu}>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Topbar;
