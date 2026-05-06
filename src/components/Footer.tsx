'use client';
import Image from 'next/image';
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot">
          <div className="foot-logo">
            <Image src="/Variation1.svg" alt="TAP" width={40} height={40} />
            The Artist Platform
          </div>
          <div className="foot-links">
            <div className="foot-connect">
              <span className="foot-connect-label">Connect with us</span>
              <a href="mailto:support@theartistplatform.com.au" className="foot-email">support@theartistplatform.com.au</a>
            </div>
            <div className="foot-social">
              <a href="https://www.facebook.com/profile.php?id=61576423880028" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FacebookLogoIcon size={20} weight="light" /></a>
              <a href="https://www.instagram.com/theartistplatform/?hl=en" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><InstagramLogoIcon size={20} weight="light" /></a>
              <a href="https://www.linkedin.com/company/the-artist-platform/?viewAsMember=true" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><LinkedinLogoIcon size={20} weight="light" /></a>
            </div>
          </div>
        </div>
        <div className="foot-meta">
          <span>© 2026 The Artist Platform · Sydney, Australia</span>
          <span>Designed &amp; Developed By <a href="https://kainovation.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontWeight: 700 }}>Kainovation Ltd.</a></span>
        </div>
      </div>
    </footer>
  );
}
