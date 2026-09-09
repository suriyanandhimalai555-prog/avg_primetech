import React from 'react';

const leaders = [
    {
        name: "Agilan Vasudevan",
        role: "Founder",
        quote: "Building a global powerhouse requires more than technology; it requires an unwavering commitment to trust, transparency, and humanity.",
        image: "/home/founders/agilan.jpg", 
        gradient: "from-[#0437cc] to-[#18acfa]",
        glow: "bg-[#0437cc]",
        textAccent: "text-[#0437cc]" 
    },
    {
        name: "Prabu Mayakanan",
        role: "Managing Director (MD)",
        quote: "Execution is our baseline. We architect digital ecosystems that empower businesses to scale globally without operational limits.",
        image: "/home/founders/prabu.jpg", 
        gradient: "from-[#f77704] to-[#fec515]",
        glow: "bg-[#f77704]",
        textAccent: "text-[#f77704]" 
    }
];

const Founders: React.FC = () => {
    return (
        <section className="py-16 lg:py-24 px-6 lg:px-8 relative overflow-hidden">

            <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0437cc]/5 to-transparent pointer-events-none transform-gpu"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#f77704]/5 to-transparent pointer-events-none transform-gpu"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* --- Cinematic Section Header (Light Theme) --- */}
                <div className="text-center max-w-4xl mx-auto mb-12 flex flex-col items-center">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                        AVG <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0437cc] via-[#18acfa] to-[#0437cc] bg-[length:200%_auto] animate-[text-shine_5s_linear_infinite]">PrimeTech</span>
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-3xl mt-4">
                        A diversified global powerhouse built on trust, transparency, and the vision to empower humanity through uncompromising digital excellence.
                    </p>
                </div>

                {/* --- Interactive Portrait Grid (Capped height for laptops) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {leaders.map((leader, index) => (
                        <div 
                            key={index} 
                            className="group relative w-full h-[400px] lg:h-[450px] xl:h-[500px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 bg-white transform-gpu transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
                        >
                            <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${leader.gradient} z-30 opacity-80 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="absolute inset-0 z-0 bg-gray-100">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                                />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent z-10 opacity-95 group-hover:opacity-90 transition-opacity duration-500"></div>

                            <div className="absolute bottom-0 left-0 w-full p-6 lg:p-10 z-20 flex flex-col justify-end h-full">
                                <div className="transform-gpu transition-transform duration-500 group-hover:translate-y-0">
                                    <h3 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-2 drop-shadow-sm">
                                        {leader.name}
                                    </h3>
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-md border border-gray-200 rounded-lg text-xs font-bold text-gray-700 uppercase tracking-widest shadow-sm">
                                        <span className={`w-2 h-2 rounded-full ${leader.glow}`}></span>
                                        {leader.role}
                                    </div>

                                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] mt-0 group-hover:mt-4">
                                        <div className="overflow-hidden">
                                            <div className="relative pt-2">
                                                <svg className={`absolute -top-2 -left-2 w-8 h-8 opacity-10 ${leader.textAccent}`} fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                                </svg>
                                                <p className="text-gray-700 text-sm lg:text-base font-semibold leading-relaxed italic relative z-10 pl-4 border-l-2 border-gray-300">
                                                    "{leader.quote}"
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Founders;