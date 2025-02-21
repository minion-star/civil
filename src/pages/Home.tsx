import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div id="hero" className="bg-[url(/assets/hero1.jpg)] bg-no-repeat bg-cover p-64 flex flex-col justify-center w-full min-h-screen">
                <p className="text-[64px] font-bold font-serif text-center text-black">WAY IN BUILDING</p>
                <p className="text-[24px] font-bold text-center text-black">contractors & construction managers since 1989</p>
                <Link to="#" className="p-4 mt-6 text-black text-center bg-white hover:bg-black hover:text-white cursor-pointer transition">
                    See Our Recent Projects
                </Link>
            </div>
        </div>
    );

}

export default Home; 