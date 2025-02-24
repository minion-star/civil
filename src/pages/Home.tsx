import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";
import { FaRegGrin } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { BsPersonFillGear } from "react-icons/bs";
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

const statuses = [
    {img: "/assets/physical-status.png", title: "Physical", status:"39%"},
    {img: "/assets/technology-status.png", title: "Technology", status:"45%"},
    {img: "/assets/management-status.png", title: "Management", status:"40%"},
    {img: "/assets/design-status.png", title: "Design", status:"55%"},
    {img: "/assets/planning-status.png", title: "Planning", status:"45%"},
    {img: "/assets/regulations-status.png", title: "Regulations", status:"37%"},
]


const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Initialize AOS library
        AOS.init({
            duration: 2000, // Animation duration
            easing: 'ease-in-out', // Easing type
            once: false, // Animation runs only once
            anchorPlacement: 'top-bottom',
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
                <div className="flex flex-col md:flex-row">
                    <div className="p-4 m-4 flex-1" data-aos="flip-up">
                        <img src="/assets/excavator.jpg" alt="excavator" className="w-168"/>
                    </div>
                    <div className="text-center p-4 m-4 flex-1" data-aos="flip-up">
                        <p className="text-[48px] text-black font-serif">Providing All Kinds of Construction Services</p>
                        <hr className="text-amber-500 mt-4"/>
                        <p className="text-black text-[24px] my-8"> Our construction company was founded 10 years ago, during the peak of the building boom in the US. Since then, we've delivered high-quality, innovative, and sustainable solutions across various sectors.</p>
                        <p className="text-gray-500 text-md text-left"> We design and build durable structures, efficient transportation systems, and sustainable developments. From site preparation to project completion, we handle grading, drainage, and utility planning while ensuring compliance with regulations. Our transportation solutions enhance mobility through smart road and transit designs. With expert project management, we keep schedules, budgets, and risks under control, ensuring seamless execution. Sustainability drives our work, integrating eco-friendly materials and energy-efficient solutions to minimize environmental impact. Through innovation and precision, we create infrastructure that supports growth, efficiency, and long-term sustainability.</p>
                        <button className="py-2 px-6 md:py-4 md:px-8 mt-6 rounded-full text-black border-2 border-black hover:bg-black hover:text-white transition duration-700 hover:cursor-pointer">View Portfolios</button>
                    </div>
                </div>
            </div>
            <div className="bg-amber-500 bg-cover flex flex-col md:flex-row px-12 py-12 items-center" id="status">
                {statuses.map((status, index)=>(
                    <div className="flex flex-col mx-16 my-4" key={index} data-aos="fade-up">
                        <p className="text-white text-center py-12 text-[24px] w-32 h-32 bg-no-repeat" style={{ backgroundImage: `url(${status.img})` }}>{status.status}</p>
                        <p className="text-[18px] text-white text-center mt-6">{status.title}</p>
                    </div>
                ))}
            </div>
            <div className="bg-white bg-cover flex flex-col px-12 py-12" id="creative-work">
                <p className="text-black text-center text-[48px] font-serif">Our Creative Work</p>
                <div className="flex flex-col md:flex-row mt-16 px-8">
                    {[
                        [
                            ["/assets/pf1.jpg", "Project-01", "description-01"],
                            ["/assets/pf2.jpg", "Project-02", "description-02"],
                            ["/assets/pf3.jpg", "Project-03", "description-03"]
                        ],
                        [
                            ["/assets/pf4.jpg", "Project-04", "description-04"],
                            ["/assets/pf5.jpg", "Project-05", "description-05"],
                            ["/assets/pf6.jpg", "Project-06", "description-06"]
                        ],
                        [
                            ["/assets/pf7.jpg", "Project-07", "description-07"],
                            ["/assets/pf8.jpg", "Project-08", "description-08"],
                            ["/assets/pf9.jpg", "Project-09", "description-09"]
                        ]
                    ].map((column, colIndex) => (
                        <div key={colIndex} className="flex flex-1 flex-col mx-4">
                            {column.map(([img, title, description], index) => (
                                <div
                                    key={index}
                                    className="relative flex-auto mt-8 bg-no-repeat bg-cover bg-center min-h-[200px] max-h-[400px] w-full rounded-lg shadow-lg flex items-center justify-center group cursor-pointer"
                                    style={{ backgroundImage: `url(${img})` }}  data-aos="fade-up"
                                >
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center rounded-lg shadow-lg justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-50 transition-opacity duration-700">
                                        <p className="text-2xl">{title}</p>
                                        <p className="text-sm mt-2">{description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="flex-auto text-center py-8" data-aos="fade-up">
                    <button className="px-6 py-2 md:py-4 md:px-8 rounded-full text-center text-black border-2 border-black hover:bg-black hover:text-white transition duration-700 cursor-pointer">
                        View More Portfolio
                    </button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row px-12 py-12" id="past" data-aos="fade-up">
                <div className="bg-black bg-cover py-16 w-full flex flex-col flex-1 items-center opacity-100 hover:opacity-90 ">
                    <FaBriefcase className="text-white size-16 my-4" />
                    <p className="text-center font-semibold font-sans text-amber-500 text-[24px]">120</p>
                    <hr className="text-white w-32 my-4" />
                    <p className="text-center font-light font-sans text-white">Years on the Market</p>
                </div>
                <div className="bg-black bg-cover py-16 w-full flex flex-col flex-1 items-center opacity-80 hover:opacity-70 ">
                    <FaRegGrin className="text-white size-16 my-4"/>
                    <p className="text-center font-semibold font-sans text-amber-500 text-[24px]">95</p>
                    <hr className="text-white w-32 my-4" />
                    <p className="text-center font-light font-sans text-white">Operational Brigades</p>
                </div>
                <div className="bg-black bg-cover py-16 w-full flex flex-col flex-1 items-center opacity-100 hover:opacity-90 ">
                    <FaChartBar className="text-white size-16 my-4"/>
                    <p className="text-center font-semibold font-sans text-amber-500 text-[24px]">395</p>
                    <hr className="text-white w-32 my-4" />
                    <p className="text-center font-light font-sans text-white">Units Engineering</p>
                </div>
                <div className="bg-black bg-cover py-16 w-full flex flex-col flex-1 items-center opacity-80 hover:opacity-70 ">
                    <BsPersonFillGear className="text-white size-16 my-4"/>
                    <p className="text-center font-semibold font-sans text-amber-500 text-[24px]">46</p>
                    <hr className="text-white w-32 my-4" />
                    <p className="text-center font-light font-sans text-white">Employees of the company</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Home;
