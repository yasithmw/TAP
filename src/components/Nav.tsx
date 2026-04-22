import Image from "next/image";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#" className="logo">
          <Image src="/TAP_Logo_Black_Circle.svg" alt="TAP" width={54} height={54} />
          <span>The Artist Platform</span>
        </a>
        <div className="nav-links">
          <a href="#problem">Why TAP</a>
          <a href="#how">How it works</a>
          <a href="#who">For whom</a>
          <a href="#waitlist" className="btn-nav">Join the waitlist</a>
        </div>
      </div>
    </nav>
  );
}
