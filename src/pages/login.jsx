import "D:/internship-project/src/css/login.css"
import logo from "D:/internship-project/src/assets/logoapp.png"
import { useNavigate } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();

    const goto = ()=>{
        navigate('/signUp');

    }
    return (

        <div class="container">
        <div class="login-form">
            <div className="inside-login">
            <div class="logo">
                <img src={logo} alt="Logo"/>
            </div>
            <h1>Login</h1>
            <p>Welcome to Sparkle Drop login to continue</p>
            <form action="/">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="johndoe@abcmail.com" required/>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="8 or more characters" required/>
               
                <a href="/" class="forgot-password">Forgot password ?</a>
                
                <button type="submit">Login</button>
                <button type="submit" onClick={goto}>Sign Up</button>
            
                <p class="signup">New to Sparkle Drop? <a href="/signUp">Sign up</a></p>
                
            </form>
            </div>
        </div>
        <div class="image">
        </div>
    </div>

    )
}