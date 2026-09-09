import React, { useEffect } from 'react';
import Buttons from '../../common/Buttons';

const locations = [
    {
        city: "Dubai Head Office",
        type: "Headquarters",
        flag: "🇦🇪",
        address: "Burj Nahar Mall - Room No:8, A4 Block M2 Floor - 23rd St - Al Muteena - Deira - Dubai - UAE",
        phone: "+971 507078677",
        email: "dubai@agilavetri.com",
        borderColor: "border-[#0437cc]",
        iconColor: "text-[#0437cc]",
        bgAccent: "bg-[#0437cc]/10"
    },
    {
        city: "Bengaluru Hub",
        type: "Tech Hub",
        flag: "🇮🇳",
        address: "No: 472/7, Balaji Arcade, 1st floor, AVS Compound, 80 Feet Road, 4th Block, Koramanagala, Bengaluru, India",
        phone: "+91 91871 12123",
        email: "india@agilavetri.com",
        borderColor: "border-[#f77704]",
        iconColor: "text-[#f77704]",
        bgAccent: "bg-[#f77704]/10"
    }
];

const serviceOptions = [
    "Software & Application",
    "Blockchain & Web3",
    "FinTech & Trading",
    "AI & Advanced Tech",
    "Immersive Tech",
    "Digital Growth",
    "Real Estate & Expo",
    "Global Consulting",
    "General Digital Consulting"
];

const ContactUsCom: React.FC = () => {
    // Ensure the page loads at the top instantly
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full min-h-screen bg-white flex flex-col overflow-hidden">

            {/* --- Premium Dark Hero Section (Matched with AboutUs) --- */}
            <section className="relative w-full bg-[#010a1f] pt-20 pb-24 lg:pb-32 px-6 lg:px-8">
                {/* Static Background Glows for zero-lag performance */}
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#0437cc] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.25] pointer-events-none transform-gpu"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#f77704] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.15] pointer-events-none transform-gpu"></div>

                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
                    <div className="mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#a6e71c] text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2 shadow-sm backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-[#a6e71c]"></span>
                        Get In Touch
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                        Let's Build the <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18acfa] via-[#a6e71c] to-[#18acfa] bg-[length:200%_auto] animate-[text-shine_5s_linear_infinite]">
                            Future Together.
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Whether you are a startup, enterprise, or global brand, AGILAVETRI PRIMETECH is your trusted partner for technology, innovation, and digital growth.
                    </p>
                </div>

                {/* Massive Watermark Typography */}
                <div className="absolute bottom-[-20px] md:bottom-[-40px] left-0 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
                    <h1 className="text-[18vw] font-black text-white/[0.02] leading-none whitespace-nowrap tracking-tighter">
                        AGILAVETRI
                    </h1>
                </div>
            </section>

            {/* --- Main Contact Area --- */}
            <section className="py-16 lg:py-32 px-6 lg:px-8 bg-white relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">

                    {/* --- Left Column: Locations & Support --- */}
                    <div className="w-full lg:w-5/12 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">
                                Global Headquarters & Hubs
                            </h3>

                            <div className="flex flex-col gap-6 mb-8">
                                {locations.map((loc, idx) => (
                                    <div key={idx} className={`relative bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100 border-l-4 ${loc.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 group`}>
                                        <div className="flex items-center gap-4 mb-5">
                                            <span className="text-3xl md:text-4xl drop-shadow-sm group-hover:scale-110 transition-transform duration-300">{loc.flag}</span>
                                            <div>
                                                <h4 className="text-lg md:text-xl font-bold text-gray-900 leading-tight mb-1">{loc.city}</h4>
                                                <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">{loc.type}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-start gap-3">
                                                <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center ${loc.bgAccent} ${loc.iconColor}`}>
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                </div>
                                                <p className="text-sm text-gray-600 font-medium leading-relaxed pt-1">{loc.address}</p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center ${loc.bgAccent} ${loc.iconColor}`}>
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                                </div>
                                                <a href={`tel:${loc.phone}`} className="text-sm font-bold text-gray-900 hover:text-[#0437cc] transition-colors">{loc.phone}</a>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center ${loc.bgAccent} ${loc.iconColor}`}>
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                                </div>
                                                <a href={`mailto:${loc.email}`} className="text-sm font-bold text-gray-900 hover:text-[#0437cc] transition-colors break-all">{loc.email}</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 24/7 Tech Support Alert Box */}
                        <div className="bg-[#a6e71c]/10 border border-[#a6e71c]/30 rounded-3xl p-6 flex items-center gap-4 mt-auto">
                            <div className="w-12 h-12 rounded-full bg-[#a6e71c]/20 flex items-center justify-center shrink-0">
                                <svg className="w-6 h-6 text-[#48b608]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-gray-900">Direct Technical Support</h4>
                                <p className="text-xs font-semibold text-[#48b608] uppercase tracking-wide mt-1">24/7 Monitoring & Rapid Response</p>
                            </div>
                        </div>
                    </div>

                    {/* --- Right Column: Premium Dark Contact Form --- */}
                    <div className="w-full lg:w-7/12 flex flex-col">
                        <div className="bg-[#010a1f] h-full rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-[0_30px_80px_rgba(4,55,204,0.15)] border border-white/10 flex flex-col relative overflow-hidden">

                            {/* Form Inner Background Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0437cc] rounded-full mix-blend-screen filter blur-[120px] opacity-40 pointer-events-none transform-gpu"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f77704] rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none transform-gpu"></div>

                            <div className="mb-10 relative z-10">
                                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">Send us a Message</h3>
                                <p className="text-gray-400 text-sm md:text-base font-medium">
                                    Fill out the form below and our technical architects will get back to you within 24 hours.
                                </p>
                            </div>

                            <form className="flex flex-col flex-grow gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>

                                {/* Top Row: Name & Email */}
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="w-full">
                                        <label className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Full Name *</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#a6e71c]/30 focus:border-[#a6e71c] transition-all duration-300"
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Email Address *</label>
                                        <input
                                            type="email"
                                            placeholder="john@company.com"
                                            className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#a6e71c]/30 focus:border-[#a6e71c] transition-all duration-300"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Service Dropdown */}
                                <div className="w-full relative">
                                    <label className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Service Interested In</label>
                                    <div className="relative">
                                        <select
                                            className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-xl px-5 py-4 appearance-none focus:outline-none focus:ring-2 focus:ring-[#a6e71c]/30 focus:border-[#a6e71c] transition-all duration-300 cursor-pointer"
                                            defaultValue="General Digital Consulting"
                                        >
                                            {serviceOptions.map((service, idx) => (
                                                <option key={idx} value={service} className="bg-[#010a1f] text-white">{service}</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Message Textarea */}
                                <div className="w-full flex flex-col flex-grow">
                                    <label className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Message *</label>
                                    <textarea
                                        placeholder="Tell us about your project requirements, timeline, and goals..."
                                        className="w-full flex-grow bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#a6e71c]/30 focus:border-[#a6e71c] transition-all duration-300 resize-none min-h-[160px]"
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="mt-4 w-full flex justify-end shrink-0">
                                    <div className="w-full md:w-auto">
                                        <Buttons text="Submit Inquiry" />
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ContactUsCom;