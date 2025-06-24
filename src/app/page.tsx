'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    document.body.classList.add('fade-in');
  }, []);

  return (
    <>
      {/* Removed Animated Background container from here */}
      <div className="home-desktop-1440-px">
        <Header />

        {/* Hero Stack */}
        <div className="stack-1">
          <div className="hero-text">
            <div className="hero-text-main">
              <span className="hero-text-main text-stroke">Empowering the Next Generation of </span>
              <span className="hero-text-stylized text-stroke" style={{ fontFamily: "'Lacquer', system-ui, sans-serif" }}>Makers</span>
            </div>
            <div className="hero-text-sub" style={{color: '#3d3d3d'}}>
              Robotics kits, 3D printers, and hands-on curricula to bring STEM learning to life.
            </div>
          </div>
          <Image 
            className="tools-graphic" 
            src="/images/tools-graphic0.png" 
            alt="Tools Graphic"
            width={600}
            height={400}
          />
        </div>

        {/* "What is FBX?" Stack */}
        <div className="stack-2">
          <div className="stack-2-main">What is FBX?</div>
          <div className="stack-2-sub">
            FBX Technologies is a <b>STEM-focused company</b> dedicated to creating <b>accessible, high-quality tools</b> for <b>skills-based education.</b> We design and manufacture our own <b>robotics kits, 3D printers,</b> and
            <b>supporting curricula,</b> all built to inspire creativity and technical skills in students and educators alike. Each product is accompanied by a carefully tailored curriculum to provide a complete, project-driven
            learning experience- whether in the classroom, at home, or in a makerspace.
          </div>
          <Link href="/about" className="button-special2">About Us</Link>
        </div>

        {/* Vertical Space */}
        <div style={{ height: '100px' }}></div>

        {/* Shop Stack */}
        <div className="stack">
          <div className="text-frame">
            <div className="stack-main">Robotics Kits, 3D Printers, and the Parts to Build Them</div>
            <div className="stack-sub">Complete kits, high-quality printers, and individual parts- everything you need to repair and expand your STEM projects.</div>
            <div className="button-special2">Shop</div>
          </div>
          <div className="image-frame">
            <Image 
              className="robot-and-printer" 
              src="/images/robot-and-printer0.png" 
              alt="Robot and Printer"
              width={600}
              height={400}
            />
          </div>
        </div>

        {/* Learn Stack */}
        <div className="stack">
          <div className="image-frame">
            <Image 
              className="git-note-book" 
              src="/images/git-note-book0.png" 
              alt="Git Note Book"
              width={600}
              height={400}
            />
          </div>
          <div className="text-frame">
            <div className="stack-main">Interactive Learning Backed by Step-by-Step Guides</div>
            <div className="stack-sub">Each FBX robotics kit and 3D printer comes with its own easy-to-follow, project-based lessons that make teaching and learning STEM concepts simple and effective.</div>
            <Link className="button-special2" href="/learn">Learn</Link>
          </div>
        </div>

        {/* Vertical Space */}
        <div style={{ height: '75px' }}></div>

        {/* Contact Us Stack */}
        <div className="stack-5">
          <div className="stack-5-main">Interested in Working With Us?</div>
          <div className="stack-5-sub">
            We're always excited to collaborate with schools, educational programs, and organizations that share our mission of making STEM education more engaging and accessible. Whether you're looking to bring robotics and 3D 
            printing into your classroom, or explore custom partnership opportunities, FBX Technologies is here to support your goals. Reach out to start a conversation- we'd love to hear how we can work together.
          </div>
          <Link className="button-special2" href="/contact/general">Contact Us</Link>
        </div>

        <Footer />
      </div>
    </>
  );
} 