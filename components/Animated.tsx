
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
