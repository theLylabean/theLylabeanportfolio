import { useNavigate } from "react-router-dom"
import selfie from '../pictures/me.jpeg';
import '../css/home.css';

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/portfolio');
    }

    return (
        <>
            <main className="home">
                <img src={ selfie } />
                    <section className="hero">
                        <h1>Lyla Lynn</h1>
                        <h2>Pixels, passion, and a bit of chaos.</h2>
                        <p>Full Stack Developer | Creative Rebel | Quirky Human</p>
                        <a onClick={ handleClick } className="cta">See My Work</a>
                    </section>
                    <h3 className="quote">
                        "Ask yourself what is really important, and then have the wisdom and courage to build your life around your answer." - Lee Jampolsky
                    </h3>
            </main>
        </>
    )
}

export default Home