import "D:/internship-project/src/css/user/serviceView.css";

export default function ServiceInformation() {
    return (
        <div className="container-info">
            <div className="section-info contact">
                <h2 className="info-h2">Contact information</h2>
                <p>If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.</p>
                <p>Phone number: <a className="info-a" href="tel:+12345679865">+1 234 567 9865</a></p>
            </div> 
            {/* <div className="section-info contact">
            <h2 className="info-h2">Operational Times</h2>
            <br/>
                <p>Monday: 8:00 AM–3:00 AM</p>
                <p>Tuesday: 8:00 AM–3:00 AM</p>
                <p>Wednesday: 8:00 AM–3:00 AM</p>
                <p>Thursday: 8:00 AM–3:00 AM</p>
                <p>Friday: 8:00 AM–3:00 AM</p>
                <p>Saturday: 8:00 AM–3:00 AM</p>
                <p>Sunday: 8:00 AM–3:00 AM</p>
            </div> */}
            
            <div className="section-info operational">
                <h2 className="info-h2">Operational Times</h2>
                <br/>
                <p>Monday: 8:00 AM–3:00 AM</p>
                <p>Tuesday: 8:00 AM–3:00 AM</p>
                <p>Wednesday: 8:00 AM–3:00 AM</p>
                <p>Thursday: 8:00 AM–3:00 AM</p>
                <p>Friday: 8:00 AM–3:00 AM</p>
                <p>Saturday: 8:00 AM–3:00 AM</p>
                <p>Sunday: 8:00 AM–3:00 AM</p>
            </div>
            
        </div>
    )
}
