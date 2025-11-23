import React, { useState } from 'react';

const CharacterCard = ({ character }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="glass"
            style={{
                padding: '0',
                borderRadius: '15px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                boxShadow: isHovered ? `0 10px 30px ${character.color}40` : 'none',
                border: `1px solid ${character.color}40`
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                <img
                    src={character.image}
                    alt={character.name}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    background: `linear-gradient(to top, ${character.color}cc, transparent)`,
                    padding: '20px',
                    boxSizing: 'border-box'
                }}>
                    <h3 style={{ margin: 0, fontSize: '1.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{character.name}</h3>
                    <span style={{ fontSize: '0.9rem', color: '#fff', opacity: 0.9 }}>{character.role}</span>
                </div>
            </div>

            <div style={{ padding: '20px' }}>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#ddd' }}>{character.bio}</p>

                <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '5px', borderLeft: `3px solid ${character.color}` }}>
                    <strong style={{ color: character.color }}>Motive:</strong> {character.motive}
                </div>

                <details style={{ marginTop: '15px', cursor: 'pointer' }}>
                    <summary style={{ color: 'var(--color-accent)', fontSize: '0.9rem', userSelect: 'none' }}>Reveal Secret 🔓</summary>
                    <p className="fade-in" style={{ marginTop: '10px', fontStyle: 'italic', color: '#ff0055', padding: '10px', background: '#1a000a', borderRadius: '5px' }}>
                        {character.secret}
                    </p>
                </details>
            </div>
        </div>
    );
};

export default CharacterCard;
