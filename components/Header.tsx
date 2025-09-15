
import React, { useState, useEffect } from 'react';
import { 
    IconPaw, 
    IconMusic, 
    IconHeart, 
    IconMegaphone, 
    IconFeather, 
    IconWhatsApp,
    IconHome,
    IconGlobe
} from './Icons';

const navItems = [
    { href: '#home', label: 'Início', icon: IconHome },
    { href: '#reflexao', label: 'A Causa', icon: IconPaw },
    { href: '#musica', label: 'A Música', icon: IconMusic },
    { href: '#o-convite', label: 'Junte-se a Nós', icon: IconMegaphone },
    { href: '#inspiracao', label: 'Inspiração', icon: IconHeart },
    { href: '#forca-da-musica', label: 'Estratégia', icon: IconGlobe },
    { href: '#cronologia', label: 'História', icon: IconFeather },
    { href: '#contato', label: 'Contato', icon: IconWhatsApp },
];

export const Header: React.FC = () => {
    const [activeSection, setActiveSection] = useState('#home');
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.8) {
                setShowNav(true);
            } else {
                setShowNav(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on initial load

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { rootMargin: '-40% 0px -40% 0px', threshold: 0 } // Activates when a section is in the middle 20% of the screen
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
             targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out-quint ${showNav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
            <div className="flex items-center space-x-1 md:space-x-2 bg-brand-surface/50 backdrop-blur-2xl border border-brand-text/10 rounded-full p-1 md:p-2 shadow-2xl shadow-brand-background/50">
                {navItems.map(item => {
                    const NavIcon = item.icon;
                    const isActive = activeSection === item.href;
                    return (
                        <div key={item.href} className="relative group">
                             <a 
                                href={item.href} 
                                onClick={(e) => handleNavClick(e, item.href)}
                                className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full transition-all duration-400 transform focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary active:scale-90 ${
                                    isActive 
                                        ? 'bg-brand-primary text-brand-background shadow-glow-primary scale-110' 
                                        : 'text-brand-text/70 hover:bg-brand-surface hover:text-brand-primary hover:scale-110'
                                }`}
                                aria-label={item.label}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                <NavIcon className="w-6 h-6" />
                            </a>
                            <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-brand-background text-brand-text text-sm font-semibold rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out-quint whitespace-nowrap pointer-events-none">
                                {item.label}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-brand-background"></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </nav>
    );
};
