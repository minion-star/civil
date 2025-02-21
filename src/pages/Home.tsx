import { useNavigate } from "react-router-dom";

const Home = () => {
    const Navigate = useNavigate();
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
                <button className="py-2 px-6 md:py-4 md:px-8 mt-6 rounded-full text-white border-2 border-white hover:bg-white hover:text-black transition duration-500 hover:cursor-pointer" onClick={()=>Navigate("/projects")}>
                    See Our Recent Projects
                </button>
            </div>
            <div id="new-idea" className="bg-amber-500 bg-cover flex px-6 py-12">
                <div className="flex-auto">
                    <p className="text-[48px] text-white">Already have an excellent idea!</p>
                    <p className="text-[20px] text-white">And want to know whether it is possible to implement it?</p>
                </div>
                <div className="flex-auto text-center py-8">
                    <button className="px-6 py-2 rounded-full text-center text-white border-2 border-white hover:bg-white hover:text-black transition duration-700 cursor-pointer">See New Projects</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
