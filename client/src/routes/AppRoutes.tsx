import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../common/Loader';

import PrivacyPolicy from '../pages/legal/PrivacyPolicy';
import TermsOfService from '../pages/legal/TermsOfService';
import CookiePolicy from '../pages/legal/CookiePolicy';

import Index from '../pages/Index';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Careers from '../pages/Careers';

const AppRoutes: React.FC = () => {
    const location = useLocation();
    
    // State to control the loader visibility
    const [isHomeLoading, setIsHomeLoading] = useState(true);

    // Reset the loader state only when navigating directly to the Home page
    useEffect(() => {
        if (location.pathname === '/') {
            setIsHomeLoading(true);
        }
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-gray-50">
            
            {/* Conditionally render the Loader ONLY on the root "/" path */}
            {isHomeLoading && location.pathname === '/' && (
                <Loader onComplete={() => setIsHomeLoading(false)} />
            )}

            <Navbar />
            <main>
                <Routes>
                    {/* Website Pages */}
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/careers" element={<Careers />} />

                    {/* Legal Pages */}
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/cookie-policy" element={<CookiePolicy />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default AppRoutes;