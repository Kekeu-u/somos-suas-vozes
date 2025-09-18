import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const titleText = "Somos Suas Vozes";
    const subtitleText = "We are your voices";

    useEffect(() => {
        // A small timeout ensures the transition is applied after the initial render.
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);
    
    const baseTransition = "transition-opacity duration-1000 ease-out";
    const loadedState = "opacity-100";
    const initialState = "opacity-0";

    return (
        <section id="home" className="h-screen flex items-center justify-center relative text-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center kenburns-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574870111867-c85f5e451368?q=80&w=1920&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0" style={{backgroundImage: "radial-gradient(circle, rgba(7,9,13,0.3) 0%, rgba(7,9,13,0.9) 90%)"}}></div>
            <div className="relative z-10 p-6 max-w-4xl mx-auto">
                <h1 className={`${baseTransition} delay-200 ${isLoaded ? loadedState : initialState} text-4xl sm:text-6xl md:text-8xl font-bold font-serif leading-tight mb-4 drop-shadow-lg`}>
                    {titleText}
                </h1>
                <p className={`${baseTransition} delay-500 ${isLoaded ? loadedState : initialState} text-xl sm:text-3xl md:text-4xl font-light mb-2 font-serif italic text-brand-primary`}>
                    {subtitleText}
                </p>
                <p className={`${baseTransition} delay-700 ${isLoaded ? loadedState : initialState} text-lg sm:text-2xl md:text-3xl max-w-2xl mx-auto drop-shadow-md mb-8`}>
                    Um Projeto Musical em Defesa dos Animais
                </p>
            </div>
            <div className={`absolute bottom-10 left-0 right-0 flex justify-center animate-float ${baseTransition} delay-1000 ${isLoaded ? loadedState : initialState}`}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
        </section>
    );
};