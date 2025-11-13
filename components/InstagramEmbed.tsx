import React, { useEffect, useRef } from 'react';

interface InstagramEmbedProps {
    url: string;
}

export const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Carrega o script do Instagram se ainda não foi carregado
        if (containerRef.current && (window as any).instgrm) {
            (window as any).instgrm.Embeds.process();
        }
    }, [url]);

    return (
        <div ref={containerRef} className="flex justify-center w-full">
            <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: '3px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px auto',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: 0,
                    width: 'calc(100% - 2px)'
                }}
            >
                <div style={{ padding: '16px' }}>
                    <a
                        href={url}
                        style={{
                            background: '#FFFFFF',
                            lineHeight: 0,
                            padding: 0,
                            textAlign: 'center',
                            textDecoration: 'none',
                            width: '100%'
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver no Instagram
                    </a>
                </div>
            </blockquote>
        </div>
    );
};
