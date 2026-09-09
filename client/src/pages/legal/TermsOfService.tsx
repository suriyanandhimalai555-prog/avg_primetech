import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
    const [activeSection, setActiveSection] = useState('overview');

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Intersection Observer to highlight the active section in the sticky sidebar
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -70% 0px' } // Adjusts when the section triggers as "active"
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    // Smooth scroll handler for sidebar clicks
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Account for sticky spacing
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(id);
        }
    };

    const navItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'ip', label: '1. Intellectual Property' },
        { id: 'delivery', label: '2. Service Delivery & SLAs' },
        { id: 'liability', label: '3. Limitation of Liability' },
        { id: 'jurisdiction', label: '4. Governing Law' },
        { id: 'contact', label: '5. Legal Contact' }
    ];

    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col">

            {/* --- Premium Dark Hero Section --- */}
            <section className="relative w-full bg-[#010a1f] pt-20 pb-24 lg:pb-32 px-6 lg:px-8 overflow-hidden">
                <style>
                    {`
                        @keyframes text-shine {
                            0% { background-position: 0% 50%; }
                            100% { background-position: 200% 50%; }
                        }
                    `}
                </style>
                
                {/* Static Background Glows for zero-lag performance */}
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0437cc]/25 to-transparent pointer-events-none transform-gpu"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#f77704]/15 to-transparent pointer-events-none transform-gpu"></div>

                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
                    <div className="mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#a6e71c] text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2 shadow-sm backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-[#a6e71c]"></span>
                        Legal Information
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                        Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18acfa] via-[#a6e71c] to-[#18acfa] bg-[length:200%_auto] animate-[text-shine_5s_linear_infinite]">
                            Service.
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        By accessing the website and digital services of AGILAVETRI PRIMETECH PRIVATE LIMITED, you agree to comply with our global service terms.
                    </p>
                </div>

                {/* Massive Watermark Typography */}
                <div className="absolute bottom-[-20px] md:bottom-[-40px] left-0 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
                    <h1 className="text-[18vw] font-black text-white/[0.02] leading-none whitespace-nowrap tracking-tighter">
                        AGILAVETRI
                    </h1>
                </div>
            </section>

            {/* --- Main Content Split Layout --- */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 w-full flex flex-col lg:flex-row gap-12 lg:gap-20">

                {/* --- Left Column: Sticky Sidebar --- */}
                <div className="w-full lg:w-1/4 shrink-0">
                    <div className="sticky top-28 bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hidden lg:block z-20">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Table of Contents</h3>
                        <nav className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-left text-sm font-bold transition-all duration-300 flex items-center gap-3 ${activeSection === item.id
                                            ? 'text-[#0437cc] translate-x-2'
                                            : 'text-gray-500 hover:text-gray-900 hover:translate-x-1'
                                        }`}
                                >
                                    {activeSection === item.id && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#f77704]"></span>
                                    )}
                                    {item.label}
                                </button>
                            ))}
                        </nav>

                        <div className="mt-10 pt-6 border-t border-gray-100">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Effective Date</p>
                            <p className="text-sm font-bold text-gray-900">September 2026</p>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-[#0437cc] transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                                Return to Home
                            </Link>
                        </div>
                    </div>
                </div>

                {/* --- Right Column: Scrollable Content --- */}
                <div className="w-full lg:w-3/4 flex flex-col gap-12 lg:gap-16 pb-24">

                    <section id="overview" className="scroll-mt-28">
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                            Welcome to AGILAVETRI PRIMETECH PRIVATE LIMITED. These Terms of Service govern your access to and use of our corporate website, consulting services, and digital infrastructure offerings across our global hubs. By engaging with our platforms, you agree to be bound by these foundational terms.
                        </p>
                    </section>

                    <div className="w-full h-px bg-gray-200"></div>

                    <section id="ip" className="scroll-mt-28">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
                            1. Intellectual Property
                        </h2>
                        <p className="text-base text-gray-600 leading-relaxed mb-4">
                            All proprietary materials displayed or provided through our services remain the exclusive intellectual property of AGILAVETRI PRIMETECH. This includes, but is not limited to:
                        </p>
                        <ul className="list-none space-y-4">
                            {[
                                "Custom software architectures and proprietary code frameworks.",
                                "Brand assets, UI/UX designs, and visual media.",
                                "Technical documentation, whitepapers, and operational blueprints."
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#0437cc] shrink-0"></div>
                                    <p className="text-gray-600 font-medium">{text}</p>
                                </li>
                            ))}
                        </ul>
                        <p className="text-base text-gray-600 leading-relaxed mt-6">
                            These assets are strictly protected under UAE Federal Laws, Indian Copyright Acts, and international intellectual property treaties. Unauthorized reproduction or distribution is strictly prohibited.
                        </p>
                    </section>

                    <section id="delivery" className="scroll-mt-28">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
                            2. Service Delivery & SLAs
                        </h2>
                        <p className="text-base text-gray-600 leading-relaxed mb-4">
                            Information provided on this website serves as a general overview of our capabilities. Actual project execution is governed by specific, customized agreements:
                        </p>
                        <ul className="list-none space-y-4 mb-6">
                            {[
                                "All engagement contracts and scope definitions are formalized exclusively via a Master Services Agreement (MSA).",
                                "Service Level Agreements (SLAs), including uptime guarantees and response times, are uniquely tailored and bound within the MSA.",
                                "Project timelines and deliverables outlined on this site are indicative and subject to the finalized scope of work."
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#f77704] shrink-0"></div>
                                    <p className="text-gray-600 font-medium">{text}</p>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id="liability" className="scroll-mt-28">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
                            3. Limitation of Liability
                        </h2>
                        <p className="text-base text-gray-600 leading-relaxed p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                            To the maximum extent permitted by applicable law, AGILAVETRI PRIMETECH PRIVATE LIMITED shall not be liable for any indirect, incidental, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from the use or inability to use our digital web properties. Specific liabilities related to technology deliverables will be strictly governed by the executed Master Services Agreement.
                        </p>
                    </section>

                    <section id="jurisdiction" className="scroll-mt-28">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
                            4. Governing Law & Jurisdiction
                        </h2>
                        <p className="text-base text-gray-600 leading-relaxed">
                            Given our global operational model, these Terms of Service shall be governed and construed in accordance with the jurisdiction of the contracting entity. Engagements routed through our Dubai Headquarters fall under the exclusive jurisdiction of the courts of <strong className="text-gray-900">Dubai, United Arab Emirates</strong>. Engagements routed through our Technology Hub fall under the jurisdiction of the courts of <strong className="text-gray-900">Bengaluru, Karnataka, India</strong>.
                        </p>
                    </section>

                    <section id="contact" className="scroll-mt-28">
                        <div className="bg-[#010a1f] rounded-[2rem] p-8 md:p-12 relative overflow-hidden text-white shadow-xl">
                            {/* Inner Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0437cc] rounded-full mix-blend-screen filter blur-[100px] opacity-40 pointer-events-none"></div>

                            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 relative z-10">
                                5. Legal Contact Information
                            </h2>
                            <p className="text-gray-400 mb-8 max-w-2xl relative z-10 font-medium leading-relaxed">
                                For any questions regarding these Terms of Service, compliance requests, or formal legal notices, please reach out to our corporate teams.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 relative z-10">
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-full">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Dubai Legal Dept.</p>
                                    <a href="mailto:dubai@agilavetri.com" className="text-lg font-bold text-[#18acfa] hover:text-white transition-colors">dubai@agilavetri.com</a>
                                </div>
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-full">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">India Legal Dept.</p>
                                    <a href="mailto:india@agilavetri.com" className="text-lg font-bold text-[#f77704] hover:text-white transition-colors">india@agilavetri.com</a>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default TermsOfService;