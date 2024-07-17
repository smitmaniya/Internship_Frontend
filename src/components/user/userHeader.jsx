import "D:/internship-project/src/css/user/userHeader.css";
import logo from "D:/internship-project/src/assets/logoapp.png";
import { useNavigate } from "react-router-dom";
export default function UserHeader({id}){
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/orderPlace/${id}`);
    };
    const handleprofile = (event) => {
        event.preventDefault();
        navigate(`/profileUser`);
    };

    return (
        <header class="header2">
        <div class="logo2">
            <img src={logo} alt="Logo"/>
        </div>
        <nav class="nav">
            <a href="/#/userScreen">Home</a>
            <a href="/#/profileUser">Profile</a>
            <a href="/">Settings</a>

            <a href="/">About Us</a>
            <a href="/">FAQs</a>
        </nav>
        <div class="user-section">
        <i class="fa fa-user" aria-hidden="true" onClick={handleprofile}></i>
            <span>usernme</span>
    <i class="fa fa-shopping-cart" onClick={handleSubmit} aria-hidden="true"></i>
            
        </div>
    </header>
    )
}