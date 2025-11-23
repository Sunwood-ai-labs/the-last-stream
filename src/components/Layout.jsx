import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header className="glass" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                padding: '15px 40px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxSizing: 'border-box'
            }}>
                <h1 className="glitch" data-text="The Last Stream" style={{ margin: 0, fontSize: '1.2rem', color: 'var(--color-primary)' }}>The Last Stream</h1>
                <nav>
                    <a href="#story" style={{ marginLeft: '30px', fontSize: '0.9rem', textTransform: 'uppercase' }}>Story</a>
                    <a href="#characters" style={{ marginLeft: '30px', fontSize: '0.9rem', textTransform: 'uppercase' }}>Characters</a>
                    <a href="#relationship" style={{ marginLeft: '30px', fontSize: '0.9rem', textTransform: 'uppercase' }}>Relationship</a>
                </nav>
            </header>
            <main style={{ paddingTop: '0' }}> {/* Removed padding top to allow hero to be full screen */}
                {children}
            </main>
            <footer style={{ textAlign: 'center', padding: '40px', borderTop: '1px solid #333', background: '#000', fontSize: '0.8rem', color: '#666' }}>
                &copy; 2025 The Last Stream Production Committee. <br />
                <span style={{ color: 'var(--color-primary)' }}>⚠️ This is a work of fiction.</span>
            </footer>
        </div>
    );
};

export default Layout;
