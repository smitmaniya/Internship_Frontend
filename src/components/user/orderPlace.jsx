import "D:/internship-project/src/css/user/orderPlace.css";
import logo from "D:/internship-project/src/assets/logoapp.png";
import UserHeader from './userHeader';

export default function OrderPlace(){
    return(
        <>
        <UserHeader/>
        <div className="bodytag">
        <div class="container9">
        <div class="left9">
            <div class="section9">
                <h2>Delivery Details</h2>
                <div class="card9">
                    <div className="extra">
                        <img src={logo} alt="h"/>
                        <div>
                            <p class="title">Address First Line</p>
                            <p>Remaining Address</p>
                        </div>
                    </div>
                    <button class="secondary">Edit</button>
                </div>

            </div>
            <div class="section9">
                <h2>Delivery Options</h2>
                <div class="card9">
                <div className="extra">
                <img src={logo} alt="h"/>
                    <div>
                            <p class="title">Priority</p>
                            <p>Same Day</p>
                        </div>
                    </div>
                </div>
                <div class="card9">
                <div className="extra">
                <img src={logo} alt="h"/>
                    <div>
                            <p class="title">Standard</p>
                            <p>Next Day</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section9">
                <h2>Payment</h2>
                <div class="card9">
                <div className="extra">
                <img src={logo} alt="h"/>
                    <div>
                            <p class="title">Credit Card</p>
                            <p>Credit Card Details</p>
                        </div>
                    </div>
                    <button class="secondary">Edit</button>
                </div>
                <div class="button-group">
                    <button class="primary">Delivery</button>
                    <button class="secondary">Pick Up</button>
                </div>
            </div>
            {/* <button class="place-order-button">Place order</button> */}
        </div>
        <div class="right9">
            <div class="section9">
                <div class="card9">
                <img src={logo} alt="h"/>
                <div>
                        <p class="title">Service Provider Name</p>
                        <p>Address</p>
                    </div>
                </div>
                <button class="place-order-button">Place order</button>
            </div>
            <div class="section9">
                <h2>Cart summary</h2>
                <div class="cart-summary9">
                <img src={logo} alt="h"/>
                <div>
                        <p class="title">Service Name</p>
                        <p>Amount</p>
                    </div>
                </div>
                <h2>Promotion</h2>
                <div class="card9">
                <img src={logo} alt="h"/>
                <p class="title">Add Promo code</p>
                </div>
                <div class="order-total9">
                    <p>Subtotal</p>
                    <p>$10.99</p>
                </div>
                <div class="order-total9">
                    <p>Delivery Fees</p>
                    <p>$3.99</p>
                </div>
                <div class="order-total9">
                    <p>Taxes & Other Fees</p>
                    <p>$0.92</p>
                </div>
                <div class="order-total9 total">
                    <p>Total</p>
                    <p>$18.96</p>
                </div>
                <div class="alish">
                    <p>If you're not around when the delivery person arrives, they'll leave your order at the door. By placing your order, you agree to take full responsibility for it once it's delivered. Orders containing alcohol or other restricted items may not be eligible for leave at door and will be returned to the store if you are not available.</p>
                </div>
            </div>
        </div>
    </div>
    </div>  
        </>

    )
}