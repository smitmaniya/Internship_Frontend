import ServiceProviderImage from "D:/internship-project/src/assets/image4.png";
import "D:/internship-project/src/css/user/serviceView.css";

export default function ServiceProviderUserBox(){
    return(
      <div className="container3">
       
        <div className="container3-content">
        <div className="timing">  <i class="fa fa-clock "></i>&nbsp;&nbsp;&nbsp;Open untill 7:00 PM</div>
          <div className="service-information"> 
          
               <div>Minimum Order: $20</div>
               <div>Laundry within 60-70 minutes</div>
          </div>
          <img src={ServiceProviderImage}alt="Loading.."/>
        </div>
        
      </div>
    )
}