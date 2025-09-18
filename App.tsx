
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
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center max-w-6xl mx-auto text-balance mb-12">
                            A música é a alma do nosso movimento. Uma canção-guia que carrega a força da nossa mensagem e o apelo por compaixão. Dê o play e sinta a emoção que nos une.
                        </p>
                    </Animated>
                    
                    <Animated delay={200}>
                        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-brand-secondary/20 bg-brand-surface">
                             <iframe 
                                width="100%" 
                                height="166" 
                                scrolling="no" 
                                frameBorder="no" 
                                allow="autoplay" 
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2170987776%3Fsecret_token%3Ds-r9ZYzXCIu78&color=%23ffc72c&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
                                title="Player da música Somos Suas Vozes"
                            ></iframe>
                        </div>
                    </Animated>

                    <Animated delay={300}>
                        <p className="text-center text-sm text-brand-text-secondary mt-4 mb-12 max-w-4xl mx-auto">
                            Para tocar a música, clique em "Ouvir no navegador" no player acima.
                        </p>
                    </Animated>

                    <Animated delay={400}>
                        <div className="text-center max-w-4xl mx-auto">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary font-serif mb-3">
                                4 de outubro de 2025
                            </p>
                            <p className="text-base sm:text-lg md:text-2xl text-brand-text mb-6">
                                O dia em que a música brasileira deu voz aos animais.
                            </p>
                            <p className="italic text-brand-text-secondary text-base md:text-lg mb-6">
                                Porque "onde existe vida, existe amor."
                            </p>
                            <p className="text-base md:text-xl font-semibold">
                                Os animais precisam da nossa voz.
                            </p>
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
                
                {/* PARTE 2: O Chamado à Ação */}
                {/* FIX: Corrected section ID from 'convite' to 'o-convite' to match navigation links */}
                <Section id="o-convite" title={content.slide14.title} icon={<IconMegaphone className="w-10 h-10 text-brand-primary" />}>
                    <AnimatedTypewriter 
                        lines={[{ text: content.slide14.paragraph1, className: "text-base sm:text-lg md:text-2xl leading-relaxed mb-12 text-center max-w-4xl mx-auto text-balance" }]} 
                    />
                    {/* FIX: Reconstructed missing content for the 'o-convite' section */}
                    <div className="mt-12">
                         <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-serif text-brand-text mb-8 text-center">{content.slide14.expectTitle}</h3>
                        <div className="max-w-4xl mx-auto space-y-6">
                            {content.slide14.expectation.map((item, index) => {
                                const ItemIcon = iconMap[item.icon];
                                return (
                                    <Animated key={index} delay={index * 150}>
                                        <div className="flex items-start space-x-6 bg-brand-surface/50 backdrop-blur-lg border border-brand-secondary/20 p-6 rounded-xl shadow-lg transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-1 transform hover:border-brand-primary/50">
                                            <ItemIcon className="w-8 h-8 text-brand-primary mt-1 flex-shrink-0" />
                                            <p className="text-base md:text-lg text-brand-text-secondary">{item.text}</p>
                                        </div>
                                    </Animated>
                                );
                            })}
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
                        {content.slide15.cards.map((card, index) => {
                            const CardIcon = iconMap[card.icon];
                            return (
                                <Animated key={index} delay={index * 200 + 500}>
                                    <div className="bg-brand-surface/80 backdrop-blur-lg border border-brand-secondary/20 p-8 rounded-xl shadow-lg text-center h-full transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2 transform hover:border-brand-primary/50">
                                        <CardIcon className="w-12 h-12 mx-auto text-brand-primary mb-6" />
                                        <p className="text-base md:text-lg text-brand-text-secondary">{card.text}</p>
                                    </div>
                                </Animated>
                            );
                        })}
                    </div>
                </Section>

                {/* PARTE 3: A Estratégia */}
                 <Section 
                    id="forca-da-musica" 
                    title={content.slide2.title} 
                    icon={<IconGlobe className="w-10 h-10 text-brand-primary" />}
                >
                    <Animated>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-12 text-center max-w-6xl mx-auto text-balance">{content.slide2.paragraph1}</p>
                    </Animated>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
                        {content.slide2.examples.map((example, index) => {
                            const ExampleIcon = iconMap[example.icon];
                            return (
                                <Animated key={index} delay={index * 150}>
                                    <div className={`p-8 rounded-xl text-center h-full transition-all duration-500 transform hover:-translate-y-2 ${example.isFeatured ? 'bg-gradient-to-br from-brand-primary to-brand-secondary text-brand-background shadow-glow-primary' : 'bg-brand-surface/80 backdrop-blur-lg border border-brand-secondary/20 hover:shadow-glow-primary'}`}>
                                        <ExampleIcon className={`w-12 h-12 mx-auto mb-4 ${example.isFeatured ? 'text-brand-background' : 'text-brand-primary'}`} />
                                        <h4 className="text-lg font-bold mb-2">{example.title}</h4>
                                        <p className={`text-sm ${example.isFeatured ? 'text-brand-background/90' : 'text-brand-text-secondary'}`}>{example.description}</p>
                                    </div>
                                </Animated>
                            );
                        })}
                    </div>
                    <Animated delay={600}>
                        <p className="italic text-brand-primary text-center text-xl sm:text-2xl md:text-3xl font-serif">{content.slide2.conclusion}</p>
                    </Animated>
                    <div className="mt-24">
                        <Animated>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-brand-text text-center mb-4">{content.slide6.title}</h3>
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-12 text-center max-w-6xl mx-auto text-balance">{content.slide6.paragraph1}</p>
                        </Animated>
                        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
                            <Animated delay={200}>
                                <div>
                                    <h4 className="text-2xl font-semibold text-brand-text mb-6">{content.slide6.subheading}</h4>
                                    <ul className="space-y-4">
                                        {content.slide6.points.map((point, index) => {
                                            const PointIcon = iconMap[point.icon];
                                            return (
                                                <li key={index} className="flex items-start space-x-4">
                                                    <PointIcon className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
                                                    <span className="text-brand-text-secondary">{point.text}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </Animated>
                            <Animated delay={400}>
                                <div className="bg-brand-surface/50 backdrop-blur-lg border border-brand-secondary/20 p-8 rounded-xl shadow-lg">
                                    <IconQuoteOpen className="w-8 h-8 text-brand-primary/50 mb-4" />
                                    <p className="italic text-brand-text-secondary mb-4">"{content.slide6.quote.original}"</p>
                                    <p className="font-semibold text-brand-text">"{content.slide6.quote.adaptation}"</p>
                                    <IconQuoteClose className="w-8 h-8 text-brand-primary/50 mt-4 ml-auto" />
                                </div>
                            </Animated>
                        </div>
                        <Animated delay={600}>
                            <p className="text-center mt-16 text-lg md:text-xl" dangerouslySetInnerHTML={{ __html: content.slide6.conclusion }}></p>
                        </Animated>
                    </div>
                </Section>
                
                {/* PARTE 4: A Origem */}
                <Section 
                    id="a-historia-por-tras"
                    title={content.historia.title}
                    icon={<IconUser className="w-10 h-10 text-brand-primary" />}
                    bgImageUrl={content.historia.bgImageUrl}
                >
                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
                        <Animated className="md:col-span-1">
                            <div className="bg-brand-surface/80 backdrop-blur-lg border border-brand-secondary/20 p-8 rounded-xl shadow-lg text-center">
                                <img src="https://somossuasvozes.com.br/wp-content/uploads/2024/07/Andre-Amorim-300x300.webp" alt={content.historia.andre.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-brand-primary shadow-lg" />
                                <h4 className="text-xl font-bold text-brand-text">{content.historia.andre.name}</h4>
                                <p className="text-brand-text-secondary">{content.historia.andre.bio}</p>
                            </div>
                        </Animated>
                        <div className="md:col-span-2 space-y-6">
                            {content.historia.story.map((paragraph, index) => (
                                <Animated key={index} delay={index * 150}>
                                    <p className="text-base md:text-lg text-brand-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                                </Animated>
                            ))}
                        </div>
                    </div>
                    <div className="mt-20">
                        <Animated delay={300}>
                            <h3 className="text-3xl sm:text-4xl font-semibold font-serif text-brand-text text-center mb-10">{content.historia.motivation.subheading}</h3>
                        </Animated>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                            {content.historia.motivation.points.map((point, index) => {
                                const PointIcon = iconMap[point.icon];
                                return (
                                    <Animated key={index} delay={400 + index * 150}>
                                        <div className="flex items-center space-x-4 bg-brand-surface/50 backdrop-blur-lg border border-brand-secondary/20 p-6 rounded-xl shadow-lg h-full">
                                            <PointIcon className="w-8 h-8 text-brand-primary flex-shrink-0" />
                                            <p className="text-brand-text-secondary">{point.text}</p>
                                        </div>
                                    </Animated>
                                );
                            })}
                        </div>
                    </div>
                    <Animated delay={1000}>
                        <div className="mt-20 text-center text-xl sm:text-2xl md:text-3xl font-serif italic text-brand-primary p-8 bg-brand-surface/50 backdrop-blur-lg rounded-xl max-w-4xl mx-auto">
                            {content.historia.conclusion}
                        </div>
                    </Animated>
                </Section>
                
                <Timeline />
            </main>
            <Footer />
        </div>
    );
};

// FIX: Added default export to make the App component available for import in index.tsx
export default App;