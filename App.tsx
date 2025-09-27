
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Timeline } from './components/Timeline';
import { Footer } from './components/Footer';
import { Animated, Counter, AnimatedTypewriter } from './components/Animated';
import { content } from './constants';
import { StorylineIndicator } from './components/StorylineIndicator';
import { 
    IconPaw, IconMusic, IconUsers, IconHeart, IconMegaphone, IconFeather, 
    IconShield, IconGlobe, IconGift, IconEye, IconTrendingUp, 
    IconShieldCheck, IconCheckCircle, IconQuoteOpen, IconQuoteClose,
    IconArrowUp,
    IconUser,
    IconDonationHand,
    IconPeace,
    IconChildren
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
    IconCheckCircle,
    IconUser,
    IconDonationHand,
    IconPeace,
    IconChildren,
};

const App: React.FC = () => {
    return (
        <div className="overflow-hidden">
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
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-16 text-center max-w-6xl mx-auto text-balance">
                            Esta é a essência sonora do nosso movimento. Uma guia musical que representa a alma do projeto. Dê o play e sinta a força da nossa mensagem.
                        </p>
                    </Animated>
                    <Animated delay={100}>
                         <div className="max-w-4xl mx-auto bg-brand-surface/80 p-4 rounded-xl border border-brand-secondary/20 shadow-lg backdrop-blur-lg transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2 transform hover:border-brand-primary/50">
                            <iframe 
                                title="Somos Suas Vozes - Música Guia"
                                width="100%" 
                                height="166" 
                                scrolling="no" 
                                frameBorder="no" 
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2170987776&color=%23858856&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                            </iframe>
                            <div style={{
                                fontSize: '10px', 
                                color: '#cccccc',
                                lineBreak: 'anywhere',
                                wordBreak: 'normal', 
                                overflow: 'hidden', 
                                whiteSpace: 'nowrap', 
                                textOverflow: 'ellipsis', 
                                fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', 
                                fontWeight: 100
                            }}>
                                <a href="https://soundcloud.com/somos-suas-vozes" title="Somos suas vozes" target="_blank" rel="noopener noreferrer" style={{color: '#cccccc', textDecoration: 'none'}}>Somos suas vozes</a> · <a href="https://soundcloud.com/somos-suas-vozes/somos-suas-vozes-guia-v7" title="Somos suas vozes-Guia-V7" target="_blank" rel="noopener noreferrer" style={{color: '#cccccc', textDecoration: 'none'}}>Somos suas vozes-Guia-V7</a>
                            </div>
                            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center text-center sm:space-x-3">
                                <IconArrowUp className="w-5 h-5 text-brand-primary flex-shrink-0 mb-2 sm:mb-0" />
                                <p className="text-brand-text-secondary text-base">Clique no player acima para ouvir. Pode ser necessário clicar em <strong className="text-brand-text">"Ouvir no navegador"</strong>.</p>
                            </div>
                        </div>
                    </Animated>
                    <div className="text-center max-w-4xl mx-auto mt-16">
                        <AnimatedTypewriter
                            lines={[
                                { text: "4 de outubro de 2025", className: "text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary font-serif mb-3" },
                                { text: "O dia em que a música brasileira deu voz aos animais.", className: "text-base sm:text-lg md:text-2xl text-brand-text mb-6" },
                                { text: 'Porque "onde existe vida, existe amor."', className: "italic text-brand-text-secondary text-base md:text-lg mb-6" },
                                { text: "Os animais precisam da nossa voz.", className: "text-base md:text-xl font-semibold" }
                            ]}
                            staggerMs={15}
                            animationMode="parallel"
                        />
                    </div>
                </Section>
                
                {/* PARTE 1: A REALIDADE URGENTE */}
                <Section 
                    id="reflexao" 
                    title={content.slide1.title} 
                    icon={<IconPaw className="w-10 h-10 text-brand-primary" />}
                    bgImageUrl="https://images.unsplash.com/photo-1583511655826-0ab469152a48?q=80&w=1920&auto=format&fit=crop"
                >
                    <Animated>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-12 text-center max-w-6xl mx-auto text-balance">{content.slide1.paragraph1}</p>
                    </Animated>
                    <Animated delay={200}>
                        <div className="text-center mb-12">
                             <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-serif text-brand-text mb-8">{content.slide1.subheading}</h3>
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
                                                <p className="text-base md:text-lg text-brand-text-secondary mt-2">{stat.description}</p>
                                            </div>
                                        </Animated>
                                    );
                                })}
                             </div>
                        </div>
                    </Animated>
                    <Animated delay={500}>
                        <p className="italic text-brand-primary text-center text-xl sm:text-2xl md:text-3xl font-serif">{content.slide1.conclusion}</p>
                    </Animated>
                </Section>

                {/* PARTE 2: A ORIGEM DA CAUSA */}
                <Section 
                    id="a-historia-por-tras" 
                    title={content.historia.title} 
                    icon={<IconUser className="w-10 h-10 text-brand-primary" />}
                    bgImageUrl={content.historia.bgImageUrl}
                >
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            <Animated delay={100}>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-brand-text text-center">{content.historia.andre.name}</h3>
                                <p className="text-base md:text-lg text-brand-text-secondary mb-8 text-center">{content.historia.andre.bio}</p>
                            </Animated>
                            {content.historia.story.map((p, i) => (
                                <Animated key={i} delay={200 + i * 100}>
                                    <p className="text-base md:text-xl leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: p }}></p>
                                </Animated>
                            ))}
                        </div>
                    </div>
                    
                    <Animated delay={200}>
                        <div className="bg-brand-surface/80 backdrop-blur-lg border border-brand-secondary/20 p-8 rounded-xl shadow-lg transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-1 transform hover:border-brand-primary/50 max-w-6xl mx-auto mt-20">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold font-serif text-brand-text mb-6 text-center">{content.historia.motivation.subheading}</h3>
                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mt-6">
                                {content.historia.motivation.points.map((point, i) => {
                                    const PointIcon = iconMap[point.icon];
                                    return (
                                        <Animated key={i} delay={i * 100}>
                                            <div className="flex items-start space-x-4 p-4">
                                                <PointIcon className="w-8 h-8 text-brand-secondary mt-1 flex-shrink-0" />
                                                <p className="text-base md:text-lg">{point.text}</p>
                                            </div>
                                        </Animated>
                                    )
                                })}
                            </div>
                        </div>
                    </Animated>
                    <Animated delay={500}>
                        <p className="italic text-brand-text/90 font-semibold text-lg sm:text-xl md:text-2xl mt-12 text-center max-w-6xl mx-auto">{content.historia.conclusion}</p>
                    </Animated>
                </Section>
                
                {/* PARTE 3: A NOSSA ESTRATÉGIA */}
                <Section 
                    id="forca-da-musica" 
                    title={content.slide2.title} 
                    icon={<IconGlobe className="w-10 h-10 text-brand-primary" />}
                    bgImageUrl="https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1920&auto=format&fit=crop"
                >
                     <Animated>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 text-center max-w-6xl mx-auto text-balance">{content.slide2.paragraph1}</p>
                     </Animated>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {content.slide2.examples.map((ex, index) => {
                            const ExampleIcon = iconMap[ex.icon];
                            const isFeatured = (ex as any).isFeatured;

                            return (
                                <Animated key={index} delay={index * 150}>
                                    {isFeatured ? (
                                        <div className="animated-border-wrapper rounded-xl p-[2px] h-full transition-all duration-500 shadow-glow-primary animate-pulse-glow hover:shadow-2xl hover:shadow-yellow-400/50 hover:-translate-y-2 transform">
                                            <div className="bg-brand-surface backdrop-blur-lg rounded-[10px] h-full p-6 text-center">
                                                <ExampleIcon className="w-10 h-10 mx-auto text-brand-primary mb-4"/>
                                                <h4 className="font-bold text-brand-text text-lg md:text-xl mb-1">{ex.title}</h4>
                                                <p className="text-base md:text-lg text-brand-text-secondary">{ex.description}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="bg-brand-surface/80 backdrop-blur-lg border border-brand-secondary/20 p-6 rounded-xl text-center h-full transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2 transform hover:border-brand-primary/50">
                                            <ExampleIcon className="w-10 h-10 mx-auto text-brand-primary mb-4"/>
                                            <h4 className="font-bold text-brand-text text-lg md:text-xl mb-1">{ex.title}</h4>
                                            <p className="text-base md:text-lg text-brand-text-secondary">{ex.description}</p>
                                        </div>
                                    )}
                                </Animated>
                            )
                        })}
                     </div>
                     <Animated delay={500}>
                        <p className="mt-10 text-center italic text-lg sm:text-xl md:text-2xl font-serif max-w-6xl mx-auto">{content.slide2.conclusion}</p>
                     </Animated>
                </Section>

                <Section id="modelo" title={content.slide6.title} icon={<IconUsers className="w-10 h-10 text-brand-primary" />}>
                    <Animated>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 text-center max-w-6xl mx-auto text-balance">{content.slide6.paragraph1}</p>
                    </Animated>
                    <Animated delay={200}>
                        <div className="bg-brand-surface border border-brand-secondary/20 p-8 rounded-xl shadow-lg transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-1 transform hover:border-brand-primary/50 max-w-6xl mx-auto">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold font-serif text-brand-text mb-6 text-center">{content.slide6.subheading}</h3>
                             <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mt-6">
                                {content.slide6.points.map((point, i) => {
                                     const PointIcon = iconMap[point.icon];
                                    return (
                                        <Animated key={i} delay={i * 100}>
                                            <div className="flex items-start space-x-4 p-4">
                                                <PointIcon className="w-8 h-8 text-brand-secondary mt-1 flex-shrink-0" />
                                                <p className="text-base md:text-lg">{point.text}</p>
                                            </div>
                                        </Animated>
                                    )
                                })}
                            </div>
                        </div>
                    </Animated>
                    <Animated delay={400}>
                        <div className="mt-12 max-w-4xl mx-auto text-center relative px-8 md:px-16 py-8">
                            <IconQuoteOpen className="w-16 h-16 text-brand-secondary/20 absolute top-0 left-0 -translate-y-2 opacity-70" />
                            <AnimatedTypewriter
                                lines={[
                                    { text: content.slide6.quote.original, className: "text-base md:text-xl leading-relaxed text-brand-text-secondary mb-4" },
                                ]}
                                staggerMs={20}
                            />
                            <AnimatedTypewriter
                                 lines={[
                                    { text: content.slide6.quote.adaptation, className: "text-lg sm:text-2xl md:text-3xl font-semibold font-serif text-brand-primary" },
                                ]}
                                staggerMs={30}
                            />
                            <IconQuoteClose className="w-16 h-16 text-brand-secondary/20 absolute bottom-0 right-0 translate-y-2 opacity-70" />
                        </div>
                    </Animated>
                    <Animated delay={600}>
                        <p 
                            className="italic text-brand-text/90 font-semibold text-lg sm:text-xl md:text-2xl mt-8 text-center max-w-6xl mx-auto"
                            dangerouslySetInnerHTML={{ __html: content.slide6.conclusion }}
                        />
                    </Animated>
                </Section>
                
                {/* PARTE 4: O CHAMADO À AÇÃO */}
                <Section id="convite" title={content.slide14.title} icon={<IconMegaphone className="w-10 h-10 text-brand-primary" />}>
                    <AnimatedTypewriter 
                        lines={[{ text: content.slide14.paragraph1, className: "text-base sm:text-lg md:text-2xl leading-relaxed mb-12 text-center max-w-4xl mx-auto text-balance" }]} 
                    />
                    <div className="mt-12 max-w-4xl mx-auto">
                        <Animated delay={200}>
                            <div className="bg-brand-surface border border-brand-secondary/20 p-6 md:p-8 rounded-xl transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-1 transform hover:border-brand-primary/50">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold font-serif text-brand-text mb-6 text-center">{content.slide14.expectTitle}</h3>
                                <ul className="space-y-4 md:space-y-6">
                                    {content.slide14.expectation.map((item, i) => {
                                        const ExpectIcon = iconMap[item.icon];
                                        return (
                                            <li key={i} className="flex items-start text-base md:text-lg">
                                                <ExpectIcon className="w-7 h-7 md:w-8 md:h-8 text-brand-secondary mr-4 mt-1 flex-shrink-0" />
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
                                        <p className="text-base md:text-lg leading-relaxed text-brand-text/90">
                                            {card.text}
                                        </p>
                                    </div>
                                </Animated>
                            );
                        })}
                    </div>
                </Section>
                
                {/* PARTE 5: CONTEXTO HISTÓRICO */}
                <Timeline />
            </main>
            <Footer />
        </div>
    );
};

export default App;