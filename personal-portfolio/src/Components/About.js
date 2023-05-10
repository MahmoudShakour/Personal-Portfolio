/* eslint-disable jsx-a11y/alt-text */
import "../Styles/About.css";
import img from "../Assets/Images/img.jpg";
import smallImage from "../Assets/Images/img-smallversion.jpg";
import twitterIcon from "../Assets/Images/twitter.svg";
import linkedinIcon from "../Assets/Images/linkedin.svg";
import githubIcon from "../Assets/Images/github.svg";
function About(){
    let icon=new Image();
    icon.src=twitterIcon;
    return(
        <div className="about" >
                <div className="name-description-section" >
                    <div className="name" >Mahmoud Abdulshakour</div>
                    <div className="description" >
                        A third-year computer engineering student. 
                        Interested in web, problem solving.
                    </div>
                    <div className="icons">
                        <a href="https://github.com/mahmoudali1842001">
                            <img className="icon" src={linkedinIcon} />                        
                        </a>
                        <a href="https://www.linkedin.com/in/mahmoud-abdulshakour-056703168/">
                            <img className="icon" src={githubIcon} />
                        </a>
                        <a href="https://twitter.com/lipf6_">
                            <img className="icon" src={twitterIcon} />                        
                        </a>
                    </div>
                    <div className="about-buttons">
                        <a  href="#contact">
                            <button className="about-button">Contact me</button>
                        </a>
                        <a  href="#projects">
                            <button className="about-button">My Projects</button>
                        </a>
                    </div>
                </div>
                <div className="profile-image-container" >
                    <img className="profile-image" src={img} alt=""/>
                </div>
        </div>
    );
}

export default About;