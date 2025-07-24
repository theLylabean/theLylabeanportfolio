import '../css/portfolio.css';
import lighthaven1 from '../appscreenshots/LightHaven1.png';
import lighthaven2 from '../appscreenshots/LightHaven2.png';
import lighthaven3 from '../appscreenshots/LightHaven3.png';
import lighthaven4 from '../appscreenshots/LightHaven4.png';
import lighthaven5 from '../appscreenshots/LightHaven5.png';
import lighthaven6 from '../appscreenshots/LightHaven6.png';
import lighthavendk1 from '../appscreenshots/LightHavenDark1.png';
import lighthavendk2 from '../appscreenshots/LightHavenDark2.png';
import lighthavendk3 from '../appscreenshots/LightHavenDark3.png';
import tasklist1 from '../appscreenshots/Tasklist1.png'
import tasklist2 from '../appscreenshots/Tasklist2.png'
import tasklist3 from '../appscreenshots/Tasklist3.png'
import tasklist4 from '../appscreenshots/Tasklist4.png'
import tasklist5 from '../appscreenshots/Tasklist5.png'
import tasklist6 from '../appscreenshots/Tasklist6.png'
import tasklistrt1 from '../appscreenshots/TasklistRoute1.png'
import tasklistrt2 from '../appscreenshots/TasklistRoute2.png'
import tasklistrt3 from '../appscreenshots/TasklistRoute3.png'
import realmforge1 from '../appscreenshots/RealmForge1.png';
import realmforge2 from '../appscreenshots/RealmForge2.png';
import realmforge3 from '../appscreenshots/RealmForge3.png';
import realmforge4 from '../appscreenshots/RealmForge4.png';
import realmforge5 from '../appscreenshots/RealmForge5.png';
import realmforge6 from '../appscreenshots/RealmForge6.png';
import realmforge7 from '../appscreenshots/RealmForge7.png';
import realmforge8 from '../appscreenshots/RealmForge8.png';
import realmforge9 from '../appscreenshots/RealmForge9.mov';


const Portfolio = () => {

    return (
        <>
            <div className='portfolio-header'>
                <h2><u>Projects</u></h2>
            </div>
            <main className='project-container'>
                <section className='project-card'>
                    <h3><u>Project LightHaven</u></h3>
                    <p>
                        This project is very personal to me. I worked with two other members to develop an app that focuses on community and inclusivity with no tolerance for hatred or harrassment. With the growing tension of the world, we wanted to make a space for everyone who ever felt unheard, unseen, or unloved; a community for anyone, whether you're a developer, artist, dog groomer, or plant enthusiast. Some of the current features include:
                    </p>
                    <ol> 
                        <li> Resource page for community members to add local and national resources. No account needed to view them. </li>
                        <li> Events page for community members to gather virtually or locally. </li>
                        <li> Posts page for community members to connect with others through discussion. </li>
                    </ol>
                    <p>
                        Some of the features to look forward to soon:
                    </p>
                    <ol>
                        <li> Ability to message other users. </li>
                        <li> Chat feature to connect to community members in different communities. </li>
                        <li> User profiles. </li>
                        <li> Tagging users in posts/comments/etc. </li>
                        <li> Searchbar to find content faster. </li>
                    </ol>
                    <div className='imgrow'>
                        <img className='image' src={ lighthaven1 } />
                        <img className='image' src={ lighthaven2 } />
                        <img className='image' src={ lighthaven3 } />
                    </div>
                    <div className='imgrow'>
                        <img className='image' src={ lighthaven4 } />
                        <img className='image' src={ lighthaven5 } />
                        <img className='image' src={ lighthaven6 } />
                    </div>
                    <div className='imgrow'>
                        <img className='image' src={ lighthavendk1 } />
                        <img className='image' src={ lighthavendk2 } />
                        <img className='image' src={ lighthavendk3 } />
                    </div>
                </section>
            </main>
            <main className='project-container'>
                <section className='project-card'>
                    <h3>🛡️<u>RealmForge</u></h3>
                    <p>
                        My most recent front-end dev project has been my D&D Character Builder. Right now, it's a very rudimentary step-by-step guide to build a D&D character. As I update this app, I will be adding more complex functions like:
                    </p>
                    <ol> 
                        <li>Building a backend component for account creation with login, account info page, and a section to show saved Characters. </li>
                        <li> Pulling equpitment from the API. </li>
                        <li> Highlighting recommended stats, spells, and equiptment for level 1 characters based on class. </li>
                        <li> The ability to export to pdf and print. </li>
                    </ol>
                    <p>
                        This project started as an extra credit assignment for class and we were given the choice to create anything we wanted. I already had several smaller projects built that could be used for this assignment; however, I decided to really dive deep in to learning new concepts to build something I'm passionate about. Some new concepts I learned at the time:
                    </p>
                    <ol>
                        <li> Step counter to use for filling out forms, making them more seemless. </li>
                        <li> Using Javascript to capitalize all words except 'and', 'or', 'the', etc. </li>
                        <li> Using Javascript to set explicit requirements for password creation along with error messages for each step based on what requirement is missing. </li>
                        <li> How to give an error message if a class was not selected and give a message if there are no spells found for that class. I also included using some method chaining (.charAt(0).toUpperCase and .slice(1)) to make sure the class name is capitalized. </li>
                    </ol>
                    <div className='imgrow'>
                        <img className='image' src={ realmforge1 } />
                        <img className='image' src={ realmforge2 } />
                        <img className='image' src={ realmforge3 } />
                    </div>
                    <div className='imgrow'>
                        <img className='image' src={ realmforge4 } />
                        <img className='image' src={ realmforge5 } />
                        <img className='image' src={ realmforge6 } />
                    </div>
                    <div className='imgrow'>
                        <img className='image' src={ realmforge7 } />
                        <img className='image' src={ realmforge8 } />
                        <img className='image' src={ realmforge9 } />
                    </div>
                </section>
            </main>
            <main className='project-container'>
                <section className='project-card'>
                    <h3><u>Tasklist</u></h3>
                    <p>
                        My most recent back-end dev project has been a task list that users can register for. There's authentication and users who are authenticated can view, add, delete, and update tasks for themselves! In this project I learned things like:
                    </p>
                    <ol> 
                        <li> Account creation with login, account info page, and a section to show saved Characters. </li>
                        <li> Pulling equpitment from the API. </li>
                        <li> Highlighting recommended stats, spells, and equiptment for level 1 characters based on class. </li>
                        <li> The ability to export to pdf and print. </li>
                    </ol>
                    <div className='imgrow'>
                        <img className='image' src={ tasklist1 } />
                        <img className='image' src={ tasklist2 } />
                        <img className='image' src={ tasklist3 } />
                    </div>
                    <div className='imgrow'>
                        <img className='image' src={ tasklist4 } />
                        <img className='image' src={ tasklist5 } />
                        <img className='image' src={ tasklist6 } />
                    </div>
                    <div className='imgrow'>
                        <img className='image' src={ tasklistrt1 } />
                        <img className='image' src={ tasklistrt2 } />
                        <img className='image' src={ tasklistrt3 } />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Portfolio;