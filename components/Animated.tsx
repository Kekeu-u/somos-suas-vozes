import React, { useEffect, useRef, useState } from 'react';

interface AnimatedProps {
    children: React.ReactNode;
    className?: string;
    delay?: number; // delay in ms
}

export const Animated: React.FC<AnimatedProps> = ({ children, className = '', delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                        observer.unobserve(element);
                    }, delay);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [delay]);

    return (
        <div
            ref={ref}
            className={`${className} transition-all duration-500 ease-out-quint ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
            {children}
        </div>
    );
};

interface CounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
}

export const Counter: React.FC<CounterProps> = ({ 
    end, 
    duration = 2000, 
    suffix = '', 
    prefix = '', 
    className 
}) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLParagraphElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    useEffect(() => {
        if (!isInView) {
            return;
        }

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // easeOutCubic easing function
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easedProgress * end);
            
            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setCount(end);
            }
        };
        
        requestAnimationFrame(step);
    }, [end, duration, isInView]);

    const defaultClassName = "text-5xl font-bold text-brand-text leading-none";

    return (
        <p ref={ref} className={className || defaultClassName}>
            {prefix}{count.toLocaleString('pt-BR')}{suffix}
        </p>
    );
};

interface AnimatedTypewriterProps {
    text: string;
    className?: string;
    staggerMs?: number;
}

export const AnimatedTypewriter: React.FC<AnimatedTypewriterProps> = ({ text, className, staggerMs = 20 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    // Pre-calculate animation delays for each word and character
    const words = text.split(' ');
    const wordData: { word: string; startIndex: number }[] = [];
    let currentIndex = 0;
    words.forEach(word => {
        wordData.push({ word, startIndex: currentIndex });
        currentIndex += word.length + 1; // Add 1 for the space after the word
    });

    return (
        <p ref={ref} className={className} aria-label={text}>
            {isVisible ? (
                wordData.map(({ word, startIndex }, wordIdx) => (
                    <React.Fragment key={wordIdx}>
                        {/* Each word is wrapped in an inline-block span.
                            This makes the word an atomic unit, preventing the browser
                            from breaking it across multiple lines. */}
                        <span className="inline-block">
                            {word.split('').map((char, charIdx) => (
                                <span
                                    key={charIdx}
                                    className="animate-fade-in-up opacity-0 inline-block"
                                    style={{
                                        animationDelay: `${(startIndex + charIdx) * staggerMs}ms`,
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                        </span>
                        {/* A normal space is added after each word (except the last).
                            This is where the browser is allowed to create a line break. */}
                        {wordIdx < words.length - 1 ? ' ' : ''}
                    </React.Fragment>
                ))
            ) : (
                // Render text invisibly to reserve space and prevent layout shifts
                <span className="opacity-0" aria-hidden="true">
                    {text}
                </span>
            )}
        </p>
    );
};