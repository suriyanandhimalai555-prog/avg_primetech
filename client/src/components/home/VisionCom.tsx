import React from 'react';

const visionPillars = [
    {
        title: "Ethical Engineering",
        desc: "Built on a foundation of transparency, security, and uncompromising quality standards.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
        title: "Scalable Architecture",
        desc: "Digital systems engineered to grow seamlessly and handle global operational limits.",
        icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
    },
    {
        title: "AGILAVETRI PRIMETECH",
        desc: "Your dedicated partner in bridging the gap between bold innovation and reality.",
        icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    }
];

const VisionCom: React.FC = () => {
    return (
        <section className="w-full bg-gray-50 text-gray-900 py-24 lg:py-32 relative overflow-hidden">
            {/* Extremely Subtle Background Texture */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-gradient-to-bl from-[#0437cc]/5 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-gradient-to-tr from-[#f77704]/5 to-transparent rounded-tr-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">

                {/* --- Clean Vision Statement Area --- */}
                <div className="flex flex-col items-center text-center max-w-5xl w-full">

                    {/* Elegant Quote Icon */}
                    <div className="mb-6 text-[#0437cc]/20">
                        <svg className="w-12 h-12 lg:w-16 lg:h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                    </div>

                    {/* Perfectly Typeset Statement */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.3] text-gray-900">
                        Empowering businesses to grow without limits through <span className="text-[#0437cc]">ethical</span> and <span className="text-[#f77704]">scalable</span> digital solutions, bridging the gap between innovation and reality.
                    </h2>
                </div>

                {/* --- Neat, Premium Structured Grid for Pillars --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full mt-20 lg:mt-28">
                    {visionPillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(4,55,204,0.08)] hover:-translate-y-2 transition-all duration-500 group overflow-hidden flex flex-col text-left"
                        >
                            {/* Animated Top Accent Line */}
                            <div className="absolute top-0 left-0 w-0 h-1.5 bg-gradient-to-r from-[#0437cc] to-[#18acfa] group-hover:w-full transition-all duration-700 ease-out z-20"></div>

                            {/* Massive Faint Background Watermark Number */}
                            <div className="absolute -bottom-10 -right-6 text-[140px] font-black text-gray-50 group-hover:text-gray-100/60 group-hover:scale-110 transition-all duration-700 pointer-events-none select-none z-0">
                                0{index + 1}
                            </div>

                            {/* Icon Container */}
                            <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[#0437cc] group-hover:bg-[#0437cc] group-hover:text-white transition-all duration-500 mb-8 relative z-10">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pillar.icon} />
                                </svg>
                            </div>

                            {/* Text Content */}
                            <h3 className="text-2xl font-extrabold text-gray-900 mb-4 group-hover:text-[#0437cc] transition-colors duration-300 relative z-10 tracking-tight">
                                {pillar.title}
                            </h3>
                            <p className="text-gray-500 font-medium leading-relaxed text-base relative z-10">
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default VisionCom;