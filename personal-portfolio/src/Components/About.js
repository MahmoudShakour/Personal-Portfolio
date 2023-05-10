import "../Styles/About.css";
import img from "../Assets/Images/img.jpg";
function About(){
    return(
        <div className="about" >
                <div className="name-description-section" >
                    <div className="name" >Mahmoud Abdulshakour</div>
                    <div className="description" >
                        A third-year computer engineering student. 
                        Interested in web, problem solving.
                    </div>
                    <div className="icons">
                        <img className="icon" src={img} alt="" />
                        <img className="icon" src={img} alt="" />
                        <img className="icon" src={img} alt="" />
                    </div>
                    <a  href="#contact">
                        <button className="about-button">Contact me</button>
                    </a>
                </div>
                <div>
                    <img className="profile-image" width="500px" src={img} alt="" />
                </div>
        </div>
    );
}

export default About;