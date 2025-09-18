import React from 'react';
import { IconPaw, IconFeather } from './Icons';
import { Animated } from './Animated';

const timelineEvents = [
    {
        year: '1925',
        title: 'Primeiro Dia Mundial dos Animais',
        description: 'Heinrich Zimmermann organiza o primeiro evento mundial pelos direitos dos animais em Berlim/Alemanha, reunindo mais de 5.000 pessoas.',
    },
    {
        year: '2025',
        title: 'Centenário e Futuro',
        description: 'Celebramos 100 anos de história e lançamos "Somos Suas Vozes" para honrar este legado e construir o futuro.',
    },
];

const TimelineItem: React.FC<{ year: string; title: string; description: string; isLast: boolean }> = ({ year, title, description, isLast }) => (
    <div className="flex items-start group">
        <div className="flex flex-col items-center mr-6">
            <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-brand-background font-bold flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow-primary">
                <IconPaw className="w-5 h-5"/>
            </div>
            {!isLast && <div className="w-px h-full bg-gradient-to-b from-brand-primary to-brand-secondary/50 my-2"></div>}
        </div>
        <div className="pb-16">
            <p className="text-lg md:text-xl font-bold text-brand-text mb-1 transition-colors duration-300 group-hover:text-brand-primary">{year}</p>
            <h4 className="text-xl md:text-2xl font-serif font-semibold text-brand-text mb-2 transition-colors duration-300 group-hover:text-brand-primary">{title}</h4>
            <p className="text-brand-text-secondary text-base md:text-lg leading-relaxed">{description}</p>
        </div>
    </div>
);

export const Timeline: React.FC = () => {
    return (
        <section id="cronologia" className="py-20 md:py-24 bg-brand-surface overflow-hidden">
            <div className="container mx-auto px-6">
                 <Animated>
                    <div className="text-center mb-16">
                        <div className="flex justify-center mb-4"><IconFeather className="w-10 h-10 text-brand-primary"/></div>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-serif text-brand-text">Um Século de Evolução</h2>
                        <p className="mt-2 text-base md:text-lg text-brand-text-secondary">Honrando a história, de 1925 a 2025</p>
                        <div className="w-20 h-1.5 bg-brand-primary mx-auto mt-6 rounded-full"></div>
                    </div>
                 </Animated>

                <div className="max-w-4xl mx-auto">
                    {timelineEvents.map((event, index) => (
                        <Animated key={index} delay={index * 200}>
                            <TimelineItem 
                                year={event.year} 
                                title={event.title} 
                                description={event.description} 
                                isLast={index === timelineEvents.length - 1}
                            />
                        </Animated>
                    ))}
                </div>
                 <Animated delay={timelineEvents.length * 200}>
                    <div className="mt-16 max-w-4xl mx-auto rounded-2xl p-0.5 bg-gradient-to-br from-brand-primary to-brand-secondary transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2 transform">
                        <div className="bg-brand-background rounded-[14px] p-10 text-center h-full w-full">
                            <h3 className="text-2xl md:text-3xl font-serif text-brand-text mb-2">Giovanni di Pietro di Bernardone</h3>
                            <p className="text-base md:text-lg text-brand-text-secondary mb-6 italic">(São Francisco de Assis – O Padroeiro)</p>
                            <p className="text-base md:text-lg leading-relaxed text-justify">A escolha de 4 de outubro conecta nosso projeto a uma tradição de proteção animal que se aproxima de um marco histórico. Em 4 de outubro de 2025, nos unimos para honrar a mensagem de São Francisco de Assis, "Todas as criaturas são nossos irmãos e irmãs", iniciando a jornada para a celebração de 800 anos de sua tradição em 2026.</p>
                        </div>
                    </div>
                 </Animated>
            </div>
        </section>
    );
};