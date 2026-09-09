import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Buttons from '../../common/Buttons';

gsap.registerPlugin(ScrollTrigger);

const locationsData = [
    {
        city: "Dubai", country: "United Arab Emirates", role: "Head Office", flag: "🇦🇪", hours: "24/7 Operations",
        desc: "Serving GCC countries and international markets with premium technology consulting and fintech solutions.",
        bullets: ["Serving GCC countries & global markets", "Premium technology consulting", "Fintech & Forex broker solutions"],
        address: "Agilavetri information technology LLC, A5 Office, No 8 Xavier Business Center BN Complex M2 Floor, Al Muteena Street, Deira Dubai.",
        phone: "+971 56 142 4235", email: "dubai@agilavetri.com", colorTheme: "blue", accentColor: "#0437cc"
    },
    {
        city: "Bengaluru", country: "India", role: "Technology Hub", flag: "🇮🇳", hours: "24/7 Operations",
        desc: "Our innovation center driven by top-tier engineering talent and advanced software development.",
        bullets: ["Top-tier engineering talent", "Advanced custom software R&D", "Agile offshore delivery model"],
        address: "No: 472/7, Balaji Arcade, 1st floor, AVS Compound, 80 Feet Road, 4th Block, Koramanagala, Bengaluru, India.",
        phone: "+91 91871 12123", email: "india@agilavetri.com", colorTheme: "orange", accentColor: "#f77704"
    }
];

const PresenceCom: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const orbBlueRef = useRef<HTMLDivElement>(null);
    const orbOrangeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Seamless Parallax Background
            if (bgRef.current) {
                gsap.fromTo(
                    bgRef.current,
                    { yPercent: -12 },
                    {
                        yPercent: 12,
                        ease: "none",
                        force3D: true,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 0.5,
                            invalidateOnRefresh: true,
                        }
                    }
                );
            }

            // 2. Multi-depth Parallax on Ambient Blur Orbs
            if (orbBlueRef.current && orbOrangeRef.current) {
                gsap.fromTo(
                    orbBlueRef.current,
                    { yPercent: -25 },
                    { yPercent: 25, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1 } }
                );

                gsap.fromTo(
                    orbOrangeRef.current,
                    { yPercent: 20 },
                    { yPercent: -20, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1 } }
                );
            }
        }, sectionRef);

        const timer = setTimeout(() => { ScrollTrigger.refresh(); }, 150);
        return () => { clearTimeout(timer); ctx.revert(); };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-gray-50 text-gray-900 py-16 lg:py-24 relative overflow-hidden z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] border-t border-gray-200"
        >
            <div ref={bgRef} className="absolute inset-x-0 -top-[15%] h-[130%] pointer-events-none will-change-transform z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div ref={orbBlueRef} className="absolute top-[15%] left-[-5%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-[#0437cc] rounded-full mix-blend-multiply filter blur-[140px] opacity-[0.06]"></div>
                <div ref={orbOrangeRef} className="absolute bottom-[10%] right-[-5%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-[#f77704] rounded-full mix-blend-multiply filter blur-[140px] opacity-[0.06]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4 text-gray-900">
                        Our Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0437cc] to-[#18acfa]">Presence</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-gray-600 px-4">
                        AGILAVETRI PRIMETECH operates with a strong offshore–onsite delivery model to ensure quality, speed, and cost efficiency for clients worldwide.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                    {locationsData.map((loc, index) => {
                        const isBlue = loc.colorTheme === 'blue';

                        return (
                            <div key={index} className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-gray-200 transition-all duration-500 flex flex-col">
                                <div className={`absolute top-0 left-6 sm:left-8 right-6 sm:right-8 h-1 rounded-b-full ${isBlue ? 'bg-gradient-to-r from-[#0437cc] to-[#18acfa]' : 'bg-gradient-to-r from-[#f77704] to-[#fec515]'}`}></div>

                                <div className="flex flex-col xl:flex-row xl:justify-between items-start gap-4 mb-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-3xl sm:text-4xl drop-shadow-sm">{loc.flag}</span>
                                            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">{loc.city}</h3>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-widest">
                                            <span>{loc.role}</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                            <span>{loc.country}</span>
                                        </div>
                                    </div>
                                    <div className={`self-start px-3 py-1.5 rounded-xl border font-bold text-[10px] sm:text-xs whitespace-nowrap shadow-sm ${isBlue ? 'bg-[#0437cc]/5 border-[#0437cc]/20 text-[#0437cc]' : 'bg-[#f77704]/5 border-[#f77704]/20 text-[#f77704]'}`}>
                                        {loc.hours}
                                    </div>
                                </div>

                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                                    {loc.desc}
                                </p>

                                <ul className="flex flex-col gap-2.5 mb-8">
                                    {loc.bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#a6e71c] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-xs sm:text-sm font-semibold text-gray-700 leading-tight">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto bg-gray-50 rounded-2xl p-5 border border-gray-100 mb-6 space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center ${isBlue ? 'bg-[#0437cc]/10 text-[#0437cc]' : 'bg-[#f77704]/10 text-[#f77704]'}`}>
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        </div>
                                        <p className="text-xs sm:text-sm font-medium text-gray-600 leading-relaxed pt-1">{loc.address}</p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-2">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center ${isBlue ? 'bg-[#0437cc]/10 text-[#0437cc]' : 'bg-[#f77704]/10 text-[#f77704]'}`}>
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                            </div>
                                            <a href={`tel:${loc.phone}`} className="text-xs sm:text-sm font-bold text-gray-900 hover:text-[#0437cc] transition-colors">{loc.phone}</a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center ${isBlue ? 'bg-[#0437cc]/10 text-[#0437cc]' : 'bg-[#f77704]/10 text-[#f77704]'}`}>
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                            </div>
                                            <a href={`mailto:${loc.email}`} className="text-xs sm:text-sm font-bold text-gray-900 hover:text-[#0437cc] transition-colors break-all">{loc.email}</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col xl:flex-row items-center gap-3 mt-2 w-full">
                                    <Link to="/contact" className="w-full xl:w-auto flex justify-center">
                                        <Buttons text="Inquire Here" className="w-full sm:w-auto" />
                                    </Link>
                                    <div className="w-full xl:w-auto flex justify-center">
                                        <Buttons text={`Call ${loc.city} Office`} variant="outline" colorTheme={loc.colorTheme as 'blue' | 'orange'} href={`tel:${loc.phone}`} className="w-full sm:w-auto" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PresenceCom;