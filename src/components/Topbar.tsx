import { Link } from "react-router-dom";
import logo from "../../public/logo-white.png";

const Topbar = () => {
    return (
        <div className="fixed w-full top-0 left-0 bg-pink-100/40 z-10">
            <div className="container mx-auto flex flex-wrap justify-between items-center px-6 py-4">
                {/* Logo */}
                <div id="logo">
                    <img src={logo} alt="logo" className="w-16 h-8" />
                </div>

                {/* Navigation */}
                <ul className="hidden md:flex flex-row space-x-6">
                    <li><Link to="/" className="text-black hover:text-gray-700 duration-700">Home</Link></li>
                    <li><Link to="/about" className="text-black hover:text-gray-700 duration-700">About Us</Link></li>
                    <li><Link to="/projects" className="text-black hover:text-gray-700 duration-700">Projects</Link></li>
                    <li><Link to="/blog" className="text-black hover:text-gray-700 duration-700">Blog</Link></li>
                    <li><Link to="/pages" className="text-black hover:text-gray-700 duration-700">Pages</Link></li>
                    <li><Link to="/contact" className="text-black hover:text-gray-700 duration-700">Contact Us</Link></li>
                </ul>

                {/* Mobile Menu Button (Optional) */}
                <button className="md:hidden text-black">☰</button>
            </div>
        </div>
    );
};

export default Topbar;
