
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Timeline } from './components/Timeline';
import { Footer } from './components/Footer';
import { Animated } from './components/Animated';
import { content } from './constants';
import { StorylineIndicator } from './components/StorylineIndicator';
import { 
    IconPaw, IconMusic, IconUsers, IconHeart, IconMegaphone, IconFeather, 
    IconWhatsApp, IconShield, IconGlobe, IconGift, IconEye, IconTrendingUp, 
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
                    id="reflexao" 
                    title={content.slide1.title} 
                    icon={<IconPaw className="w-10 h-10 text-brand-primary" />}
                    bgImageUrl="https://images.unsplash.com/photo-1583511655826-0ab469152a48?q=80&w=1920&auto=format&fit=crop"
                >
                    <Animated>
                        <p className="text-2xl leading-relaxed mb-12 text-center max-w-3xl mx-auto">{content.slide1.paragraph1}</p>
                    </Animated>
                    <Animated delay={200}>
                        <div className="text-center mb-12">
                             <h3 className="text-4xl font-semibold font-serif text-brand-text mb-8">{content.slide1.subheading}</h3>
                             <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                                {content.slide1.stats.map((stat, index) => {
                                    const StatIcon = iconMap[stat.icon];
                                    return (
                                        <Animated key={index} delay={index * 150}>
                                             <div className="bg-brand-surface/80 backdrop-blur-sm border border-brand-secondary/20 p-8 rounded-xl shadow-lg text-center h-full transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2 transform hover:border-brand-primary/50">
                                                <StatIcon className="w-12 h-12 mx-auto text-brand-primary mb-4" />
                                                <p className="text-5xl font-bold text-brand-text leading-none">{stat.value}</p>
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

                <Section 
                    id="forca-da-musica" 
                    title={content.slide2.title} 
                    icon={<IconMusic className="w-10 h-10 text-brand-primary" />}
                    bgImageUrl="https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1920&auto=format&fit=crop"
                >
                     <Animated>
                        <p className="text-2xl leading-relaxed mb-10 text-center">{content.slide2.paragraph1}</p>
                     </Animated>
                     <div className="grid md:grid-cols-3 gap-6">
                        {content.slide2.examples.map((ex, index) => {
                            const ExampleIcon = iconMap[ex.icon];
                            return (
                                <Animated key={index} delay={index * 150}>
                                    <div className="bg-brand-surface/80 backdrop-blur-sm border border-brand-secondary/20 p-6 rounded-xl text-center h-full transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2 transform hover:border-brand-primary/50">
                                        <ExampleIcon className="w-10 h-10 mx-auto text-brand-primary mb-4"/>
                                        <h4 className="font-bold text-brand-text text-2xl mb-1">{ex.title}</h4>
                                        <p className="text-xl text-brand-text-secondary">{ex.description}</p>
                                    </div>
                                </Animated>
                            )
                        })}
                     </div>
                     <Animated delay={500}>
                        <p className="mt-10 text-center italic text-2xl font-serif">{content.slide2.conclusion}</p>
                     </Animated>
                </Section>
                
                <Timeline />

                <Section 
                    id="inspiracao" 
                    title={content.slide5.title} 
                    icon={<IconHeart className="w-10 h-10 text-brand-primary" />}
                    bgImageUrl="https://images.unsplash.com/photo-1597561542938-1e47b3113523?q=80&w=1920&auto=format&fit=crop"
                >
                    <Animated>
                        <p className="text-2xl leading-relaxed mb-8 text-center">{content.slide5.paragraph1}</p>
                    </Animated>
                    <Animated delay={200}>
                        <div className="bg-brand-surface/80 backdrop-blur-sm border border-brand-secondary/20 p-8 rounded-xl shadow-lg transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-1 transform hover:border-brand-primary/50">
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
                        <p className="italic text-brand-text/90 font-semibold text-2xl mt-8 text-center">{content.slide5.conclusion}</p>
                    </Animated>
                </Section>
                
                <Section id="modelo" title={content.slide6.title} icon={<IconUsers className="w-10 h-10 text-brand-primary" />}>
                    <Animated>
                        <p className="text-2xl leading-relaxed mb-8 text-center">{content.slide6.paragraph1}</p>
                    </Animated>
                    <Animated delay={200}>
                        <div className="bg-brand-surface border border-brand-secondary/20 p-8 rounded-xl shadow-lg transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-1 transform hover:border-brand-primary/50">
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
                        <p className="italic text-brand-text/90 font-semibold text-2xl mt-8 text-center">{content.slide6.conclusion}</p>
                    </Animated>
                </Section>

                <Section id="convite" title={content.slide14.title} icon={<IconMegaphone className="w-10 h-10 text-brand-primary" />}>
                    <Animated>
                        <p className="text-2xl leading-relaxed mb-6 text-center">{content.slide14.paragraph1}</p>
                    </Animated>
                    <div className="grid md:grid-cols-2 gap-8 mt-10">
                        <Animated delay={200}>
                            <div className="bg-brand-surface border border-brand-secondary/20 p-8 rounded-xl h-full transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-1 transform hover:border-brand-primary/50">
                                 <h3 className="text-3xl font-semibold font-serif text-brand-text mb-6">{content.slide14.offerTitle}</h3>
                                 <ul className="space-y-4 text-xl">
                                    {content.slide14.offers.map((offer, i) => (
                                        <li key={i} className="flex items-start">
                                            <IconCheckCircle className="w-7 h-7 text-brand-secondary mr-3 mt-1 flex-shrink-0" />
                                            <span>{offer}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Animated>
                        <Animated delay={350}>
                            <div className="bg-brand-surface border border-brand-secondary/20 p-8 rounded-xl h-full transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-1 transform hover:border-brand-primary/50">
                                 <h3 className="text-3xl font-semibold font-serif text-brand-text mb-6">{content.slide14.expectTitle}</h3>
                                 <p className="text-xl leading-relaxed">{content.slide14.expectation}</p>
                            </div>
                        </Animated>
                    </div>
                </Section>
                 <Section id="o-convite-final" title={content.slide15.title} icon={<IconFeather className="w-10 h-10 text-brand-primary" />}>
                    <Animated>
                        <div className="relative bg-brand-surface p-8 md:p-12 rounded-xl border border-brand-primary/20 mb-10 overflow-hidden transition-all duration-500 hover:shadow-glow-primary hover:border-brand-primary/50">
                            <IconQuoteOpen className="w-12 h-12 text-brand-primary/20 absolute top-4 left-4" />
                            <blockquote className="text-center relative z-10">
                                <p className="text-3xl md:text-4xl italic font-serif text-brand-text/90 leading-snug">
                                    {content.slide15.quote}
                                </p>
                                <footer className="mt-4 text-xl text-brand-text-secondary not-italic">
                                    - {content.slide15.quoteAuthor}
                                </footer>
                            </blockquote>
                            <IconQuoteClose className="w-12 h-12 text-brand-primary/20 absolute bottom-4 right-4" />
                        </div>
                    </Animated>
                    <Animated delay={200}>
                        <p className="text-2xl leading-relaxed mb-6">{content.slide15.paragraph1}</p>
                    </Animated>
                    <Animated delay={300}>
                        <p className="text-2xl font-semibold text-brand-primary mb-6">{content.slide15.invitation}</p>
                    </Animated>
                    <Animated delay={400}>
                        <p className="text-2xl leading-relaxed">{content.slide15.promise}</p>
                    </Animated>
                </Section>

                <Section id="contato" title="Entre em Contato" icon={<IconWhatsApp className="w-10 h-10 text-brand-primary" />}>
                    <Animated>
                        <div className="text-center max-w-2xl mx-auto">
                            <p className="text-2xl leading-relaxed mb-8">
                                Tem alguma dúvida, sugestão ou quer saber mais sobre como se envolver no projeto? Fale conosco diretamente. Estamos ansiosos para ouvir você!
                            </p>
                            <a 
                                href="https://wa.link/9vbbf7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-brand-primary text-brand-background font-bold text-xl py-4 px-10 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-glow-primary"
                            >
                                <IconWhatsApp className="w-7 h-7 mr-3" />
                                Fale Conosco no WhatsApp
                            </a>
                        </div>
                    </Animated>
                </Section>
            </main>
            <Footer />
        </div>
    );
};

export default App;
