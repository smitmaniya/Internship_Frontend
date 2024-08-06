import "D:/internship-project/src/css/user/userHeader.css";
import logo from "D:/internship-project/src/assets/logoapp.png";
import { useNavigate } from "react-router-dom";

export default function UserHeader({ id }) {
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId'); // Retrieve the user ID from local storage

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/orderPlace`);
    };
   

    return (
        <header className="header2">
            <div className="logo2">
                <img src={logo} alt="Logo" />
            </div>
            <nav className="nav">
                <a href={`/#/userScreen/${userId}`}>Home</a>
                <a href="/#/profileUser">Profile</a>
                <a href="/">About Us</a>
                <a href="/">Logout</a>
            </nav>
            <div className="user-section">
                {/* <i className="fa fa-user" aria-hidden="true" onClick={handleProfile}></i>
                <span>username</span> */}
                <i className="fa fa-shopping-cart" onClick={handleSubmit} aria-hidden="true"></i>
            </div>
        </header>
    );
}
