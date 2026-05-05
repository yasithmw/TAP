'use client';
import Image from 'next/image';
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, TiktokLogoIcon } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot">
          <div className="foot-logo">
            <Image src="/Primary.svg" alt="TAP" width={40} height={40} />
            The Artist Platform
          </div>
          <div className="foot-links">
            <div className="foot-connect">
              <span className="foot-connect-label">Connect with us</span>
              <a href="mailto:support@theartistplatform.com.au" className="foot-email">support@theartistplatform.com.au</a>
            </div>
            <div className="foot-social">
              <a href="#" aria-label="Facebook"><FacebookLogoIcon size={20} weight="light" /></a>
              <a href="#" aria-label="Instagram"><InstagramLogoIcon size={20} weight="light" /></a>
              <a href="#" aria-label="LinkedIn"><LinkedinLogoIcon size={20} weight="light" /></a>
              <a href="#" aria-label="TikTok"><TiktokLogoIcon size={20} weight="light" /></a>
            </div>
          </div>
        </div>
        <div className="foot-meta">
          <span>© 2026 The Artist Platform · Sydney, Australia</span>
          <span>Designed &amp; Developed By <a href="https://kainovation.com" target="_blank" rel="noopener noreferrer" style={{color: '#fff', fontWeight: 700}}>Kainovation Ltd.</a></span>
        </div>
      </div>
    </footer>
  );
}
