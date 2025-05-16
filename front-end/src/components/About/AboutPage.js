import './AboutPage.css';
import ProfilePicture from '../../Images/ProfilePicture/ProfilePicture'; 
import HtmlLogo from "../../Images/TechStack/html-logo.svg";
import CssLogo from "../../Images/TechStack/css-logo.svg";
import ReactLogo from "../../Images/TechStack/react-logo.svg";
import JsLogo from "../../Images/TechStack/js-logo.svg";
import NodeLogo from "../../Images/TechStack/node-logo.svg";
import PythonLogo from "../../Images/TechStack/python-logo.svg";
import GitLogo from "../../Images/TechStack/git-logo.svg";
import home from "../../Images/Facts/home.svg";
import Study from "../../Images/Facts/Study.svg"
import Location from "../../Images/Facts/Location.svg"
import Diploma from "../../Images/Facts/Diploma.svg"
import Like from "../../Images/Facts/Like.svg"
import Growth from "../../Images/Facts/Growth.svg"
import Gym from "../../Images/Facts/Gym.svg"
import Ball from "../../Images/Facts/Ball.svg"
import Books from "../../Images/Facts/Books.svg"
import Motor from "../../Images/Facts/Motor.svg"
import Travel from "../../Images/Facts/Travel.svg"
import Documents from "../../Images/Facts/Documents.svg"
import Communication from "../../Images/Facts/Communication.svg"
import Brain from "../../Images/Facts/Brain.svg"

const AboutPage = () => {

  return (
    <div className='about-page'>
      <section className="about-section">
        <h2>About Me</h2>
        <div className="about-text">
          <div className='svg-pic'> 
            <ProfilePicture />
          </div> 
          <p>
          Hi, I’m a software engineer passionate about building intelligent systems that make a 
          difference. With a strong background in artificial intelligence, software development, and 
          database management, I love turning complex challenges into elegant, efficient solutions.

          I believe in continuous learning and staying curious—always exploring new ways to 
          blend creativity with technology. Whether it’s developing smart applications or pushing the limits of what’s 
          possible with AI, my goal is to create work that’s not just functional, but meaningful. </p>
          </div>
      </section>

      <section className='tech-section'>
        <h2>Skills Stack</h2>
        <div className="tech-stack">
          <div className='tech-stack-row'>
            <div className="tech-stack-logo">
              <img src={HtmlLogo} alt="HTML" /><p>HTML</p>
            </div>
            <div className="tech-stack-logo">
              <img src={CssLogo} alt="CSS" /><p>CSS</p>
            </div>
          </div>
          <div className='tech-stack-row'>
            <div className="tech-stack-logo">
              <img src={JsLogo} alt="Javascript" /><p>Javascript</p>
            </div>
            <div className="tech-stack-logo">
              <img src={PythonLogo} alt="Python" /><p>Python</p>
            </div>
            <div className="tech-stack-logo">
              <img src={NodeLogo} alt="Node JS" /><p>Node JS</p>
            </div>
          </div>
          <div className='tech-stack-row'> 
            <div className="tech-stack-logo">
              <img src={GitLogo} alt="Git" /><p>Git</p>
            </div>
            <div className="tech-stack-logo">
              <img src={ReactLogo} alt="React" /><p>React</p>
            </div>
          </div>
        </div>
      </section>

      <section className='cv-section'>
        <h2>Quick Facts</h2>
        <div className='facts'>

          <div className='facts-title'>
            <img src={home} alt='Home'/>
            <p>Hometown: </p>
          </div>
          <p><img src={Location} alt='Diploma'/>Athens, Greece {String.fromCodePoint(0x1F1EC, 0x1F1F7)}</p>

          <div className='facts-title'>
            <img src={Study} alt='Study'/>
            <p>Education:</p>
          </div>
          <p><img src={Diploma} alt='Diploma'/>Integrated Masters Degree </p>
          <p><img src={Location} alt='Location'/>Department of Electrical and Computer Engineer, University of Thessaly</p>
          
          <div className='facts-title'>
            <img src={Like} alt='Like'/>
            <p>Hobbies:</p>
          </div>
          <p><img src={Gym} alt='Gym'/>Weightlifting </p>
          <p><img src={Ball} alt='Ball'/>Basketball & Football </p>
          <p><img src={Books} alt='Books'/>Reading Books </p>
          <p><img src={Motor} alt='Motor'/> Going Rides</p>
          <p><img src={Travel} alt='Travel'/> Visiting New Places</p>
          
          <div className='facts-title'>
            <img src={Growth} alt='Growth'/>
            <p>Personal Development:</p>
          </div>
          <p><img src={Documents} alt='Documents'/> Document knowledge through notes and Github Projects</p>
          <p><img src={Communication} alt='Communication'/> Reading personal development and psychology books</p>
          <p><img src={Brain} alt='Brain'/> Expand knowledge by watching online courses</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
