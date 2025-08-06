import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Lyla Lynn (hehe 🤭)</p>
      <p>Tech-savvy, fantasy-fueled, and delightfully unconventional.</p>
      <div className="social-links">
        <a href="mailto:lyladlynn@gmail.com">
            <FaEnvelope style={{ marginRight: '6px' }} />
            Email Me
        </a>

        <a href="https://github.com/theLylabean" target="_blank" rel="noopener noreferrer">
          <FaGithub style={{ marginRight: '6px' }} />
          My GitHub
        </a>
        <a href="https://linkedin.com/in/lyladlynn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={{ marginRight: '6px' }} />
          My LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
