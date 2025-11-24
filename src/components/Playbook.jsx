import React from 'react';
import { playbookData } from '../data/playbook';

const Playbook = ({ onClose }) => {
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
            backdropFilter: 'blur(10px)',
            fontFamily: 'var(--font-main)'
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

            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', paddingBottom: '50px' }}>
                <h2 className="glitch" data-text={playbookData.title} style={{
                    textAlign: 'center',
                    fontSize: '3rem',
                    marginBottom: '10px',
                    color: 'var(--color-secondary)',
                    fontFamily: 'var(--font-display)'
                }}>
                    {playbookData.title}
                </h2>
                <p style={{ textAlign: 'center', color: '#888', marginBottom: '50px', letterSpacing: '2px' }}>
                    {playbookData.subtitle}
                </p>

                {/* Mission Section */}
                <div className="glass" style={{
                    padding: '30px',
                    marginBottom: '40px',
                    borderLeft: '5px solid var(--color-primary)',
                    background: 'rgba(255, 0, 85, 0.1)'
                }}>
                    <h3 style={{ color: 'var(--color-primary)', marginTop: 0, fontSize: '1.5rem' }}>{playbookData.mission.title}</h3>
                    <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>{playbookData.mission.description}</p>
                </div>

                {/* Steps Section */}
                <div style={{ display: 'grid', gap: '20px' }}>
                    {playbookData.steps.map((step) => (
                        <div key={step.id} className="glass" style={{
                            padding: '20px',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '20px',
                            transition: 'transform 0.3s'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                        >
                            <div style={{
                                fontSize: '3rem',
                                background: 'rgba(255,255,255,0.1)',
                                width: '80px',
                                height: '80px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '10px'
                            }}>
                                {step.icon}
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--color-accent)', margin: '0 0 10px', fontSize: '1.3rem' }}>{step.title}</h4>
                                <p style={{ color: '#ccc', lineHeight: '1.6', margin: 0 }}>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tips Section */}
                <div style={{ marginTop: '50px' }}>
                    <h3 style={{ color: '#fff', borderBottom: '1px solid #333', paddingBottom: '10px' }}>TIPS (捜査のヒント)</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {playbookData.tips.map((tip, index) => (
                            <li key={index} style={{
                                padding: '15px 0',
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                color: '#aaa',
                                display: 'flex',
                                gap: '10px'
                            }}>
                                <span style={{ color: 'var(--color-secondary)' }}>➤</span> {tip}
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <button
                        onClick={onClose}
                        style={{
                            padding: '15px 50px',
                            background: 'var(--color-primary)',
                            color: '#fff',
                            border: 'none',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-display)',
                            clipPath: 'polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)',
                            transition: 'transform 0.2s'
                        }}
                        onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
                        onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        START INVESTIGATION
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Playbook;
