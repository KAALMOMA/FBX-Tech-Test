'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Enterprise() {
  useEffect(() => {
    document.body.classList.add('fade-in');
  }, []);

  return (
    <>
      {/* Removed Animated Background container from here */}
      <div className="home-desktop-1440-px">
        <Header />
        {/* Hero Stack 1 */}
        <div className="stack-11" style={{ padding: '130px 30px 130px 30px' }}>
          <div className="hero-text">
            <div className="hero-main" style={{fontSize: '70px', lineHeight: '60px', fontWeight: '900'}}>Enterprise</div>
            <div className="hero-sub" style={{fontSize: '30px', lineHeight: '36px', fontWeight: '800', color: '#3d3d3d'}}>
              At FBX Technologies, we understand that preparing students for a rapidly evolving, technology-driven world starts with providing them with the right tools—and the right opportunities. That's why we've developed a comprehensive, scalable solution designed to make hands-on STEM learning more accessible, equitable, and impactful.<br /><br />
              Whether you're a school district, nonprofit, educational institution, or organization focused on workforce development, FBX offers an all-in-one ecosystem of robotics kits, 3D printers, and project-based curricula built to equip learners with real-world technical skills— and inspire them to build, explore, and innovate.
            </div>
          </div>
        </div>
        {/* Hero Stack 2 */}
        <div className="stack-11" style={{ padding: '30px 30px 30px 30px' }}>
          <div className="hero-text">
            <div className="hero-main">What we Offer</div>
            <div className="hero-sub">
              At FBX Technologies, we understand that preparing students for a rapidly evolving, technology-driven world starts with providing them with the right tools—and the right opportunities. That's why we've developed a comprehensive, scalable solution designed to make hands-on STEM learning more accessible, equitable, and impactful.<br /><br />
              Whether you're a school district, nonprofit, educational institution, or organization focused on workforce development, FBX offers an all-in-one ecosystem of robotics kits, 3D printers, and project-based curricula built to equip learners with real-world technical skills— and inspire them to build, explore, and innovate.
            </div>
          </div>
        </div>
        {/* Stack 2 */}
        <div className="stack-7">
          <div className="stack-7-text">
            Our roots lie in <b>Funbotics,</b> a 501(c)(3) nonprofit organization dedicated to introducing STEM education to middle schoolers- particularly those from communities typically underrepresented in STEM- to <b>prepare them for success in a technology-driven world.</b> Funbotics has reached thousands of students through hands-on robotics programs, free 3D printer giveaways, and university-led initiatives <b>across the country.</b>
          </div>
          <div className="image-frame">
            <Image className="funbotics-img" src="/images/funbotics-1.jpg" alt="Funbotics" width={600} height={400} />
          </div>
        </div>
        {/* Stack 3 */}
        <div className="stack-8">
          <div className="stack-8-text">
            Building on this impact, FBX Technologies was founded to take the mission further- by creating high-quality, affordable tools that spark curiosity and develop real-world skills in students and educators alike. We design and manufacture our own robotics kits, 3D printers, and project-based curricula, each built from the ground up to be <b>intuitive, inspiring, and ready for learning- whether in a classroom, at home, or in a makerspace.</b>
          </div>
        </div>
        {/* Stack 4 */}
        <div className="stack-9">
          <div className="stack-9-text">
            We believe that hands-on learning drives deep understanding. That's why every product we offer is accompanied by a thoughtfully crafted, <b>project-driven curriculum</b>
            that challenges students to think creatively, solve problems, and build tangible outcomes they can be proud of.
          </div>
          <div className="image-frame">
            <Image className="about-us-img" src="/images/about-us-img2.png" alt="About Us" width={600} height={400} />
          </div>
        </div>
        {/* Quote Stack */}
        <div className="stack-10">
          <Image className="pranav-photo" src="/images/pranav-photo.png" alt="Pranav Avasarala" width={200} height={200} />
          <div className="stack-10-quote">
            <div className="stack-10-main-text">
              "<em>From our nonprofit roots to our technology-forward tools, FBX is committed to shaping a future where STEM education is not just <b>accessible</b> - but <b>transformative.</b></em>"
            </div>
            <div className="stack-10-quote-credit">
              <div className="stack-10-main-credit">
                <span className="stack-10-main-credit-span2">— Pranav Avasarala<br /></span>
                <span className="stack-10-main-credit-span3">Chief Executive Officer, 2025</span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
} 