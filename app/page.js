import Link from 'next/link';
import './styles/HomePage.css';
// import moi from './access/moi.jpg';
export default function HomePage() {
  return (
    <div className="home-container">
      <h1>Youssef Bahlous</h1>
      <p>
        I&apos;m a passionate Front-End Developer with expertise in HTML5, CSS3, JavaScript, React, and Next.js. If you want to know more about me click <a href='../about'>here</a>.
      </p>
      <p>
        Check out my <a href="https://github.com/Bahlous" target="_blank" aria-label="GitHub">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#181717" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.21 11.39 0.6 0.11 0.82-0.26 0.82-0.58 0-0.28-0.01-1.03-0.02-2.02-3.34 0.73-4.04-1.61-4.04-1.61-0.55-1.39-1.34-1.76-1.34-1.76-1.1-0.75 0.08-0.74 0.08-0.74 1.22 0.09 1.86 1.26 1.86 1.26 1.08 1.85 2.84 1.32 3.53 1.01 0.11-0.78 0.42-1.32 0.76-1.62-2.67-0.3-5.47-1.34-5.47-5.95 0-1.32 0.47-2.4 1.24-3.25-0.12-0.3-0.54-1.52 0.12-3.17 0 0 1.01-0.32 3.3 1.24a11.5 11.5 0 0 1 3-0.4c1.02 0 2.05 0.14 3 0.4 2.29-1.56 3.3-1.24 3.3-1.24 0.66 1.65 0.24 2.87 0.12 3.17 0.77 0.85 1.24 1.93 1.24 3.25 0 4.62-2.81 5.65-5.48 5.95 0.43 0.37 0.82 1.1 0.82 2.22 0 1.6-0.02 2.88-0.02 3.28 0 0.32 0.22 0.7 0.83 0.58 4.77-1.59 8.21-6.08 8.21-11.39C24 5.67 18.63 0.3 12 0.3z"/>
  </svg>
</a> and discover more about my projects and skills!
      </p>
      <img src='moi.jpg' alt="welcome" className="home-image" />
    </div>
  );
}