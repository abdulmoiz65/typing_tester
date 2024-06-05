import React, { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';


import { gsap } from 'gsap';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';

const Home = () => {
//   const headerRef = useRef(null);
  const typewriterRef = useRef(null);
  const buttonRef = useRef(null);
  const footerRef = useRef(null);
  const alphabetContainerRef = useRef(null);

  useEffect(() => {
    // Header animation
    // gsap.from(headerRef.current, { opacity: 0, y: -50, duration: 3, ease: 'power3.out' });
    
    // Footer animation
    gsap.from(footerRef.current, { opacity: 0, y: 50, duration: 1, ease: 'power3.out' });

    // Typewriter animation
    gsap.from(typewriterRef.current, { opacity: 0, duration: 1, delay: 1, ease: 'power3.Out' });

    // Button heartbeat animation
    gsap.fromTo(buttonRef.current,
      { scale: 1 },
      { scale: 1.1, duration: 0.5, yoyo: true, repeat: -1, ease: 'power1.inOut' }
    );

    // Create falling alphabet animation
    const alphabetLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < 20; i++) {
      const letter = document.createElement('span');
      letter.textContent = alphabetLetters.charAt(Math.floor(Math.random() * alphabetLetters.length));
      letter.style.position = 'absolute';
      letter.style.left = `${Math.random() * 100}%`;
      letter.style.animationDuration = `${Math.random() * 10 + 5}s`; // Adjusted duration for slower falling (from 5s to 15s)
      letter.style.opacity = 0;
      alphabetContainerRef.current.appendChild(letter);

      gsap.to(letter, {
        top: '100%',
        opacity: 1,
        y: '0%', // Move back to original position
        delay: Math.random() * 3,
        repeat: -1,
        yoyo: true,
        duration: 2, // Adjusted duration for slower movement back
        ease: 'power1.inOut' // Adjusted ease for smoother movement
      });
    }
  }, []);

  return (
    <div className="container">
     
      <main className="main-content">
      
      <div class="typing">Learn to type faster and easier.</div>
       
        <div className="button-container">
          <Link to={"/Typingmaster"}><button className="start-button" ref={buttonRef}>Start Test</button></Link>
        </div>
      </main>
      <footer className="footer" ref={footerRef} >
        <p>© 2024 Typing Speed Tester</p>
      </footer>
      <div className="alphabet-container" ref={alphabetContainerRef}></div>
    </div>
  );
};

export default Home;
