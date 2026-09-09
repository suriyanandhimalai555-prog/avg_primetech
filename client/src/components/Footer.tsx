import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const [isVisible, setIsVisible] = useState(false);

    // Dynamic Scroll to Top Visibility
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const servicesLinks = [
        { name: "Software & Application", path: "/services/software-application" },
        { name: "Blockchain & Web3", path: "/services/blockchain-web3" },
        { name: "FinTech & Trading", path: "/services/fintech-trading" },
        { name: "AI & Advanced Tech", path: "/services/ai-advanced-tech" },
        { name: "Immersive Tech", path: "/services/immersive-tech" },
        { name: "Digital Growth", path: "/services/digital-growth" }
    ];

    const companyLinks = [
        { name: "About Us", path: "/about" },
        { name: "Careers", path: "/careers" },
        { name: "Contact Us", path: "/contact" }
    ];

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            ),
            href: 'https://www.linkedin.com/company/avg-primetech/'
        },
        {
            name: 'Instagram',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
            ),
            href: 'https://www.instagram.com/avg_primetech?stkn=MXA2NWF0bjZlcmVrbg=='
        },
        {
            name: 'WhatsApp',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
            ),
            href: 'https://wa.me/971507078677'
        }
    ];

    return (
        <footer className="w-full bg-[#010a1f] text-gray-300 relative overflow-hidden pt-24 lg:pt-32 pb-6 border-t border-white/5">

            {/* --- Architectural Background Image & Overlays --- */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <img
                    src="/footer.png"
                    alt="Architectural Foundation Blueprint"
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-[0.25]"
                />

                {/* Dark fade masks to ensure the text remains perfectly legible */}
                <div className="absolute inset-0 bg-[#010a1f]/60"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#010a1f] via-transparent to-[#010a1f]"></div>

                {/* --- Zero-Lag CSS Radial Gradient Glows (Replaced heavy blur filters) --- */}
                <div className="absolute top-[10%] left-[-5%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0437cc]/20 to-transparent pointer-events-none transform-gpu"></div>
                <div className="absolute bottom-[20%] right-[-5%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#f77704]/15 to-transparent pointer-events-none transform-gpu"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col">

                {/* --- Main Footer Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 flex-grow">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 flex flex-col">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-lg">
                                <img src="/logo.jpg" alt="Agilavetri Logo" className="w-8 h-8 object-contain" />
                            </div>
                            <div className="flex flex-col justify-center mt-1">
                                <span className="text-base font-extrabold text-white leading-none mb-1 tracking-tight drop-shadow-md">
                                    AGILAVETRI PRIMETECH
                                </span>
                                <span className="text-[10px] font-bold text-[#f77704] leading-none tracking-widest uppercase drop-shadow-md">
                                    Dubai • Bengaluru
                                </span>
                            </div>
                        </Link>

                        <p className="text-gray-300 font-medium text-sm md:text-base leading-relaxed mb-8 max-w-sm drop-shadow-sm">
                            Empowering global enterprises with highly scalable software architecture, emerging web3 technologies, and strategic digital consulting.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#0437cc] hover:border-[#0437cc] hover:-translate-y-1 transition-all duration-300 shadow-xl transform-gpu"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Links */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm drop-shadow-md">Core Services</h4>
                        <ul className="flex flex-col gap-4">
                            {servicesLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={link.path}
                                        className="relative text-gray-300 hover:text-white text-sm md:text-base font-medium transition-colors duration-300 inline-block group pb-1 drop-shadow-sm"
                                    >
                                        {link.name}
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#18acfa] group-hover:w-full transition-all duration-300 ease-out shadow-[0_0_8px_#18acfa]"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm drop-shadow-md">Company</h4>
                        <ul className="flex flex-col gap-4">
                            {companyLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={link.path}
                                        className="relative text-gray-300 hover:text-white text-sm md:text-base font-medium transition-colors duration-300 inline-block group pb-1 drop-shadow-sm"
                                    >
                                        {link.name}
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#a6e71c] group-hover:w-full transition-all duration-300 ease-out shadow-[0_0_8px_#a6e71c]"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Global Hubs */}
                    <div className="lg:col-span-3 flex flex-col gap-8">
                        <h4 className="text-white font-bold mb-2 tracking-wide uppercase text-sm drop-shadow-md">Global Hubs</h4>

                        <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors duration-300">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-xl">🇦🇪</span>
                                <span className="text-base font-bold text-white group-hover:text-[#18acfa] transition-colors">Dubai HQ</span>
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed mb-2 font-medium">Burj Nahar Mall, Deira, UAE</p>
                            <a href="mailto:dubai@agilavetri.com" className="text-sm font-bold text-[#18acfa] hover:text-white transition-colors">dubai@agilavetri.com</a>
                        </div>

                        <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors duration-300">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-xl">🇮🇳</span>
                                <span className="text-base font-bold text-white group-hover:text-[#f77704] transition-colors">Bengaluru Hub</span>
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed mb-2 font-medium">Balaji Arcade, Koramangala, India</p>
                            <a href="mailto:india@agilavetri.com" className="text-sm font-bold text-[#f77704] hover:text-white transition-colors">india@agilavetri.com</a>
                        </div>
                    </div>

                </div>

                {/* --- Bottom Bar --- */}
                <div className="border-t border-white/10 pt-6 pb-2 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                    <p className="text-xs md:text-sm text-gray-400 font-bold text-center md:text-left tracking-wide">
                        © {currentYear} AGILAVETRI PRIMETECH PVT LTD.<br className="md:hidden" /> All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 md:gap-8 text-xs md:text-sm text-gray-400 font-bold tracking-wide">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>

            </div>

            {/* --- Massive Watermark Typography --- */}
            <div className="absolute bottom-[-15px] md:bottom-[-30px] lg:bottom-[-45px] left-0 w-full text-center overflow-hidden pointer-events-none select-none z-0">
                <h1 className="text-[16vw] xl:text-[14vw] font-black text-white/[0.03] leading-none whitespace-nowrap tracking-tighter">
                    AGILAVETRI
                </h1>
            </div>

            {/* --- Floating Scroll to Top Button --- */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0437cc] border border-white/20 flex items-center justify-center text-white shadow-[0_0_20px_rgba(4,55,204,0.4)] hover:bg-[#f77704] hover:shadow-[0_0_20px_rgba(247,119,4,0.5)] hover:-translate-y-1 transition-all duration-500 focus:outline-none transform-gpu ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
                aria-label="Scroll to top"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <line x1="12" y1="19" x2="12" y2="5" />
                    <polyline points="5 12 12 5 19 12" />
                </svg>
            </button>

        </footer>
    );
};

export default Footer;