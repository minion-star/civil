import { Link } from "react-router-dom";
import logo from "../../public/logo-white.png"
const Topbar = () => {
    return (
        <div className="flex flex-row justify-between bg-pink-100/40 fixed w-full mt-0 pl-32 pr-32 top-0 right-0 left-0 z-10">
            <div id="logo" className="p-4">
                <img src={logo} alt="logo" className="w-16 h-8"/>
            </div>
            <div className="flex flex-row justify-end w-full">
                <ul className="flex flex-row p-4 align-middle">
                    <li className="text-black m-1"><Link to="/">Home</Link></li>
                    <li className="text-black m-1"><Link to="/About">About Us</Link></li>
                    <li className="text-black m-1"><Link to="/About">Projects</Link></li>
                    <li className="text-black m-1"><Link to="/About">Blog</Link></li>
                    <li className="text-black m-1"><Link to="/About">Pages</Link></li>
                    <li className="text-black m-1"><Link to="/About">Contact Us</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Topbar;