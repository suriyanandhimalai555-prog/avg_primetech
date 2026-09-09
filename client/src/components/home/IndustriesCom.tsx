import React, { useState } from 'react';

const industriesData = [
    {
        title: "FinTech & Crypto",
        desc: "Trading systems, wallets, exchange engines & tokenomics",
        cta: "Discuss FinTech & Crypto Solutions",
        image: "/home/industries/fintech.png",
    },
    {
        title: "Forex & Trading",
        desc: "MT4/MT5 integrations, CRM backoffices & payment routing",
        cta: "Discuss Forex & Trading Solutions",
        image: "/home/industries/forex.png",
    },
    {
        title: "Banking & Payments",
        desc: "Neo-banking, UPI integrations & compliance tools",
        cta: "Discuss Banking & Payments Solutions",
        image: "/home/industries/banking.png",
    },
    {
        title: "Real Estate",
        desc: "Virtual expos, property portals & high-conversion lead engines",
        cta: "Discuss Real Estate Solutions",
        image: "/home/industries/real-estate.png",
    },
    {
        title: "E-Commerce",
        desc: "Omnichannel marketplaces, automated inventory & payment flows",
        cta: "Discuss E-Commerce Solutions",
        image: "/home/industries/ecommerce.png",
    },
    {
        title: "Education",
        desc: "Immersive VR training, interactive learning & custom LMS",
        cta: "Discuss Education Solutions",
        image: "/home/industries/education.png",
    },
    {
        title: "Media",
        desc: "3D motion graphics, brand storytelling & content distribution",
        cta: "Discuss Media Solutions",
        image: "/home/industries/media.png",
    },
    {
        title: "Startups",
        desc: "Rapid MVP engineering, pitch-ready tech & global scaling",
        cta: "Discuss Startups Solutions",
        image: "/home/industries/startups.png",
    }
];

const IndustriesCom: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="w-full bg-white text-gray-900 py-12 lg:py-18 relative">
            {/* Background Decorators */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] left-[-5%] w-[30%] h-[30%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0437cc]/5 to-transparent"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#f77704]/5 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                {/* --- Section Header --- */}
                <div className="max-w-3xl mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4 sm:mb-6 text-gray-900">
                        Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0437cc] to-[#18acfa]">Serve</span>
                    </h2>
                    <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-600">
                        Tailored software architecture engineered specifically to address compliance, speed, security, and scale across diverse global verticals.
                    </p>
                </div>

                {/* --- Interactive Split Layout --- */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative">

                    {/* Left Side: Accordion List */}
                    <div className="w-full lg:w-1/2 flex flex-col z-20">
                        {industriesData.map((item, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <div
                                    key={index}
                                    className={`group border-b border-gray-200 py-6 lg:py-8 cursor-pointer transition-colors duration-300 ${isActive ? 'border-[#0437cc]/50' : 'hover:border-gray-400'}`}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold transition-colors duration-300 ${isActive ? 'text-[#0437cc]' : 'text-gray-400 group-hover:text-gray-900'}`}>
                                            {item.title}
                                        </h3>
                                        <svg
                                            className={`w-6 h-6 lg:hidden transition-transform duration-300 ${isActive ? 'rotate-180 text-[#0437cc]' : 'text-gray-400'}`}
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>

                                    {/* Pure CSS Accordion Content Reveal */}
                                    <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] mt-4 lg:mt-6 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden min-h-0">
                                            {/* Mobile Image Display */}
                                            <div className="lg:hidden w-full h-[200px] mb-6 rounded-2xl overflow-hidden shadow-lg relative">
                                                <div className="absolute inset-0 bg-gray-900/10 z-10"></div>
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>

                                            <p className="text-gray-600 text-base lg:text-lg font-medium leading-relaxed max-w-lg mb-6">
                                                {item.desc}
                                            </p>

                                            <button className="inline-flex items-center gap-2 text-sm lg:text-base font-bold text-[#f77704] hover:text-[#0437cc] transition-colors duration-300 group/btn">
                                                {item.cta}
                                                <svg className="w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Side: Sticky Image Reveal Panel (CSS Transitions only) */}
                    <div className="hidden lg:block w-1/2 relative">
                        <div className="sticky top-32 w-full h-[500px] xl:h-[600px]">
                            <div className="w-full h-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 relative bg-gray-50">
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent z-10 pointer-events-none"></div>

                                {industriesData.map((item, index) => (
                                    <img
                                        key={index}
                                        src={item.image}
                                        alt={item.title}
                                        className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${activeIndex === index
                                                ? 'opacity-100 scale-100'
                                                : 'opacity-0 scale-105 pointer-events-none'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustriesCom;