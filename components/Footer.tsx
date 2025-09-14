import React from 'react';
import { IconPaw, IconInstagram, IconYouTube, IconTwitter } from './Icons';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-background py-12 border-t border-brand-secondary/20">
            <div className="container mx-auto px-6 text-center text-brand-text-secondary">
                <div className="flex justify-center items-center space-x-3 mb-4">
                     <IconPaw className="w-8 h-8 text-brand-text" />
                     <h3 className="text-3xl font-serif text-brand-text">Nós Somos Suas Vozes</h3>
                </div>
                <p className="text-2xl text-brand-text font-semibold">4 de outubro de 2025</p>
                <p className="text-xl mb-4">O dia em que a música brasileira deu voz aos animais.</p>
                
                <div className="flex justify-center space-x-4 my-8">
                    <a href="#" aria-label="Instagram" className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-surface text-brand-text-secondary hover:bg-brand-primary hover:text-brand-background transition-all duration-300 transform hover:scale-110 active:scale-90 hover:shadow-glow-primary">
                        <IconInstagram className="w-6 h-6" />
                    </a>
                    <a href="#" aria-label="YouTube" className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-surface text-brand-text-secondary hover:bg-brand-primary hover:text-brand-background transition-all duration-300 transform hover:scale-110 active:scale-90 hover:shadow-glow-primary">
                        <IconYouTube className="w-6 h-6" />
                    </a>
                    <a href="#" aria-label="Twitter" className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-surface text-brand-text-secondary hover:bg-brand-primary hover:text-brand-background transition-all duration-300 transform hover:scale-110 active:scale-90 hover:shadow-glow-primary">
                        <IconTwitter className="w-6 h-6" />
                    </a>
                </div>

                <p className="italic text-brand-text/90 text-xl">"Porque onde existe vida, existe amor."</p>
                <p className="mt-4 text-xl">Considerem este convite. Os animais precisam da nossa voz.</p>
                <div className="mt-8 text-lg">
                    <p>&copy; {new Date().getFullYear()} Nós Somos Suas Vozes. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};