import React, { useEffect, useState } from 'react';
import Buttons from '../../common/Buttons';

// Expanded job list to demonstrate scalability and filtering
const jobOpenings = [
    {
        title: "Senior Blockchain Developer",
        department: "Engineering",
        location: "Bengaluru Hub / Remote",
        type: "Full-Time",
        desc: "Architect and deploy secure smart contracts, DeFi protocols, and Web3 ecosystems for our global enterprise clients.",
        reqs: ["3+ years Solidity/Rust", "Web3.js/Ethers.js", "Smart Contract Auditing"],
        colorTheme: "blue",
        borderColor: "border-[#0437cc]",
        bgAccent: "bg-[#0437cc]/10",
        textColor: "text-[#0437cc]"
    },
    {
        title: "Frontend React Engineer",
        department: "Engineering",
        location: "Bengaluru Hub",
        type: "Full-Time",
        desc: "Build buttery-smooth, zero-lag user interfaces for high-performance enterprise SaaS and FinTech platforms.",
        reqs: ["3+ years React/TypeScript", "Tailwind CSS", "Performance Optimization"],
        colorTheme: "blue",
        borderColor: "border-[#0437cc]",
        bgAccent: "bg-[#0437cc]/10",
        textColor: "text-[#0437cc]"
    },
    {
        title: "Digital Marketing Specialist",
        department: "Growth & Marketing",
        location: "Dubai HQ / Bengaluru",
        type: "Full-Time",
        desc: "Drive global brand visibility, manage performance marketing campaigns, and execute lead generation strategies across GCC and Asian markets.",
        reqs: ["B2B SaaS Marketing", "SEO & SEM Mastery", "Analytics & Reporting"],
        colorTheme: "orange",
        borderColor: "border-[#f77704]",
        bgAccent: "bg-[#f77704]/10",
        textColor: "text-[#f77704]"
    },
    {
        title: "SEO Strategist",
        department: "Growth & Marketing",
        location: "Remote",
        type: "Contract",
        desc: "Lead technical SEO initiatives, content architecture, and organic growth strategies for our global Web3 and enterprise platforms.",
        reqs: ["Technical SEO", "Ahrefs/SEMrush", "Content Strategy"],
        colorTheme: "orange",
        borderColor: "border-[#f77704]",
        bgAccent: "bg-[#f77704]/10",
        textColor: "text-[#f77704]"
    },
    {
        title: "International Telecaller / Inside Sales",
        department: "Sales",
        location: "Bengaluru Hub",
        type: "Full-Time",
        desc: "Spearhead our outbound sales initiatives, connecting with prospective enterprise clients and communicating our high-end technology solutions.",
        reqs: ["Excellent Communication", "B2B Tech Sales Experience", "CRM Proficiency"],
        colorTheme: "lime",
        borderColor: "border-[#a6e71c]",
        bgAccent: "bg-[#a6e71c]/20",
        textColor: "text-[#48b608]"
    }
];

const benefits = [
    {
        title: "Global Exposure",
        desc: "Work on cutting-edge projects for enterprises spanning the UAE, India, and worldwide markets.",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
        title: "Enterprise Tech Stack",
        desc: "Build with the latest in Web3, AI, and scalable cloud architectures using zero-trust security.",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    },
    {
        title: "Accelerated Growth",
        desc: "Continuous learning environments, certification sponsorships, and rapid career progression.",
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    }
];

const CareersCom: React.FC = () => {
    // State Management for Scalability
    const [activeJob, setActiveJob] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeDepartment, setActiveDepartment] = useState("All Roles");

    // Dynamically extract unique departments from the job list
    const departments = ["All Roles", ...Array.from(new Set(jobOpenings.map(job => job.department)))];

    // Filter logic
    const filteredJobs = jobOpenings.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.desc.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDepartment = activeDepartment === "All Roles" || job.department === activeDepartment;
        return matchesSearch && matchesDepartment;
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col overflow-hidden">

            {/* --- Premium Dark Hero Section --- */}
            <section className="relative w-full bg-[#010a1f] pt-20 pb-24 lg:pb-32 px-6 lg:px-8">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0437cc]/25 to-transparent pointer-events-none transform-gpu"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#f77704]/15 to-transparent pointer-events-none transform-gpu"></div>

                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
                    <div className="mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#a6e71c] text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2 shadow-sm backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-[#a6e71c]"></span>
                        Join Our Team
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                        Engineer Your <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18acfa] via-[#a6e71c] to-[#18acfa] bg-[length:200%_auto] animate-[text-shine_5s_linear_infinite]">
                            Career with Us.
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        We are always looking for visionary thinkers, builders, and communicators to help us architect the digital future across our global hubs.
                    </p>
                </div>

                <div className="absolute bottom-[-20px] md:bottom-[-40px] left-0 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
                    <h1 className="text-[18vw] font-black text-white/[0.02] leading-none whitespace-nowrap tracking-tighter">
                        AGILAVETRI
                    </h1>
                </div>
            </section>

            {/* --- Why Join Us Section --- */}
            <section className="py-20 px-6 lg:px-8 bg-white relative z-10 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                            Why Build at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0437cc] to-[#18acfa]">AGILAVETRI</span>?
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed">
                            Operating across Dubai and Bengaluru, we offer an environment where elite talent meets enterprise scale. Experience true architectural freedom and global exposure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-0 h-1.5 bg-gradient-to-r from-[#0437cc] to-[#18acfa] group-hover:w-full transition-all duration-700 ease-out z-20"></div>

                                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-[#0437cc] group-hover:bg-[#0437cc] group-hover:text-white transition-all duration-500 mb-6 shadow-sm">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-[#0437cc] transition-colors duration-300 tracking-tight">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base">
                                    {benefit.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Premium Interactive Openings List with Filtering --- */}
            <section className="py-20 px-6 lg:px-8 bg-gray-50 relative z-10">
                <div className="max-w-5xl mx-auto">

                    {/* Section Header & Spontaneous Application */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                                Current Openings
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed">
                                Discover your next career move. We are actively hiring across multiple divisions.
                            </p>
                        </div>
                        <div className="shrink-0">
                            <a href="mailto:careers@agilavetri.com" className="inline-flex items-center gap-2 text-sm font-bold text-[#0437cc] hover:text-[#18acfa] transition-colors">
                                Spontaneous Application
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Search & Filter Toolbar */}
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        {/* Search Input */}
                        <div className="relative w-full md:w-1/3 shrink-0">
                            <input
                                type="text"
                                placeholder="Search roles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white border border-gray-200 text-gray-900 text-sm font-medium rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0437cc]/20 focus:border-[#0437cc] transition-all shadow-sm"
                            />
                            <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        {/* Category Pills (Scrollable on mobile) */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar w-full">
                            {departments.map((dept, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveDepartment(dept)}
                                    className={`whitespace-nowrap px-4 py-3 md:py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${activeDepartment === dept
                                            ? 'bg-[#0437cc] text-white shadow-md'
                                            : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-900'
                                        }`}
                                >
                                    {dept}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Pure CSS Accordion Job List */}
                    <div className="flex flex-col border-t border-gray-200 pt-2 min-h-[400px]">
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map((job) => {
                                const isActive = activeJob === job.title;

                                return (
                                    <div key={job.title} className={`border-b border-gray-200 group transition-colors duration-300 ${isActive ? 'bg-white shadow-sm rounded-xl my-2 border-transparent' : 'hover:bg-white/50'}`}>

                                        {/* Clickable Header Row */}
                                        <button
                                            onClick={() => setActiveJob(isActive ? null : job.title)}
                                            className="w-full flex flex-col md:flex-row md:items-center justify-between py-6 lg:py-8 px-4 lg:px-8 text-left focus:outline-none"
                                        >
                                            <div className="flex flex-col gap-3">
                                                <div className="flex items-center gap-3">
                                                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest ${job.bgAccent} ${job.textColor}`}>
                                                        {job.department}
                                                    </span>
                                                    <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                                                        {job.type}
                                                    </span>
                                                </div>
                                                <h3 className={`text-xl lg:text-2xl font-extrabold transition-colors duration-300 ${isActive ? job.textColor : 'text-gray-900 group-hover:text-[#0437cc]'}`}>
                                                    {job.title}
                                                </h3>
                                            </div>

                                            <div className="mt-4 md:mt-0 flex items-center gap-4 text-gray-500 text-sm font-semibold">
                                                <div className="flex items-center gap-1.5">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                    {job.location}
                                                </div>

                                                {/* Expand/Collapse Icon */}
                                                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ml-4 ${isActive ? `border-transparent ${job.bgAccent} ${job.textColor}` : 'border-gray-200 text-gray-400 group-hover:border-[#0437cc] group-hover:text-[#0437cc]'}`}>
                                                    <svg className={`w-4 h-4 transform transition-transform duration-500 ${isActive ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </button>

                                        {/* Expandable Body */}
                                        <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                            <div className="overflow-hidden min-h-0">
                                                <div className="px-4 lg:px-8 pb-8 pt-2">
                                                    <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-3xl">
                                                        {job.desc}
                                                    </p>

                                                    <div className="mb-8">
                                                        <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-3">Key Requirements:</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {job.reqs.map((req, i) => (
                                                                <span key={i} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-semibold text-gray-600">
                                                                    {req}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="pt-6 border-t border-gray-100">
                                                        <Buttons text="Apply for this Role" href={`mailto:careers@agilavetri.com?subject=Application for ${job.title}`} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                );
                            })
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H11m0 0v2m0-2V8m0 2H9" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">No openings found</h3>
                                <p className="text-gray-500 font-medium">Try adjusting your search or category filter.</p>
                                <button onClick={() => { setSearchQuery(""); setActiveDepartment("All Roles"); }} className="mt-4 text-[#0437cc] font-bold hover:underline">
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* --- Premium Floating Card CTA Section --- */}
            <section className="py-16 lg:py-24 px-6 lg:px-8 bg-gray-50 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-[#010a1f] rounded-[2rem] md:rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(4,55,204,0.15)] border border-white/10">
                        {/* Inner Ambient Glow */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0437cc]/20 to-transparent"></div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                                Don't see a perfect match?
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed mb-10 max-w-2xl">
                                We are always eager to connect with exceptional talent. Send us your resume and tell us how you can add value to AGILAVETRI PRIMETECH.
                            </p>
                            <Buttons text="Email Your Resume" href="mailto:careers@agilavetri.com" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CareersCom;