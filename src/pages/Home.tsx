import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div
                id="hero"
                className="bg-[url('/assets/hero1.jpg')] bg-no-repeat bg-cover bg-center text-center flex flex-col items-center justify-center min-h-screen px-4 md:px-0 py-10 md:py-64"
            >
                <p className="text-3xl md:text-[64px] font-bold font-serif text-black">
                    WAY IN BUILDING
                </p>
                <p className="text-lg md:text-2xl font-bold text-black">
                    Contractors & Construction Managers Since 1989
                </p>
                <button className="py-2 px-6 md:py-4 md:px-8 mt-6 rounded-full text-black bg-white hover:bg-black hover:text-white transition duration-500">
                    See Our Recent Projects
                </button>
            </div>
        </div>
    );
};

export default Home;
