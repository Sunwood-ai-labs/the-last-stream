import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import CharacterCard from './components/CharacterCard';
import RelationshipMap from './components/RelationshipMap';
import StoryBook from './components/StoryBook';
import Playbook from './components/Playbook';
import { storyData } from './data/story';
import { charactersData, victimData } from './data/characters';
import heroBg from './assets/hero_background.png';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [showStoryBook, setShowStoryBook] = useState(false);
  const [showPlaybook, setShowPlaybook] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      {showStoryBook && <StoryBook onClose={() => setShowStoryBook(false)} />}
      {showPlaybook && <Playbook onClose={() => setShowPlaybook(false)} />}

      {/* Hero Section */}
      <section style={{
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`, // Parallax
          zIndex: -1,
          filter: 'brightness(0.6)'
        }} />

        <div className="fade-in" style={{ zIndex: 1, padding: '20px' }}>
          <h1 className="glitch" data-text={storyData.title} style={{ fontSize: '4rem', marginBottom: '10px', textShadow: '0 0 20px var(--color-primary)' }}>
            {storyData.title}
          </h1>
          <p style={{ fontSize: '1.5rem', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
            {storyData.subtitle}
          </p>
          <div style={{ marginTop: '50px' }}>
            <p style={{ fontSize: '1rem', maxWidth: '600px', margin: '0 auto 30px', lineHeight: '1.6', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
              {storyData.intro}
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button style={{
                padding: '15px 40px',
                fontSize: '1rem',
                background: 'transparent',
                color: 'var(--color-primary)',
                border: '2px solid var(--color-primary)',
                borderRadius: '0',
                cursor: 'pointer',
                fontFamily: 'var(--font-display)',
                transition: 'all 0.3s'
              }}
                onMouseOver={(e) => { e.target.style.background = 'var(--color-primary)'; e.target.style.color = '#fff'; }}
                onMouseOut={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--color-primary)'; }}
                onClick={() => document.getElementById('story').scrollIntoView({ behavior: 'smooth' })}
              >
                ENTER SITE
              </button>
              <button style={{
                padding: '15px 40px',
                fontSize: '1rem',
                background: 'var(--color-secondary)',
                color: '#fff',
                border: 'none',
                borderRadius: '0',
                cursor: 'pointer',
                fontFamily: 'var(--font-display)',
                transition: 'all 0.3s',
                boxShadow: '0 0 15px var(--color-secondary)'
              }}
                onClick={() => setShowStoryBook(true)}
              >
                📖 READ STORYBOOK
              </button>
              <button style={{
                padding: '15px 40px',
                fontSize: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '0',
                cursor: 'pointer',
                fontFamily: 'var(--font-display)',
                transition: 'all 0.3s',
                backdropFilter: 'blur(5px)'
              }}
                onMouseOver={(e) => { e.target.style.background = 'rgba(255, 255, 255, 0.2)'; }}
                onMouseOut={(e) => { e.target.style.background = 'rgba(255, 255, 255, 0.1)'; }}
                onClick={() => setShowPlaybook(true)}
              >
                📒 PLAYBOOK
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ position: 'relative', zIndex: 10, background: 'linear-gradient(to bottom, transparent, #050505 100px)' }}>

        {/* Incident Report */}
        <section id="story" style={{ padding: '100px 0', textAlign: 'center' }}>
          <div className="glass" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', borderRadius: '20px', border: '1px solid var(--color-primary)' }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '30px' }}>🚨 INCIDENT REPORT 🚨</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '40px', textAlign: 'left', flexWrap: 'wrap', justifyContent: 'center' }}>
              <img src={victimData.image} alt={victimData.name} style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #fff', boxShadow: '0 0 20px var(--color-primary)' }} />
              <div style={{ flex: 1, minWidth: '300px' }}>
                <h3 style={{ margin: '0 0 10px', fontSize: '1.5rem' }}>VICTIM: {victimData.name}</h3>
                <p style={{ lineHeight: '1.8', color: '#ccc' }}>{storyData.incident}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Characters */}
        <section id="characters" style={{ padding: '100px 0' }}>
          <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '60px', textShadow: '0 0 10px var(--color-secondary)' }}>
            SUSPECTS
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            {charactersData.map(char => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </div>
        </section>

        {/* Relationship Chart */}
        <section id="relationship" style={{ padding: '100px 0' }}>
          <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '20px', textShadow: '0 0 10px var(--color-accent)' }}>
            RELATIONSHIP CHART
          </h2>
          <p style={{ textAlign: 'center', marginBottom: '60px', color: '#999' }}>
            The web of lies and deceit.
          </p>
          <RelationshipMap />
        </section>

        {/* Climax / CTA */}
        <section style={{ padding: '100px 0', textAlign: 'center' }}>
          <h2 className="glitch" data-text="WHO IS THE CULPRIT?" style={{ fontSize: '4rem', marginBottom: '40px' }}>
            WHO IS THE CULPRIT?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>{storyData.climax}</p>
          <button style={{
            padding: '20px 60px',
            fontSize: '1.5rem',
            background: 'var(--color-primary)',
            color: '#fff',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 0 30px var(--color-primary)',
            fontFamily: 'var(--font-display)',
            textTransform: 'uppercase'
          }}>
            Start Investigation 🕵️‍♀️
          </button>
        </section>
      </div>
    </Layout>
  );
}

export default App;
