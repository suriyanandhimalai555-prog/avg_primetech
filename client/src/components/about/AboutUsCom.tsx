import React, { useEffect } from 'react';
import Buttons from '../../common/Buttons';
import Founders from './Founders'; 

const stats = [
    {
        value: '50+',
        title: 'Global Reach',
        description: 'Serving enterprise clients across the UAE, India, and international markets.',
        gradient: 'from-[#0437cc] to-[#18acfa]',
    },
    {
        value: '100+',
        title: 'Projects Delivered',
        description: 'Proven track record of deploying highly scalable software and Web3 architectures.',
        gradient: 'from-[#f77704] to-[#fec515]',
    },
    {
        value: '02',
        title: 'Strategic Hubs',
        description: 'Operating a seamless offshore-onsite model from Dubai and Bengaluru.',
        gradient: 'from-[#a6e71c] to-[#48b608]',
    },
];

const AboutUsCom: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full min-h-screen bg-white flex flex-col overflow-hidden">

            {/* --- Premium Dark Hero Section (Optimized for 1080p Laptops) --- */}
            <section className="relative w-full bg-[#010a1f] pt-16 md:pt-20 lg:pt-24 pb-12 lg:pb-16 px-6 lg:px-8">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#0437cc] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.25] pointer-events-none transform-gpu"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#f77704] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.15] pointer-events-none transform-gpu"></div>

                <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
                    <div className="mb-4 lg:mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#a6e71c] text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2 shadow-sm backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-[#a6e71c]"></span>
                        About Our Company
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 lg:mb-6">
                        Engineering the <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18acfa] via-[#a6e71c] to-[#18acfa] bg-[length:200%_auto] animate-[text-shine_5s_linear_infinite]">
                            Digital Future.
                        </span>
                    </h1>
                    <p className="text-gray-400 text-base md:text-lg lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                        AGILAVETRI PRIMETECH is a premier technology consulting and software engineering firm. We merge deep industry expertise with cutting-edge innovation to deliver highly scalable solutions for global enterprises.
                    </p>
                </div>

                <div className="absolute bottom-[-10px] md:bottom-[-20px] lg:bottom-[-40px] left-0 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
                    <h1 className="text-[18vw] font-black text-white/[0.02] leading-none whitespace-nowrap tracking-tighter">
                        AGILAVETRI
                    </h1>
                </div>
            </section>

            {/* --- Who We Are (Split Layout) --- */}
            <section className="py-16 lg:py-24 px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                            Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0437cc] to-[#18acfa]">innovation</span> and reality.
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed mb-6 font-medium">
                            Operating with a strategic offshore-onsite model, we leverage the business excellence of our <strong>Dubai Headquarters</strong> and the elite engineering talent of our <strong>Bengaluru Technology Hub</strong>.
                        </p>
                        <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed mb-8 font-medium">
                            We don't just write code. From FinTech platforms and Web3 ecosystems to AI-driven enterprise tools and immersive metaverse experiences, we architect end-to-end digital transformations that empower businesses to grow without operational limits.
                        </p>
                        <div className="flex items-center gap-4">
                            <Buttons text="View Our Services" href="/services" />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 relative">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#f77704]/5 to-transparent blur-2xl pointer-events-none"></div>

                        <div className="col-span-2 bg-gray-50 rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center overflow-hidden relative group transform-gpu">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#0437cc] group-hover:w-2 transition-all duration-300"></div>
                            <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-2">Enterprise Grade</h3>
                            <p className="text-gray-500 font-medium text-xs lg:text-sm">ISO-ready processes, zero-trust architecture, and strict adherence to global financial regulations.</p>
                        </div>

                        <div className="bg-[#010a1f] rounded-3xl p-6 lg:p-8 shadow-xl hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-center relative overflow-hidden group transform-gpu">
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#18acfa] rounded-full blur-[40px] opacity-30 group-hover:opacity-60 transition-opacity"></div>
                            <h3 className="text-3xl lg:text-4xl font-black text-white mb-1">🇦🇪</h3>
                            <p className="text-gray-300 font-bold text-xs lg:text-sm uppercase tracking-widest mt-2">Dubai HQ</p>
                        </div>

                        <div className="bg-gray-50 rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center relative overflow-hidden group transform-gpu">
                            <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-[#f77704] rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-1">🇮🇳</h3>
                            <p className="text-gray-500 font-bold text-xs lg:text-sm uppercase tracking-widest mt-2">Bengaluru Hub</p>
                        </div>
                    </div>
                </div>
            </section>

            <Founders />

            {/* --- Stats Section --- */}
            <section className="py-16 lg:py-24 bg-[#010a1f] relative overflow-hidden border-t border-b border-white/5">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0437cc]/10 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <h3 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br ${stat.gradient} tracking-tighter mb-3 group-hover:scale-105 transition-transform duration-500 transform-gpu`}>
                                    {stat.value}
                                </h3>
                                <h4 className="text-white font-bold text-base lg:text-lg uppercase tracking-wide mb-2">
                                    {stat.title}
                                </h4>
                                <p className="text-gray-400 font-medium text-xs lg:text-sm leading-relaxed max-w-xs">
                                    {stat.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section className="py-16 lg:py-24 px-6 lg:px-8 bg-gray-50 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-[2rem] p-8 md:p-12 lg:p-16 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col items-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 lg:mb-6">
                            Ready to build the future?
                        </h2>
                        <p className="text-gray-600 text-base lg:text-lg font-medium leading-relaxed mb-8 lg:mb-10 max-w-2xl">
                            Whether you are a startup looking to scale or an enterprise aiming for digital transformation, our architects are ready to engineer your success.
                        </p>
                        <Buttons text="Contact Our Team" href="/contact" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUsCom;