/* eslint-disable jsx-a11y/alt-text */
import "../Styles/Footer.css";
import twitterIcon from "../Assets/Images/twitter.svg";
import linkedinIcon from "../Assets/Images/linkedin.svg";
import githubIcon from "../Assets/Images/github.svg";
function Footer(){
    return(
        <div className="footer-section" >
            <div className="icons">
                <a href="https://github.com/mahmoudali1842001">
                    <img className="icon" src={githubIcon} />                        
                </a>
                <a href="https://www.linkedin.com/in/mahmoud-abdulshakour-056703168/">
                    <img className="icon" src={linkedinIcon} />
                </a>
                <a href="https://twitter.com/lipf6_">
                    <img className="icon" src={twitterIcon} />                        
                </a>
            </div>
            <div className="copyrights" >
                © 2023 MAHMUOD ABDULSKAKOUR
            </div>  
        </div>
    );
}

export default Footer;