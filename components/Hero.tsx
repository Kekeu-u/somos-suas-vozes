import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const subtitleText = "We are your voices";

    useEffect(() => {
        // Trigger animations after component mounts
        setIsLoaded(true);
    }, []);
    
    const baseTransition = "transition-all duration-700 ease-out-quint";
    const loadedState = "opacity-100 translate-y-0";
    const initialSate = "opacity-0 translate-y-6";

    return (
        <section id="home" className="h-screen flex items-center justify-center relative text-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center kenburns-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574870111867-c85f5e451368?q=80&w=1920&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0" style={{backgroundImage: "radial-gradient(circle, rgba(7,9,13,0.3) 0%, rgba(7,9,13,0.9) 90%)"}}></div>
            <div className="relative z-10 p-6 max-w-4xl mx-auto">
                <h1 className={`${baseTransition} ${isLoaded ? loadedState : initialSate} text-6xl md:text-8xl font-bold font-serif leading-tight mb-4 drop-shadow-lg`}>
                    Somos Suas Vozes
                </h1>
                <p className={`${baseTransition} delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'} text-3xl md:text-4xl font-light mb-2 font-serif italic text-brand-primary`}>
                    {isLoaded && subtitleText.split('').map((char, index) => (
                        <span
                            key={index}
                            className="animate-fade-in-up opacity-0"
                            style={{ 
                                animationDelay: `${200 + index * 50}ms`,
                                display: 'inline-block',
                                whiteSpace: char === ' ' ? 'pre' : 'normal',
                            }}
                        >
                            {char}
                        </span>
                    ))}
                </p>
                <p className={`${baseTransition} delay-300 ${isLoaded ? loadedState : initialSate} text-2xl md:text-3xl max-w-2xl mx-auto drop-shadow-md mb-8`}>
                    Um Projeto Musical em Defesa dos Animais
                </p>
            </div>
            <div className={`absolute bottom-10 left-0 right-0 flex justify-center animate-float ${baseTransition} delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
        </section>
    );
};