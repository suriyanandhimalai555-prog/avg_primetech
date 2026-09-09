import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
    const [activeSection, setActiveSection] = useState('overview');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -70% 0px' }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 96; // Adjusted to match top-24 on the sidebar
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
        { id: 'collection', label: '1. Information Collection' },
        { id: 'usage', label: '2. Data Usage & Protection' },
        { id: 'compliance', label: '3. Global Compliance' },
        { id: 'sharing', label: '4. Third-Party Sharing' },
        { id: 'contact', label: '5. Contact Details' }
    ];

    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col">

            {/* --- Premium Dark Hero Section (Optimized for 1080p Laptops) --- */}
            <section className="relative w-full bg-[#010a1f] pt-16 md:pt-20 lg:pt-24 pb-12 lg:pb-16 px-6 lg:px-8 overflow-hidden">
                <style>
                    {`
                        @keyframes text-shine {
                            0% { background-position: 0% 50%; }
                            100% { background-position: 200% 50%; }
                        }
                    `}
                </style>

                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0437cc]/25 to-transparent pointer-events-none transform-gpu"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#f77704]/15 to-transparent pointer-events-none transform-gpu"></div>

                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
                    <div className="mb-4 lg:mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#a6e71c] text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2 shadow-sm backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-[#a6e71c]"></span>
                        Legal Information
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 lg:mb-6 leading-tight">
                        Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18acfa] via-[#a6e71c] to-[#18acfa] bg-[length:200%_auto] animate-[text-shine_5s_linear_infinite]">
                            Policy.
                        </span>
                    </h1>
                    <p className="text-gray-400 text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        At AGILAVETRI PRIMETECH PRIVATE LIMITED, safeguarding your enterprise data and personal information is our highest priority.
                    </p>
                </div>

                <div className="absolute bottom-[-10px] md:bottom-[-20px] lg:bottom-[-40px] left-0 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
                    <h1 className="text-[18vw] font-black text-white/[0.02] leading-none whitespace-nowrap tracking-tighter">
                        AGILAVETRI
                    </h1>
                </div>
            </section>

            {/* --- Main Content Split Layout --- */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16 w-full flex flex-col lg:flex-row gap-10 lg:gap-20">

                {/* --- Left Column: Sticky Sidebar --- */}
                <div className="w-full lg:w-1/4 shrink-0">
                    <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hidden lg:block z-20">
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
                <div className="w-full lg:w-3/4 flex flex-col gap-10 lg:gap-16 pb-20 lg:pb-24">

                    <section id="overview" className="scroll-mt-24">
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                            Operating across our Dubai Headquarters and Bengaluru Technology Hub, AGILAVETRI PRIMETECH PRIVATE LIMITED is committed to protecting the integrity of your enterprise data. We collect only necessary contact information to process inquiries and deliver premium technology services globally.
                        </p>
                    </section>

                    <div className="w-full h-px bg-gray-200"></div>

                    <section id="collection" className="scroll-mt-24">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
                            1. Information Collection
                        </h2>
                        <p className="text-base text-gray-600 leading-relaxed mb-4">
                            We collect only the explicit, necessary information required to process your technology inquiries and initiate architectural consultations. This data includes:
                        </p>
                        <ul className="list-none space-y-4">
                            {[
                                "Full names and professional titles.",
                                "Corporate email addresses and contact numbers.",
                                "Project scope, technical requirements, and business goals explicitly submitted through our secure contact interfaces."
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#0437cc] shrink-0"></div>
                                    <p className="text-gray-600 font-medium">{text}</p>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id="usage" className="scroll-mt-24">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
                            2. Data Usage & Protection
                        </h2>
                        <p className="text-base text-gray-600 leading-relaxed mb-4">
                            Your submitted details are stored inside highly secure environments utilizing enterprise-grade encryption protocols. Your data is strictly utilized for:
                        </p>
                        <ul className="list-none space-y-4 mb-6">
                            {[
                                "Direct technical communication and consultation scheduling.",
                                "The formulation of formal proposals and Non-Disclosure Agreements (NDAs).",
                                "Seamless project execution and delivery phase tracking."
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#f77704] shrink-0"></div>
                                    <p className="text-gray-600 font-medium">{text}</p>
                                </li>
                            ))}
                        </ul>
                        <p className="text-base text-gray-600 leading-relaxed p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                            <strong className="text-gray-900 font-bold block mb-2">Zero-Trust Architecture</strong>
                            We employ zero-trust architecture principles internally to ensure that access to your business information is strictly limited to authorized project architects and management personnel.
                        </p>
                    </section>

                    <section id="compliance" className="scroll-mt-24">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
                            3. Global Compliance
                        </h2>
                        <p className="text-base text-gray-600 leading-relaxed">
                            As a global technology entity, we operate under rigorous international compliance standards. We strictly adhere to the <strong className="text-gray-900">UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection</strong> for our Middle Eastern operations, as well as India's <strong className="text-gray-900">Digital Personal Data Protection (DPDP) Act</strong> for our Bengaluru engineering hub. Furthermore, our data processing frameworks align with broader international privacy standards, including GDPR, to ensure uncompromising global protection.
                        </p>
                    </section>

                    <section id="sharing" className="scroll-mt-24">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
                            4. Third-Party Sharing
                        </h2>
                        <p className="text-base text-gray-600 leading-relaxed">
                            AGILAVETRI PRIMETECH maintains a strict policy against selling, trading, or renting your corporate or personal information to third parties. Data is solely shared with trusted cloud infrastructure providers (such as AWS or Azure) strictly under rigorous confidentiality agreements necessary for hosting your environments and delivering our software services.
                        </p>
                    </section>

                    <section id="contact" className="scroll-mt-24">
                        <div className="bg-[#010a1f] rounded-[2rem] p-8 md:p-12 relative overflow-hidden text-white shadow-xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0437cc] rounded-full mix-blend-screen filter blur-[100px] opacity-40 pointer-events-none"></div>

                            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 relative z-10">
                                5. Contacting Our Data Protection Team
                            </h2>
                            <p className="text-gray-400 mb-8 max-w-2xl relative z-10 font-medium leading-relaxed">
                                If you wish to access, update, or permanently delete your data from our systems, or if you have any questions regarding our privacy practices, please contact us directly.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 relative z-10">
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-full">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Dubai HQ</p>
                                    <a href="mailto:dubai@agilavetri.com" className="text-lg font-bold text-[#18acfa] hover:text-white transition-colors">dubai@agilavetri.com</a>
                                </div>
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-full">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Bengaluru Hub</p>
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

export default PrivacyPolicy;