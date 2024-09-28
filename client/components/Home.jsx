import BBG from '../src/assets/my photo.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css';

export default function Home() {
    return (
        <>
            <section id="intro">
                <div className="introContent">
                    <span className="welcomeMessage">Welcome!</span> {/* Added welcome message here */}
                    <span className="hello">Hello,</span>
                    <span className="introText">
                        I am <span className="introName">ARJUN MUNGATH</span>, 
                        <br />Website Designer
                    </span>
                    <img src={BBG} alt="profile" className="bbg" width="550" height="750" align="right" />

                    <p className="introPara">
                        I am a skilled web designer with experience in creating visually appealing, user-friendly websites.
                        I specialize in responsive design, intuitive UI/UX, and delivering solutions that meet the needs of both
                        users and businesses. Passionate about bringing creative ideas to life with modern technology.
                    </p>
                    <p className="introPara">
                        With a background in graphic design and a strong understanding of web technologies, I blend creativity 
                        and technical skills to craft beautiful websites. I have successfully collaborated with clients to 
                        develop customized web solutions tailored to their specific needs, ensuring a seamless user experience 
                        across all devices.
                    </p>
                    <p className="introPara">
                        My journey in web design began when I realized the power of the internet to connect people and share 
                        information. I continuously strive to stay updated with the latest trends and technologies, allowing 
                        me to create innovative designs that captivate audiences. Whether it's a personal portfolio or a 
                        corporate website, I approach each project with dedication and a commitment to excellence.
                    </p>

                    <div className="skills">
                        <h3>Skills:</h3>
                        <ul>
                            <li>Responsive Web Design</li>
                            <li>HTML5, CSS3, JavaScript</li>
                            <li>React.js, Vite</li>
                            <li>User Interface & Experience (UI/UX)</li>
                            <li>GitHub Version Control</li>
                        </ul>
                    </div>

                    <div className="buttons">
                         <a href="/assets/Arjun_mungath_resume (1).pdf" download className="btn">Download My Resume</a>
                         <Link to="/contact" className="btn">Contact Me</Link> 
                    </div>

                    <div className="socialIcons">
                        <a href="https://www.linkedin.com/in/arjunmungath" target="_blank" rel="noopener noreferrer">
                            <img src="MyPortfolioBNew/client/src/assets/linkedin.jpg" alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/arjunmungath" target="_blank" rel="noopener noreferrer">
                            <img src="MyPortfolioBNew/client/src/assets/github..jpg" alt="GitHub" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
