
import React from 'react';

interface SectionProps {
    id: string;
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    bgImageUrl?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, icon, children, bgImageUrl }) => {
    return (
        <section id={id} className="relative py-20 md:py-24 overflow-hidden">
             {bgImageUrl && (
                <>
                    <div 
                        className="absolute inset-0 bg-cover bg-center bg-fixed z-0" 
                        style={{ backgroundImage: `url(${bgImageUrl})` }}
                        aria-hidden="true"
                    ></div>
                    <div 
                        className="absolute inset-0 bg-gradient-to-t from-brand-background via-brand-background/80 to-brand-background/70 z-0" 
                        aria-hidden="true"
                    ></div>
                </>
            )}
            <div className="relative z-10 container mx-auto px-6">
                <div className="text-center mb-16">
                    {icon && <div className="flex justify-center mb-4">{icon}</div>}
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-serif text-brand-text drop-shadow-md">{title}</h2>
                    <div className="w-20 h-1.5 bg-brand-primary mx-auto mt-6 rounded-full"></div>
                </div>
                <div>{children}</div>
            </div>
        </section>
    );
};