import React, { useEffect, useState } from 'react';
import Buttons from '../../common/Buttons';

// Securely check environment variables, fallback to 5005
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || 'http://localhost:5005';

const locations = [
    {
        city: "Dubai Head Office",
        type: "Headquarters",
        flag: "🇦🇪",
        address: "Agilavetri information technology LLC, A5 Office, No 8 Xavier Business Center BN Complex M2 Floor, Al Muteena Street, Deira Dubai.",
        phone: "+971 56 142 4235",
        email: "dubai@agilavetri.com",
        borderColor: "border-[#0437cc]",
        iconColor: "text-[#0437cc]",
        bgAccent: "bg-[#0437cc]/10"
    },
    {
        city: "Bengaluru Hub",
        type: "Tech Hub",
        flag: "🇮🇳",
        address: "No: 472/7, Balaji Arcade, 1st floor, AVS Compound, 80 Feet Road, 4th Block, Koramanagala, Bengaluru, India.",
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
    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'General Digital Consulting',
        message: ''
    });

    // Validation & Loading States
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Status state for beautiful inline success/error messages
    const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({
        type: null,
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Handle Input Changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear input error as user types
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }

        // Clear global form status as user types
        if (formStatus.type) {
            setFormStatus({ type: null, message: '' });
        }
    };

    // Form Submission & API Call
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let newErrors = { name: '', email: '', message: '' };
        let isValid = true;

        // Name Validation
        if (!formData.name.trim()) {
            newErrors.name = 'Full Name is required.';
            isValid = false;
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email Address is required.';
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
            isValid = false;
        }

        // Message Validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required.';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            setIsSubmitting(true);
            setFormStatus({ type: null, message: '' }); // Reset status before submitting

            try {
                // Ensure no trailing slashes in API URL
                const baseUrl = API_BASE_URL.replace(/\/$/, '');
                const response = await fetch(`${baseUrl}/api/contact`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    setFormStatus({
                        type: 'success',
                        message: 'Thank you! Your inquiry has been sent successfully. Our team will contact you shortly.'
                    });
                    // Reset form after success
                    setFormData({ name: '', email: '', service: 'General Digital Consulting', message: '' });

                    // Auto-hide the success message after 7 seconds
                    setTimeout(() => {
                        setFormStatus({ type: null, message: '' });
                    }, 7000);

                } else {
                    setFormStatus({
                        type: 'error',
                        message: 'Failed to send message. Please try again later.'
                    });
                }
            } catch (error) {
                console.error("Submission Error:", error);
                setFormStatus({
                    type: 'error',
                    message: 'An error occurred. Please check your backend connection and try again.'
                });
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="w-full min-h-screen bg-white flex flex-col overflow-hidden">

            {/* --- Premium Dark Hero Section --- */}
            <section className="relative w-full bg-[#010a1f] pt-16 md:pt-20 lg:pt-24 pb-12 lg:pb-16 px-6 lg:px-8">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#0437cc] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.25] pointer-events-none transform-gpu"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#f77704] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.15] pointer-events-none transform-gpu"></div>

                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
                    <div className="mb-4 lg:mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#a6e71c] text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2 shadow-sm backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-[#a6e71c]"></span>
                        Get In Touch
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 lg:mb-6">
                        Let's Build the <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18acfa] via-[#a6e71c] to-[#18acfa] bg-[length:200%_auto] animate-[text-shine_5s_linear_infinite]">
                            Future Together.
                        </span>
                    </h1>
                    <p className="text-gray-400 text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Whether you are a startup, enterprise, or global brand, AGILAVETRI PRIMETECH is your trusted partner for technology, innovation, and digital growth.
                    </p>
                </div>

                <div className="absolute bottom-[-10px] md:bottom-[-20px] lg:bottom-[-40px] left-0 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
                    <h1 className="text-[18vw] font-black text-white/[0.02] leading-none whitespace-nowrap tracking-tighter">
                        AGILAVETRI
                    </h1>
                </div>
            </section>

            {/* --- Main Contact Area --- */}
            <section className="py-16 lg:py-24 px-6 lg:px-8 bg-white relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">

                    {/* --- Left Column: Locations & Support --- */}
                    <div className="w-full lg:w-5/12 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 lg:mb-8 tracking-tight">
                                Global Headquarters
                            </h3>

                            <div className="flex flex-col gap-5 lg:gap-6 mb-8">
                                {locations.map((loc, idx) => (
                                    <div key={idx} className={`relative bg-gray-50 rounded-[1.5rem] p-6 lg:p-8 border border-gray-100 border-l-4 ${loc.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 group`}>
                                        <div className="flex items-center gap-4 mb-4 lg:mb-5">
                                            <span className="text-3xl md:text-4xl drop-shadow-sm group-hover:scale-110 transition-transform duration-300">{loc.flag}</span>
                                            <div>
                                                <h4 className="text-lg md:text-xl font-bold text-gray-900 leading-tight mb-1">{loc.city}</h4>
                                                <span className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-widest">{loc.type}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3 lg:gap-4">
                                            <div className="flex items-start gap-3">
                                                <div className={`w-7 h-7 lg:w-8 lg:h-8 rounded-lg shrink-0 flex items-center justify-center ${loc.bgAccent} ${loc.iconColor}`}>
                                                    <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                </div>
                                                <p className="text-xs lg:text-sm text-gray-600 font-medium leading-relaxed pt-1">{loc.address}</p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className={`w-7 h-7 lg:w-8 lg:h-8 rounded-lg shrink-0 flex items-center justify-center ${loc.bgAccent} ${loc.iconColor}`}>
                                                    <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                                </div>
                                                <a href={`tel:${loc.phone}`} className="text-xs lg:text-sm font-bold text-gray-900 hover:text-[#0437cc] transition-colors">{loc.phone}</a>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className={`w-7 h-7 lg:w-8 lg:h-8 rounded-lg shrink-0 flex items-center justify-center ${loc.bgAccent} ${loc.iconColor}`}>
                                                    <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                                </div>
                                                <a href={`mailto:${loc.email}`} className="text-xs lg:text-sm font-bold text-gray-900 hover:text-[#0437cc] transition-colors break-all">{loc.email}</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 24/7 Tech Support Alert Box */}
                        <div className="bg-[#a6e71c]/10 border border-[#a6e71c]/30 rounded-2xl lg:rounded-3xl p-5 lg:p-6 flex items-center gap-4 mt-auto">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#a6e71c]/20 flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-[#48b608]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm lg:text-base font-bold text-gray-900">Direct Technical Support</h4>
                                <p className="text-[10px] lg:text-xs font-semibold text-[#48b608] uppercase tracking-wide mt-1">24/7 Monitoring & Rapid Response</p>
                            </div>
                        </div>
                    </div>

                    {/* --- Right Column: Premium Dark Contact Form --- */}
                    <div className="w-full lg:w-7/12 flex flex-col">
                        <div className="bg-[#010a1f] h-full rounded-[2rem] p-6 lg:p-10 shadow-[0_30px_80px_rgba(4,55,204,0.15)] border border-white/10 flex flex-col relative overflow-hidden">

                            {/* --- Custom CSS for Checkmark Animation --- */}
                            <style>
                                {`
                                    @keyframes checkmark-draw {
                                        0% { stroke-dashoffset: 50; opacity: 0; transform: scale(0.5); }
                                        100% { stroke-dashoffset: 0; opacity: 1; transform: scale(1); }
                                    }
                                    .animate-checkmark-draw {
                                        stroke-dasharray: 50;
                                        stroke-dashoffset: 50;
                                        animation: checkmark-draw 0.7s cubic-bezier(0.65, 0, 0.45, 1) forwards;
                                    }
                                `}
                            </style>

                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0437cc] rounded-full mix-blend-screen filter blur-[120px] opacity-40 pointer-events-none transform-gpu"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f77704] rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none transform-gpu"></div>

                            <div className="mb-6 lg:mb-8 relative z-10">
                                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">Send us a Message</h3>
                                <p className="text-gray-400 text-xs md:text-sm lg:text-base font-medium">
                                    Fill out the form below and our technical architects will get back to you within 24 hours.
                                </p>
                            </div>

                            <form className="flex flex-col flex-grow gap-5 relative z-10" onSubmit={handleSubmit}>

                                {/* --- INLINE SUCCESS / ERROR NOTIFICATION --- */}
                                {formStatus.type === 'error' && (
                                    <div className="p-4 rounded-xl border flex items-start gap-3 transition-all duration-300 bg-red-500/10 border-red-500/30 text-red-400 mb-2">
                                        <div className="shrink-0 mt-0.5">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                        <p className="text-sm font-medium leading-relaxed">{formStatus.message}</p>
                                    </div>
                                )}

                                {formStatus.type === 'success' && (
                                    <div className="p-5 md:p-6 rounded-2xl bg-[#a6e71c]/10 border border-[#a6e71c]/30 flex flex-col md:flex-row items-center md:items-start gap-5 transition-all duration-500 mb-2 shadow-[0_0_20px_rgba(166,231,28,0.1)]">
                                        <div className="w-14 h-14 rounded-full bg-[#a6e71c]/20 flex items-center justify-center shrink-0">
                                            <svg className="w-7 h-7 text-[#a6e71c] animate-checkmark-draw" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </div>
                                        <div className="text-center md:text-left pt-1">
                                            <h4 className="text-white font-extrabold text-lg md:text-xl mb-1">Inquiry Submitted!</h4>
                                            <p className="text-gray-300 font-medium text-sm leading-relaxed">{formStatus.message}</p>
                                        </div>
                                    </div>
                                )}

                                <div className="flex flex-col md:flex-row gap-5">
                                    <div className="w-full">
                                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="John Doe"
                                            className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} text-white placeholder-gray-600 text-sm rounded-xl px-4 py-3 lg:py-3.5 focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-red-500/30 focus:border-red-500' : 'focus:ring-[#a6e71c]/30 focus:border-[#a6e71c]'} transition-all duration-300`}
                                        />
                                        {errors.name && <p className="text-red-500 text-[10px] md:text-xs font-semibold mt-1.5 ml-1">{errors.name}</p>}
                                    </div>
                                    <div className="w-full">
                                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="john@company.com"
                                            className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} text-white placeholder-gray-600 text-sm rounded-xl px-4 py-3 lg:py-3.5 focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500/30 focus:border-red-500' : 'focus:ring-[#a6e71c]/30 focus:border-[#a6e71c]'} transition-all duration-300`}
                                        />
                                        {errors.email && <p className="text-red-500 text-[10px] md:text-xs font-semibold mt-1.5 ml-1">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="w-full relative">
                                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Service Interested In</label>
                                    <div className="relative">
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-xl px-4 py-3 lg:py-3.5 appearance-none focus:outline-none focus:ring-2 focus:ring-[#a6e71c]/30 focus:border-[#a6e71c] transition-all duration-300 cursor-pointer"
                                        >
                                            {serviceOptions.map((service, idx) => (
                                                <option key={idx} value={service} className="bg-[#010a1f] text-white">{service}</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full flex flex-col flex-grow">
                                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Message *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Tell us about your project requirements..."
                                        className={`w-full flex-grow bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} text-white placeholder-gray-600 text-sm rounded-xl px-4 py-3 lg:py-3.5 focus:outline-none focus:ring-2 ${errors.message ? 'focus:ring-red-500/30 focus:border-red-500' : 'focus:ring-[#a6e71c]/30 focus:border-[#a6e71c]'} transition-all duration-300 resize-none min-h-[100px] lg:min-h-[140px]`}
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-[10px] md:text-xs font-semibold mt-1.5 ml-1">{errors.message}</p>}
                                </div>

                                <div className={`mt-2 w-full flex justify-end shrink-0 ${isSubmitting ? 'pointer-events-none opacity-70' : ''}`} onClick={handleSubmit}>
                                    <div className="w-full md:w-auto cursor-pointer">
                                        <Buttons text={isSubmitting ? "Sending..." : "Submit Inquiry"} />
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