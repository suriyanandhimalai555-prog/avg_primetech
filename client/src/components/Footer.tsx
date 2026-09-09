import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServicePopUp from './services/ServicePopUp';

// Full service data array (Matching the Navbar popup data)
const serviceItems = [
    { 
        name: 'Software & Application', 
        icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
        description: 'End-to-end custom software architecture and application development for enterprise scale. We engineer platforms that are robust, secure, and built for extreme high-availability.',
        features: ['Custom Enterprise Architecture', 'Cloud-Native App Development', 'Legacy System Modernization', 'API Integration & Microservices']
    },
    { 
        name: 'Blockchain & Web3', 
        icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
        description: 'Pioneering decentralized solutions. We develop secure smart contracts, private blockchain networks, and DeFi protocols designed to revolutionize trust and transparency in business.',
        features: ['Smart Contract Development', 'Decentralized Finance (DeFi)', 'Private Blockchain Networks', 'Web3 DApp Architecture']
    },
    { 
        name: 'FinTech & Trading', 
        icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        description: 'Ultra-low latency trading platforms, algorithmic execution engines, and secure payment gateways compliant with strict global financial regulatory standards.',
        features: ['Algorithmic Trading Systems', 'Secure Payment Gateways', 'Digital Banking Solutions', 'Financial Data Analytics']
    },
    { 
        name: 'AI & Advanced Tech', 
        icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        description: 'Integrating predictive analytics, machine learning models, and generative AI into your existing workflows to automate complex decision-making and drive efficiency.',
        features: ['Predictive Analytics Models', 'Machine Learning Algorithms', 'Generative AI Integration', 'NLP & Computer Vision']
    },
    { 
        name: 'Immersive Tech', 
        icon: 'M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5',
        description: 'Creating next-generation spatial computing experiences. We build AR, VR, and mixed-reality applications for enterprise training, virtual real estate, and immersive retail.',
        features: ['Virtual Reality (VR) Training', 'Augmented Reality (AR) Retail', 'Metaverse Ecosystems', 'Spatial Computing Apps']
    },
    { 
        name: 'Digital Growth', 
        icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
        description: 'Data-driven brand scaling. We execute high-ROI performance marketing, technical SEO, and conversion rate optimization campaigns to dominate global markets.',
        features: ['Performance Marketing Campaigns', 'Technical SEO Architecture', 'Conversion Rate Optimization', 'B2B Lead Generation']
    }
];

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const [isVisible, setIsVisible] = useState(false);

    // States for the Service Popup
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<any>(null);

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

    // Handler to open the Service Popup
    const handleServiceClick = (e: React.MouseEvent, service: any) => {
        e.preventDefault();
        setSelectedService(service);
        setIsPopUpOpen(true);
    };

    const companyLinks = [
        { name: "About Us", path: "/about" },
        { name: "Careers", path: "/careers" },
        { name: "Contact Us", path: "/contact" }
    ];

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
            ),
            href: 'https://wa.me/971507078677'
        }
    ];

    return (
        // Adjusted top padding for 14-inch screens to save vertical space
        <footer className="w-full bg-[#010a1f] text-gray-300 relative overflow-hidden pt-16 lg:pt-24 pb-6 border-t border-white/5">

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

                {/* --- Zero-Lag CSS Radial Gradient Glows --- */}
                <div className="absolute top-[10%] left-[-5%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0437cc]/20 to-transparent pointer-events-none transform-gpu"></div>
                <div className="absolute bottom-[20%] right-[-5%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#f77704]/15 to-transparent pointer-events-none transform-gpu"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col">

                {/* --- Main Footer Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 lg:mb-20 flex-grow">

                    {/* Brand Column */}
                    <div className="lg:col-span-3 flex flex-col">
                        <Link to="/" className="flex items-center gap-3 mb-5 lg:mb-6">
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

                        <p className="text-gray-300 font-medium text-xs lg:text-sm leading-relaxed mb-6 lg:mb-8 max-w-sm drop-shadow-sm">
                            Empowering global enterprises with highly scalable software architecture, emerging web3 technologies, and strategic digital consulting.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 lg:gap-4">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#0437cc] hover:border-[#0437cc] hover:-translate-y-1 transition-all duration-300 shadow-xl transform-gpu"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Links (Triggers Popup) */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-5 lg:mb-6 tracking-wide uppercase text-xs lg:text-sm drop-shadow-md">Core Services</h4>
                        <ul className="flex flex-col gap-3 lg:gap-4">
                            {serviceItems.map((item, idx) => (
                                <li key={idx}>
                                    <a
                                        href="#"
                                        onClick={(e) => handleServiceClick(e, item)}
                                        className="relative text-gray-300 hover:text-white text-xs lg:text-sm font-medium transition-colors duration-300 inline-block group pb-1 drop-shadow-sm cursor-pointer"
                                    >
                                        {item.name}
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#18acfa] group-hover:w-full transition-all duration-300 ease-out shadow-[0_0_8px_#18acfa]"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-5 lg:mb-6 tracking-wide uppercase text-xs lg:text-sm drop-shadow-md">Company</h4>
                        <ul className="flex flex-col gap-3 lg:gap-4">
                            {companyLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={link.path}
                                        className="relative text-gray-300 hover:text-white text-xs lg:text-sm font-medium transition-colors duration-300 inline-block group pb-1 drop-shadow-sm"
                                    >
                                        {link.name}
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#a6e71c] group-hover:w-full transition-all duration-300 ease-out shadow-[0_0_8px_#a6e71c]"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Global Hubs */}
                    <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
                        <h4 className="text-white font-bold mb-1 lg:mb-2 tracking-wide uppercase text-xs lg:text-sm drop-shadow-md">Global Hubs</h4>

                        <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 lg:p-5 hover:bg-white/10 transition-colors duration-300">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-lg lg:text-xl">🇦🇪</span>
                                <span className="text-sm lg:text-base font-bold text-white group-hover:text-[#18acfa] transition-colors">Dubai HQ</span>
                            </div>
                            <p className="text-xs lg:text-sm text-gray-300 leading-relaxed mb-2 font-medium">Agilavetri information technology LLC, A5 Office, No 8 Xavier Business Center BN Complex M2 Floor, Al Muteena Street, Deira Dubai.</p>
                            <a href="mailto:dubai@agilavetri.com" className="text-xs lg:text-sm font-bold text-[#18acfa] hover:text-white transition-colors">dubai@agilavetri.com</a>
                        </div>

                        <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 lg:p-5 hover:bg-white/10 transition-colors duration-300">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-lg lg:text-xl">🇮🇳</span>
                                <span className="text-sm lg:text-base font-bold text-white group-hover:text-[#f77704] transition-colors">Bengaluru Hub</span>
                            </div>
                            <p className="text-xs lg:text-sm text-gray-300 leading-relaxed mb-2 font-medium">No: 472/7, Balaji Arcade, 1st floor, AVS Compound, 80 Feet Road, 4th Block, Koramanagala, Bengaluru, India.</p>
                            <a href="mailto:india@agilavetri.com" className="text-xs lg:text-sm font-bold text-[#f77704] hover:text-white transition-colors">india@agilavetri.com</a>
                        </div>
                    </div>

                </div>

                {/* --- Bottom Bar --- */}
                <div className="border-t border-white/10 pt-5 md:pt-6 pb-2 flex flex-col md:flex-row items-center justify-between gap-5 relative z-10">
                    <p className="text-[10px] md:text-xs text-gray-400 font-bold text-center md:text-left tracking-wide">
                        © {currentYear} AGILAVETRI PRIMETECH PVT LTD.<br className="md:hidden" /> All rights reserved.
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-[10px] md:text-xs text-gray-400 font-bold tracking-wide">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>

            </div>

            {/* --- Massive Watermark Typography --- */}
            <div className="absolute bottom-[-10px] md:bottom-[-20px] lg:bottom-[-30px] left-0 w-full text-center overflow-hidden pointer-events-none select-none z-0">
                <h1 className="text-[16vw] xl:text-[14vw] font-black text-white/[0.03] leading-none whitespace-nowrap tracking-tighter">
                    AGILAVETRI
                </h1>
            </div>

            {/* --- Floating Scroll to Top Button --- */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 z-[100] w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-[#0437cc] border border-white/20 flex items-center justify-center text-white shadow-[0_0_20px_rgba(4,55,204,0.4)] hover:bg-[#f77704] hover:shadow-[0_0_20px_rgba(247,119,4,0.5)] hover:-translate-y-1 transition-all duration-500 focus:outline-none transform-gpu ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
                aria-label="Scroll to top"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 lg:w-6 lg:h-6">
                    <line x1="12" y1="19" x2="12" y2="5" />
                    <polyline points="5 12 12 5 19 12" />
                </svg>
            </button>

            {/* --- Reusable Service Popup --- */}
            <ServicePopUp 
                isOpen={isPopUpOpen} 
                onClose={() => setIsPopUpOpen(false)} 
                service={selectedService} 
            />

        </footer>
    );
};

export default Footer;