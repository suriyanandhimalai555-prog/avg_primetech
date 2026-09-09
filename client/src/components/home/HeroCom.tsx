import React from 'react';
import Buttons from '../../common/Buttons';

const stats = [
    {
        value: '50+',
        title: 'Global Reach',
        description: 'Global Clients across UAE, India & Worldwide',
        gradient: 'from-[#0437cc] to-[#18acfa]',
    },
    {
        value: '100+',
        title: 'Proven Track Record',
        description: 'Enterprise & Startup Projects Delivered',
        gradient: 'from-[#f77704] to-[#fec515]',
    },
    {
        value: '2',
        title: 'Strategic Network',
        description: 'Global Hubs in Dubai (UAE) & Bengaluru (IN)',
        gradient: 'from-[#a6e71c] to-[#48b608]',
    },
];

const HeroCom: React.FC = () => {
    // Smooth scroll handler for the CTA button[cite: 36]
    const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        // Tighter vertical padding to fit 14-inch screens[cite: 36]
        <div className="relative w-full bg-[#010a1f] overflow-hidden flex flex-col items-center pt-8 md:pt-12 lg:pt-16 pb-8 lg:pb-12 min-h-screen justify-center">

            {/* Custom Animation for Flowing Gradient Shine[cite: 36] */}
            <style>
                {`
                    @keyframes text-shine {
                        0% { background-position: 0% 50%; }
                        100% { background-position: 200% 50%; }
                    }
                    .animate-text-shine {
                        background-size: 200% auto;
                        animation: text-shine 5s linear infinite;
                    }
                `}
            </style>

            {/* Static Glowing Mesh Background Effects[cite: 36] */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0437cc]/25 to-transparent pointer-events-none transform-gpu"></div>
            <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#f77704]/15 to-transparent pointer-events-none transform-gpu"></div>

            {/* --- Hero Text Content --- */}
            <div className="relative z-30 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">

                {/* Badge[cite: 36] */}
                <div className="mb-4 lg:mb-5 px-4 py-1.5 rounded-full border border-[#a6e71c]/30 bg-[#a6e71c]/10 text-[#a6e71c] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-[0_0_15px_rgba(166,231,28,0.2)] inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#a6e71c] animate-ping"></span>
                    Next-Gen IT Solutions
                </div>

                {/* Heading[cite: 36] */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem] font-extrabold text-white tracking-tight leading-[1.1] md:leading-[1.05]">
                    Accelerate Your Digital <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18acfa] via-[#a6e71c] to-[#18acfa] animate-text-shine">
                        Transformation.
                    </span>
                </h1>

                {/* Description[cite: 36] */}
                <p className="mt-3 lg:mt-4 text-sm md:text-base lg:text-lg text-gray-400 max-w-3xl font-medium px-4 leading-relaxed">
                    AGILAVETRI PRIMETECH merges cutting-edge innovation with industry expertise to engineer scalable, future-proof software solutions for global enterprises.
                </p>

                {/* Action Buttons[cite: 36] */}
                <div className="mt-5 lg:mt-6 flex flex-col sm:flex-row items-center justify-center w-full sm:w-auto px-4 sm:px-0">
                    <a href="#services" onClick={scrollToServices} className="w-full sm:w-auto flex justify-center group outline-none">
                        <Buttons text="Start Your Project" />
                    </a>
                </div>
            </div>

            {/* --- Premium Masonry Bento Grid Showcase (Exact original layout, added max-h for 1080p screens) --- */}
            <div className="relative z-20 w-full max-w-[1300px] mx-auto mt-6 md:mt-8 px-4 md:px-8 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 mb-8 md:mb-10">

                {/* Left Column[cite: 36] */}
                <div className="hidden lg:flex flex-col w-[25%] gap-4 lg:gap-6">
                    <div className="rounded-2xl p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-500 group transform-gpu">
                        <img
                            src="/home/hero/mobile.png"
                            className="w-full h-auto max-h-[140px] xl:max-h-[180px] rounded-xl object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
                            alt="Mobile App UI"
                        />
                    </div>
                    <div className="rounded-2xl p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-500 group transform-gpu">
                        <img
                            src="/home/hero/dashbaord.png"
                            className="w-full h-auto max-h-[140px] xl:max-h-[180px] rounded-xl object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
                            alt="Secondary Dashboard"
                        />
                    </div>
                </div>

                {/* Center Column[cite: 36] */}
                <div className="w-full lg:w-[50%] z-20">
                    <div className="rounded-[1.5rem] md:rounded-[2rem] p-2 bg-[#010a1f]/50 backdrop-blur-2xl border border-[#0437cc]/40 shadow-[0_20px_60px_rgba(4,55,204,0.4)] hover:border-[#18acfa]/50 transition-all duration-500 group hover:-translate-y-1 transform-gpu">
                        <img
                            src="/home/hero/main.png"
                            className="w-full h-auto max-h-[260px] lg:max-h-[300px] xl:max-h-[380px] rounded-[1.2rem] md:rounded-[1.5rem] object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
                            alt="Main Platform Interface"
                        />
                    </div>
                </div>

                {/* Right Column[cite: 36] */}
                <div className="hidden lg:flex flex-col w-[25%] gap-4 lg:gap-6">
                    <div className="rounded-2xl p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-500 group transform-gpu">
                        <img
                            src="/home/hero/data-analytics.png"
                            className="w-full h-auto max-h-[140px] xl:max-h-[180px] rounded-xl object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
                            alt="Data Analytics UI"
                        />
                    </div>
                    <div className="rounded-2xl p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-500 group transform-gpu">
                        <img
                            src="/home/hero/code.png"
                            className="w-full h-auto max-h-[140px] xl:max-h-[180px] rounded-xl object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
                            alt="Code Editor Environment"
                        />
                    </div>
                </div>

            </div>

            {/* --- Floating Statistics Grid --- */}
            <div className="relative z-30 w-full max-w-[1200px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#021bbc]/10 backdrop-blur-xl border border-white/5 rounded-2xl p-5 lg:p-6 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden shadow-lg transform-gpu"
                        >
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${stat.gradient} transition-opacity duration-300`}></div>

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="mb-2">
                                    <h3 className={`text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br ${stat.gradient} tracking-tighter mb-1`}>
                                        {stat.value}
                                    </h3>
                                    <h4 className="text-white font-bold text-sm lg:text-base uppercase tracking-wide">
                                        {stat.title}
                                    </h4>
                                </div>
                                <p className="text-gray-400 font-medium text-xs lg:text-sm leading-relaxed border-t border-white/10 pt-2 lg:pt-3 mt-auto">
                                    {stat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroCom;