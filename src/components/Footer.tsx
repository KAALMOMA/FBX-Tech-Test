import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="footer">
      <div className="social-media">
        <a href="https://www.instagram.com/fbxtechnologies/"><Image className="instagram" src="/images/instagram-icon.svg" alt="Instagram" width={32} height={32} /></a>
        <a href="https://www.facebook.com/fbxtechnologies/"><Image className="facebook" src="/images/facebook-icon.svg" alt="Facebook" width={32} height={32} /></a>
        <a href="https://www.linkedin.com/company/fbxtechnologies/"><Image className="linked-in" src="/images/linkedin-icon.svg" alt="LinkedIn" width={32} height={32} /></a>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <div className="footer-bold">Shop</div>
          <div className="footer-regular">Robot Kits</div>
          <div className="footer-regular">Printers</div>
          <div className="footer-regular">Parts</div>
        </div>
        <div className="footer-column">
          <div className="footer-bold">Info</div>
          <div className="footer-regular">FAQs</div>
          <div className="footer-regular">Shipping</div>
          <div className="footer-regular">Returns</div>
        </div>
        <div className="footer-column">
          <div className="footer-bold">Contact</div>
          <div className="footer-regular">Support</div>
          <div className="footer-regular">Email</div>
          <div className="footer-regular">Social</div>
        </div>
      </div>
    </div>
  );
} 