import "../Styles/Header.css";
import darkModeIcon from "../Assets/Images/darkmood.svg";

function Header(){
    return(
        <div className="header">
            <img className="dark-mood-icon" src={darkModeIcon} alt="darkModeIcon"/>
        </div>
    );
}

export default Header;