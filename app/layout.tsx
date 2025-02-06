import './styles/RootLayout.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Portfolio</title>
        <meta 
          name="description" 
          content="I am a Front-End Developer specializing in React, Next.js, and more. Explore my projects and skills!" 
        />
        <meta 
          name="keywords" 
          content="portfolio, front-end developer, React, Next.js, JavaScript, HTML, CSS" 
        />
        <meta name="author" content="Youssef Bahlous" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main className="content">{ children }</main>
        <Footer />
      </body>
    </html>
  );
}
