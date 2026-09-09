import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface LoaderProps {
    onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // Lock page scrolling while the loader is active
        document.body.style.overflow = 'hidden';

        // Set the loader to display for 2.5 seconds to let the Lottie animation play
        const timer = setTimeout(() => {
            setIsFadingOut(true);

            // Wait an additional 500ms for the CSS fade-out transition to finish before unmounting
            setTimeout(() => {
                document.body.style.overflow = 'unset';
                onComplete();
            }, 500);
        }, 2500);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'unset';
        };
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#010a1f] transition-opacity duration-500 ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>

            {/* Subtle Premium Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#0437cc] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.2] pointer-events-none"></div>

            {/* Lottie Animation Container */}
            <div className="w-64 h-64 md:w-96 md:h-96 relative z-10">
                <DotLottieReact
                    src="/motion.lottie"
                    loop
                    autoplay
                />
            </div>

        </div>
    );
};

export default Loader;