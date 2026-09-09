import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ServiceData {
    name: string;
    icon: string;
    description: string;
    features: string[];
}

interface ServicePopUpProps {
    isOpen: boolean;
    onClose: () => void;
    service: ServiceData | null;
}

const ServicePopUp: React.FC<ServicePopUpProps> = ({ isOpen, onClose, service }) => {

    // Close on escape key press
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);

        // Prevent background scrolling when popup is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !service) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 sm:px-6">

            {/* Backdrop Blur Overlay */}
            <div
                className="absolute inset-0 bg-[#010a1f]/80 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            ></div>

            {/* Premium Modal Card */}
            <div className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.3)] overflow-hidden transform-gpu animate-[scale-in_0.3s_ease-out]">

                {/* Decorative Top Accent Glow */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0437cc] to-[#f77704]"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0437cc] rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.05] pointer-events-none"></div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-10 h-10 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors z-20"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div className="p-8 md:p-12 relative z-10 flex flex-col">

                    {/* Header */}
                    <div className="flex items-start gap-6 mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-[#0437cc]/10 flex items-center justify-center text-[#0437cc] shrink-0 border border-[#0437cc]/20 shadow-sm">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                            </svg>
                        </div>
                        <div className="pt-2">
                            <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight leading-tight mb-2">
                                {service.name}
                            </h3>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-100 rounded-md text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#f77704]"></span>
                                Enterprise Solution
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium mb-8">
                        {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-10">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Core Deliverables</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3">
                                    <div className="w-6 h-6 rounded-full bg-[#18acfa]/10 flex items-center justify-center text-[#18acfa] shrink-0">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-sm font-bold text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Area */}
                    <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-500 font-medium">Ready to scale your architecture?</p>
                        <Link
                            to="/contact"
                            onClick={onClose}
                            className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 hover:bg-[#0437cc] text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                            Request Consultation
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </div>

                </div>
            </div>

            {/* Animation Keyframes */}
            <style>
                {`
                    @keyframes scale-in {
                        0% { transform: scale(0.95); opacity: 0; }
                        100% { transform: scale(1); opacity: 1; }
                    }
                `}
            </style>
        </div>
    );
};

export default ServicePopUp;