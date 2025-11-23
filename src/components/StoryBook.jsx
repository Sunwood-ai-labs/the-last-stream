import React from 'react';
import { timelineData } from '../data/timeline';

const StoryBook = ({ onClose }) => {
    return (
        <div className="fade-in" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.95)',
            zIndex: 2000,
            overflowY: 'auto',
            padding: '40px 20px',
            boxSizing: 'border-box',
            backdropFilter: 'blur(10px)'
        }}>
            <button
                onClick={onClose}
                style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    fontSize: '2rem',
                    cursor: 'pointer',
                    zIndex: 2001
                }}
            >
                ×
            </button>

            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                <h2 className="glitch" data-text="TIMELINE OF EVENTS" style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '60px', color: 'var(--color-primary)' }}>
                    TIMELINE OF EVENTS
                </h2>

                {/* Vertical Line */}
                <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: '100px',
                    bottom: '0',
                    width: '2px',
                    background: 'linear-gradient(to bottom, var(--color-accent), var(--color-primary))',
                    transform: 'translateX(-50%)'
                }} />

                {timelineData.map((item, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                        marginBottom: '60px',
                        position: 'relative'
                    }}>
                        {/* Dot */}
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            top: '0',
                            width: '20px',
                            height: '20px',
                            background: item.type === 'critical' ? '#ff0000' : (item.type === 'warning' ? '#ffaa00' : 'var(--color-bg)'),
                            border: `2px solid ${item.type === 'critical' ? '#ff0000' : 'var(--color-accent)'}`,
                            borderRadius: '50%',
                            transform: 'translate(-50%, 0)',
                            zIndex: 2,
                            boxShadow: `0 0 10px ${item.type === 'critical' ? '#ff0000' : 'var(--color-accent)'}`
                        }} />

                        {/* Content Card */}
                        <div className="glass" style={{
                            width: '45%',
                            padding: '20px',
                            borderRadius: '10px',
                            border: `1px solid ${item.type === 'critical' ? '#ff0000' : (item.type === 'warning' ? '#ffaa00' : 'rgba(255,255,255,0.1)')}`,
                            textAlign: index % 2 === 0 ? 'left' : 'right'
                        }}>
                            <div style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                color: item.type === 'critical' ? '#ff0000' : 'var(--color-accent)',
                                marginBottom: '10px',
                                fontFamily: 'var(--font-display)'
                            }}>
                                {item.time}
                            </div>
                            <h3 style={{ margin: '0 0 10px', color: '#fff' }}>{item.title}</h3>
                            <p style={{ color: '#ccc', lineHeight: '1.6' }}>{item.description}</p>
                        </div>
                    </div>
                ))}

                <div style={{ textAlign: 'center', marginTop: '100px', paddingBottom: '50px' }}>
                    <p style={{ fontSize: '1.2rem', color: '#666' }}>To be continued in the investigation...</p>
                </div>
            </div>
        </div>
    );
};

export default StoryBook;
