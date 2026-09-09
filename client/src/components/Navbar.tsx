import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../common/Buttons';
import ServicePopUp from './services/ServicePopUp';

const navLinks = ['About', 'Services', 'Careers', 'Contact'];

// Enhanced service items with descriptions and features for the popup
const serviceItems = [
    { 
        name: 'Software & Application', 
        path: '/services/software-application',
        icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
        description: 'End-to-end custom software architecture and application development for enterprise scale. We engineer platforms that are robust, secure, and built for extreme high-availability.',
        features: ['Custom Enterprise Architecture', 'Cloud-Native App Development', 'Legacy System Modernization', 'API Integration & Microservices']
    },
    { 
        name: 'Blockchain & Web3', 
        path: '/services/blockchain-web3',
        icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
        description: 'Pioneering decentralized solutions. We develop secure smart contracts, private blockchain networks, and DeFi protocols designed to revolutionize trust and transparency in business.',
        features: ['Smart Contract Development', 'Decentralized Finance (DeFi)', 'Private Blockchain Networks', 'Web3 DApp Architecture']
    },
    { 
        name: 'FinTech & Trading', 
        path: '/services/fintech-trading',
        icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        description: 'Ultra-low latency trading platforms, algorithmic execution engines, and secure payment gateways compliant with strict global financial regulatory standards.',
        features: ['Algorithmic Trading Systems', 'Secure Payment Gateways', 'Digital Banking Solutions', 'Financial Data Analytics']
    },
    { 
        name: 'AI & Advanced Tech', 
        path: '/services/ai-advanced-tech',
        icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        description: 'Integrating predictive analytics, machine learning models, and generative AI into your existing workflows to automate complex decision-making and drive efficiency.',
        features: ['Predictive Analytics Models', 'Machine Learning Algorithms', 'Generative AI Integration', 'NLP & Computer Vision']
    },
    { 
        name: 'Immersive Tech', 
        path: '/services/immersive-tech',
        icon: 'M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5',
        description: 'Creating next-generation spatial computing experiences. We build AR, VR, and mixed-reality applications for enterprise training, virtual real estate, and immersive retail.',
        features: ['Virtual Reality (VR) Training', 'Augmented Reality (AR) Retail', 'Metaverse Ecosystems', 'Spatial Computing Apps']
    },
    { 
        name: 'Digital Growth', 
        path: '/services/digital-growth',
        icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
        description: 'Data-driven brand scaling. We execute high-ROI performance marketing, technical SEO, and conversion rate optimization campaigns to dominate global markets.',
        features: ['Performance Marketing Campaigns', 'Technical SEO Architecture', 'Conversion Rate Optimization', 'B2B Lead Generation']
    },
    { 
        name: 'Real Estate & Expo', 
        path: '/services/real-estate-expo',
        icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
        description: 'PropTech innovations and digital infrastructure for mega-events. We deliver smart building IoT integrations, property management systems, and virtual expo platforms.',
        features: ['Smart Building IoT Integration', 'Virtual Property Tours (3D)', 'Property Management Systems', 'Digital Expo Platforms']
    },
    { 
        name: 'Global Consulting', 
        path: '/services/global-consulting',
        icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        description: 'Strategic advisory for digital transformation. We help enterprises navigate complex technology shifts, optimize IT architectures, and implement agile scaling frameworks.',
        features: ['Digital Transformation Strategy', 'IT Infrastructure Audits', 'Agile Scaling Frameworks', 'Vendor Selection & Management']
    },
];

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    
    // State for the Service Popup
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<any>(null);

    const getPath = (name: string) => `/${name.toLowerCase().replace(/\s+/g, '-')}`;

    const handleServiceClick = (e: React.MouseEvent, service: any) => {
        e.preventDefault(); // Prevent standard routing
        setSelectedService(service);
        setIsPopUpOpen(true);
        setIsMobileMenuOpen(false); // Close mobile menu if open
    };

    return (
        <div className="w-full sticky top-0 z-50 px-4 md:px-8 lg:px-12">
            <nav className={`max-w-[1400px] mx-auto bg-white shadow-sm transition-all duration-300 ${isMobileMenuOpen ? 'rounded-b-2xl' : 'rounded-b-[32px]'}`}>
                <div className="px-6 lg:px-10">
                    <div className="flex justify-between items-center h-20">

                        {/* Logo Section */}
                        <div className="flex-shrink-0 flex items-center cursor-pointer">
                            <Link to="/" className="flex items-center gap-3">
                                <img src="/logo.jpg" alt="Brand Logo" className="h-10 md:h-12 w-auto object-contain" />
                                <div className="flex flex-col justify-center mt-1">
                                    <span className="text-sm md:text-base font-extrabold text-[#0437cc] leading-none mb-1 tracking-tight">
                                        AGILAVETRI PRIMETECH
                                    </span>
                                    <span className="text-[10px] md:text-xs font-medium text-gray-500 leading-none tracking-widest">
                                        Dubai • Bengaluru
                                    </span>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 text-[15px] font-medium text-gray-800">
                            {navLinks.map((link) =>
                                link === 'Services' ? (
                                    <div key={link} className="relative group cursor-pointer flex items-center h-20">
                                        <span className="group-hover:text-[#0437cc] transition-colors flex items-center font-medium">
                                            Services
                                            <svg className="w-4 h-4 ml-1 text-gray-500 group-hover:text-[#0437cc] transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>

                                        {/* CREATIVE MEGA MENU */}
                                        <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[850px] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.12)] rounded-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 overflow-hidden z-50 flex">
                                            {/* Left Panel */}
                                            <div className="w-1/3 bg-[#010a1f] p-8 flex flex-col justify-between relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0437cc] rounded-full mix-blend-screen filter blur-[50px] opacity-40"></div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                                                        Build for the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0437cc] to-[#18acfa]">Future.</span>
                                                    </h3>
                                                    <p className="text-sm text-gray-400 leading-relaxed">
                                                        Click on any service to discover how we engineer solutions to scale your business globally.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Right Grid Panel */}
                                            <div className="w-2/3 p-6 bg-white grid grid-cols-2 gap-2 relative">
                                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0437cc] to-[#f77704]"></div>
                                                {serviceItems.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href="#"
                                                        onClick={(e) => handleServiceClick(e, item)}
                                                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover:shadow-sm border border-transparent hover:border-gray-100 transition-all duration-300 group/item cursor-pointer"
                                                    >
                                                        <div className="w-10 h-10 rounded-lg bg-[#0437cc]/5 flex items-center justify-center text-[#0437cc] group-hover/item:bg-[#0437cc] group-hover/item:text-white transition-colors shrink-0">
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                                            </svg>
                                                        </div>
                                                        <div className="flex flex-col justify-center h-10">
                                                            <span className="text-sm font-bold text-gray-900 group-hover/item:text-[#0437cc] transition-colors">
                                                                {item.name}
                                                            </span>
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link key={link} to={getPath(link)} className="hover:text-[#0437cc] transition-colors whitespace-nowrap h-20 flex items-center">
                                        {link}
                                    </Link>
                                )
                            )}
                        </div>

                        {/* Desktop Animated CTA Button -> Redirects to Contact */}
                        <div className="hidden lg:flex items-center mr-4">
                            <Link to="/contact">
                                <Buttons text="Get Started" />
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(!isMobileMenuOpen);
                                    if (isMobileMenuOpen) setIsMobileServicesOpen(false);
                                }}
                                className="text-gray-600 hover:text-[#0437cc] focus:outline-none p-2"
                            >
                                {isMobileMenuOpen ? (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                ) : (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                                )}
                            </button>
                        </div>

                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden px-6 pb-6 pt-2 border-t border-gray-100 rounded-b-2xl bg-white shadow-xl absolute w-full left-0 top-[100%]">
                        <div className="flex flex-col space-y-4 text-[15px] font-medium text-gray-800">
                            {navLinks.map((link) =>
                                link === 'Services' ? (
                                    <div key={link} className="flex flex-col border-b border-gray-50 pb-2">
                                        <button
                                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                            className="flex items-center justify-between hover:text-[#0437cc] transition-colors w-full text-left py-2 font-bold"
                                        >
                                            <span>{link}</span>
                                            <svg className={`w-5 h-5 text-[#0437cc] transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </button>
                                        <div className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${isMobileServicesOpen ? 'max-h-[500px] opacity-100 mt-2 mb-2' : 'max-h-0 opacity-0'}`}>
                                            {serviceItems.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href="#"
                                                    onClick={(e) => handleServiceClick(e, item)}
                                                    className="pl-4 py-2.5 text-sm font-semibold text-gray-600 hover:text-[#0437cc] hover:bg-gray-50 rounded-lg flex items-center gap-3 transition-colors"
                                                >
                                                    <div className="w-6 h-6 rounded-md bg-[#0437cc]/10 flex items-center justify-center text-[#0437cc]">
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={item.icon} /></svg>
                                                    </div>
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link key={link} to={getPath(link)} className="hover:text-[#0437cc] transition-colors block py-2 font-bold border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>
                                        {link}
                                    </Link>
                                )
                            )}

                            {/* Mobile Animated CTA Button -> Redirects to Contact */}
                            <div className="flex justify-center mt-6 pt-2">
                                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Buttons text="Get Started" />
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Mount the Reusable Service Popup */}
            <ServicePopUp 
                isOpen={isPopUpOpen} 
                onClose={() => setIsPopUpOpen(false)} 
                service={selectedService} 
            />
        </div>
    );
};

export default Navbar;