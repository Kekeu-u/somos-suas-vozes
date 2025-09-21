import React, { useState, useEffect } from 'react';
import { 
    IconPaw, 
    IconMusic, 
    IconHeart, 
    IconMegaphone, 
    IconFeather, 
    IconHome,
    IconGlobe,
    IconUser
} from './Icons';

const storylineItems = [
    { href: '#home', icon: IconHome },
    { href: '#musica', icon: IconMusic },
    { href: '#reflexao', icon: IconPaw },
    { href: '#a-historia-por-tras', icon: IconUser },
    { href: '#forca-da-musica', icon: IconGlobe },
    { href: '#o-convite', icon: IconMegaphone },
    { href: '#cronologia', icon: IconFeather },
];

export const StorylineIndicator: React.FC = () => {
    const [activeSection, setActiveSection] = useState('#home');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Make the indicator appear after scrolling past a certain point
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div 
            className={`hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 transition-all duration-700 ease-out-quint pointer-events-none ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            aria-hidden="true"
        >
            <div className="relative flex flex-col items-center justify-center space-y-6">
                {/* The connecting line */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-brand-primary/20 to-brand-secondary/20 rounded-full"></div>
                
                {storylineItems.map(item => {
                    const ItemIcon = item.icon;
                    const isActive = activeSection === item.href;
                    return (
                        <div key={item.href} className="relative z-10">
                            <ItemIcon 
                                className={`w-7 h-7 transition-all duration-500 ease-out-quint drop-shadow-lg ${
                                    isActive 
                                        ? 'text-brand-primary scale-125 opacity-100' 
                                        : 'text-brand-text-secondary/50 opacity-50 scale-100'
                                }`}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
