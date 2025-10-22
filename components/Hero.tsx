import React, { useState, useEffect } from 'react';
import { AnimatedTypewriter } from './Animated';

export const Hero: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Delay the animation to start after the typewriter effect has had time to complete
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1000); 
        return () => clearTimeout(timer);
    }, []);
    
    const mainTitleLines = [
       {
        // Título principal - primeira linha
        text: "Somos suas",
        className: "text-5xl sm:text-7xl md:text-8xl font-bold font-serif leading-tight drop-shadow-lg",
    },
    {
            // Título principal - segunda linha
        text: "Vozes",
        className: "text-5xl sm:text-7xl md:text-8xl font-bold font-serif leading-tight mb-4 drop-shadow-lg",
    },
    {
            text: "We are your voices",
            className: "text-xl sm:text-3xl md:text-4xl font-light mb-8 font-serif italic text-brand-primary",
        },
    ];

    return (
        <section id="home" className="h-screen flex items-center justify-center relative text-center text-white overflow-hidden">
            {/* Backgrounds */}
            <div className="absolute inset-0 bg-cover bg-center kenburns-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574870111867-c85f5e451368?q=80&w=1920&auto-format&fit=crop')" }}></div>
            <div className="absolute inset-0" style={{backgroundImage: "radial-gradient(circle, rgba(7,9,13,0.3) 0%, rgba(7,9,13,0.9) 90%)"}}></div>
            
            {/* Main Title Content */}
            <div className="relative z-10 p-6 max-w-4xl mx-auto">
                <AnimatedTypewriter
                    lines={mainTitleLines}
                    staggerMs={40}
                />
            </div>

            {/* Tagline - Positioned absolutely near the bottom */}
            <div
                className={`absolute bottom-24 md:bottom-20 left-0 right-0 z-10 p-6 max-w-3xl mx-auto transition-all duration-700 ease-out-quint ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
                <p className="text-lg sm:text-xl md:text-2xl drop-shadow-md text-balance">
                    Uma homenagem histórica realizada em 29 de setembro de 2024.
                    <br />
                    Onde existe vida, existe amor.
                </p>
            </div>

            {/* Scroll Arrow */}
            <div
                className={`absolute bottom-10 left-0 right-0 flex justify-center animate-float transition-opacity duration-700 ease-out-quint ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: '200ms' }}
            >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
        </section>
    );
};