import BBG from '../src/assets/my photo.jpg';
import ux from '../src/assets/ux.png';
import web from '../src/assets/web.png';
import app from '../src/assets/app.png';
import '../src/index.css';
import '../src/about.css';

export default function About() {
    return (
        <>
            <section id="skill">
                <div className="skillContainer">
                    <span className="skillTitle">What I Do</span>
                    <img src={BBG} alt="profile" className="bbg" />
                    <span className="skillDesc">
                        I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. 
                        I have a strong understanding of design and a keen eye for detail. 
                        I am committed to continuous learning and development, and I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.
                    </span>
                </div>

                <div className="skillBars">
                    <div className="skillBar">
                        <img src={ux} alt="UIDesign" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>UI/UX Design</h2>
                            <p>
                                In UI/UX design, I prioritize creating intuitive and engaging user experiences. 
                                I focus on understanding user needs and behaviors to develop designs that are both aesthetically pleasing and functional. 
                                I value user feedback and iterative processes to enhance design outcomes.
                            </p>
                        </div>
                    </div>
                    
                    <div className="skillBar">
                        <img src={web} alt="WebDesign" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>Web Design</h2>
                            <p>
                                My passion for web design drives me to build responsive and accessible websites. 
                                I am currently enhancing my coding skills in HTML, CSS, and JavaScript to deliver seamless designs that adapt to various devices. 
                                I embrace new challenges as I continue to advance my expertise in this area.
                            </p>
                        </div>
                    </div>

                    <div className="skillBar">
                        <img src={app} alt="AppDesign" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>App Design</h2>
                            <p>
                                In mobile app design, I aim to create user-friendly interfaces that enhance the overall user experience within applications. 
                                I am exploring various tools and frameworks to effectively bring my app design concepts to fruition.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Move Download Resume Link Here */}
                <div className="buttons">
                    <a href="/assets/Arjun_Mungath_Resume.pdf" download className="btn">Download My Resume</a>
                </div>
            </section>
        </>
    );
}
