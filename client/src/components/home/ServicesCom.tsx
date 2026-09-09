import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Buttons from '../../common/Buttons';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
    { subtitle: "Core Development", title: "Software & Application", desc: "Custom, secure, and resilient web and mobile software tailored for high performance and global scalability.", features: ["Custom Website Development", "Enterprise Web Applications", "Mobile Apps (iOS/Android)", "E-Commerce Platforms", "MLM Software"], cta: "Request Software & App" },
    { subtitle: "Web3 & Crypto", title: "Blockchain & Web3", desc: "Decentralized platforms, smart contract auditing, custom token development, and white-label crypto exchanges.", features: ["Private & Public Chains", "Smart Contract Development", "Crypto Tokens", "White-label Exchanges", "CEX Development"], cta: "Request Blockchain & Web3" },
    { subtitle: "Financial Systems", title: "FinTech & Trading", desc: "Next-gen broker management tools, MetaTrader integrations, payment gateways, and neo-banking backbones.", features: ["Forex Broker Software", "MT4 & MT5 Solutions", "Payment Gateways", "UPI Setup", "Neo-Bank Solutions"], cta: "Request FinTech & Trading" },
    { subtitle: "Machine Intelligence", title: "AI & Advanced Tech", desc: "Predictive analytics engines, automated data workflows, intelligent assistants, and domain-trained ML algorithms.", features: ["AI & Machine Learning", "Data Automation", "Custom AI Apps", "Predictive Analytics"], cta: "Request AI Solutions" },
    { subtitle: "AR / VR & Metaverse", title: "Immersive Tech", desc: "Virtual reality, augmented reality, spatial metaverse environments, and interactive 3D virtual expos.", features: ["VR/AR Development", "Metaverse Experiences", "Virtual Expo Platforms", "3D Environments"], cta: "Request Immersive Tech" },
    { subtitle: "Performance Marketing", title: "Digital Growth", desc: "Performance marketing, social media strategies, motion design, and high-impact digital brand positioning.", features: ["SEO & Performance", "Social Media Management", "Video & Motion Graphics", "Brand Promotion"], cta: "Request Digital Growth" },
    { subtitle: "Property & Expos", title: "Real Estate & Expo", desc: "Digitized property showcases, lead conversion engines, architectural 3D walk-throughs, and event solutions.", features: ["Digital Promotions", "Property Branding", "Lead Systems", "Expo Solutions"], cta: "Request Real Estate & Expo" },
    { subtitle: "Strategic Advisory", title: "Global Consulting", desc: "Offshore-onsite architecture, GCC market penetration strategies, enterprise scaling, and tech stack auditing.", features: ["India & GCC Market Strategy", "Offshore Delivery", "Scale Consulting", "Tech Architecture"], cta: "Request Global Consulting" }
];

const ServicesCom: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const track = trackRef.current;
            if (!track) return;

            // Header Entrance Animation
            if (headerRef.current) {
                gsap.fromTo(headerRef.current.children,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
                );
            }

            // High-Performance Horizontal Scroll
            let mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 80);

                // Horizontal Scroll
                gsap.to(track, {
                    x: () => getScrollAmount(),
                    ease: "none",
                    force3D: true,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: () => `+=${Math.abs(getScrollAmount())}`,
                        pin: true,
                        scrub: 0.5,
                        invalidateOnRefresh: true,
                    }
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        // z-10 ensures this section stays behind Presence.tsx during the parallax transition
        // Added id="services" for smooth scrolling anchor target
        <section id="services" ref={sectionRef} className="w-full bg-gray-50 text-gray-900 py-12 lg:py-20 relative overflow-hidden flex flex-col justify-center min-h-screen z-10">

            {/* Zero-Lag Radial Gradient Backgrounds */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#f77704]/5 to-transparent transform-gpu"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0437cc]/5 to-transparent transform-gpu"></div>
            </div>

            <div ref={headerRef} className="text-center max-w-5xl mx-auto mb-6 px-6 relative z-10 w-full shrink-0">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4 text-gray-900">
                    Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0437cc] to-[#18acfa]">Services</span>
                </h2>
                <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed text-gray-600 max-w-4xl mx-auto">
                    We offer end-to-end technology solutions across emerging and established industries, ensuring your business stays ahead in a digital world.
                </p>
            </div>

            <div className="relative z-10 w-full overflow-x-auto lg:overflow-hidden snap-x snap-mandatory lg:snap-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pl-6 md:pl-12 lg:pl-16">
                <div
                    ref={trackRef}
                    className="flex gap-4 lg:gap-8 w-max pb-8 lg:pb-12 pr-6 pt-4 will-change-transform transform-gpu"
                >
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="snap-center lg:snap-align-none group flex flex-col w-[85vw] sm:w-[360px] lg:w-[400px] bg-white border border-gray-100 rounded-3xl p-6 lg:p-8 shadow-xl transition-transform duration-300 hover:-translate-y-2 flex-shrink-0 h-auto transform-gpu [backface-visibility:hidden]"
                        >
                            <div className="mb-4 lg:mb-6 shrink-0">
                                <span className="text-[#f77704] text-[10px] lg:text-xs font-black tracking-widest uppercase mb-2 lg:mb-3 block">
                                    {service.subtitle}
                                </span>
                                <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900 group-hover:text-[#0437cc] transition-colors duration-300">
                                    {service.title}
                                </h3>
                            </div>

                            <p className="text-gray-500 text-sm lg:text-base leading-relaxed mb-6 lg:mb-8 min-h-[60px] lg:min-h-[80px] shrink-0">
                                {service.desc}
                            </p>

                            <ul className="flex flex-col gap-2.5 lg:gap-4 mb-6 lg:mb-10 flex-grow">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#a6e71c] shrink-0 mt-0.5 lg:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-xs lg:text-sm font-semibold text-gray-700 leading-tight">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto pt-5 lg:pt-6 border-t border-gray-100 flex justify-start shrink-0">
                                <div className="w-full outline-none">
                                    {/* Link added here to redirect smoothly to Contact page */}
                                    <Link to="/contact" className="block w-full outline-none">
                                        <Buttons text={service.cta} className="w-full" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Spacer to allow the final card to scroll fully into view on 1080p screens */}
                    <div className="hidden lg:block w-24 xl:w-32 flex-shrink-0"></div>
                </div>
            </div>
        </section>
    );
};

export default ServicesCom;