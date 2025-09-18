import React from 'react';
import { IconPaw } from './Icons';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-background py-12 border-t border-brand-secondary/20">
            <div className="container mx-auto px-6 text-center text-brand-text-secondary pb-24">
                <div className="flex justify-center items-center space-x-3 mb-4">
                     <IconPaw className="w-8 h-8 text-brand-text" />
                     <h3 className="text-xl md:text-2xl font-serif text-brand-text">Somos Suas Vozes</h3>
                </div>
                <div className="mt-8 text-base">
                    <p>&copy; {new Date().getFullYear()} Somos Suas Vozes. Todos os direitos reservados.</p>
                    <p className="mt-2">Idealizado por André Amorim</p>
                </div>
            </div>
        </footer>
    );
};