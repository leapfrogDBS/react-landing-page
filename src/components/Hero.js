/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useRef } from 'react';
import wordpressLogo from '../images/wordpress.png'; 
import figmaLogo from '../images/figma.png'; 
import Typewriter from 'typewriter-effect';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';

export default function Hero() {
    const myRef = useRef(null);
    let vantaEffect;
  
    useEffect(() => {
    vantaEffect = WAVES({
        el: myRef.current,
        THREE: THREE,
        color: 0x7F007F,
        shininess: 30,
        waveHeight: 15,
        waveSpeed: 1,
        zoom: 1.2,
        minHeight: 200.00,
        minWidth: 200.00
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);
      
  return (
    <section className="text-white body-font hero-section" ref={myRef}>
        <div className="container mx-auto px-5 py-24 flex flex-col items-center justify-center">
            <div className="flex items-center mb-8 gap-x-6">
                <img 
                    className="h-32 animate-float-reverse" 
                    alt="Figma" 
                    src={figmaLogo} 
                />
            <img
                className="h-32 animate-float"
                alt="WordPress"
                src={wordpressLogo}
            /> 
            </div>

            <div className="text-center mt-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2"> 
                <Typewriter
                    options={{
                        strings: ['Responsive', 'Fast Loading', 'SEO Optimised'],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                    }}
                />
                </h2>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 relative">
                    Figma to WordPress
                    <span className="underline-effect"></span>
                </h1>
                <p className="text-lg leading-relaxed mb-8">
                Let us bring your designs to life with our expertise in creating custom WordPress themes tailored to your unique requirements.
                </p>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
                    Shedule a meeting
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
}
