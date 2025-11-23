import React, { useRef, useState, useEffect } from 'react';

interface HorizontalScrollProps {
    children: React.ReactNode;
    itemWidth?: string;
    gap?: string;
    showIndicators?: boolean;
}

export const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
    children,
    itemWidth = '280px',
    gap = '1rem',
    showIndicators = true
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeftArrow(scrollLeft > 10);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        const scrollEl = scrollRef.current;
        if (scrollEl) {
            scrollEl.addEventListener('scroll', checkScroll);
            return () => scrollEl.removeEventListener('scroll', checkScroll);
        }
    }, [children]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth * 0.8;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative w-full">
            {/* Scroll Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth"
                style={{
                    gap: gap,
                    paddingLeft: 'max(1rem, env(safe-area-inset-left))',
                    paddingRight: 'max(1rem, env(safe-area-inset-right))',
                    WebkitOverflowScrolling: 'touch',
                }}
            >
                {React.Children.map(children, (child, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 snap-start"
                        style={{ width: itemWidth }}
                    >
                        {child}
                    </div>
                ))}
            </div>

            {/* Navigation Arrows - Hidden on mobile, shown on tablet+ */}
            {showIndicators && (
                <>
                    {showLeftArrow && (
                        <button
                            onClick={() => scroll('left')}
                            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-brand-surface/90 backdrop-blur-lg border border-brand-primary/30 rounded-full shadow-lg hover:bg-brand-primary hover:text-brand-background transition-all duration-300"
                            aria-label="Scroll left"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}
                    {showRightArrow && (
                        <button
                            onClick={() => scroll('right')}
                            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-brand-surface/90 backdrop-blur-lg border border-brand-primary/30 rounded-full shadow-lg hover:bg-brand-primary hover:text-brand-background transition-all duration-300"
                            aria-label="Scroll right"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}
                </>
            )}

            {/* CSS for hiding scrollbar */}
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};
