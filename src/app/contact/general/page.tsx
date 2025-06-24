'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GeneralContact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
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
      // Here you would typically send the form data to your API
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
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
        <div className="stack-11" style={{ padding: '150px 30px 90px 30px' }}>
          <div className="hero-text">
            <div className="hero-main" style={{fontSize: '70px', lineHeight: '60px', fontWeight: '900'}}>Contact Us</div>
            <div className="hero-sub" style={{fontSize: '30px', lineHeight: '36px', fontWeight: '800', color: '#3d3d3d'}}>
              Have a question or want to learn more about our products? We'd love to hear from you.
            </div>
          </div>
        </div>
        {/* Contact Form */}
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
              <label htmlFor="subject" className="input-field-text-preview">Subject*</label>
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
              <label htmlFor="message" className="input-field-text-preview">Message*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
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