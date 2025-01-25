import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { scriptures } from '../data/scriptureData';

const getRandomScripture = () => {
    const randomIndex = Math.floor(Math.random() * scriptures.length);
    return scriptures[randomIndex];
};

const ScriptureLoader = () => {
    const [currentScripture, setCurrentScripture] = useState(getRandomScripture());
    const scriptureRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentScripture(getRandomScripture());
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (scriptureRef.current) {
            gsap.fromTo(scriptureRef.current, 
                { opacity: 0, y: 50 }, 
                { opacity: 1, y: 0, duration: 1, delay: 1 }
            );
        } else {
            console.error('Scripture element not found');
        }
    }, [currentScripture]);

    return (
        <div ref={scriptureRef} className="bg-orange-600 text-white py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-semibold mb-6">Daily Scripture</h2>
                <p className="text-xl italic mb-4">{currentScripture.verse}</p>
                <p className="text-lg">{currentScripture.reference}</p>
            </div>
        </div>
    );
};

export default ScriptureLoader;