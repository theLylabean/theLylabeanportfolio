import wolfie from '../pictures/wolfie.jpeg';
import salem from '../pictures/salem.jpeg';
import jaskier from '../pictures/jaskier.jpeg';
import buu from '../pictures/buu.jpeg';
import me2 from '../pictures/me2.jpeg';
import axe from '../pictures/axe.mov';
import '../css/aboutme.css';

const Aboutme = () => {
  return (
    <>
        <div className='aboutme-header-container'>
            <div className='about-me-header'>
                <h2><u>About Me</u></h2>
            </div>
        </div>
        <div className='about-me-container'>
            <main className="about-me">
                <p>
                    I'm a tech-savvy, fantasy-fueled, and delightfully unconventional developer with a background in music education, a passion for storytelling, and a love of all things weird and wonderful.
                </p>
                <p>
                    Whether it’s inclusive community spaces, chaotic duck carts, or immersive fantasy tools, I build web apps that spark joy, solve real problems, and aren’t afraid to stand out.
                </p>
                <p>
                    Built to break the mold — and then debug it.
                </p>
            </main>
        </div>

        {/* CATS */}
        <main className='aboutme-main'>
            <section className="cats">
                <div className="section-header">
                    <h2><u>Cats</u></h2>
                    <p>
                        I have 4 cats and their names are Wolfie, Salem, Jaskier, and Majin Buu.
                    </p>
                </div>

                <div className="cat-rows">
                {/* Wolfie */}
                <div className="cat-row">
                    <div className="cat-text">
                        <h2><u>Mr. Wolfie 'Conehead' Wiggles Lynn</u></h2>
                    <p>
                        Wolfie turned the big 10 this year! He was born with an infection in his eyes that caused one of them to fall out and the other to be completely blind in. He is the sweetest little man. His purrs can get so loud! Unfortunately, he also has trouble with a tummy sensitivity so he gets special food but that doesn't stop him from trying to eat everything that falls on the kitchen floor! He was the first of our cats to ever have to have a cone (when he got fixed), so we started calling him Conehead. 🤣 This eventually evolved into calling him Puppyhead somehow! He has the softest fur I've ever felt. I could give him belly rubs all day. He simply cannot get enough belly rubs or chin scritches! He loves throwing himself on the floor and rolling around so we will pet his belly or give him treats. 🥹 He can also catch a fly out of thin air! 😎
                    </p>
                    </div>
                    <img className="cat-image" src={wolfie} alt="Wolfie the cat" />
                </div>

                {/* Salem */}
                <div className="cat-row">
                    <img className="cat-image" src={salem} alt="Salem the cat" />
                    <div className="cat-text">
                        <h2><u>Salem Morty Lynn</u></h2>
                    <p>
                        Say Say Buggie Boi just turned 7 this month and he is the most mischievous of the bunch. He is a black cat. He is the best cuddle bug of all 3. He demands pets at all times and will even knock your phone out of your hand just to say "Hey! Pet me right meow!" Salem is the most vocal and will meow at you if you meow back at him! 🥰 He is the most likely to try and steal your food if you aren't looking and escape out the front door if you aren't careful! He's the reason all 3 of our cats now have AirTags on their collars! Sometimes, Salem decides he wants to burrow under the covers and we can't find him for hours! We've learned to check under the covers before we lay down on the bed. 😅 He wants to go in the bathroom when we're taking a shower but then he just yells at us the entire time and wants to leave like it wasn't his idea to go in there. 🙄
                    </p>
                    </div>
                </div>

                {/* Jaskier */}
                <div className="cat-row">
                    <div className="cat-text">
                        <h2><u>Jaskier Cibabatta Lynn</u></h2>
                    <p>
                        Jaskybean just turned 2 in June and he is the most amount of energy I've ever had in a cat! He is a white and orange menace! He loves to play and sometimes annoys the other cats when they don't want to play but he does. 🤭 We got Jaskier after my soulmate and best friend, Sunny, passed away. My husband picked out Jaskier as a little 4-month-old who was trying to eat his shoelaces at the animal shelter. 🥹 He has the same striping on his tail that Sunny had and we think Sunny led us to this sweet and amazing little ball of fur. We see so much of Sunny in him. He's the typical cat who only likes things if it's his idea. Even if he wants to sit somewhere or play with something but you put him there first, he's not interested. 😂 Jaskier really helped us heal our hearts and we thank Sunny every day for him.
                    </p>
                    </div>
                    <img className="cat-image" src={jaskier} alt="Jaskier the cat" />
                </div>

                {/* Majin Buu */}
                <div className="cat-row">
                    <img className="cat-image" src={buu} alt="Majin Buu the cat" />
                    <div className="cat-text">
                        <h2><u>Majin Buu Lynn</u></h2>
                    <p>
                        'Little Buu,' as we call him, is the newest member of our family and he is pure chaos in a pink jellybean body! He's turning 1 at the end of July! He grew up on the streets in my hometown at my dad's house. I came to visit my dad and help him with some things and there was a wildfire that was racing towards town, right for my dad's house! Luckily, Buu and his mama were already inside with us when we got evacuated so we took them along for the ride and slept in our cars with them all night! They did pretty good. After that, I couldn't bear the thought of this tiny little man being alone here so I took him with me to Tulsa! His mama still runs around the park across the street from my dad's house and has the sweetest little meow! 😻 Buu is an absolute menace. He hasn't gotten much bigger (if at all) since I brought him home, but he sure makes enough noise for 3 cats just by himself! He loves to bite and bunny kick while he plays and then he looks at you with the sweetest little face and starts purring for belly pets. 🥰 He's my sweet little shadow and I wouldn't have him any other way!
                    </p>
                    </div>
                </div>
                </div>
            </section>
        </main>

        {/* VIDEO GAMES */}
        <main className='aboutme-main'>
            <section className="video-games">
                <div className="section-header">
                    <h2><u>Video Games</u></h2>
                    <p>
                        Pretty cool Mass Effect Monopoly, amiright?! 
                    </p>
                </div>

                <div className="side-by-side reverse">
                <img className="me2" src={me2} alt="Mass Effect 2" />
                <div>
                    <p>
                    I love playing video games! I have been playing video games since I was a kid. I enjoy playing a variety of games, from RPGs to shooters to puzzle games. Some of my favorite games include the original Mass Effect Trilogy, No Man's Sky, Brotato, the Civilization games, and The Sims. I love getting lost in a good story and exploring new worlds. I also enjoy playing games with my friends and family. I am always looking for new games to play and I am excited to see what the future holds for the gaming industry.
                    </p>
                </div>
                </div>
            </section>
        </main>

        {/* AXE THROWING */}
        <main className='aboutme-main'>
            <section className="axe">
                <div className='section-header'>
                    <h2><u>Axe Throwing</u></h2>
                    <p>
                        Watch me nail a bullseye in the video below!
                    </p>
                </div>
                <div className="side-by-side reverse">
                    <div>
                        <p>
                        I discovered axe and knife throwing in 2018 and I loved it! I didn't discover <i>competitive</i> axe throwing until the end of 2022 and I've been throwing in leagues and tournaments ever since. I love the thrill of hitting the target exactly where I want it to. It is a great way to relieve stress and the <b><u>BEST PART</u></b> is having fun throwing with friends! That's why, in this video, you can see this amazing axe target my wonderful husband built for me so I can practice any time I want! My main event is knives, where I won 3rd place in a tournament in July 2024! I have been practicing my technique and I hope to compete in the World Axe and Knife Throwing Championship someday!
                        </p>
                    </div>
                    <video className="bullseye" width="169" height="299" controls>
                        <source src={ axe } type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
        </main>
    </>
  );
};

export default Aboutme;
