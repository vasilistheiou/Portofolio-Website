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
import Work from "../../Images/Facts/Work.svg"
import Location from "../../Images/Facts/Location.svg"
import Diploma from "../../Images/Facts/Diploma.svg"
import Like from "../../Images/Facts/Like.svg"
import Growth from "../../Images/Facts/Growth.svg"

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
            Fully dedicated to the philosophy of continuous learning and innovation, I am 
            a software engineer with a strong foundation in artificial intelligence, 
            software development, and database management. My passion for AI and technology drives me to create 
            intelligent solutions and deploy them with elegance and precision. This blend of creativity, logical thinking, 
            and advanced technology enables me to develop innovative solutions that challenge the limits of what's possible.
          </p>
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
          <p>Athens, Greece {String.fromCodePoint(0x1F1EC, 0x1F1F7)}</p>
          <div className='facts-title'>
            <img src={Study} alt='Study'/>
            <p>Education:</p>
          </div>
          <p><img src={Diploma} alt='Diploma'/>Integrated Masters Degree </p>
          <p><img src={Location} alt='Location'/>Department of Electrical and Computer Engineer, University of Thessaly</p>
          <div className='facts-title'>
            <img src={Work} alt='Work'/>
            <p>Work Experience:</p>
          </div>

          <div className='facts-title'>
            <img src={Like} alt='Like'/>
            <p>Hobbies:</p>
          </div>

          <div className='facts-title'>
            <img src={Growth} alt='Growth'/>
            <p>Personal Development:</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
