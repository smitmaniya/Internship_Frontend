import React from 'react';
import "D:/internship-project/src/css/user/footer.css";
import logo from "D:/internship-project/src/assets/logoapp.png";

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="Sparkle Drop Logo" />
                    <h2>Sparkle Drop</h2>
                 
                </div>
                <div className="footer-sections">
                    <div className="footer-column">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="/">Product</a></li>
                            <li><a href="/">Why us?</a></li>
                            <li><a href="/">About us</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="/">Washing</a></li>
                            <li><a href="/">Drying</a></li>
                            <li><a href="/">Full Service</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="/">Terms of use</a></li>
                            <li><a href="/">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="/">Contact us</a></li>
                            <li><a href="/">FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-contact">
                    <p>Windsor<br />1499, Pope st<br />LaSalle, ON, Canada<br />N9J 3R8</p>
                    <br/>
                    <div className="social-icons">
                        <a href="/"><i className="fab fa-linkedin"></i></a>
                        <a href="/"><i className="fab fa-whatsapp"></i></a>
                        <a href="/"><i className="fas fa-envelope"></i></a>
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-instagram"></i></a>
                        <a href="/"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
