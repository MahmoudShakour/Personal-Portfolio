import "../Styles/Footer.css";
import img from "../Assets/Images/img.jpg";
function Footer(){
    return(
        <div className="footer-section" >
            <div className="icons">
                <img className="icon" src={img} alt="" />
                <img className="icon" src={img} alt="" />
                <img className="icon" src={img} alt="" />
            </div>
            <div className="copyrights" >
                © 2023 MAHMUOD ABDULSKAKOUR
            </div>  
        </div>
    );
}

export default Footer;