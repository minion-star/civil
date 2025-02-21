import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div id="hero" className="bg-[url(/assets/hero1.jpg)] bg-no-repeat bg-cover text-center p-64 w-full min-h-screen items-center">
                <p className="text-[64px] font-bold font-serif text-center text-black">WAY IN BUILDING</p>
                <p className="text-[24px] font-bold text-center text-black">contractors & construction managers since 1989</p>
                <button className="py-4 px-8 m-4 rounded-full text-center bg-white text-black hover:bg-black hover:text-white transition duration-1000">See Our Recent Projects</button>
            </div>
        </div>
    );

}

export default Home; 