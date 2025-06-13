import '../css/portfolio.css';
import home from '../appscreenshots/Homepage.png';
import details from '../appscreenshots/CharacterDetails.png';
import final from '../appscreenshots/FinalCharacterSheet.png';

const Portfolio = () => {

    return (
        <>
            <main>
                <h2><u>Projects</u></h2>
                <section>
                    <h3>🛡️<u>RealmForge</u></h3>
                    <p>
                        My most recent project has been my D&D Character Builder. Right now, it's a very rudimentary step-by-step guide to build a D&D character. As I update this app, I will be adding more complex functions like:
                    </p>
                    <ol> 
                        <li>Account creation with login, account info page, and a section to show saved Characters. </li>
                        <li> Pulling equpitment from the API. </li>
                        <li> Highlighting recommended stats, spells, and equiptment for level 1 characters based on class. </li>
                        <li> The ability to export to pdf and print. </li>
                    </ol>
                    <p>
                        This project started as an extra credit assignment for class and we were given the choice to create anything we wanted. I already had several smaller projects built that could be used for this assignment; however, I decided to really dive deep in to learning new concepts to build something I'm passionate about. Some new concepts I learned at the time:
                    </p>
                    <ul>
                        <li> Step counter to use for filling out forms, making them more seemless. </li>
                        <li> Using Javascript to capitalize all words except 'and', 'or', 'the', etc. </li>
                        <li> Using Javascript to set explicit requirements for password creation along with error messages for each step based on what requirement is missing. </li>
                        <li> How to give an error message if a class was not selected and give a message if there are no spells found for that class. I also included using some method chaining (.charAt(0).toUpperCase and .slice(1)) to make sure the class name is capitalized. </li>
                    </ul>
                    <div className='imgrow'>
                        <img className='image' src={ home } />
                        <img className='image' src={ details } />
                        <img className='image' src={ final } />
                    </div>
                </section>
            </main>
            <main>
                <section>
                    <h3><u>Back-end Development</u></h3>
                    <p>
                        Hello!
                    </p>
                    <img className='image' src={ boop } />
                </section>
            </main>
            <main>
                <section>
                    <h4><u>Puppy Portfolio Project</u></h4>

                    This project was more of a guided practice with our instructor after being introduced to frontend development. We learned different ways to add images to html, how to edit them with inline css styling, and how to add sections.
                    <br />
                    <img class="image" src="puppy.png" />
                </section>
            </main>
        </>
    )
}

export default Portfolio