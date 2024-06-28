import "D:/internship-project/src/css/serviceProvider/statisticBox.css";
import D1 from "D:/internship-project/src/assets/d1.png";
import D2 from "D:/internship-project/src/assets/d2.png";
import D3 from "D:/internship-project/src/assets/d3.png";
// import D4 from "D:/internship-project/src/assets/d4.png";

export default function StatBoxDriver() {
    return (
        <div className="stats-container">
            <div className="stats-box">
                <div className="stats-header">
                    <span className="stats-title">Total Order</span>
                    <div className="image-container">
                        
                    <img src={D3} alt="Total Order Icon" className="stats-icon"/>
                    </div>
                </div>
                
                <div className="stats-value">$10,293</div>
                <br/>
                <div className="stats-change positive">1.3% Up from past week</div>
            </div>
            <div className="stats-box">
                <div className="stats-header">
                    <span className="stats-title">Total Payments</span>
                    <div className="image-container">
                    <img src={D2} alt="Total Order Icon" className="stats-icon"/>
                    </div>
                </div>
                <div className="stats-value">$89,000</div>
                <br/>
                
                <div className="stats-change negative">4.3% Down from yesterday</div>
            </div>
            <div className="stats-box">
                <div className="stats-header">
                    <span className="stats-title">Total Payments</span>
                    <div className="image-container">
                    <img src={D1} alt="Total Order Icon" className="stats-icon"/>
                    </div>
                </div>
                <div className="stats-value">$89,000</div>
                <br/>
                <div className="stats-change negative">4.3% Down from yesterday</div>
            </div>
         
        </div>
    );
}
