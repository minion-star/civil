import { useEffect, useState } from "react";
import { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { FaBriefcase } from "react-icons/fa";
import { FaRegGrin } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { BsPersonFillGear } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const statuses = [
    {img: "/assets/physical-status.png", title: "Physical", status:"39%"},
    {img: "/assets/technology-status.png", title: "Technology", status:"45%"},
    {img: "/assets/management-status.png", title: "Management", status:"40%"},
    {img: "/assets/design-status.png", title: "Design", status:"55%"},
    {img: "/assets/planning-status.png", title: "Planning", status:"45%"},
    {img: "/assets/regulations-status.png", title: "Regulations", status:"37%"},
]

const feedbacks = [
    { 
        name: "JOHN DOE", 
        feedback: "An outstanding project manager with a keen eye for detail and excellent leadership skills."
    },
    { 
        name: "EMILY CARTER", 
        feedback: "Creative architect who masterfully combines aesthetics with functionality in every design."
    },
    { 
        name: "MICHAEL SMITH", 
        feedback: "Site engineer with expertise in quality control, safety, and ensuring seamless execution."
    },
    { 
        name: "SOPHIA JOHNSON", 
        feedback: "Passionate interior designer who transforms spaces into elegant and comfortable environments."
    },
    { 
        name: "DAVID BROWN", 
        feedback: "A visionary who brings innovative solutions to complex construction challenges."
    }
];

const About = () => {

const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Initialize AOS library
        AOS.init({
            duration: 2000, // Animation duration
            easing: 'ease-in-out', // Easing type
            once: false, // Animation runs only once
            anchorPlacement: 'top-bottom',
        });
    }, []);
    
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const feedbackRef = useRef<HTMLDivElement>(null);

    const feedbackLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1));
    };

    const feedbackRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
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
                <div className="bg-amber-500 bg-cover flex flex-col px-6 py-12 items-center" id="status">
                                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-full max-w-8xl">
                                    {statuses.map((status, index) => (
                                        <div className="flex flex-col items-center" key={index} data-aos="fade-up">
                                            <p
                                                className="text-white text-center flex items-center justify-center text-[20px] w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-no-repeat bg-center bg-cover rounded-full shadow-lg"
                                                style={{ backgroundImage: `url(${status.img})` }}
                                            >
                                                {status.status}
                                            </p>
                                            <p className="text-[16px] sm:text-[18px] text-white text-center mt-4">{status.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white bg-cover flex flex-col px-12 py-12" id="creative-work">
                                <p className="text-black text-center text-[48px] font-serif">Our Creative Work</p>
                                <div className="flex flex-col md:flex-row mt-16">
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
                            <div className="flex flex-col px-12 py-12 bg-white bg-cover" id="past" data-aos="fade-up">
                                <p className="text-black text-center text-[48px] font-serif">Our Creative Team</p>
                                <p className="text-gray-500 m-8 text-center">A wonderful serenity has taken possession of my entire soul, like these sweet mo alone, and feel the charm of existence in this spot.</p>
                                <div className="relative w-full overflow-hidden">
                                    {/* Left Button */}
                                    <button 
                                        onClick={scrollLeft} 
                                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 hover:cursor-pointer"
                                    >
                                        <FaAngleLeft size={24} />
                                    </button>
                
                                    {/* Slider */}
                                    <div 
                                        ref={sliderRef} 
                                        className="flex gap-6 overflow-hidden snap-x scroll-smooth scrollbar-hide " 
                                        id="team-slider"
                                    >
                                        {[
                                            { 
                                                img: "/assets/tm1.jpg", 
                                                role: "Builder Operation Head", 
                                                name: "BENEDICT ARNOLD", 
                                                intro: "Experienced in managing large-scale construction projects, ensuring smooth operations from start to finish." 
                                            },
                                            { 
                                                img: "/assets/tm2.jpg", 
                                                role: "Senior Architect", 
                                                name: "ALEXANDER HAMILTON", 
                                                intro: "Specialist in innovative architectural designs, blending modern aesthetics with structural integrity." 
                                            },
                                            { 
                                                img: "/assets/tm3.jpg", 
                                                role: "Site Engineer", 
                                                name: "THOMAS JEFFERSON", 
                                                intro: "Expert in site planning, execution, and quality control, ensuring safety and efficiency on construction sites." 
                                            },
                                            { 
                                                img: "/assets/tm4.jpg", 
                                                role: "Project Manager", 
                                                name: "JAMES MADISON", 
                                                intro: "Skilled in coordinating teams, budgeting, and scheduling to deliver projects on time and within scope." 
                                            },
                                            { 
                                                img: "/assets/tm5.jpg", 
                                                role: "Interior Designer", 
                                                name: "GEORGE WASHINGTON", 
                                                intro: "Passionate about creating elegant and functional spaces that reflect clients' vision and lifestyle." 
                                            }
                                        ].map((member, index) => (
                                            <div 
                                                key={index} 
                                                className="scroll-mr-6 min-w-[80%] sm:min-w-[45%] md:min-w-[33%] lg:min-w-[33%] flex flex-col snap-center md:snap-start"
                                            >
                                                <img src={member.img} alt={member.name} className="mb-4 rounded-lg shadow-lg"/>
                                                <p className="text-center text-amber-500">{member.role}</p>
                                                <p className="text-center text-black font-bold text-[24px]">{member.name}</p>
                                                <p className="text-center text-black font-medium">{member.intro}</p>
                                            </div>
                                        ))}
                                    </div>
                
                                    {/* Right Button */}
                                    <button 
                                        onClick={scrollRight} 
                                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 hover:cursor-pointer"
                                    >
                                        <FaAngleRight size={24} />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col px-12 py-12 bg-black bg-cover" id="feedback">
                                <p className="text-white text-center text-[48px] font-serif">Why Customers Love working with us</p>
                                <div className="relative w-full overflow-hidden mt-4 flex items-center justify-center" data-aos="fade-up">
                                    {/* Left Button */}
                                    <button 
                                        onClick={feedbackLeft} 
                                        className="absolute left-16 sm:left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 hover:cursor-pointer z-10"
                                    >
                                        <FaAngleLeft size={24} />
                                    </button>
                
                                    {/* Feedback Card with Smooth Transition */}
                                    <div className="w-full flex justify-center">
                                        <div className="relative w-[80%] md:w-[50%]">
                                            <div 
                                                ref={feedbackRef}
                                                className="w-6xs h-64 transition-opacity duration-500 ease-in-out transform opacity-100 translate-x-0 text-center bg-gray-800 text-white p-6 rounded-lg shadow-lg"
                                            >
                                                <p className="font-bold text-[24px] mb-8 text-amber-500">{feedbacks[currentIndex].name}</p>
                                                <p className="font-medium text-start">{feedbacks[currentIndex].feedback}</p>
                                            </div>
                                        </div>
                                    </div>
                
                                    {/* Right Button */}
                                    <button 
                                        onClick={feedbackRight} 
                                        className="absolute right-16 sm:right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 hover:cursor-pointer z-10"
                                    >
                                        <FaAngleRight size={24} />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col px-12 py-12 bg-white bg-cover" id="blogs">
                                <p className="text-black text-[48px] text-center font-serif mt-4">Blogs</p>
                                <div className=""></div>
                            </div>
        </>
    );
}

export default About;