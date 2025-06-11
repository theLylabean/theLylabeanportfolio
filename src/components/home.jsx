import { useNavigate } from "react-router-dom"
import selfie from '../pictures/me.jpeg';
import '../css/home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <nav>
                <div class="logo">
                    <h1>Lyla Lynn</h1>
                </div>
                <div class="links">
                    <a href="index.html">Home</a>
                    <a href="aboutme.html">About Me</a>
                    <a href="portfolio.html">Portfolio</a>
                </div>
            </nav>
            <div>
                <img id='selfimg' src={ selfie } />
                <h2><u>Welcome to My Page!</u></h2>
                <p class="intro">My name is Lyla Lynn and I am a full-stack web developer graduating July 24, 2025! I love to create beautiful and functional websites. I am passionate about technology and I am always looking for new ways to improve my skills. I am excited to share my work with you and I hope you enjoy it!</p>
                <h3 class="quote">"Ask yourself what is really important, and then have the wisdom and courage to build your life around your answer." - Lee Jampolsky</h3>
            </div>
            <footer>
                <p class="footer">&copy; 2025 Lyla Lynn (hehe 🤭)</p>
            </footer>
        </>
    )
}

export default Home