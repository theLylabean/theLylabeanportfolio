import { useNavigate } from "react-router-dom"
import selfie from '../pictures/me.jpeg';
import '../css/home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <main>
                <img src={ selfie } />
                    <h2><u>Welcome to My Page!</u></h2>
                        <p class="intro">
                            My name is Lyla Lynn and I am a full-stack web developer graduating July 24, 2025! I love to create beautiful and functional websites. I am passionate about technology and I am always looking for new ways to improve my skills. I am excited to share my work with you and I hope you enjoy it!
                        </p>
                    <h3 className="quote">
                        "Ask yourself what is really important, and then have the wisdom and courage to build your life around your answer." - Lee Jampolsky
                    </h3>
            </main>
        </>
    )
}

export default Home