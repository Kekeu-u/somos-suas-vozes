import React, { useState, useEffect } from 'react';
import { AnimatedTypewriter } from './Animated';

export const Hero: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // A small timeout ensures the transition is applied after the initial render.
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);
    
    const baseTransition = "transition-opacity duration-1000 ease-out";
    const loadedState = "opacity-100";
    const initialState = "opacity-0";

    const mainTitleLines = [
        {
            text: "Somos Suas",
            className: "text-6xl sm:text-7xl md:text-8xl font-bold font-serif leading-tight drop-shadow-lg",
        },
        {
            text: "Vozes",
            className: "text-6xl sm:text-7xl md:text-8xl font-bold font-serif leading-tight mb-4 drop-shadow-lg",
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
            <div className={`absolute bottom-24 md:bottom-20 left-0 right-0 z-10 p-6 max-w-3xl mx-auto ${baseTransition} delay-1000 ${isLoaded ? loadedState : initialState}`}>
                <p className="text-lg sm:text-xl md:text-2xl drop-shadow-md text-balance">
                    Cada vida tem valor.
                    <br />
                    A forma como cuidamos pode variar, mas o respeito é universal.
                </p>
            </div>

            {/* Scroll Arrow */}
            <div className={`absolute bottom-10 left-0 right-0 flex justify-center animate-float ${baseTransition} delay-1200 ${isLoaded ? loadedState : initialState}`}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
        </section>
    );
};