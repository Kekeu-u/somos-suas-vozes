
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Timeline } from './components/Timeline';
import { Footer } from './components/Footer';
import { Animated, Counter } from './components/Animated';
import { content } from './constants';
import { StorylineIndicator } from './components/StorylineIndicator';
import { 
    IconPaw, IconMusic, IconUsers, IconHeart, IconMegaphone, IconFeather, 
    IconShield, IconGlobe, IconGift, IconEye, IconTrendingUp, 
    IconShieldCheck, IconCheckCircle, IconQuoteOpen, IconQuoteClose
} from './components/Icons';

const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    IconPaw,
    IconMusic,
    IconUsers,
    IconHeart,
    IconMegaphone,
    IconFeather,
    IconShield,
    IconGlobe,
    IconGift,
    IconEye,
    IconTrendingUp,
    IconShieldCheck,
    IconCheckCircle
};

const App: React.FC = () => {
    return (
        <div className="bg-brand-background overflow-hidden">
            <Header />
            <StorylineIndicator />
            <main>
                <Hero />

                <Section 
                    id="musica" 
                    title="Ouça o Chamado" 
                    icon={<IconMusic className="w-10 h-10 text-brand-primary" />}
                >
                    <Animated>
                        <p className="text-2xl leading-relaxed mb-12 text-center max-w-6xl mx-auto">
                            Esta é a essência sonora do nosso movimento. Uma guia musical que representa a alma do projeto. Dê o play e sinta a força da nossa mensagem.
                        </p>
                    </Animated>
                    <Animated delay={200}>
                         <div className="max-w-4xl mx-auto bg-brand-surface/80 p-4 rounded-xl border border-brand-secondary/20 shadow-lg backdrop-blur-lg transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2 transform hover:border-brand-primary/50">
                            <iframe 
                                width="100%" 
                                height="166" 
                                scrolling="no" 
                                frameBorder="no" 
                                allow="autoplay" 
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2170987776%3Fsecret_token%3Ds-r9ZYzXCIu78&color=%23858856&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                            </iframe>
                            <div style={{fontSize: '10px', color: '#cccccc', lineHeight: 'normal', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}>
                                <a href="https://soundcloud.com/somos-suas-vozes" title="Somos suas vozes" target="_blank" rel="noopener noreferrer" style={{color: '#cccccc', textDecoration: 'none'}}>Somos suas vozes</a> · <a href="https://soundcloud.com/somos-suas-vozes/somos-suas-vozes-guia-v7/s-r9ZYzXCIu78" title="Somos suas vozes-Guia-V7" target="_blank" rel="noopener noreferrer" style={{color: '#cccccc', textDecoration: 'none'}}>Somos suas vozes-Guia-V7</a>
                            </div>
                        </div>
                    </Animated>
                </Section>
                
                {/* PARTE 1: A Realidade Urgente */}
                <Section 
                    id="reflexao" 
                    title={content.slide1.title} 
                    icon={<IconPaw className="w-10 h-10 text-brand-primary" />}
                    bgImageUrl="https://images.unsplash.com/photo-1583511655826-0ab469152a48?q=80&w=1920&auto=format&fit=crop"
                >
                    <Animated>
                        <p className="text-2xl leading-relaxed mb-12 text-center max-w-6xl mx-auto">{content.slide1.paragraph1}</p>
                    </Animated>
                    <Animated delay={200}>
                        <div className="text-center mb-12">
                             <h3 className="text-4xl font-semibold font-serif text-brand-text mb-8">{content.slide1.subheading}</h3>
                             <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                                {content.slide1.stats.map((stat, index) => {
                                    const StatIcon = iconMap[stat.icon];
                                    const valueMatch = stat.value.match(/(\d+)\s*(.*)/);
                                    const endValue = valueMatch ? parseInt(valueMatch[1], 10) : 0;
                                    const suffix = valueMatch && valueMatch[2] ? ` ${valueMatch[2]}` : '';
                                    return (
                                        <Animated key={index} delay={index * 150}>
                                             <div className="bg-brand-surface/80 backdrop-blur-lg border border-brand-secondary/20 p-8 rounded-xl shadow-lg text-center h-full transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2 transform hover:border-brand-primary/50">
                                                <StatIcon className="w-12 h-12 mx-auto text-brand-primary mb-4" />
                                                <Counter end={endValue} suffix={suffix} />
                                                <p className="text-xl text-brand-text-secondary mt-2">{stat.description}</p>
                                            </div>
                                        </Animated>
                                    );
                                })}
                             </div>
                        </div>
                    </Animated>
                    <Animated delay={500}>
                        <p className="italic text-brand-primary text-center text-3xl font-serif">{content.slide1.conclusion}</p>
                    </Animated>
                </Section>
                
                {/* PARTE 2: O Chamado à Ação */}
                <Section id="convite" title={content.slide14.title} icon={<IconMegaphone className="w-10 h-10 text-brand-primary" />}>
                    <Animated>
                        <p className="text-2xl leading-relaxed mb-6 text-center max-w-6xl mx-auto">{content.slide14.paragraph1}</p>
                    </Animated>
                    <div className="mt-10 max-w-4xl mx-auto">
                        <Animated delay={200}>
                            <div className="bg-brand-surface border border-brand-secondary/20 p-8 rounded-xl transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-1 transform hover:border-brand-primary/50">
                                <h3 className="text-3xl font-semibold font-serif text-brand-text mb-6 text-center">{content.slide14.expectTitle}</h3>
                                <ul className="space-y-6">
                                    {content.slide14.expectation.map((item, i) => {
                                        const ExpectIcon = iconMap[item.icon];
                                        return (
                                            <li key={i} className="flex items-start text-xl">
                                                <ExpectIcon className="w-8 h-8 text-brand-secondary mr-4 mt-1 flex-shrink-0" />
                                                <span>{item.text}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </Animated>
                    </div>
                </Section>
                 <Section id="o-convite" title={content.slide15.title} icon={<IconFeather className="w-10 h-10 text-brand-primary" />}>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {content.slide15.cards.map((card, index) => {
                            const CardIcon = iconMap[card.icon];
                            return (
                                <Animated key={index} delay={index * 150}>
                                    <div className="bg-brand-surface/80 backdrop-blur-lg border border-brand-secondary/20 p-8 rounded-xl shadow-lg h-full transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2 transform hover:border-brand-primary/50 flex flex-col items-center text-center">
                                        <CardIcon className="w-12 h-12 text-brand-primary mb-6" />
                                        <p className="text-2xl leading-relaxed text-brand-text/90">
                                            {card.text}
                                        </p>
                                    </div>
                                </Animated>
                            );
                        })}
                    </div>
                </Section>

                {/* PARTE 3: A Nossa Estratégia */}
                <Section 
                    id="forca-da-musica" 
                    title={content.slide2.title} 
                    icon={<IconGlobe className="w-10 h-10 text-brand-primary" />}
                    bgImageUrl="https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1920&auto=format&fit=crop"
                >
                     <Animated>
                        <p className="text-2xl leading-relaxed mb-10 text-center max-w-6xl mx-auto">{content.slide2.paragraph1}</p>
                     </Animated>
                     <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {content.slide2.examples.map((ex, index) => {
                            const ExampleIcon = iconMap[ex.icon];
                            return (
                                <Animated key={index} delay={index * 150}>
                                    <div className="bg-brand-surface/80 backdrop-blur-lg border border-brand-secondary/20 p-6 rounded-xl text-center h-full transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2 transform hover:border-brand-primary/50">
                                        <ExampleIcon className="w-10 h-10 mx-auto text-brand-primary mb-4"/>
                                        <h4 className="font-bold text-brand-text text-2xl mb-1">{ex.title}</h4>
                                        <p className="text-xl text-brand-text-secondary">{ex.description}</p>
                                    </div>
                                </Animated>
                            )
                        })}
                     </div>
                     <Animated delay={500}>
                        <p className="mt-10 text-center italic text-2xl font-serif max-w-6xl mx-auto">{content.slide2.conclusion}</p>
                     </Animated>
                </Section>

                <Section id="modelo" title={content.slide6.title} icon={<IconUsers className="w-10 h-10 text-brand-primary" />}>
                    <Animated>
                        <p className="text-2xl leading-relaxed mb-8 text-center max-w-6xl mx-auto">{content.slide6.paragraph1}</p>
                    </Animated>
                    <Animated delay={200}>
                        <div className="bg-brand-surface border border-brand-secondary/20 p-8 rounded-xl shadow-lg transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-1 transform hover:border-brand-primary/50 max-w-6xl mx-auto">
                            <h3 className="text-3xl font-semibold font-serif text-brand-text mb-6 text-center">{content.slide6.subheading}</h3>
                             <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mt-6">
                                {content.slide6.points.map((point, i) => {
                                     const PointIcon = iconMap[point.icon];
                                    return (
                                        <Animated key={i} delay={i * 100}>
                                            <div className="flex items-start space-x-4 p-4">
                                                <PointIcon className="w-8 h-8 text-brand-secondary mt-1 flex-shrink-0" />
                                                <p className="text-xl">{point.text}</p>
                                            </div>
                                        </Animated>
                                    )
                                })}
                            </div>
                        </div>
                    </Animated>
                    <Animated delay={500}>
                        <p className="italic text-brand-text/90 font-semibold text-2xl mt-8 text-center max-w-6xl mx-auto">{content.slide6.conclusion}</p>
                    </Animated>
                </Section>

                <Section 
                    id="inspiracao" 
                    title={content.slide5.title} 
                    icon={<IconHeart className="w-10 h-10 text-brand-primary" />}
                    bgImageUrl="https://images.unsplash.com/photo-1597561542938-1e47b3113523?q=80&w=1920&auto=format&fit=crop"
                >
                    <Animated>
                        <p className="text-2xl leading-relaxed mb-8 text-center max-w-6xl mx-auto">{content.slide5.paragraph1}</p>
                    </Animated>
                    <Animated delay={200}>
                        <div className="bg-brand-surface/80 backdrop-blur-lg border border-brand-secondary/20 p-8 rounded-xl shadow-lg transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-1 transform hover:border-brand-primary/50 max-w-6xl mx-auto">
                            <h3 className="text-3xl font-semibold font-serif text-brand-text mb-6 text-center">{content.slide5.subheading}</h3>
                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mt-6">
                                {content.slide5.motivationPoints.map((point, i) => {
                                    const PointIcon = iconMap[point.icon];
                                    return (
                                        <Animated key={i} delay={i * 100}>
                                            <div className="flex items-start space-x-4 p-4">
                                                <PointIcon className="w-8 h-8 text-brand-secondary mt-1 flex-shrink-0" />
                                                <p className="text-xl">{point.text}</p>
                                            </div>
                                        </Animated>
                                    )
                                })}
                            </div>
                        </div>
                    </Animated>
                    <Animated delay={500}>
                        <p className="italic text-brand-text/90 font-semibold text-2xl mt-8 text-center max-w-6xl mx-auto">{content.slide5.conclusion}</p>
                    </Animated>
                </Section>
                
                <Timeline />
            </main>
            <Footer />
        </div>
    );
};

export default App;