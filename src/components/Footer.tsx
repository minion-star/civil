const Footer = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Contact Info */}
                <div className="text-left text-sm">
                <h3 className="text-lg font-bold">CONTACT US</h3>
                <p>B-14 Collins Street West Victoria</p>
                <p>2386 lorems colerfes state</p>
                <p>(+123) 456 789 - (+024) 666 888</p>
                <p>Contact@yourcompany.com</p>
                </div>

                {/* Logo */}
                <div className="flex items-center justify-center">
                    <img 
                        src="/assets/logo-white.png" 
                        alt="Civil Engineer Logo" 
                        className="h-16 w-auto md:h-20 lg:h-24"
                    />
                </div>

                {/* Footer Links */}
                <nav className="text-sm space-x-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-gray-400">Home</a> | 
                <a href="#" className="hover:text-gray-400">About us</a> | 
                <a href="#" className="hover:text-gray-400">Projects</a> | 
                <a href="#" className="hover:text-gray-400">Blog</a> | 
                <a href="#" className="hover:text-gray-400">Team</a> | 
                <a href="#" className="hover:text-gray-400">Pricing</a> | 
                <a href="#" className="hover:text-gray-400">Contact</a>
                </nav>

                
            </div>
            {/* Copyright */}
            <p className="text-xs mt-16 md:mt-8 text-center text-white">Copyright &copy All Rights Reserved Civil Engineer</p>
        </footer>
    );
}

export default Footer;