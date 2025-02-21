import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/logo-white.png";

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
                    <img src={logo} alt="logo" className="w-16 h-8" />
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex flex-row space-x-6">
                    <li><Link to="/" className="text-black hover:text-gray-700">Home</Link></li>
                    <li><Link to="/about" className="text-black hover:text-gray-700">About Us</Link></li>
                    <li><Link to="/projects" className="text-black hover:text-gray-700">Projects</Link></li>
                    <li><Link to="/blog" className="text-black hover:text-gray-700">Blog</Link></li>
                    <li><Link to="/pages" className="text-black hover:text-gray-700">Pages</Link></li>
                    <li><Link to="/contact" className="text-black hover:text-gray-700">Contact Us</Link></li>
                </ul>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-black text-3xl" 
                    onClick={toggleMenu}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu (Hidden by Default) */}
            <div className={`md:hidden bg-amber-600/90 w-full absolute top-full left-0 transition-all duration-700 ease-in-out ${menuOpen ? "block" : "hidden"}`}>
                <ul className="flex flex-col items-center py-4 space-y-4">
                    <li><Link to="/" className="text-black" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/about" className="text-black" onClick={toggleMenu}>About Us</Link></li>
                    <li><Link to="/projects" className="text-black" onClick={toggleMenu}>Projects</Link></li>
                    <li><Link to="/blog" className="text-black" onClick={toggleMenu}>Blog</Link></li>
                    <li><Link to="/pages" className="text-black" onClick={toggleMenu}>Pages</Link></li>
                    <li><Link to="/contact" className="text-black" onClick={toggleMenu}>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Topbar;
