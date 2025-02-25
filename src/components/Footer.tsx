const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 px-12">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Contact Info */}
                <div className="md:text-left text-sm text-center">
                    <h3 className="text-lg font-bold">CONTACT US</h3>
                    <p>Tacoma, WA</p>
                    <p>6843 S JUNETT ST</p>
                    <p>(+123) 456 789 - (+024) 666 888</p>
                    <p>wde2279@gmail.com</p>
                </div>

                {/* Logo */}
                <div className="flex flex-col items-center justify-center">
                    <img 
                        src="/assets/logo-white.png" 
                        alt="Civil Engineer Logo" 
                        className="h-8 w-auto md:h-10 lg:h-12 my-4"
                    />
                    <nav className="text-sm space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-amber-500">Home</a><span> | </span>
                    <a href="#" className="hover:text-amber-500">About us</a><span> | </span>
                    <a href="#" className="hover:text-amber-500">Projects</a><span> | </span>
                    <a href="#" className="hover:text-amber-500">Blog</a><span> | </span>
                    <a href="#" className="hover:text-amber-500">Team</a><span> | </span>
                    <a href="#" className="hover:text-amber-500">Pricing</a><span> | </span>
                    <a href="#" className="hover:text-amber-500">Contact</a>
                    </nav>
                </div>

                {/* Footer Links */}
                

                
            </div>
            {/* Copyright */}
            <p className="text-xs mt-16 md:mt-8 text-center text-white">Copyright &copy; All Rights Reserved by Civil Team</p>
        </footer>
    );
}

export default Footer;