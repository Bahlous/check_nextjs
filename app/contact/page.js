import "../styles/ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <p className="contact-intro">
        If you&apos;d like to get in touch, feel free to reach out via the form or through my social media!
      </p>
      <form className="contact-form">
        <label className="contact-label">Name</label>
        <input type="text" placeholder="Your Name" required className="contact-input" />
        <label className="contact-label">Email</label>
        <input type="email" placeholder="Your Email" required className="contact-input" />
        <label className="contact-label">Message</label>
        <textarea placeholder="Your Message" required className="contact-textarea"></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
      <div className="social-links" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px" }}>
      <a href="https://www.linkedin.com/in/youssef-bahlous-0a1309324/" target="_blank" aria-label="LinkedIn">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.23 0H1.77C0.79 0 0 0.77 0 1.72v20.56C0 23.23 0.79 24 1.77 24h20.46c0.98 0 1.77-0.77 1.77-1.72V1.72C24 0.77 23.21 0 22.23 0zM7.06 20.45H3.56V9H7.06v11.45zM5.31 7.56c-1.12 0-2.03-0.9-2.03-2.02s0.91-2.02 2.03-2.02 2.02 0.9 2.02 2.02-0.91 2.02-2.02 2.02zm15.14 12.89h-3.5v-5.57c0-1.33-0.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67h-3.5V9h3.36v1.56h0.05c0.47-0.88 1.61-1.81 3.32-1.81 3.55 0 4.2 2.33 4.2 5.35v6.35z"/>
  </svg>
</a>
<a href="https://github.com/Bahlous" target="_blank" aria-label="GitHub">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#181717" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.21 11.39 0.6 0.11 0.82-0.26 0.82-0.58 0-0.28-0.01-1.03-0.02-2.02-3.34 0.73-4.04-1.61-4.04-1.61-0.55-1.39-1.34-1.76-1.34-1.76-1.1-0.75 0.08-0.74 0.08-0.74 1.22 0.09 1.86 1.26 1.86 1.26 1.08 1.85 2.84 1.32 3.53 1.01 0.11-0.78 0.42-1.32 0.76-1.62-2.67-0.3-5.47-1.34-5.47-5.95 0-1.32 0.47-2.4 1.24-3.25-0.12-0.3-0.54-1.52 0.12-3.17 0 0 1.01-0.32 3.3 1.24a11.5 11.5 0 0 1 3-0.4c1.02 0 2.05 0.14 3 0.4 2.29-1.56 3.3-1.24 3.3-1.24 0.66 1.65 0.24 2.87 0.12 3.17 0.77 0.85 1.24 1.93 1.24 3.25 0 4.62-2.81 5.65-5.48 5.95 0.43 0.37 0.82 1.1 0.82 2.22 0 1.6-0.02 2.88-0.02 3.28 0 0.32 0.22 0.7 0.83 0.58 4.77-1.59 8.21-6.08 8.21-11.39C24 5.67 18.63 0.3 12 0.3z"/>
  </svg>
</a>
<a href="https://www.instagram.com/youssef_bahlous/?hl=fr" target="_blank" aria-label="Instagram">
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="insta-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="50%" stopColor="#DD2A7B" />
          <stop offset="100%" stopColor="#8134AF" />
        </linearGradient>
      </defs>
      <path
        fill="url(#insta-gradient)"
        d="M7.5 2C4.42 2 2 4.42 2 7.5v9C2 19.58 4.42 22 7.5 22h9c3.08 0 5.5-2.42 5.5-5.5v-9C22 4.42 19.58 2 16.5 2h-9zM12 7.5c2.48 0 4.5 2.02 4.5 4.5s-2.02 4.5-4.5 4.5-4.5-2.02-4.5-4.5S9.52 7.5 12 7.5zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM17.5 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
      />
    </svg>
  </a>
  <a href="https://www.facebook.com/profile.php?id=100004848878309" target="_blank" aria-label="Facebook">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg" >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325v21.351C0 23.407 0.593 24 1.325 24h11.495v-9.294H9.428v-3.622h3.392V8.41c0-3.362 2.053-5.193 5.055-5.193 1.436 0 2.67 0.107 3.027 0.155v3.507H18.78c-1.695 0-2.023 0.805-2.023 1.985v2.602h4.06l-0.529 3.622h-3.531V24h6.91C23.407 24 24 23.407 24 22.676V1.325C24 0.593 23.407 0 22.675 0z"
      />
    </svg>
  </a>
      </div>
    </div>
  );
}