
import React from 'react';

export const LiveIcon: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="4" fill="currentColor"/>
        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeOpacity="0.4" strokeWidth="2"/>
        <style>
            {`
                @keyframes pulse {
                    0% {
                        transform: scale(0.95);
                        stroke-opacity: 0.7;
                    }
                    70% {
                        transform: scale(1);
                        stroke-opacity: 0;
                    }
                    100% {
                        transform: scale(0.95);
                        stroke-opacity: 0;
                    }
                }
                circle:last-of-type {
                    animation: pulse 2s infinite;
                    transform-origin: center;
                }
            `}
        </style>
    </svg>
);
