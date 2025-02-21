import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 

const services = [
    { img: "/assets/service-1.png", title: "Professional Team", content: "It is a long established fact that reader by the readable content of a page when looking at its layout." },
    { img: "/assets/service-2.png", title: "24/7 support", content: "It is a long established fact that reader distracted by the readable content of a page when looking at its layout." },
    { img: "/assets/service-3.png", title: "Affordable Price", content: "It is a long established fact that reader by the readable content of a page when looking at its layout." },
    { img: "/assets/service-4.png", title: "Construction", content: "It is a long established fact that reader distracted by the readable content of a page when looking at its layout." },
    { img: "/assets/service-5.png", title: "Building", content: "It is a long established fact that reader distracted by the readable content of a page when looking at its layout." },
    { img: "/assets/service-6.png", title: "Engineering", content: "It is a long established fact that reader distracted by the readable content of a page when looking at its layout." },
];

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Initialize AOS library
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing type
            once: true, // Animation runs only once
        });
    }, []);

    return (
        <div>
            <div
                id="hero"
                className="bg-[url('/assets/hero1.jpg')] bg-no-repeat bg-cover bg-center text-center flex flex-col items-center justify-center min-h-screen px-4 md:px-0 py-10 md:py-64"
            >
                {/* content */}
                <p className="text-3xl md:text-[64px] font-bold font-serif text-black">
                    WAY IN BUILDING
                </p>
                <p className="text-lg md:text-2xl font-bold text-black">
                    Contractors & Construction Managers Since 1989
                </p>
                <button
                    className="py-2 px-6 md:py-4 md:px-8 mt-6 rounded-full text-white border-2 border-white hover:bg-white hover:text-black transition duration-700 hover:cursor-pointer"
                    onClick={() => navigate("/projects")}
                >
                    See Our Recent Projects
                </button>
            </div>

            <div id="new-idea" className="bg-amber-500 bg-cover flex flex-col md:flex-row px-12 py-12">
                <div className="flex-auto">
                    <p className="text-[48px] text-white font-serif">Already have an excellent idea!</p>
                    <p className="text-[20px] text-white">And want to know whether it is possible to implement it?</p>
                </div>
                <div className="flex-auto text-center py-8">
                    <button className="px-6 py-2 md:py-4 md:px-8 rounded-full text-center text-white border-2 border-white hover:bg-white hover:text-black transition duration-700 cursor-pointer">
                        See New Projects
                    </button>
                </div>
            </div>

            <div
                id="introduce-feature"
                className="bg-white bg-cover flex flex-col px-6 py-24"
            >
                {/* title */}
                <div className="flex-auto text-center">
                    <p className="text-[48px] text-black font-serif">Introducing Our Features</p>
                    <p className=" text-gray-500 mb-4">We understand the importance of innovation and professionalism and work with the best people to achieve this..</p>
                </div>

                {/* services */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col px-16 py-8 mx-6 my-4 items-center shadow-lg rounded-lg"
                            data-aos="fade-up"  // AOS animation when it appears on scroll
                        >
                            <img src={service.img} alt={service.content} className="w-16 h-16 object-cover mt-4" />
                            <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                            <p className="mt-2 text-gray-500 text-md text-center">{service.content}</p>
                        </div>
                    ))}
                </div>
                <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
                {/* explanation */}
                <div className="grid grid-col-1 gap-4 md:grid-col-2">
                    <div className="p-4">
                        <img src="/assets/excavator.jpg" alt="excavator" className="w-192 h-192"/>
                    </div>
                    <div className="text-center p-4">
                        <p className="text-[48px] text-black font-serif">Providing All Kinds of Construction Services</p>
                        <hr className="text-amber-500 mt-4"/>
                        <p className="text-black text-[24px] my-8"> Our construction company was founded 10 years ago, during the peak of the building boom in the US. Since then, we've delivered high-quality, innovative, and sustainable solutions across various sectors.</p>
                        <p className="text-gray-500 text-md">we provide...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
