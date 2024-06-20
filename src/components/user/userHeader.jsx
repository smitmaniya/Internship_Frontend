import "D:/internship-project/src/css/user/userHeader.css";
import logo from "D:/internship-project/src/assets/logoapp.png";
export default function UserHeader(){
    return (
        <header class="header2">
        <div class="logo2">
            <img src={logo} alt="Logo"/>
        </div>
        <nav class="nav">
            <a href="/">Home</a>
            <a href="/">Services</a>
            <a href="/">Account</a>
            <a href="/">About Us</a>
            <a href="/">FAQs</a>
        </nav>
        <div class="user-section">
            <img src={logo} alt="User Icon"/>
            <span>username</span>
            <img src={logo} alt="Cart Icon"/>
        </div>
    </header>
    )
}