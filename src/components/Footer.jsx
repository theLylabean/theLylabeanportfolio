import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Lyla Lynn (hehe 🤭)</p>
      <a href="mailto:lyladlynn@gmail.com" className="email-button">
        📧 Email Me
      </a>

      <div className="social-links">
        <a href="https://github.com/theLylabean" target="_blank" rel="noopener noreferrer">
          My GitHub
        </a>
        <a href="https://linkedin.com/in/lyladlynn" target="_blank" rel="noopener noreferrer">
          My LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
