import "D:/internship-project/src/css/user/titleBox.css";
import IronMan from "D:/internship-project/src/assets/ironMan.png"
import Blue from "D:/internship-project/src/assets/blue.png"

export default function TitleBox(){

    return (
        <div class="container2">
        <div class="left-section">
            <h1>Feast Your Senses,<br/>Fast and Fresh</h1>
            <p>Enter a postcode to see Service Provider</p>
            <div class="search-bar2">
                <input type="text" placeholder="N9J 3R8"/>
            </div>
        </div>
        <div class="right-section">
            <div class="image-container2">
                <img src={IronMan} alt="Man ironing"/>
            </div>
           
            {/* <div class="notifications">
                <div class="notification">
                    <p><strong>We've Received your order!</strong><br/>Awaiting Service Provider acceptance</p>
                </div>
                <div class="notification">
                    <p><strong>Your Laundry is in Progress</strong><br/>Here's the latest update for you.</p>
                </div>
                <div class="notification">
                    <p><strong>Your Order is Ready</strong><br/>Time to clean those - Get Ready!</p>
                </div>
            </div> */}
        </div>
        <div class="image-container3">
                <img src={Blue} alt="Man ironing"/>
            </div>
    </div>
    )
}