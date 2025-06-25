'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function EnterpriseInquiry() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    role: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    document.body.classList.add('fade-in');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      // Simulate successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        organization: '',
        role: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Removed Animated Background container from here */}
      <div className="home-desktop-1440-px">
        <Header />
        {/* Hero Stack */}
        <div className="stack-11" style={{padding: '150px 30px 90px 30px'}}>
          <div className="hero-text">
            <div className="hero-main" style={{fontSize: '70px', lineHeight: '70px', fontWeight: '900'}}>Enterprise Inquiries</div>
            <div className="hero-sub" style={{fontSize: '30px', lineHeight: '36px', fontWeight: '800', color: '#3d3d3d'}}>Interested in partnering with us? Reach out to schedule a meeting and explore collaboration opportunities.</div>
          </div>
          <div className="image-frame">
            <Image className="git-note-book-0" src="/images/git-note-book0.png" alt="Notebook" width={284} height={300} />
          </div>
        </div>
        {/* Inquiry Form */}
        <div className="stack-5">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="short-input-format">
              <label htmlFor="fullName" className="input-field-text-preview">Full Name*</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
            <div className="short-input-format">
              <label htmlFor="email" className="input-field-text-preview">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
            <div className="short-input-format">
              <label htmlFor="organization" className="input-field-text-preview">Organization / Company Name*</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
            <div className="short-input-format">
              <label htmlFor="role" className="input-field-text-preview">Role / Title*</label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
            <div className="short-input-format">
              <label htmlFor="subject" className="input-field-text-preview">Subject / Reason for Meeting*</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
            <div className="long-input-format">
              <label htmlFor="message" className="input-field-text-preview">Additional Notes or Questions</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                rows={6}
              />
            </div>
            <div className="form-submit-area">
              <button
                type="submit"
                className="button-special2"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
              <div className="input-field-text-preview">*Required fields.</div>
            </div>
            {submitStatus === 'success' && (
              <div className="success-message">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="error-message">
                There was an error submitting your message. Please try again.
              </div>
            )}
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
} 