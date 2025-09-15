import React from 'react';
import { IconPaw } from './Icons';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-background py-12 border-t border-brand-secondary/20">
            <div className="container mx-auto px-6 text-center text-brand-text-secondary">
                <div className="flex justify-center items-center space-x-3 mb-4">
                     <IconPaw className="w-8 h-8 text-brand-text" />
                     <h3 className="text-3xl font-serif text-brand-text">Somos Suas Vozes</h3>
                </div>
                <p className="text-2xl text-brand-text font-semibold">4 de outubro de 2025</p>
                <p className="text-xl mb-8">O dia em que a música brasileira deu voz aos animais.</p>
                
                <p className="italic text-brand-text/90 text-xl">"Porque onde existe vida, existe amor."</p>
                <p className="mt-4 text-xl">Considerem este convite. Os animais precisam da nossa voz.</p>
                <div className="mt-8 text-lg">
                    <p>&copy; {new Date().getFullYear()} Somos Suas Vozes. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};