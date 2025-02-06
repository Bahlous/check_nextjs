import Link from 'next/link';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link href="/">Home</Link></li>
        <li className="navbar-item"><Link href="/about">About</Link></li>
        <li className="navbar-item"><Link href="/projects">Projects</Link></li>
        <li className="navbar-item"><Link href="/skills">Skills</Link></li>
        <li className="navbar-item"><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}