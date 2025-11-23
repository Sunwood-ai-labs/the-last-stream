import React from 'react';
import { charactersData, victimData } from '../data/characters';
import { relationshipsData } from '../data/relationships';
import bgImg from '../assets/relationship_background.png';

const RelationshipMap = () => {
    // Positions (centered around victim)
    const width = 800;
    const height = 600;
    const centerX = width / 2;
    const centerY = height / 2;

    const positions = {
        kirara: { x: centerX, y: centerY },
        aina: { x: centerX, y: 100 },
        ren: { x: 700, y: centerY },
        sho: { x: centerX, y: 500 },
        goro: { x: 100, y: centerY }
    };

    const getCoords = (id) => positions[id] || { x: 0, y: 0 };

    // Combine victim and suspects for node rendering
    const allNodes = [victimData, ...charactersData];

    return (
        <div style={{
            width: '100%',
            maxWidth: '1000px',
            margin: '0 auto',
            height: '600px',
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 0 50px rgba(0, 255, 255, 0.1)',
            border: '1px solid rgba(0, 255, 255, 0.3)'
        }}>
            {/* Background Image */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.8,
                zIndex: 0
            }} />

            {/* SVG Layer for Lines */}
            <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
                <defs>
                    <marker id="arrowhead-negative" markerWidth="10" markerHeight="7" refX="38" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#ff0055" />
                    </marker>
                    <marker id="arrowhead-positive" markerWidth="10" markerHeight="7" refX="38" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#00ffff" />
                    </marker>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                {relationshipsData.map((rel, index) => {
                    const start = getCoords(rel.source);
                    const end = getCoords(rel.target);
                    const color = rel.type === 'negative' ? '#ff0055' : '#00ffff';
                    return (
                        <g key={index}>
                            <line
                                x1={start.x} y1={start.y}
                                x2={end.x} y2={end.y}
                                stroke={color}
                                strokeWidth="2"
                                markerEnd={`url(#arrowhead-${rel.type})`}
                                strokeDasharray={rel.type === 'negative' ? "5,5" : "0"}
                                filter="url(#glow)"
                                opacity="0.8"
                            />
                            <rect
                                x={(start.x + end.x) / 2 - 40}
                                y={(start.y + end.y) / 2 - 15}
                                width="80"
                                height="20"
                                fill="rgba(0,0,0,0.8)"
                                rx="5"
                            />
                            <text
                                x={(start.x + end.x) / 2}
                                y={(start.y + end.y) / 2}
                                fill={color}
                                fontSize="12"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontWeight="bold"
                            >
                                {rel.label}
                            </text>
                        </g>
                    );
                })}
            </svg>

            {/* HTML Layer for Nodes (Images) */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none' }}>
                {allNodes.map((char) => {
                    const pos = getCoords(char.id);
                    // Adjust for responsive scaling if needed, but for now we use absolute pixels matching SVG viewBox
                    // To make it responsive, we'd need more complex logic, but let's stick to the fixed viewBox ratio for simplicity or just center it.
                    // Actually, mixing SVG viewBox and HTML absolute positioning can be tricky if the container scales.
                    // Let's try to keep it simple: The container is max 1000px, but the SVG is 800x600.
                    // We should probably render nodes INSIDE SVG using <foreignObject> or just use SVG images.
                    // SVG images are safer for alignment.
                    return null;
                })}
            </div>

            {/* Re-implementing Nodes inside SVG for perfect alignment */}
            <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} style={{ position: 'absolute', top: 0, left: 0, zIndex: 2 }}>
                {allNodes.map((char) => {
                    const pos = getCoords(char.id);
                    if (!pos) return null;
                    return (
                        <g key={char.id} transform={`translate(${pos.x}, ${pos.y})`} style={{ cursor: 'pointer' }}>
                            <defs>
                                <clipPath id={`clip-${char.id}`}>
                                    <circle r="30" cx="0" cy="0" />
                                </clipPath>
                            </defs>
                            {/* Glow Effect */}
                            <circle r="32" fill="none" stroke={char.color || '#fff'} strokeWidth="2" filter="url(#glow)" />

                            {/* Image */}
                            <image
                                href={char.image}
                                x="-30" y="-30"
                                width="60" height="60"
                                clipPath={`url(#clip-${char.id})`}
                                preserveAspectRatio="xMidYMid slice"
                            />

                            {/* Label Background */}
                            <rect x="-50" y="35" width="100" height="24" rx="12" fill="rgba(0,0,0,0.8)" stroke={char.color || '#fff'} strokeWidth="1" />

                            {/* Label Text */}
                            <text y="52" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="bold" style={{ textTransform: 'uppercase' }}>
                                {char.name.split(' ')[0]}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};

export default RelationshipMap;
