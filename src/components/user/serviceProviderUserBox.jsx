import ServiceProviderImage from "D:/internship-project/src/assets/image4.png";
import "D:/internship-project/src/css/user/serviceView.css";

export default function ServiceProviderUserBox(){
    return(
      <div className="container3">
        <div className="container3-content">
          <div className="service-information"> 
               <div>Minimum Order: $20</div>
               <div>Laundry within 60-70 minutes</div>
          </div>
          <img src={ServiceProviderImage}alt="Loading.."/>
        </div>
        
      </div>
    )
}