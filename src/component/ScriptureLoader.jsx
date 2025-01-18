import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { currentScripture } from '../data/scriptureData';

const ScriptureLoader = () => {
    const scriptureRef = useRef(null);

    useEffect(() => {
        if (scriptureRef.current) {
            gsap.fromTo(scriptureRef.current, 
                { opacity: 0, y: 50 }, 
                { opacity: 1, y: 0, duration: 1, delay: 1 }
            );
        } else {
            console.error('Scripture element not found');
        }
    }, []);

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