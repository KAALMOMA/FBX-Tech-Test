'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Import the courses data (now in src/data)
import coursesData from '../../data/courses.json';

export default function Learn() {
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    document.body.classList.add('fade-in');
    setCourses(coursesData);
  }, []);

  return (
    <>
      {/* Removed Animated Background container from here */}
      <div className="home-desktop-1440-px">
        <Header />
        {/* Hero Stack */}
        <div className="stack-11" style={{padding: '130px 30px 90px 30px'}}>
          <div className="hero-text">
            <div className="hero-main" style={{fontSize: '70px', lineHeight: '60px', fontWeight: '900'}}>Learn</div>
            <div className="hero-sub" style={{fontSize: '30px', lineHeight: '36px', fontWeight: '800', color: '#3d3d3d'}}>Dive into our full collection of lessons and projects, all in one place.</div>
          </div>
          <div className="image-frame">
            <Image className="git-note-book-0" src="/images/git-note-book0.png" alt="Notebook" width={284} height={300} />
          </div>
        </div>

        {/* Courses */}
        <div id="courses-container">
          {courses.map((course, idx) => (
            <div className="course" key={idx}>
              {/* Course Title with Link */}
              <div className="course-title">
                <a className="course-anchor" href={course.link} target="_blank" rel="noopener noreferrer">
                  {course.title}
                  <Image className="icon-external-link" src="/images/icon-external-link0.svg" alt="External Link" width={20} height={20} />
                </a>
              </div>
              {/* Subtitle */}
              <div className="course-subtitle">{course.subtitle}</div>
              {/* Colored Divider */}
              <div className="color-div-small"></div>
              {/* Sections */}
              {course.sections.map((section: any, sidx: number) => (
                <div key={sidx}>
                  <div className="subsection">{section.name}</div>
                  <div className="modules">
                    {section.modules.map((module: any, midx: number) => (
                      <a className="module" href={module.link} target="_blank" rel="noopener noreferrer" key={midx}>
                        <Image className="gear" src="/images/gear.png" alt="Gear" width={32} height={32} />
                        <div className="module-title">{module.title}</div>
                        <div><Image className="icon-external-link" src="/images/icon-external-link0.svg" alt="External Link" width={20} height={20} /></div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Supplementary Material Stack */}
        <div className="stack-13">
          <div className="supplementary-material">Supplementary Material</div>
        </div>
        <div className="stack-14">
          <div className="coming-soon">Coming soon!</div>
        </div>
        <Footer />
      </div>
    </>
  );
} 